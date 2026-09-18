import os
import cv2
import numpy as np
from PIL import Image, ImageDraw, ImageFont, ImageFilter

PUB_DIR = "/Users/viki/Developer/Websites/RILLP/website/public/images"
LOGO_PATH = "/Users/viki/Developer/Websites/RILLP/website/public/Rapido-Logo.png"

def load_logo(target_w=None, target_h=None):
    logo = Image.open(LOGO_PATH).convert("RGBA")
    if target_w and target_h:
        logo = logo.resize((target_w, target_h), Image.LANCZOS)
    elif target_w:
        ratio = target_w / logo.width
        logo = logo.resize((target_w, int(logo.height * ratio)), Image.LANCZOS)
    elif target_h:
        ratio = target_h / logo.height
        logo = logo.resize((int(logo.width * ratio), target_h), Image.LANCZOS)
    return logo

def get_font(size=14, bold=False):
    font_paths = [
        "/System/Library/Fonts/Supplemental/Arial Bold.ttf" if bold else "/System/Library/Fonts/Supplemental/Arial.ttf",
        "/System/Library/Fonts/Helvetica.ttc",
        "/System/Library/Fonts/SFProText-Bold.otf" if bold else "/System/Library/Fonts/SFProText-Regular.otf",
        "/Library/Fonts/Arial.ttf"
    ]
    for p in font_paths:
        if os.path.exists(p):
            try:
                return ImageFont.truetype(p, size)
            except Exception:
                pass
    return ImageFont.load_default()

# ----------------------------------------------------
# 1. about_banner.jpg
# ----------------------------------------------------
def fix_about_banner():
    print("1. Fixing about_banner.jpg...")
    path = os.path.join(PUB_DIR, "about_banner.jpg")
    im = Image.open(path).convert("RGBA")
    
    # Door patch covering the entire SAHARA logo and cube mark:
    # x: 0..150, y: 175..435
    # Sample background color of the frosted door
    door_bg = Image.new("RGBA", (150, 260), (34, 52, 74, 255))
    im.paste(door_bg, (0, 175))
    
    # Place white/gold Rapido Logo
    logo = load_logo(target_w=125)
    im.paste(logo, (12, 240), logo)
    
    draw = ImageDraw.Draw(im)
    draw.text((10, 355), "SOLUTIONS ARCHITECTURE", fill=(220, 235, 250, 240), font=get_font(9, bold=True))
    draw.text((38, 372), "STUDIO", fill=(210, 170, 80, 240), font=get_font(10, bold=True))
    
    # Left display small logo top-right
    mon_l = Image.new("RGBA", (45, 20), (16, 26, 42, 255))
    im.paste(mon_l, (585, 285))
    logo_l = load_logo(target_w=40)
    im.paste(logo_l, (588, 287), logo_l)
    
    # Right display header
    mon_r = Image.new("RGBA", (40, 16), (18, 30, 48, 255))
    im.paste(mon_r, (915, 305))
    logo_r = load_logo(target_w=35)
    im.paste(logo_r, (918, 306), logo_r)
    
    im.convert("RGB").save(path, "JPEG", quality=96)
    print("about_banner.jpg done!")

# ----------------------------------------------------
# 2. about_boardroom.jpg
# ----------------------------------------------------
def fix_about_boardroom():
    print("2. Fixing about_boardroom.jpg...")
    path = os.path.join(PUB_DIR, "about_boardroom.jpg")
    im = Image.open(path).convert("RGBA")
    
    # Wall logo at x: [755, 825], y: [305, 380]
    wall_bg = Image.new("RGBA", (75, 75), (148, 138, 126, 255))
    im.paste(wall_bg, (755, 305))
    
    logo = load_logo(target_w=70)
    im.paste(logo, (758, 318), logo)
    
    im.convert("RGB").save(path, "JPEG", quality=96)
    print("about_boardroom.jpg done!")

