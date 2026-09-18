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
    # Try system fonts on macOS
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

# ==========================================
# 1. about_banner.jpg
# ==========================================
def process_about_banner():
    print("Processing about_banner.jpg...")
    path = os.path.join(PUB_DIR, "about_banner.jpg")
    im = Image.open(path).convert("RGBA")
    
    # 1. Mask out SAHARA Solutions on glass door (left: x:15..155, y:260..420)
    # Sample background color around door: deep frosted blue-grey
    door_bg = Image.new("RGBA", (145, 160), (32, 58, 82, 245))
    im.paste(door_bg, (15, 260), door_bg)
    
    # Overlay official Rapido Logo
    logo = load_logo(target_w=125)
    im.paste(logo, (25, 280), logo)
    
    # Draw "SOLUTIONS ARCHITECTURE" below logo
    draw = ImageDraw.Draw(im)
    font_sub = get_font(9, bold=True)
    draw.text((22, 385), "SOLUTIONS ARCHITECTURE", fill=(210, 225, 240, 230), font=font_sub)
    draw.text((45, 398), "STUDIO", fill=(200, 160, 80, 230), font=font_sub)
    
    # 2. Mask small logos on monitors
    # Left monitor top-right (approx x: 585..630, y: 285..305)
    mon_l_bg = Image.new("RGBA", (45, 20), (16, 26, 42, 255))
    im.paste(mon_l_bg, (585, 285))
    tiny_logo = load_logo(target_w=40)
    im.paste(tiny_logo, (588, 287), tiny_logo)
    
    # Right monitor header (approx x: 915..955, y: 305..320)
    mon_r_bg = Image.new("RGBA", (40, 16), (18, 30, 48, 255))
    im.paste(mon_r_bg, (915, 305))
    tiny_logo2 = load_logo(target_w=35)
    im.paste(tiny_logo2, (918, 306), tiny_logo2)
    
    im.convert("RGB").save(path, "JPEG", quality=95)
    print("about_banner.jpg done!")

# ==========================================
# 2. about_boardroom.jpg
# ==========================================
def process_about_boardroom():
    print("Processing about_boardroom.jpg...")
    path = os.path.join(PUB_DIR, "about_boardroom.jpg")
    im = Image.open(path).convert("RGBA")
    
    # Metallic wall logo at x: [755, 825], y: [305, 380]
    # Sample warm beige wall color
    wall_bg = Image.new("RGBA", (75, 75), (148, 138, 126, 255))
    im.paste(wall_bg, (755, 305))
    
    # Overlay Rapido logo in metallic warm silver/gold
    logo = load_logo(target_w=70)
    im.paste(logo, (758, 318), logo)
    
    im.convert("RGB").save(path, "JPEG", quality=95)
    print("about_boardroom.jpg done!")

# ==========================================
# 3. content_mobile_products.jpg
# ==========================================
def process_content_mobile_products():
    print("Processing content_mobile_products.jpg...")
    path = os.path.join(PUB_DIR, "content_mobile_products.jpg")
    im = Image.open(path).convert("RGBA")
    
    # 1. Brick wall text "AhmDev Labs" at x: [430, 595], y: [120, 165]
    # Sample brick texture by blurring surrounding bricks
    brick_patch = im.crop((430, 80, 595, 125)).resize((165, 45))
    im.paste(brick_patch, (430, 120))
    # Overlay Rapido Logo
    logo = load_logo(target_w=140)
    im.paste(logo, (440, 125), logo)
    
    # 2. Whiteboard top-right "AhmDev Labs" at x: [1190, 1345], y: [40, 80]
    wb_bg1 = Image.new("RGBA", (155, 40), (235, 245, 250, 255))
    im.paste(wb_bg1, (1190, 40))
    logo_wb1 = load_logo(target_w=110)
    im.paste(logo_wb1, (1200, 43), logo_wb1)
    
    # 3. Whiteboard bottom-right "AhmDev Labs" at x: [1210, 1345], y: [415, 455]
    wb_bg2 = Image.new("RGBA", (135, 40), (235, 245, 250, 255))
    im.paste(wb_bg2, (1210, 415))
    draw = ImageDraw.Draw(im)
    font_marker = get_font(16, bold=True)
    draw.text((1220, 420), "RAPIDO LABS", fill=(30, 45, 65, 230), font=font_marker)
    draw.text((1220, 438), "Feb 2024", fill=(70, 85, 105, 200), font=get_font(12, bold=False))
    
    im.convert("RGB").save(path, "JPEG", quality=95)
    print("content_mobile_products.jpg done!")

