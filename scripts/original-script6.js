
  gsap.registerPlugin(ScrollTrigger, Observer);

  function webflowReady(fn) {
    if (window.Webflow && typeof window.Webflow.push === 'function') {
      window.Webflow.push(fn);
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  webflowReady(() => {
    initializeBrixMarqueeAnimations();

    initializeBrixCounterAnimations();

    ScrollTrigger.refresh();

    window.addEventListener('load', () => ScrollTrigger.refresh());
  });

  function initializeBrixMarqueeAnimations() {
    const marqueeRoots = document.querySelectorAll('[brix-marquee]');

    if (!marqueeRoots.length) return;

    const reduceMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const marqueeTimelines = [];

    marqueeRoots.forEach((marqueeRoot) => {
      const originalItems = Array.from(marqueeRoot.children).filter((item) => item.getAttribute('brix-marquee-clone') !== 'true');

      if (!originalItems.length) return;

      const isVerticalMarquee = getAttr(marqueeRoot, 'brix-marquee', '') === 'vertical';

      marqueeRoot.querySelectorAll(':scope > [brix-marquee-clone="true"]').forEach((node) => node.remove());

      originalItems.forEach((item) => {
        gsap.set(item, { flexShrink: 0 });
      });

      const originalContentSize = isVerticalMarquee ? getItemsHeight(originalItems) : getItemsWidth(originalItems);

      const viewportSize = isVerticalMarquee ? getViewportHeight(marqueeRoot) : getViewportWidth(marqueeRoot);

      const sideSizeTarget = Math.max(viewportSize * 2, originalContentSize);

      const copyCountPerSide = getRequiredCopyCount(originalContentSize, sideSizeTarget);

      const rightFragment = document.createDocumentFragment();

      const leftFragment = document.createDocumentFragment();

      for (let copyIndex = 0; copyIndex < copyCountPerSide; copyIndex += 1) {
        originalItems.forEach((item) => {
          const rightClone = item.cloneNode(true);

          rightClone.setAttribute('brix-marquee-clone', 'true');

          rightClone.setAttribute('aria-hidden', 'true');

          disableFocusable(rightClone);

          rightFragment.appendChild(rightClone);

          const leftClone = item.cloneNode(true);

          leftClone.setAttribute('brix-marquee-clone', 'true');

          leftClone.setAttribute('aria-hidden', 'true');

          disableFocusable(leftClone);

          leftFragment.appendChild(leftClone);
        });
      }

      marqueeRoot.appendChild(rightFragment);

      marqueeRoot.appendChild(leftFragment);

      const marqueeItems = Array.from(marqueeRoot.children);

      if (marqueeItems.length < 2) return;

      marqueeItems.forEach((item) => {
        gsap.set(item, { flexShrink: 0 });
      });

      const directionSetting = isVerticalMarquee ? getVerticalMarqueeDirection(marqueeRoot) : getMarqueeDirection(marqueeRoot);

      const hoverMode = getAttr(marqueeRoot, 'brix-marquee-hover', '');

      const scrollReactive = getAttr(marqueeRoot, 'brix-marquee-scroll-speed', '') === 'active';

      const invertOnScrollUp = getAttr(marqueeRoot, 'brix-marquee-scroll-up', getAttr(marqueeRoot, 'marquee-scroll-up', '')) === 'invert';

      const duration = getMarqueeDuration(getAttr(marqueeRoot, 'brix-marquee-speed', '10'));

      const baseTimeScale = directionSetting === 1 ? -1 : 1;

      const marqueeTimeline = gsap.timeline({
        repeat: -1,

        defaults: { ease: 'none' },

        onReverseComplete: () => marqueeTimeline.progress(1),
      });

      if (isVerticalMarquee) {
        marqueeTimeline.fromTo(
          marqueeItems,

          { yPercent: 0 },

          {
            yPercent: -100,

            duration,

            ease: 'none',
          },
        );
      } else {
        marqueeTimeline.fromTo(
          marqueeItems,

          { xPercent: 0 },

          {
            xPercent: -100,

            duration,

            ease: 'none',
          },
        );
      }

      marqueeTimeline.progress(directionSetting === 1 ? 1 : 0);

      marqueeTimeline.timeScale(baseTimeScale);

      marqueeTimelines.push({
        root: marqueeRoot,

        timeline: marqueeTimeline,

        directionSetting,

        baseTimeScale,

        scrollReactive,

        invertOnScrollUp,

        scrollReturnTween: null,
      });

      if (hoverMode === 'stop') {
        marqueeRoot.addEventListener('mouseenter', () => marqueeTimeline.pause());

        marqueeRoot.addEventListener('mouseleave', () => marqueeTimeline.resume());
      }

      if (reduceMotionQuery.matches) {
        marqueeTimeline.pause(0);
      }
    });

    if (!marqueeTimelines.length) return;

    Observer.create({
      target: window,

      type: 'wheel,scroll,touch',

      onChangeY: (observerInstance) => {
        let scrollVelocity = observerInstance.velocityY * 0.002;

        scrollVelocity = gsap.utils.clamp(-40, 40, scrollVelocity);

        marqueeTimelines.forEach((marqueeItem) => {
          const intent = observerInstance.velocityY < 0 ? -1 : 1;

          const directionScale = marqueeItem.invertOnScrollUp && intent < 0 ? -marqueeItem.baseTimeScale : marqueeItem.baseTimeScale;

          if (marqueeItem.scrollReactive) {
            const speedBoost = Math.max(1, Math.abs(scrollVelocity));

            const activeSpeed = speedBoost * directionScale;

            const restingSpeed = directionScale;

            marqueeItem.timeline.timeScale(activeSpeed);

            if (marqueeItem.scrollReturnTween) {
              marqueeItem.scrollReturnTween.kill();
            }

            marqueeItem.scrollReturnTween = gsap.to(marqueeItem.timeline, {
              timeScale: restingSpeed,

              duration: 1,

              ease: 'power2.out',

              overwrite: true,
            });

            return;
          }

          if (!marqueeItem.invertOnScrollUp) return;

          marqueeItem.timeline.timeScale(directionScale);
        });
      },
    });

    if (reduceMotionQuery.addEventListener) {
      reduceMotionQuery.addEventListener('change', () => {
        marqueeTimelines.forEach((marqueeItem) => {
          if (reduceMotionQuery.matches) {
            marqueeItem.timeline.pause(0);
          } else {
            marqueeItem.timeline.resume();
          }
        });
      });
    }
  }

  function getItemsWidth(items) {
    return items.reduce((totalWidth, item) => totalWidth + item.getBoundingClientRect().width, 0);
  }

  function getItemsHeight(items) {
    return items.reduce((totalHeight, item) => totalHeight + item.getBoundingClientRect().height, 0);
  }

  function getViewportWidth(element) {
    const rootWidth = element.clientWidth || 0;

    const windowWidth = window.innerWidth || document.documentElement.clientWidth || 0;

    return Math.max(rootWidth, windowWidth);
  }

  function getViewportHeight(element) {
    const rootHeight = element.clientHeight || 0;

    const windowHeight = window.innerHeight || document.documentElement.clientHeight || 0;

    return Math.max(rootHeight, windowHeight);
  }

  function getRequiredCopyCount(originalRowWidth, minimumTrackWidth) {
    if (!originalRowWidth || originalRowWidth <= 0) return 1;

    const totalSetsNeeded = Math.ceil(minimumTrackWidth / originalRowWidth);

    return Math.max(1, totalSetsNeeded - 1);
  }

  function disableFocusable(node) {
    const selector = 'a, button, input, textarea, select, summary, [tabindex]';

    if (node.matches && node.matches(selector)) {
      node.setAttribute('tabindex', '-1');
    }

    node.querySelectorAll(selector).forEach((element) => {
      element.setAttribute('tabindex', '-1');
    });
  }

  function getAttr(element, name, fallbackValue) {
    const value = element.getAttribute(name);

    return value == null || value === '' ? fallbackValue : value;
  }

  function getMarqueeDirection(element) {
    const direction = getAttr(element, 'brix-marquee-direction', 'default');

    return direction === 'reverse' || direction === 'right' ? 1 : -1;
  }

  function getVerticalMarqueeDirection(element) {
    const direction = getAttr(element, 'brix-marquee-direction', 'default');

    return direction === 'reverse' || direction === 'bottom' ? 1 : -1;
  }

  function getMarqueeDuration(speedValue) {
    const numericSpeed = parseFloat(speedValue);

    if (!Number.isFinite(numericSpeed) || numericSpeed <= 0) return 50;

    return gsap.utils.clamp(6, 80, 600 / numericSpeed);
  }

  function initializeBrixCounterAnimations() {
    const counterElements = gsap.utils.toArray('[brix-counter]');

    if (!counterElements.length) return;

    counterElements.forEach((counterElement, index) => {
      const originalCounterText = counterElement.textContent.trim();

      if (!originalCounterText) return;

      const forcedCounterFormat = counterElement.getAttribute('brix-counter-format');

      const detectedCounterFormat = detectCounterFormatType(originalCounterText);

      const counterFormatType = forcedCounterFormat || detectedCounterFormat || null;

      const originalCounterValue = parseCounterFormattedNumber(originalCounterText, counterFormatType);

      if (isNaN(originalCounterValue)) return;

      const counterDecimals = getCounterDecimals(originalCounterText, counterFormatType);

      const counterSnapValue = counterDecimals > 0 ? Math.pow(10, -counterDecimals) : 1;

      const durationAttributeValue = parseFloat(counterElement.getAttribute('brix-counter-duration'));

      const counterDuration = !isNaN(durationAttributeValue) && durationAttributeValue > 0 ? durationAttributeValue : 2;

      const startAttributeValue = parseFloat(counterElement.getAttribute('brix-counter-start'));

      const endAttributeValue = parseFloat(counterElement.getAttribute('brix-counter-end'));

      let counterStartValue = 0;

      let counterEndValue = originalCounterValue;

      if (!isNaN(startAttributeValue)) {
        counterStartValue = startAttributeValue;
      }

      if (!isNaN(endAttributeValue)) {
        counterEndValue = endAttributeValue;
      }

      const counterState = {
        value: counterStartValue,
      };

      counterElement.textContent = formatCounterNumber(
        counterStartValue,

        counterDecimals,

        counterFormatType,
      );

      gsap.to(counterState, {
        value: counterEndValue,

        duration: counterDuration,

        ease: 'power1.out',

        delay: index * 0.1,

        snap: { value: counterSnapValue },

        scrollTrigger: {
          trigger: counterElement,

          start: 'top 80%',

          once: true,

          toggleActions: 'play none none none',
        },

        onUpdate: () => {
          counterElement.textContent = formatCounterNumber(
            counterState.value,

            counterDecimals,

            counterFormatType,
          );
        },

        onComplete: () => {
          counterElement.textContent = formatCounterNumber(
            counterEndValue,

            counterDecimals,

            counterFormatType,
          );
        },
      });
    });
  }

  function detectCounterFormatType(counterText) {
    const trimmedText = counterText.trim();

    if (/^[-+]?\d+\.\d+$/.test(trimmedText)) {
      const [integerPart, decimalPart] = trimmedText.replace(/^[-+]/, '').split('.');

      if (integerPart === '0') return null;

      if (decimalPart && decimalPart.length === 3 && integerPart.length <= 3) return 'period';

      return null;
    }

    if (/^[-+]?\d+,\d+$/.test(trimmedText)) {
      const [integerPart, decimalPart] = trimmedText.replace(/^[-+]/, '').split(',');

      if (integerPart === '0') return null;

      if (decimalPart && decimalPart.length === 3 && integerPart.length <= 3) return 'comma';

      return null;
    }

    if (/^\d{1,3}(,\d{3})+(\.\d+)?$/.test(trimmedText)) {
      return 'comma';
    }

    if (/^\d{1,3}(\.\d{3})+(,\d+)?$/.test(trimmedText)) {
      return 'period';
    }

    if (/^\d{1,3}( \d{3})+(,\d+)?$/.test(trimmedText)) {
      return 'space';
    }

    return null;
  }

  function parseCounterFormattedNumber(counterText, counterFormatType) {
    let parsedText = counterText.trim();

    if (counterFormatType === 'comma') {
      parsedText = parsedText.replace(/,/g, '');
    } else if (counterFormatType === 'period') {
      parsedText = parsedText.replace(/\./g, '').replace(',', '.');
    } else if (counterFormatType === 'space') {
      parsedText = parsedText.replace(/ /g, '').replace(',', '.');
    }

    return parseFloat(parsedText);
  }

  function getCounterDecimals(counterText, counterFormatType) {
    const trimmedText = counterText.trim();

    if (counterFormatType === 'comma') {
      const textParts = trimmedText.split('.');

      return textParts[1] ? textParts[1].length : 0;
    }

    if (counterFormatType === 'period' || counterFormatType === 'space') {
      const textParts = trimmedText.split(',');

      return textParts[1] ? textParts[1].length : 0;
    }

    const textParts = trimmedText.split('.');

    return textParts[1] ? textParts[1].length : 0;
  }

  function formatCounterNumber(counterValue, counterDecimals, counterFormatType) {
    const fixedValue = Number(counterValue).toFixed(counterDecimals);

    let [integerPart, decimalPart] = fixedValue.split('.');

    let thousandsSeparator = '';

    let decimalSeparator = '.';

    if (counterFormatType === 'comma') {
      thousandsSeparator = ',';

      decimalSeparator = '.';
    } else if (counterFormatType === 'period') {
      thousandsSeparator = '.';

      decimalSeparator = ',';
    } else if (counterFormatType === 'space') {
      thousandsSeparator = ' ';

      decimalSeparator = ',';
    }

    if (thousandsSeparator) {
      integerPart = integerPart.replace(/\B(?=(\d{3})+(?!\d))/g, thousandsSeparator);
    }

    if (decimalPart !== undefined && counterDecimals > 0) {
      return `${integerPart}${decimalSeparator}${decimalPart}`;
    }

    return integerPart;
  }