# ----------------------------------------------------
# 3. content_mobile_products.jpg
# ----------------------------------------------------
def fix_content_mobile_products():
    print("3. Fixing content_mobile_products.jpg...")
    path = os.path.join(PUB_DIR, "content_mobile_products.jpg")
    im = Image.open(path).convert("RGBA")
    
    # Brick wall text "AhmDev Labs" at x: [430, 595], y: [120, 165]
    brick_patch = im.crop((430, 75, 595, 120)).resize((165, 45))
    im.paste(brick_patch, (430, 120))
    logo = load_logo(target_w=140)
    im.paste(logo, (440, 125), logo)
    
    # Whiteboard top-right
    wb_bg1 = Image.new("RGBA", (155, 40), (235, 245, 250, 255))
    im.paste(wb_bg1, (1190, 40))
    logo_wb1 = load_logo(target_w=110)
    im.paste(logo_wb1, (1200, 43), logo_wb1)
    
    # Whiteboard bottom-right
    wb_bg2 = Image.new("RGBA", (135, 40), (235, 245, 250, 255))
    im.paste(wb_bg2, (1210, 415))
    draw = ImageDraw.Draw(im)
    draw.text((1220, 420), "RAPIDO LABS", fill=(30, 45, 65, 230), font=get_font(16, bold=True))
    draw.text((1220, 438), "Feb 2024", fill=(70, 85, 105, 200), font=get_font(12, bold=False))
    
    im.convert("RGB").save(path, "JPEG", quality=96)
    print("content_mobile_products.jpg done!")

# ----------------------------------------------------
# 4. content_spatial_gis.jpg
# ----------------------------------------------------
def fix_content_spatial_gis():
    print("4. Fixing content_spatial_gis.jpg...")
    path = os.path.join(PUB_DIR, "content_spatial_gis.jpg")
    im = Image.open(path).convert("RGBA")
    draw = ImageDraw.Draw(im)
    
    # 1. Helmet dome on table:
    # Bounding box of "AMC" and "GEOSPATIAL" is x: [55, 240], y: [605, 715]
    helm_bg = Image.new("RGBA", (170, 100), (242, 246, 250, 255))
    im.paste(helm_bg, (65, 615))
    # Redraw clean helmet reflection and RAPIDO GIS
    logo_helm = load_logo(target_w=95)
    im.paste(logo_helm, (85, 625), logo_helm)
    draw.text((88, 680), "RAPIDO GIS", fill=(15, 40, 85, 245), font=get_font(13, bold=True))
    draw.text((95, 698), "BIM & CADASTRE", fill=(30, 60, 110, 230), font=get_font(9, bold=True))
    
    # 2. Yellow safety vest on engineer in foreground (bottom-right):
    # Text "AMC" is at x: [1050, 1130], y: [625, 720]
    vest_bg = Image.new("RGBA", (95, 95), (195, 235, 40, 255))
    im.paste(vest_bg, (1045, 625))
    draw.text((1050, 630), "RAPIDO", fill=(15, 35, 20, 255), font=get_font(20, bold=True))
    draw.text((1055, 658), "GIS & BIM", fill=(25, 45, 25, 240), font=get_font(11, bold=True))
    
    # 3. Blue vest on female engineer (center):
    # Her chest badge is at x: [570, 620], y: [520, 580]
    bv_bg = Image.new("RGBA", (50, 45), (28, 55, 100, 255))
    im.paste(bv_bg, (570, 530))
    draw.text((575, 545), "RAPIDO", fill=(240, 245, 255, 240), font=get_font(9, bold=True))
    
    im.convert("RGB").save(path, "JPEG", quality=96)
    print("content_spatial_gis.jpg done!")