# ==========================================
# 4. content_spatial_gis.jpg
# ==========================================
def process_content_spatial_gis():
    print("Processing content_spatial_gis.jpg...")
    path = os.path.join(PUB_DIR, "content_spatial_gis.jpg")
    im = Image.open(path).convert("RGBA")
    draw = ImageDraw.Draw(im)
    
    # 1. Helmet on table:
    # Front text "AMC GEOSPATIAL" at x: [105, 220], y: [700, 755]
    helmet_bg = Image.new("RGBA", (125, 55), (238, 242, 246, 255))
    im.paste(helmet_bg, (105, 700))
    # Draw RAPIDO GIS in clean dark blue
    f_helm1 = get_font(18, bold=True)
    f_helm2 = get_font(11, bold=True)
    draw.text((122, 705), "RAPIDO", fill=(15, 45, 95, 240), font=f_helm1)
    draw.text((128, 728), "GIS & BIM", fill=(20, 60, 120, 220), font=f_helm2)
    
    # Side helmet text at x: [215, 270], y: [640, 685]
    helm_side = Image.new("RGBA", (55, 45), (230, 235, 240, 255))
    im.paste(helm_side, (215, 640))
    draw.text((220, 648), "RAPIDO", fill=(15, 45, 95, 240), font=get_font(12, bold=True))
    
    # 2. Yellow vest on engineer in foreground (bottom right):
    # x: [1035, 1135], y: [675, 755]
    vest_bg = Image.new("RGBA", (105, 80), (195, 235, 40, 255))
    im.paste(vest_bg, (1035, 675))
    draw.text((1045, 680), "RAPIDO", fill=(15, 35, 25, 245), font=get_font(20, bold=True))
    draw.text((1052, 708), "GIS & BIM", fill=(25, 45, 30, 230), font=get_font(12, bold=True))
    
    # 3. Blue vest on female engineer (center):
    # x: [790, 840], y: [530, 580]
    blue_bg = Image.new("RGBA", (50, 50), (28, 55, 100, 255))
    im.paste(blue_bg, (790, 530))
    draw.text((795, 545), "RAPIDO", fill=(240, 245, 255, 240), font=get_font(10, bold=True))
    
    im.convert("RGB").save(path, "JPEG", quality=95)
    print("content_spatial_gis.jpg done!")

# ==========================================
# 5. banner_civic_inclusion.jpg
# ==========================================
def process_banner_civic_inclusion():
    print("Processing banner_civic_inclusion.jpg...")
    path = os.path.join(PUB_DIR, "banner_civic_inclusion.jpg")
    im = Image.open(path).convert("RGBA")
    draw = ImageDraw.Draw(im)
    
    # Right tower tag: x=[1209, 1279], y=[199, 215]
    # Mask with blue pill
    draw.rectangle([1208, 198, 1280, 216], fill=(18, 70, 130, 255))
    draw.text((1218, 201), "WiFiRay", fill=(255, 255, 255, 255), font=get_font(12, bold=True))
    
    # Left tower tag: x=[162, 208], y=[228, 246]
    draw.rectangle([162, 228, 210, 246], fill=(18, 70, 130, 255))
    draw.text((166, 230), "WiFiRay", fill=(255, 255, 255, 255), font=get_font(10, bold=True))
    
    im.convert("RGB").save(path, "JPEG", quality=95)
    print("banner_civic_inclusion.jpg done!")

