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
    
    # Door patch covering SAHARA logo and cube mark:
    # x: [0, 155], y: [210, 425]
    door_bg = Image.new("RGBA", (155, 215), (32, 54, 76, 255))
    im.paste(door_bg, (0, 210))
    
    # Bright high-contrast Rapido Logo
    logo = load_logo(target_w=135)
    # Give logo a subtle white/gold background badge so it pops beautifully on the frosted glass
    badge_bg = Image.new("RGBA", (145, 60), (255, 255, 255, 240))
    im.paste(badge_bg, (5, 235), badge_bg)
    im.paste(logo, (10, 238), logo)
    
    draw = ImageDraw.Draw(im)
    draw.text((12, 320), "SOLUTIONS ARCHITECTURE", fill=(240, 245, 255, 255), font=get_font(9, bold=True))
    draw.text((45, 338), "STUDIO", fill=(210, 170, 80, 255), font=get_font(10, bold=True))
    
    # Left display small logo top-right: x in [590, 635], y in [280, 305]
    mon_l = Image.new("RGBA", (45, 25), (16, 26, 42, 255))
    im.paste(mon_l, (590, 280))
    logo_l = load_logo(target_w=42)
    im.paste(logo_l, (592, 282), logo_l)
    
    # Right display header: x in [910, 960], y in [300, 322]
    mon_r = Image.new("RGBA", (50, 22), (18, 30, 48, 255))
    im.paste(mon_r, (910, 300))
    logo_r = load_logo(target_w=40)
    im.paste(logo_r, (915, 302), logo_r)
    
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
    
    # Overlay Rapido badge
    badge = Image.new("RGBA", (145, 40), (255, 255, 255, 235))
    im.paste(badge, (435, 122), badge)
    logo = load_logo(target_w=135)
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
    # Bounding box of "AMC" and "GEOSPATIAL" is x: [60, 200], y: [620, 720]
    # Sample helmet curve white color and create rounded patch
    helm_bg = Image.new("RGBA", (130, 80), (242, 246, 250, 255))
    im.paste(helm_bg, (70, 630))
    logo_helm = load_logo(target_w=90)
    im.paste(logo_helm, (85, 635), logo_helm)
    draw.text((85, 680), "RAPIDO GIS", fill=(15, 40, 85, 255), font=get_font(12, bold=True))
    draw.text((85, 695), "BIM & CADASTRE", fill=(30, 60, 110, 230), font=get_font(8, bold=True))
    
    # Side helmet text at x: [215, 270], y: [640, 685]
    helm_side = Image.new("RGBA", (55, 45), (230, 235, 240, 255))
    im.paste(helm_side, (215, 640))
    draw.text((220, 648), "RAPIDO", fill=(15, 40, 85, 240), font=get_font(11, bold=True))
    
    # 2. Yellow safety vest on engineer in foreground (bottom-right):
    # Text "AMC" is at x: [1040, 1140], y: [620, 720]
    vest_bg = Image.new("RGBA", (95, 95), (195, 235, 40, 255))
    im.paste(vest_bg, (1045, 625))
    draw.text((1050, 630), "RAPIDO", fill=(15, 35, 20, 255), font=get_font(18, bold=True))
    draw.text((1055, 655), "GIS & BIM", fill=(25, 45, 25, 240), font=get_font(11, bold=True))
    
    # 3. Blue vest on female engineer (center):
    # Her chest badge is at x: [580, 625], y: [545, 595]
    bv_bg = Image.new("RGBA", (45, 45), (28, 55, 100, 255))
    im.paste(bv_bg, (580, 545))
    draw.text((583, 560), "RAPIDO", fill=(240, 245, 255, 240), font=get_font(9, bold=True))
    
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
    
    # Right tower tag: x=[1208, 1280], y=[198, 216]
    draw.rectangle([1208, 198, 1280, 216], fill=(18, 70, 130, 255))
    draw.text((1218, 201), "WiFiRay", fill=(255, 255, 255, 255), font=get_font(12, bold=True))
    
    # Left tower tag: x=[162, 210], y=[228, 246]
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
    
    # Phone display area: x: [800, 895], y: [365, 545]
    # Crop the display area exactly
    screen_crop = im.crop((800, 365, 895, 545))
    # Rotate 180 degrees so header and UI are right-side up!
    flipped_screen = screen_crop.rotate(180, expand=False)
    
    # Paste back onto the phone screen
    im.paste(flipped_screen, (800, 365))
    
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
    # His back text "DNS CORE TECH" is on his polo shirt: x in [1200, 1265], y in [680, 768]
    back_bg = Image.new("RGBA", (65, 88), (14, 25, 48, 255))
    im.paste(back_bg, (1200, 680))
    draw.text((1205, 690), "RAPIDO", fill=(255, 255, 255, 255), font=get_font(12, bold=True))
    draw.text((1205, 710), "HOSTING", fill=(210, 170, 80, 240), font=get_font(10, bold=True))
    
    # Sleeve text on his arm: x in [950, 1040], y in [525, 670]
    sleeve_bg = Image.new("RGBA", (90, 80), (14, 25, 48, 255))
    im.paste(sleeve_bg, (950, 560))
    logo_sleeve = load_logo(target_w=75)
    im.paste(logo_sleeve, (955, 565), logo_sleeve)
    draw.text((955, 615), "INFRA LEAD", fill=(220, 235, 255, 230), font=get_font(8, bold=True))
    
    # Lanyard ID card around his neck:
    badge_bg = Image.new("RGBA", (45, 60), (255, 255, 255, 255))
    im.paste(badge_bg, (1080, 590))
    draw.rectangle([1080, 590, 1125, 600], fill=(18, 45, 95, 255))
    draw.text((1083, 591), "RAPIDO", fill=(255, 255, 255, 255), font=get_font(7, bold=True))
    draw.rectangle([1083, 603, 1100, 620], fill=(120, 140, 160, 255)) # photo
    draw.text((1083, 624), "A. Patel", fill=(20, 30, 50, 255), font=get_font(7, bold=True))
    draw.text((1083, 634), "Lead", fill=(70, 80, 100, 255), font=get_font(6, bold=False))
    draw.line([1100, 565, 1102, 590], fill=(20, 80, 180, 255), width=2)
    
    # 2. Engineer on left (female DevOps engineer):
    # Her chest text "DEVOPS ENGINEER" is at x in [75, 125], y in [560, 615]
    chest_bg = Image.new("RGBA", (50, 55), (16, 26, 46, 255))
    im.paste(chest_bg, (75, 560))
    logo_chest = load_logo(target_w=45)
    im.paste(logo_chest, (77, 562), logo_chest)
    draw.text((76, 595), "RAPIDO", fill=(240, 245, 255, 235), font=get_font(8, bold=True))
    
    # Her Lanyard ID card
    badge_l = Image.new("RGBA", (40, 52), (255, 255, 255, 255))
    im.paste(badge_l, (120, 565))
    draw.rectangle([120, 565, 160, 575], fill=(18, 45, 95, 255))
    draw.text((123, 566), "RAPIDO", fill=(255, 255, 255, 255), font=get_font(7, bold=True))
    draw.text((123, 587), "P. Shah", fill=(20, 30, 50, 255), font=get_font(7, bold=True))
    draw.text((123, 598), "DevOps", fill=(70, 80, 100, 255), font=get_font(6, bold=False))
    
    # 3. Person standing in server room (x: [240, 310], y: [230, 280])
    srv_bg = Image.new("RGBA", (55, 35), (14, 22, 38, 255))
    im.paste(srv_bg, (245, 235))
    draw.text((250, 243), "RAPIDO", fill=(220, 235, 255, 220), font=get_font(9, bold=True))
    
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
    # Starts at x: 295, y: 212, width: 425, height: 505
    # Save engineer's pointing hand with stylus: x in [560, 715], y in [205, 350]
    hand_crop = im.crop((560, 205, 715, 350))
    
    sw, sh = 425, 500
    screen_ui = Image.new("RGBA", (sw, sh), (12, 22, 36, 255))
    ui_draw = ImageDraw.Draw(screen_ui)
    
    # Grid lines
    for gx in range(0, sw, 25):
        ui_draw.line([gx, 0, gx, sh], fill=(20, 40, 60, 90), width=1)
    for gy in range(0, sh, 25):
        ui_draw.line([0, gy, sw, gy], fill=(20, 40, 60, 90), width=1)
        
    # Header bar
    ui_draw.rectangle([0, 0, sw, 40], fill=(16, 32, 54, 255))
    ui_draw.text((15, 6), "RAPIDO SOLUTIONS ARCHITECTURE", fill=(100, 210, 255, 255), font=get_font(13, bold=True))
    ui_draw.text((15, 23), "MULTI-PROJECT MISSION CONTROL MATRIX", fill=(210, 170, 80, 240), font=get_font(9, bold=True))
    
    # Section 1: Chitragupt SIEM
    ui_draw.rectangle([12, 50, 235, 122], fill=(18, 38, 64, 245), outline=(30, 80, 140, 255))
    ui_draw.text((18, 54), "PROJECT CHITRAGUPT SIEM", fill=(120, 220, 255, 255), font=get_font(10, bold=True))
    ui_draw.text((18, 69), "• Ingestion: 50,000+ EPS", fill=(220, 235, 250, 230), font=get_font(8, bold=False))
    ui_draw.text((18, 83), "• NetFlow v9 IPFIX Analytics", fill=(220, 235, 250, 230), font=get_font(8, bold=False))
    ui_draw.text((18, 97), "• DoT Compliance: 100% OK", fill=(80, 220, 140, 255), font=get_font(8, bold=True))
    
    # Section 2: Project Jayvin RADIUS AAA
    ui_draw.rectangle([12, 132, 235, 204], fill=(18, 38, 64, 245), outline=(30, 80, 140, 255))
    ui_draw.text((18, 136), "PROJECT JAYVIN (AAA/NAC)", fill=(120, 220, 255, 255), font=get_font(10, bold=True))
    ui_draw.text((18, 151), "• Carrier Edge Gatekeeper", fill=(220, 235, 250, 230), font=get_font(8, bold=False))
    ui_draw.text((18, 165), "• Auth Latency: < 15ms", fill=(220, 235, 250, 230), font=get_font(8, bold=False))
    ui_draw.text((18, 179), "• Zero-Trust Policy Active", fill=(80, 220, 140, 255), font=get_font(8, bold=True))
    
    # Section 3: Project AdNets
    ui_draw.rectangle([12, 214, 235, 286], fill=(18, 38, 64, 245), outline=(30, 80, 140, 255))
    ui_draw.text((18, 218), "PROJECT ADNETS (SPONSORED)", fill=(255, 180, 70, 255), font=get_font(10, bold=True))
    ui_draw.text((18, 233), "• Lithuania National TV Finalist", fill=(220, 235, 250, 230), font=get_font(8, bold=False))
    ui_draw.text((18, 247), "• Google Campus Warsaw", fill=(220, 235, 250, 230), font=get_font(8, bold=False))
    ui_draw.text((18, 261), "• Ethical Digital Attention", fill=(255, 200, 100, 255), font=get_font(8, bold=True))
    
    # Section 4: AMC Licensed Developers BIM & Complex Cadastre
    ui_draw.rectangle([12, 296, 235, 368], fill=(18, 38, 64, 245), outline=(30, 80, 140, 255))
    ui_draw.text((18, 300), "AMC LICENSED DEVELOPERS", fill=(255, 190, 80, 255), font=get_font(10, bold=True))
    ui_draw.text((18, 315), "• Commercial Complex BIM", fill=(220, 235, 250, 230), font=get_font(8, bold=False))
    ui_draw.text((18, 329), "• Subsurface Conduit Layout", fill=(220, 235, 250, 230), font=get_font(8, bold=False))
    ui_draw.text((18, 343), "• Clash Detection: ZERO", fill=(80, 220, 140, 255), font=get_font(8, bold=True))
    
    # Central Topology Network Graph
    ui_draw.rectangle([245, 50, sw-12, 368], fill=(14, 26, 44, 240), outline=(30, 70, 120, 255))
    ui_draw.text((255, 56), "ANYCAST CLOUD TOPOLOGY", fill=(100, 210, 255, 255), font=get_font(9, bold=True))
    nodes = [(280, 100), (360, 120), (310, 180), (375, 220), (290, 270), (350, 320)]
    for n1 in nodes:
        for n2 in nodes:
            if n1 != n2:
                ui_draw.line([n1[0], n1[1], n2[0], n2[1]], fill=(30, 70, 130, 130), width=1)
    for n in nodes:
        ui_draw.ellipse([n[0]-5, n[1]-5, n[0]+5, n[1]+5], fill=(80, 210, 255, 255), outline=(255, 255, 255, 255))
        
    # Bottom Telemetry Bar
    ui_draw.rectangle([12, 380, sw-12, 490], fill=(14, 28, 48, 255), outline=(40, 90, 160, 255))
    ui_draw.text((20, 388), "SOVEREIGN CLOUD TELEMETRY · 99.999% SLA", fill=(100, 210, 255, 255), font=get_font(10, bold=True))
    ui_draw.text((20, 406), "• Anycast DNS: < 2ms · Multi-Region Active-Active Replication", fill=(200, 220, 240, 230), font=get_font(8, bold=False))
    ui_draw.text((20, 420), "• Sub-50ms Automated Ring Failover Resilience", fill=(200, 220, 240, 230), font=get_font(8, bold=False))
    ui_draw.text((20, 434), "• PMP-Grade Milestone & Delivery Governance", fill=(200, 220, 240, 230), font=get_font(8, bold=False))
    ui_draw.text((20, 452), "Anchored in Universal Human Inclusion and Equity", fill=(120, 220, 160, 255), font=get_font(9, bold=True))
    ui_draw.text((20, 468), "RAPIDO INFRATEL LLP · Brand Heritage Est. 2009", fill=(210, 170, 80, 255), font=get_font(9, bold=True))
    
    # Paste onto stand display
    im.paste(screen_ui, (295, 212), screen_ui)
    
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
    print("ALL FINAL PERFECT IMAGES PROCESSED SUCCESSFULLY!")