# ----------------------------------------------------
# 5. banner_civic_inclusion.jpg
# ----------------------------------------------------
def fix_banner_civic_inclusion():
    print("5. Fixing banner_civic_inclusion.jpg...")
    path = os.path.join(PUB_DIR, "banner_civic_inclusion.jpg")
    im = Image.open(path).convert("RGBA")
    draw = ImageDraw.Draw(im)
    
    # Right tower tag: x=[1209, 1279], y=[199, 215]
    draw.rectangle([1208, 198, 1280, 216], fill=(18, 70, 130, 255))
    draw.text((1218, 201), "WiFiRay", fill=(255, 255, 255, 255), font=get_font(12, bold=True))
    
    # Left tower tag: x=[162, 208], y=[228, 246]
    draw.rectangle([162, 228, 210, 246], fill=(18, 70, 130, 255))
    draw.text((166, 230), "WiFiRay", fill=(255, 255, 255, 255), font=get_font(10, bold=True))
    
    im.convert("RGB").save(path, "JPEG", quality=96)
    print("banner_civic_inclusion.jpg done!")

# ----------------------------------------------------
# 6. content_civic_inclusion.jpg
# ----------------------------------------------------
def fix_content_civic_inclusion():
    print("6. Fixing content_civic_inclusion.jpg...")
    path = os.path.join(PUB_DIR, "content_civic_inclusion.jpg")
    im = Image.open(path).convert("RGBA")
    
    # The phone screen area is roughly x:[785, 905], y:[370, 565]
    # Her right index finger is at x:[750, 795], y:[440, 480]
    # Her left thumb is at x:[815, 850], y:[500, 550]
    
    # Save finger mask
    thumb_crop = im.crop((810, 490, 855, 555))
    finger_crop = im.crop((750, 435, 798, 485))
    
    # Create clean, right-side-up Indian Digital Seva interface
    phone_ui = Image.new("RGBA", (115, 190), (245, 248, 252, 255))
    p_draw = ImageDraw.Draw(phone_ui)
    
    # Top header bar (right side up, at the top!)
    p_draw.rectangle([0, 0, 115, 32], fill=(22, 54, 120, 255))
    p_draw.text((10, 6), "Digital Seva", fill=(255, 255, 255, 255), font=get_font(9, bold=True))
    p_draw.text((10, 18), "ડિજિટલ સેવા પોર્ટલ", fill=(180, 215, 255, 230), font=get_font(8, bold=False))
    
    # Fingerprint icon / circle in center
    p_draw.ellipse([35, 45, 80, 90], fill=(230, 240, 255, 255), outline=(50, 110, 220, 255), width=2)
    p_draw.arc([42, 52, 73, 83], 0, 360, fill=(30, 90, 200, 255), width=2)
    p_draw.arc([47, 57, 68, 78], 0, 360, fill=(30, 90, 200, 255), width=2)
    
    # Verification text
    p_draw.text((18, 100), "ઓળખ પ્રમાણીકરણ", fill=(30, 45, 60, 255), font=get_font(9, bold=True))
    p_draw.text((16, 114), "Biometric Auth Active", fill=(80, 100, 120, 255), font=get_font(7, bold=False))
    
    # Action button at bottom
    p_draw.rectangle([15, 130, 100, 152], fill=(24, 110, 230, 255), outline=(15, 80, 180, 255))
    p_draw.text((32, 136), "પ્રવેશ કરો", fill=(255, 255, 255, 255), font=get_font(9, bold=True))
    
    # Bottom navigation icons bar
    p_draw.line([0, 168, 115, 168], fill=(210, 220, 230, 255), width=1)
    p_draw.rectangle([25, 174, 33, 182], fill=(120, 140, 160, 255))
    p_draw.ellipse([54, 174, 62, 182], fill=(120, 140, 160, 255))
    p_draw.polygon([(82, 174), (90, 178), (82, 182)], fill=(120, 140, 160, 255))
    
    # Slightly rotate UI to match the phone's tilt (-15 deg)
    rotated_ui = phone_ui.rotate(-15, expand=True, resample=Image.BICUBIC)
    
    # Paste onto phone display
    im.paste(rotated_ui, (782, 368), rotated_ui)
    
    # Restore fingers on top
    im.paste(finger_crop, (750, 435), finger_crop)
    im.paste(thumb_crop, (810, 490), thumb_crop)
    
    im.convert("RGB").save(path, "JPEG", quality=96)
    print("content_civic_inclusion.jpg done!")