# ==========================================
# 6. content_civic_inclusion.jpg
# ==========================================
def process_content_civic_inclusion():
    print("Processing content_civic_inclusion.jpg...")
    path = os.path.join(PUB_DIR, "content_civic_inclusion.jpg")
    im = Image.open(path).convert("RGBA")
    
    # The phone screen is within x: [780, 920], y: [370, 580]
    # Screen is tilted by approx -22 degrees.
    # In the original, the UI content was inverted 180 degrees.
    # Let's crop the screen content area, rotate it 180 degrees, and paste it back!
    screen_crop = im.crop((782, 370, 919, 577))
    flipped_screen = screen_crop.rotate(180, expand=False)
    
    # Mask with smooth alpha to blend edges into bezel
    mask = Image.new("L", screen_crop.size, 255)
    mask = mask.filter(ImageFilter.GaussianBlur(2))
    
    im.paste(flipped_screen, (782, 370), mask)
    
    im.convert("RGB").save(path, "JPEG", quality=95)
    print("content_civic_inclusion.jpg done!")

# ==========================================
# 7. content_rapido_hosting.jpg
# ==========================================
def process_content_rapido_hosting():
    print("Processing content_rapido_hosting.jpg...")
    path = os.path.join(PUB_DIR, "content_rapido_hosting.jpg")
    im = Image.open(path).convert("RGBA")
    draw = ImageDraw.Draw(im)
    
    # 1. Engineer on right:
    # Sleeve text "DNS CORE TECH" at x: [930, 1030], y: [530, 620]
    sleeve_bg = Image.new("RGBA", (100, 90), (14, 25, 48, 255))
    im.paste(sleeve_bg, (930, 530))
    logo_sleeve = load_logo(target_w=75)
    im.paste(logo_sleeve, (940, 545), logo_sleeve)
    draw.text((945, 595), "HOSTING", fill=(220, 235, 255, 230), font=get_font(10, bold=True))
    
    # Back text "DNS CORE TECH" at x: [1030, 1200], y: [500, 650]
    back_bg = Image.new("RGBA", (170, 150), (14, 25, 48, 255))
    im.paste(back_bg, (1030, 500))
    logo_back = load_logo(target_w=130)
    im.paste(logo_back, (1050, 520), logo_back)
    draw.text((1055, 600), "RAPIDO HOSTING", fill=(255, 255, 255, 240), font=get_font(14, bold=True))
    draw.text((1060, 620), "INFRASTRUCTURE LEAD", fill=(200, 160, 80, 230), font=get_font(10, bold=True))
    
    # ID badge with lanyard around neck for engineer on right:
    # He already has a blue neck strap at x: [1050..1150], y: [570..620]
    badge_bg = Image.new("RGBA", (55, 75), (255, 255, 255, 250))
    im.paste(badge_bg, (1075, 620))
    draw_badge = ImageDraw.Draw(im)
    draw_badge.rectangle([1075, 620, 1130, 632], fill=(15, 35, 80, 255))
    draw_badge.text((1080, 622), "RAPIDO", fill=(255, 255, 255, 255), font=get_font(8, bold=True))
    draw_badge.rectangle([1080, 636, 1100, 656], fill=(120, 140, 160, 255)) # photo
    draw_badge.text((1080, 660), "A. Patel", fill=(20, 30, 50, 255), font=get_font(8, bold=True))
    draw_badge.text((1080, 670), "Infra Lead", fill=(80, 90, 110, 255), font=get_font(7, bold=False))
    draw_badge.line([1095, 605, 1102, 620], fill=(20, 70, 160, 255), width=3) # lanyard clip
    
    # 2. Engineer on left (female DevOps engineer):
    # Chest area x: [60, 160], y: [540, 630]
    chest_bg = Image.new("RGBA", (100, 75), (16, 26, 46, 255))
    im.paste(chest_bg, (60, 550))
    logo_chest = load_logo(target_w=70)
    im.paste(logo_chest, (65, 555), logo_chest)
    draw.text((68, 595), "RAPIDO CLOUD", fill=(255, 255, 255, 235), font=get_font(9, bold=True))
    draw.text((68, 608), "DEVOPS ENGINEER", fill=(90, 190, 255, 230), font=get_font(8, bold=True))
    
    # Her ID card hanging from neck:
    # She has a blue lanyard already at x: [115, 145], y: [515, 610]
    badge_l = Image.new("RGBA", (45, 60), (255, 255, 255, 250))
    im.paste(badge_l, (120, 590))
    draw.rectangle([120, 590, 165, 600], fill=(15, 35, 80, 255))
    draw.text((125, 591), "RAPIDO", fill=(255, 255, 255, 255), font=get_font(7, bold=True))
    draw.text((125, 615), "P. Shah", fill=(20, 30, 50, 255), font=get_font(7, bold=True))
    draw.text((125, 625), "DevOps", fill=(70, 80, 100, 255), font=get_font(6, bold=False))
    
    # 3. Person standing in server room (x: [230, 310], y: [230, 280])
    srv_bg = Image.new("RGBA", (65, 35), (14, 22, 38, 255))
    im.paste(srv_bg, (240, 235))
    draw.text((245, 245), "RAPIDO", fill=(220, 235, 255, 220), font=get_font(10, bold=True))
    
    im.convert("RGB").save(path, "JPEG", quality=95)
    print("content_rapido_hosting.jpg done!")

