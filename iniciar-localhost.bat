@echo off
title Servidor Local - Gabe's English / Lexi Alpha
cd /d "%~dp0"
cls
echo ==========================================================
echo   Iniciando Landing Page - Gabe's English / Lexi Alpha
echo ==========================================================
echo.
echo   [1/2] Compilando e inicializando servidor Astro...
echo   [2/2] O navegador abrira SOZINHO assim que estiver pronto!
echo         (Aguarde cerca de 5 a 10 segundos)
echo.
echo   URL: http://localhost:4321
echo   Para encerrar: feche esta janela ou aperte Ctrl + C
echo ==========================================================
echo.
call npm run dev -- --open
pause