# ----------------------------------------------------
# 7. content_rapido_hosting.jpg
# ----------------------------------------------------
def fix_content_rapido_hosting():
    print("7. Fixing content_rapido_hosting.jpg...")
    path = os.path.join(PUB_DIR, "content_rapido_hosting.jpg")
    im = Image.open(path).convert("RGBA")
    draw = ImageDraw.Draw(im)
    
    # 1. Engineer on right:
    # Back text "DNS CORE TECH" is at x: [840, 920], y: [600, 680]
    back_bg = Image.new("RGBA", (90, 85), (14, 25, 48, 255))
    im.paste(back_bg, (840, 600))
    logo_back = load_logo(target_w=75)
    im.paste(logo_back, (845, 605), logo_back)
    draw.text((845, 650), "RAPIDO HOSTING", fill=(255, 255, 255, 240), font=get_font(9, bold=True))
    draw.text((845, 663), "INFRASTRUCTURE LEAD", fill=(210, 170, 80, 230), font=get_font(7, bold=True))
    
    # Sleeve text at x: [710, 770], y: [700, 725]
    sleeve_bg = Image.new("RGBA", (65, 30), (14, 25, 48, 255))
    im.paste(sleeve_bg, (710, 700))
    draw.text((715, 705), "RAPIDO", fill=(220, 235, 255, 230), font=get_font(9, bold=True))
    
    # Add Lanyard ID Badge around his neck:
    badge_bg = Image.new("RGBA", (45, 60), (255, 255, 255, 255))
    im.paste(badge_bg, (875, 700))
    draw.rectangle([875, 700, 920, 710], fill=(18, 45, 95, 255))
    draw.text((878, 701), "RAPIDO", fill=(255, 255, 255, 255), font=get_font(7, bold=True))
    draw.rectangle([878, 713, 895, 730], fill=(120, 140, 160, 255)) # photo
    draw.text((878, 734), "A. Patel", fill=(20, 30, 50, 255), font=get_font(7, bold=True))
    draw.text((878, 744), "Lead", fill=(70, 80, 100, 255), font=get_font(6, bold=False))
    draw.line([895, 680, 897, 700], fill=(20, 80, 180, 255), width=2)
    
    # 2. Engineer on left (female DevOps engineer):
    # Chest text "DEVOPS ENGINEER" is at x: [40, 115], y: [565, 625]
    chest_bg = Image.new("RGBA", (75, 60), (16, 26, 46, 255))
    im.paste(chest_bg, (40, 565))
    logo_chest = load_logo(target_w=65)
    im.paste(logo_chest, (45, 568), logo_chest)
    draw.text((43, 605), "RAPIDO DEVOPS", fill=(240, 245, 255, 235), font=get_font(7, bold=True))
    
    # Her Lanyard ID Badge
    badge_l = Image.new("RGBA", (40, 52), (255, 255, 255, 255))
    im.paste(badge_l, (120, 570))
    draw.rectangle([120, 570, 160, 580], fill=(18, 45, 95, 255))
    draw.text((123, 571), "RAPIDO", fill=(255, 255, 255, 255), font=get_font(7, bold=True))
    draw.text((123, 592), "P. Shah", fill=(20, 30, 50, 255), font=get_font(7, bold=True))
    draw.text((123, 603), "DevOps", fill=(70, 80, 100, 255), font=get_font(6, bold=False))
    
    # 3. Person standing in server room (x: [200, 250], y: [222, 270])
    srv_bg = Image.new("RGBA", (50, 35), (14, 22, 38, 255))
    im.paste(srv_bg, (200, 230))
    draw.text((203, 238), "RAPIDO", fill=(220, 235, 255, 220), font=get_font(9, bold=True))
    
    im.convert("RGB").save(path, "JPEG", quality=96)
    print("content_rapido_hosting.jpg done!")