# ==========================================
# 8. architecture_blueprint.jpg
# ==========================================
def process_architecture_blueprint():
    print("Processing architecture_blueprint.jpg...")
    path = os.path.join(PUB_DIR, "architecture_blueprint.jpg")
    im = Image.open(path).convert("RGBA")
    
    # Stand display screen area:
    # Screen corners approximately:
    # TL: (320, 205), TR: (735, 205), BL: (350, 745), BR: (735, 690)
    # The screen content area can be cleanly updated while protecting the engineer's pointing hand!
    # Engineer hand & stylus: x in [560, 700], y in [180, 310]
    
    # Let's create an ultra-modern Rapido Solutions Architecture screen overlay:
    sw, sh = 400, 500
    screen_ui = Image.new("RGBA", (sw, sh), (12, 22, 36, 250))
    ui_draw = ImageDraw.Draw(screen_ui)
    
    # Grid lines
    for gx in range(0, sw, 30):
        ui_draw.line([gx, 0, gx, sh], fill=(20, 40, 60, 80), width=1)
    for gy in range(0, sh, 30):
        ui_draw.line([0, gy, sw, gy], fill=(20, 40, 60, 80), width=1)
        
    # Header bar
    ui_draw.rectangle([0, 0, sw, 40], fill=(16, 32, 54, 255))
    ui_draw.text((15, 8), "RAPIDO SOLUTIONS ARCHITECTURE", fill=(100, 210, 255, 255), font=get_font(13, bold=True))
    ui_draw.text((15, 24), "MULTI-PROJECT MISSION CONTROL MATRIX", fill=(200, 160, 80, 240), font=get_font(9, bold=True))
    
    # Section 1: Chitragupt SIEM
    ui_draw.rectangle([15, 55, 230, 130], fill=(18, 38, 64, 240), outline=(30, 80, 140, 255))
    ui_draw.text((22, 60), "PROJECT CHITRAGUPT SIEM", fill=(120, 220, 255, 255), font=get_font(10, bold=True))
    ui_draw.text((22, 75), "• Log Ingestion: 50,000+ EPS", fill=(220, 235, 250, 230), font=get_font(9, bold=False))
    ui_draw.text((22, 90), "• NetFlow v9 / IPFIX Analytics", fill=(220, 235, 250, 230), font=get_font(9, bold=False))
    ui_draw.text((22, 105), "• DoT Compliance: 100% Verified", fill=(80, 220, 140, 255), font=get_font(9, bold=True))
    
    # Section 2: Project Jayvin RADIUS AAA
    ui_draw.rectangle([15, 145, 230, 220], fill=(18, 38, 64, 240), outline=(30, 80, 140, 255))
    ui_draw.text((22, 150), "PROJECT JAYVIN (RADIUS AAA)", fill=(120, 220, 255, 255), font=get_font(10, bold=True))
    ui_draw.text((22, 165), "• Carrier Perimeter Gatekeeper", fill=(220, 235, 250, 230), font=get_font(9, bold=False))
    ui_draw.text((22, 180), "• Auth Latency: < 15ms", fill=(220, 235, 250, 230), font=get_font(9, bold=False))
    ui_draw.text((22, 195), "• NAC Policy: Zero-Trust Active", fill=(80, 220, 140, 255), font=get_font(9, bold=True))
    
    # Section 3: Project AdNets
    ui_draw.rectangle([15, 235, 230, 310], fill=(18, 38, 64, 240), outline=(30, 80, 140, 255))
    ui_draw.text((22, 240), "PROJECT ADNETS (SPONSORED MESH)", fill=(255, 180, 70, 255), font=get_font(10, bold=True))
    ui_draw.text((22, 255), "• Lithuania National TV Semi-Finalist", fill=(220, 235, 250, 230), font=get_font(9, bold=False))
    ui_draw.text((22, 270), "• Google Campus Warsaw Selected", fill=(220, 235, 250, 230), font=get_font(9, bold=False))
    ui_draw.text((22, 285), "• Ethical Attention Monetization", fill=(255, 200, 100, 255), font=get_font(9, bold=True))
    
    # Section 4: AMC Licensed Developers BIM & Complex Cadastre
    ui_draw.rectangle([15, 325, 230, 400], fill=(18, 38, 64, 240), outline=(30, 80, 140, 255))
    ui_draw.text((22, 330), "AMC LICENSED DEVELOPERS", fill=(255, 190, 80, 255), font=get_font(10, bold=True))
    ui_draw.text((22, 345), "• 3D Building Information Modeling (BIM)", fill=(220, 235, 250, 230), font=get_font(9, bold=False))
    ui_draw.text((22, 360), "• Commercial Complex Infrastructure", fill=(220, 235, 250, 230), font=get_font(9, bold=False))
    ui_draw.text((22, 375), "• Subsurface Conduit Clash: ZERO", fill=(80, 220, 140, 255), font=get_font(9, bold=True))
    
    # Bottom Telemetry Bar
    ui_draw.rectangle([15, 415, sw-15, 485], fill=(14, 28, 48, 240), outline=(40, 90, 160, 255))
    ui_draw.text((25, 425), "ENTERPRISE CLOUD PLATFORM TELEMETRY · 99.999% SLA", fill=(100, 210, 255, 255), font=get_font(9, bold=True))
    ui_draw.text((25, 442), "Anycast DNS Routing: OPTIMAL · Failover: < 50ms · Active Regions: 5", fill=(200, 220, 240, 230), font=get_font(8, bold=False))
    ui_draw.text((25, 458), "Anchored in Universal Human Inclusion and Equity · Brand Est. 2009", fill=(150, 210, 170, 230), font=get_font(8, bold=True))
    
    # Save hand mask before pasting
    hand_crop = im.crop((550, 180, 720, 360))
    
    # Paste screen UI onto display
    im.paste(screen_ui, (330, 205), screen_ui)
    
    # Restore hand over screen
    im.paste(hand_crop, (550, 180), hand_crop)
    
    im.convert("RGB").save(path, "JPEG", quality=95)
    print("architecture_blueprint.jpg done!")

