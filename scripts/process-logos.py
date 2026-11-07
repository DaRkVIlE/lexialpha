from PIL import Image
import numpy as np

path_wordmark = r"C:\Users\Usuario\.gemini\antigravity\brain\7ebc94cf-719b-46c8-b4e3-fe3e5e81b796\.user_uploaded\media_1794012952783_114ae84e.jpg"
path_icon = r"C:\Users\Usuario\.gemini\antigravity\brain\7ebc94cf-719b-46c8-b4e3-fe3e5e81b796\.user_uploaded\media_1794012952785_345555d1.jpg"

def process_image(src_path, y_min_crop, y_max_crop, x_min_crop, x_max_crop, out_prefix):
    img = Image.open(src_path).convert("RGB")
    # Crop first to the actual graphic area plus margin
    cropped = img.crop((x_min_crop, y_min_crop, x_max_crop, y_max_crop))
    arr = np.array(cropped, dtype=np.float32)
    
    # Calculate background color from the edges of cropped
    edge_pixels = np.concatenate([arr[0, :, :], arr[-1, :, :], arr[:, 0, :], arr[:, -1, :]])
    bg_color = np.median(edge_pixels, axis=0)
    print(f"{out_prefix} detected bg_color: {bg_color}")
    
    # Color difference to detect colored elements (dots)
    # diff between max and min channel
    color_diff = np.max(arr, axis=2) - np.min(arr, axis=2)
    is_dot = color_diff > 35
    
    # Luminance
    lum = 0.299 * arr[:, :, 0] + 0.587 * arr[:, :, 1] + 0.114 * arr[:, :, 2]
    bg_lum = 0.299 * bg_color[0] + 0.587 * bg_color[1] + 0.114 * bg_color[2]
    
    # Alpha calculation: distance from background color
    # distance in RGB space
    dist = np.sqrt(np.sum((arr - bg_color) ** 2, axis=2))
    alpha = np.clip((dist / 35.0) * 255.0, 0, 255).astype(np.uint8)
    
    # Refine alpha: if distance < 8, alpha is 0
    alpha[dist < 8] = 0
    
    # 1. Dark Theme Version: White text on transparent, preserving colored dots
    dark_mode = np.zeros((arr.shape[0], arr.shape[1], 4), dtype=np.uint8)
    for c in range(3):
        # Where it's a dot, keep original color
        # Where it's text (not dot), set to pure white (255)
        channel_val = np.where(is_dot, np.clip(arr[:, :, c] * 1.15, 0, 255), 255)
        dark_mode[:, :, c] = channel_val.astype(np.uint8)
    dark_mode[:, :, 3] = alpha
    
    # 2. Light Theme Version: Original dark text on transparent
    light_mode = np.zeros((arr.shape[0], arr.shape[1], 4), dtype=np.uint8)
    for c in range(3):
        light_mode[:, :, c] = np.clip(arr[:, :, c], 0, 255).astype(np.uint8)
    light_mode[:, :, 3] = alpha
    
    # Tight crop by alpha > 15
    coords = np.argwhere(alpha > 15)
    y0, x0 = coords.min(axis=0)
    y1, x1 = coords.max(axis=0) + 1
    
    pad = 6
    y0, x0 = max(0, y0 - pad), max(0, x0 - pad)
    y1, x1 = min(arr.shape[0], y1 + pad), min(arr.shape[1], x1 + pad)
    
    img_dark = Image.fromarray(dark_mode).crop((x0, y0, x1, y1))
    img_light = Image.fromarray(light_mode).crop((x0, y0, x1, y1))
    
    img_dark.save(f"landing/public/synthetic/images/{out_prefix}_white.png", "PNG")
    img_light.save(f"landing/public/synthetic/images/{out_prefix}_dark.png", "PNG")
    print(f"Saved {out_prefix} ({img_dark.size})")
    return img_dark

# Process Wordmark
wordmark_dark = process_image(path_wordmark, 390, 630, 85, 940, "lexiquest_logo")

# Process Icon + Wordmark
icon_dark = process_image(path_icon, 270, 750, 130, 900, "lexiquest_badge")

# Process Favicon from Icon (just the top Q mark + dots)
# Crop the Q mark
img_q = Image.open(path_icon).convert("RGB")
crop_q = img_q.crop((200, 280, 820, 580))
arr_q = np.array(crop_q, dtype=np.float32)
color_diff_q = np.max(arr_q, axis=2) - np.min(arr_q, axis=2)
is_dot_q = color_diff_q > 35
edge_pixels_q = np.concatenate([arr_q[0, :, :], arr_q[-1, :, :], arr_q[:, 0, :], arr_q[:, -1, :]])
bg_color_q = np.median(edge_pixels_q, axis=0)
dist_q = np.sqrt(np.sum((arr_q - bg_color_q) ** 2, axis=2))
alpha_q = np.clip((dist_q / 35.0) * 255.0, 0, 255).astype(np.uint8)
alpha_q[dist_q < 8] = 0

q_dark = np.zeros((arr_q.shape[0], arr_q.shape[1], 4), dtype=np.uint8)
for c in range(3):
    channel_val = np.where(is_dot_q, np.clip(arr_q[:, :, c] * 1.15, 0, 255), 255)
    q_dark[:, :, c] = channel_val.astype(np.uint8)
q_dark[:, :, 3] = alpha_q

coords_q = np.argwhere(alpha_q > 15)
qy0, qx0 = coords_q.min(axis=0)
qy1, qx1 = coords_q.max(axis=0) + 1
q_cropped = Image.fromarray(q_dark).crop((max(0, qx0 - 4), max(0, qy0 - 4), min(arr_q.shape[1], qx1 + 4), min(arr_q.shape[0], qy1 + 4)))

# Create Square Favicon
size = max(q_cropped.width, q_cropped.height) + 20
fav_sq = Image.new("RGBA", (size, size), (0, 0, 0, 0))
fav_sq.paste(q_cropped, ((size - q_cropped.width) // 2, (size - q_cropped.height) // 2))
fav_sq.resize((128, 128), Image.Resampling.LANCZOS).save("landing/public/favicon.png", "PNG")
fav_sq.resize((32, 32), Image.Resampling.LANCZOS).save("landing/public/favicon-32.png", "PNG")
print("Favicons generated successfully!")