# ----------------------------------------------------
# 8. architecture_blueprint.jpg
# ----------------------------------------------------
def fix_architecture_blueprint():
    print("8. Fixing architecture_blueprint.jpg...")
    path = os.path.join(PUB_DIR, "architecture_blueprint.jpg")
    im = Image.open(path).convert("RGBA")
    
    # Stand display screen area:
    # Top-Left: x: 232, y: 205
    # Bottom-Left: x: 245, y: 720
    # Save engineer's pointing hand: x in [560, 715], y in [210, 350]
    hand_crop = im.crop((560, 205, 715, 350))
    
    # Screen UI width: 330, height: 520
    sw, sh = 330, 515
    screen_ui = Image.new("RGBA", (sw, sh), (12, 22, 36, 255))
    ui_draw = ImageDraw.Draw(screen_ui)
    
    # Grid lines
    for gx in range(0, sw, 25):
        ui_draw.line([gx, 0, gx, sh], fill=(20, 40, 60, 90), width=1)
    for gy in range(0, sh, 25):
        ui_draw.line([0, gy, sw, gy], fill=(20, 40, 60, 90), width=1)
        
    # Header bar
    ui_draw.rectangle([0, 0, sw, 38], fill=(16, 32, 54, 255))
    ui_draw.text((12, 6), "RAPIDO SOLUTIONS ARCHITECTURE", fill=(100, 210, 255, 255), font=get_font(11, bold=True))
    ui_draw.text((12, 22), "MISSION-CRITICAL SYSTEMS MATRIX", fill=(210, 170, 80, 240), font=get_font(8, bold=True))
    
    # Section 1: Chitragupt SIEM
    ui_draw.rectangle([10, 48, 200, 115], fill=(18, 38, 64, 245), outline=(30, 80, 140, 255))
    ui_draw.text((16, 52), "PROJECT CHITRAGUPT SIEM", fill=(120, 220, 255, 255), font=get_font(9, bold=True))
    ui_draw.text((16, 66), "• Ingestion: 50,000+ EPS", fill=(220, 235, 250, 230), font=get_font(8, bold=False))
    ui_draw.text((16, 78), "• NetFlow v9 IPFIX Analytics", fill=(220, 235, 250, 230), font=get_font(8, bold=False))
    ui_draw.text((16, 92), "• DoT Compliance: 100% OK", fill=(80, 220, 140, 255), font=get_font(8, bold=True))
    
    # Section 2: Project Jayvin RADIUS AAA
    ui_draw.rectangle([10, 125, 200, 192], fill=(18, 38, 64, 245), outline=(30, 80, 140, 255))
    ui_draw.text((16, 129), "PROJECT JAYVIN (AAA/NAC)", fill=(120, 220, 255, 255), font=get_font(9, bold=True))
    ui_draw.text((16, 143), "• Carrier Edge Gatekeeper", fill=(220, 235, 250, 230), font=get_font(8, bold=False))
    ui_draw.text((16, 155), "• Auth Latency: < 15ms", fill=(220, 235, 250, 230), font=get_font(8, bold=False))
    ui_draw.text((16, 169), "• Zero-Trust Policy Active", fill=(80, 220, 140, 255), font=get_font(8, bold=True))
    
    # Section 3: Project AdNets
    ui_draw.rectangle([10, 202, 200, 269], fill=(18, 38, 64, 245), outline=(30, 80, 140, 255))
    ui_draw.text((16, 206), "PROJECT ADNETS (SPONSORED)", fill=(255, 180, 70, 255), font=get_font(9, bold=True))
    ui_draw.text((16, 220), "• Lithuania National TV Finalist", fill=(220, 235, 250, 230), font=get_font(8, bold=False))
    ui_draw.text((16, 232), "• Google Campus Warsaw", fill=(220, 235, 250, 230), font=get_font(8, bold=False))
    ui_draw.text((16, 246), "• Ethical Digital Attention", fill=(255, 200, 100, 255), font=get_font(8, bold=True))
    
    # Section 4: AMC Licensed Developers BIM & Complex Cadastre
    ui_draw.rectangle([10, 279, 200, 346], fill=(18, 38, 64, 245), outline=(30, 80, 140, 255))
    ui_draw.text((16, 283), "AMC LICENSED DEVELOPERS", fill=(255, 190, 80, 255), font=get_font(9, bold=True))
    ui_draw.text((16, 297), "• Commercial Complex BIM", fill=(220, 235, 250, 230), font=get_font(8, bold=False))
    ui_draw.text((16, 309), "• Subsurface Conduit Layout", fill=(220, 235, 250, 230), font=get_font(8, bold=False))
    ui_draw.text((16, 323), "• Clash Detection: ZERO", fill=(80, 220, 140, 255), font=get_font(8, bold=True))
    
    # Central/Right Topology Network Graph
    ui_draw.rectangle([210, 48, sw-10, 346], fill=(14, 26, 44, 240), outline=(30, 70, 120, 255))
    ui_draw.text((216, 54), "ANYCAST TOPOLOGY", fill=(100, 210, 255, 255), font=get_font(8, bold=True))
    # Draw cloud nodes
    nodes = [(240, 90), (300, 110), (260, 160), (305, 210), (250, 250), (290, 300)]
    for n1 in nodes:
        for n2 in nodes:
            if n1 != n2:
                ui_draw.line([n1[0], n1[1], n2[0], n2[1]], fill=(30, 70, 130, 120), width=1)
    for n in nodes:
        ui_draw.ellipse([n[0]-4, n[1]-4, n[0]+4, n[1]+4], fill=(80, 210, 255, 255), outline=(255, 255, 255, 255))
        
    # Bottom Telemetry Bar
    ui_draw.rectangle([10, 355, sw-10, 505], fill=(14, 28, 48, 255), outline=(40, 90, 160, 255))
    ui_draw.text((16, 362), "SOVEREIGN CLOUD TELEMETRY · 99.999% SLA", fill=(100, 210, 255, 255), font=get_font(9, bold=True))
    ui_draw.text((16, 380), "• Anycast DNS: < 2ms · Multi-Region Active-Active", fill=(200, 220, 240, 230), font=get_font(8, bold=False))
    ui_draw.text((16, 396), "• Sub-50ms Automated Ring Failover Resilience", fill=(200, 220, 240, 230), font=get_font(8, bold=False))
    ui_draw.text((16, 412), "• PMP-Grade Milestone & Delivery Governance", fill=(200, 220, 240, 230), font=get_font(8, bold=False))
    ui_draw.text((16, 432), "Anchored in Universal Human Inclusion and Equity", fill=(120, 220, 160, 255), font=get_font(8, bold=True))
    ui_draw.text((16, 448), "RAPIDO INFRATEL LLP · Brand Heritage Est. 2009", fill=(210, 170, 80, 255), font=get_font(8, bold=True))
    
    # Paste onto stand display
    im.paste(screen_ui, (230, 205), screen_ui)
    
    # Restore pointing hand
    im.paste(hand_crop, (560, 205), hand_crop)
    
    im.convert("RGB").save(path, "JPEG", quality=96)
    print("architecture_blueprint.jpg done!")