# ==========================================
# 9. Dedicated Unique Images for All Pages
# ==========================================
def generate_dedicated_unique_images():
    print("Generating dedicated unique images for all pages...")
    
    # 1. banner_digital_india.jpg:
    # Unique sovereign digital Bharat inclusion banner (composed from banner_civic_inclusion with dedicated golden digital aura & Bhashini 22-language badge)
    im_bdi = Image.open(os.path.join(PUB_DIR, "banner_civic_inclusion.jpg")).convert("RGBA")
    draw_bdi = ImageDraw.Draw(im_bdi)
    # Add Digital Bharat sovereign insignia
    draw_bdi.rectangle([40, 40, 360, 95], fill=(12, 24, 42, 230), outline=(200, 160, 80, 240), width=2)
    logo_bdi = load_logo(target_w=90)
    im_bdi.paste(logo_bdi, (50, 48), logo_bdi)
    draw_bdi.text((150, 48), "ARCHITECTING DIGITAL BHARAT", fill=(255, 255, 255, 255), font=get_font(11, bold=True))
    draw_bdi.text((150, 66), "Universal Human Inclusion & Equity", fill=(100, 210, 255, 255), font=get_font(9, bold=True))
    im_bdi.convert("RGB").save(os.path.join(PUB_DIR, "banner_digital_india.jpg"), "JPEG", quality=95)
    
    # 2. content_digital_india.jpg:
    # Dedicated equity, female tech leadership, and diverse innovation studio
    im_cdi = Image.open(os.path.join(PUB_DIR, "equity_inclusion.jpg")).convert("RGBA")
    draw_cdi = ImageDraw.Draw(im_cdi)
    draw_cdi.rectangle([40, 40, 350, 90], fill=(12, 24, 42, 230), outline=(80, 210, 150, 240), width=2)
    logo_cdi = load_logo(target_w=85)
    im_cdi.paste(logo_cdi, (50, 48), logo_cdi)
    draw_cdi.text((145, 48), "UNIVERSAL HUMAN EQUITY", fill=(255, 255, 255, 255), font=get_font(11, bold=True))
    draw_cdi.text((145, 66), "Closing Wage Gaps · Female Tech Leadership", fill=(120, 230, 180, 255), font=get_font(9, bold=True))
    im_cdi.convert("RGB").save(os.path.join(PUB_DIR, "content_digital_india.jpg"), "JPEG", quality=95)
    
    # 3. banner_projects.jpg:
    # Dedicated landmark engineering blueprints banner (composed from solutions_smart_city with blueprint grid and Rapido insignia)
    im_bp = Image.open(os.path.join(PUB_DIR, "solutions_smart_city.jpg")).convert("RGBA")
    draw_bp = ImageDraw.Draw(im_bp)
    draw_bp.rectangle([40, 40, 420, 100], fill=(12, 24, 42, 235), outline=(100, 200, 255, 240), width=2)
    logo_bp = load_logo(target_w=95)
    im_bp.paste(logo_bp, (50, 50), logo_bp)
    draw_bp.text((155, 50), "LANDMARK ENGINEERING BLUEPRINTS", fill=(255, 255, 255, 255), font=get_font(12, bold=True))
    draw_bp.text((155, 68), "Chitragupt SIEM · AdNets · Jayvin · Complex BIM", fill=(200, 160, 80, 255), font=get_font(9, bold=True))
    draw_bp.text((155, 82), "Ahmedabad · Lithuania TV Semi-Finalist · Google Warsaw", fill=(160, 220, 255, 230), font=get_font(8, bold=False))
    im_bp.convert("RGB").save(os.path.join(PUB_DIR, "banner_projects.jpg"), "JPEG", quality=95)
    
    # 4. content_projects.jpg:
    # Dedicated executive architecture review and project deliverables
    im_cp = Image.open(os.path.join(PUB_DIR, "home_hero_architects.jpg")).convert("RGBA")
    draw_cp = ImageDraw.Draw(im_cp)
    draw_cp.rectangle([40, 40, 360, 95], fill=(12, 24, 42, 235), outline=(200, 160, 80, 240), width=2)
    logo_cp = load_logo(target_w=90)
    im_cp.paste(logo_cp, (50, 48), logo_cp)
    draw_cp.text((150, 48), "PROJECT GOVERNANCE DESK", fill=(255, 255, 255, 255), font=get_font(11, bold=True))
    draw_cp.text((150, 66), "PMP-Grade Execution · SLA Assurance", fill=(100, 210, 255, 255), font=get_font(9, bold=True))
    im_cp.convert("RGB").save(os.path.join(PUB_DIR, "content_projects.jpg"), "JPEG", quality=95)
    
    # 5. banner_contact.jpg:
    # Dedicated solutions architecture studio and consultation desk
    im_bc = Image.open(os.path.join(PUB_DIR, "about_banner.jpg")).convert("RGBA")
    draw_bc = ImageDraw.Draw(im_bc)
    draw_bc.rectangle([40, 40, 370, 95], fill=(12, 24, 42, 235), outline=(200, 160, 80, 240), width=2)
    logo_bc = load_logo(target_w=90)
    im_bc.paste(logo_bc, (50, 48), logo_bc)
    draw_bc.text((150, 48), "TECHNICAL CONSULTATION DESK", fill=(255, 255, 255, 255), font=get_font(11, bold=True))
    draw_bc.text((150, 66), "Parimal Garden Cross Road, C.G. Road", fill=(200, 220, 240, 240), font=get_font(9, bold=False))
    draw_bc.text((150, 78), "Ahmedabad, Gujarat - 380006 · Direct Channel", fill=(100, 210, 255, 240), font=get_font(8, bold=True))
    im_bc.convert("RGB").save(os.path.join(PUB_DIR, "banner_contact.jpg"), "JPEG", quality=95)
    
    # 6. content_contact.jpg:
    # Dedicated consultation committee meeting room
    im_cc = Image.open(os.path.join(PUB_DIR, "about_boardroom.jpg")).convert("RGBA")
    draw_cc = ImageDraw.Draw(im_cc)
    draw_cc.rectangle([40, 40, 350, 90], fill=(12, 24, 42, 235), outline=(100, 210, 255, 240), width=2)
    logo_cc = load_logo(target_w=85)
    im_cc.paste(logo_cc, (50, 48), logo_cc)
    draw_cc.text((145, 48), "SOLUTIONS ARCHITECTURE DESK", fill=(255, 255, 255, 255), font=get_font(10, bold=True))
    draw_cc.text((145, 66), "Feasibility, Scoping & Architectural Advisory", fill=(200, 160, 80, 255), font=get_font(9, bold=True))
    im_cc.convert("RGB").save(os.path.join(PUB_DIR, "content_contact.jpg"), "JPEG", quality=95)
    
    # 7. content_architecture.jpg:
    # Dedicated architecture review image for architecture page
    im_ca = Image.open(os.path.join(PUB_DIR, "hero_ai_mobile.jpg")).convert("RGBA")
    draw_ca = ImageDraw.Draw(im_ca)
    draw_ca.rectangle([40, 40, 360, 95], fill=(12, 24, 42, 235), outline=(100, 210, 255, 240), width=2)
    logo_ca = load_logo(target_w=90)
    im_ca.paste(logo_ca, (50, 48), logo_ca)
    draw_ca.text((150, 48), "ENTERPRISE SYSTEMS TOPOLOGY", fill=(255, 255, 255, 255), font=get_font(11, bold=True))
    draw_ca.text((150, 66), "Multi-Tier Cloud, Edge & Subsurface Routing", fill=(200, 160, 80, 255), font=get_font(9, bold=True))
    im_ca.convert("RGB").save(os.path.join(PUB_DIR, "content_architecture.jpg"), "JPEG", quality=95)
    
    # 8. content_solutions_hosting.jpg:
    # Dedicated hosting cloud infrastructure image for solutions page
    im_csh = Image.open(os.path.join(PUB_DIR, "banner_enterprise_platforms.jpg")).convert("RGBA")
    draw_csh = ImageDraw.Draw(im_csh)
    draw_csh.rectangle([40, 40, 360, 95], fill=(12, 24, 42, 235), outline=(200, 160, 80, 240), width=2)
    logo_csh = load_logo(target_w=90)
    im_csh.paste(logo_csh, (50, 48), logo_csh)
    draw_csh.text((150, 48), "RAPIDO HOSTING & DOMAINS", fill=(255, 255, 255, 255), font=get_font(11, bold=True))
    draw_csh.text((150, 66), "“We are . in domain name” · 99.999% Anycast", fill=(200, 160, 80, 255), font=get_font(9, bold=True))
    im_csh.convert("RGB").save(os.path.join(PUB_DIR, "content_solutions_hosting.jpg"), "JPEG", quality=95)
    
    print("All dedicated unique images generated successfully!")

if __name__ == "__main__":
    process_about_banner()
    process_about_boardroom()
    process_content_mobile_products()
    process_content_spatial_gis()
    process_banner_civic_inclusion()
    process_content_civic_inclusion()
    process_content_rapido_hosting()
    process_architecture_blueprint()
    generate_dedicated_unique_images()
    print("ALL IMAGE PROCESSING COMPLETED PERFECTLY!")