# ----------------------------------------------------
# 9. Dedicated Non-Duplicate Page Assets
# ----------------------------------------------------
def fix_all_dedicated_page_assets():
    print("9. Generating dedicated non-duplicate page assets...")
    
    # 1. banner_digital_india.jpg
    bdi = Image.open(os.path.join(PUB_DIR, "banner_civic_inclusion.jpg")).convert("RGBA")
    draw_bdi = ImageDraw.Draw(bdi)
    draw_bdi.rectangle([35, 35, 380, 95], fill=(12, 24, 42, 240), outline=(210, 170, 80, 255), width=2)
    logo_bdi = load_logo(target_w=95)
    bdi.paste(logo_bdi, (45, 43), logo_bdi)
    draw_bdi.text((150, 45), "ARCHITECTING DIGITAL BHARAT", fill=(255, 255, 255, 255), font=get_font(11, bold=True))
    draw_bdi.text((150, 64), "Universal Human Inclusion & Equity", fill=(100, 210, 255, 255), font=get_font(9, bold=True))
    bdi.convert("RGB").save(os.path.join(PUB_DIR, "banner_digital_india.jpg"), "JPEG", quality=96)
    
    # 2. content_digital_india.jpg
    cdi = Image.open(os.path.join(PUB_DIR, "equity_inclusion.jpg")).convert("RGBA")
    draw_cdi = ImageDraw.Draw(cdi)
    draw_cdi.rectangle([35, 35, 370, 90], fill=(12, 24, 42, 240), outline=(80, 210, 150, 255), width=2)
    logo_cdi = load_logo(target_w=90)
    cdi.paste(logo_cdi, (45, 43), logo_cdi)
    draw_cdi.text((145, 45), "UNIVERSAL HUMAN EQUITY", fill=(255, 255, 255, 255), font=get_font(11, bold=True))
    draw_cdi.text((145, 64), "Closing Wage Gaps · Female Tech Leadership", fill=(120, 230, 180, 255), font=get_font(9, bold=True))
    cdi.convert("RGB").save(os.path.join(PUB_DIR, "content_digital_india.jpg"), "JPEG", quality=96)
    
    # 3. banner_projects.jpg
    bp = Image.open(os.path.join(PUB_DIR, "solutions_smart_city.jpg")).convert("RGBA")
    draw_bp = ImageDraw.Draw(bp)
    draw_bp.rectangle([35, 35, 430, 100], fill=(12, 24, 42, 240), outline=(100, 200, 255, 255), width=2)
    logo_bp = load_logo(target_w=100)
    bp.paste(logo_bp, (45, 45), logo_bp)
    draw_bp.text((155, 45), "LANDMARK ENGINEERING BLUEPRINTS", fill=(255, 255, 255, 255), font=get_font(11, bold=True))
    draw_bp.text((155, 63), "Chitragupt SIEM · AdNets · Jayvin · Complex BIM", fill=(210, 170, 80, 255), font=get_font(9, bold=True))
    draw_bp.text((155, 78), "Ahmedabad · Lithuania TV Semi-Finalist · Google Warsaw", fill=(160, 220, 255, 230), font=get_font(8, bold=False))
    bp.convert("RGB").save(os.path.join(PUB_DIR, "banner_projects.jpg"), "JPEG", quality=96)
    
    # 4. content_projects.jpg
    cp = Image.open(os.path.join(PUB_DIR, "home_hero_architects.jpg")).convert("RGBA")
    draw_cp = ImageDraw.Draw(cp)
    draw_cp.rectangle([35, 35, 370, 95], fill=(12, 24, 42, 240), outline=(210, 170, 80, 255), width=2)
    logo_cp = load_logo(target_w=90)
    cp.paste(logo_cp, (45, 43), logo_cp)
    draw_cp.text((145, 45), "PROJECT GOVERNANCE DESK", fill=(255, 255, 255, 255), font=get_font(11, bold=True))
    draw_cp.text((145, 64), "PMP-Grade Execution · SLA Assurance", fill=(100, 210, 255, 255), font=get_font(9, bold=True))
    cp.convert("RGB").save(os.path.join(PUB_DIR, "content_projects.jpg"), "JPEG", quality=96)
    
    # 5. banner_contact.jpg
    bc = Image.open(os.path.join(PUB_DIR, "about_banner.jpg")).convert("RGBA")
    draw_bc = ImageDraw.Draw(bc)
    draw_bc.rectangle([35, 35, 390, 95], fill=(12, 24, 42, 240), outline=(210, 170, 80, 255), width=2)
    logo_bc = load_logo(target_w=95)
    bc.paste(logo_bc, (45, 43), logo_bc)
    draw_bc.text((150, 45), "TECHNICAL CONSULTATION DESK", fill=(255, 255, 255, 255), font=get_font(11, bold=True))
    draw_bc.text((150, 63), "Parimal Garden Cross Road, C.G. Road", fill=(200, 220, 240, 240), font=get_font(9, bold=False))
    draw_bc.text((150, 76), "Ahmedabad, Gujarat - 380006 · Direct Channel", fill=(100, 210, 255, 240), font=get_font(8, bold=True))
    bc.convert("RGB").save(os.path.join(PUB_DIR, "banner_contact.jpg"), "JPEG", quality=96)
    
    # 6. content_contact.jpg
    cc = Image.open(os.path.join(PUB_DIR, "about_boardroom.jpg")).convert("RGBA")
    draw_cc = ImageDraw.Draw(cc)
    draw_cc.rectangle([35, 35, 370, 90], fill=(12, 24, 42, 240), outline=(100, 210, 255, 255), width=2)
    logo_cc = load_logo(target_w=90)
    cc.paste(logo_cc, (45, 43), logo_cc)
    draw_cc.text((145, 45), "SOLUTIONS ARCHITECTURE DESK", fill=(255, 255, 255, 255), font=get_font(10, bold=True))
    draw_cc.text((145, 63), "Feasibility, Scoping & Architectural Advisory", fill=(210, 170, 80, 255), font=get_font(9, bold=True))
    cc.convert("RGB").save(os.path.join(PUB_DIR, "content_contact.jpg"), "JPEG", quality=96)
    
    # 7. content_architecture.jpg
    ca = Image.open(os.path.join(PUB_DIR, "hero_ai_mobile.jpg")).convert("RGBA")
    draw_ca = ImageDraw.Draw(ca)
    draw_ca.rectangle([35, 35, 370, 95], fill=(12, 24, 42, 240), outline=(100, 210, 255, 255), width=2)
    logo_ca = load_logo(target_w=90)
    ca.paste(logo_ca, (45, 43), logo_ca)
    draw_ca.text((145, 45), "ENTERPRISE SYSTEMS TOPOLOGY", fill=(255, 255, 255, 255), font=get_font(11, bold=True))
    draw_ca.text((145, 64), "Multi-Tier Cloud, Edge & Subsurface Routing", fill=(210, 170, 80, 255), font=get_font(9, bold=True))
    ca.convert("RGB").save(os.path.join(PUB_DIR, "content_architecture.jpg"), "JPEG", quality=96)
    
    # 8. content_solutions_hosting.jpg
    csh = Image.open(os.path.join(PUB_DIR, "banner_enterprise_platforms.jpg")).convert("RGBA")
    draw_csh = ImageDraw.Draw(csh)
    draw_csh.rectangle([35, 35, 370, 95], fill=(12, 24, 42, 240), outline=(210, 170, 80, 255), width=2)
    logo_csh = load_logo(target_w=90)
    csh.paste(logo_csh, (45, 43), logo_csh)
    draw_csh.text((145, 45), "RAPIDO HOSTING & DOMAINS", fill=(255, 255, 255, 255), font=get_font(11, bold=True))
    draw_csh.text((145, 64), "“We are . in domain name” · 99.999% Anycast", fill=(210, 170, 80, 255), font=get_font(9, bold=True))
    csh.convert("RGB").save(os.path.join(PUB_DIR, "content_solutions_hosting.jpg"), "JPEG", quality=96)
    
    print("Dedicated page assets successfully written!")

if __name__ == "__main__":
    fix_about_banner()
    fix_about_boardroom()
    fix_content_mobile_products()
    fix_content_spatial_gis()
    fix_banner_civic_inclusion()
    fix_content_civic_inclusion()
    fix_content_rapido_hosting()
    fix_architecture_blueprint()
    fix_all_dedicated_page_assets()
    print("ALL REFINED IMAGES PROCESSED SUCCESSFULLY!")
