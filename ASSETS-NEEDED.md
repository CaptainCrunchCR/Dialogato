# Assets Needed for Dialogato

## Critical Assets (Blocking SEO/PWA)

### 1. Favicon & Basic Icons

**Priority: HIGH** - These are referenced but missing, causing 404 errors

Generate from `public/icon.svg` using one of these methods:

#### Option A: Online Tool (Easiest)

1. Visit https://realfavicongenerator.net/
2. Upload `public/icon.svg`
3. Download and extract to project

#### Option B: Command Line

```bash
# Install sharp-cli globally
npm install -g sharp-cli

# Navigate to project
cd d:/Development/Dialogato

# Generate all required sizes
sharp -i public/icon.svg -o public/favicon.ico resize 32 32
sharp -i public/icon.svg -o public/icons/icon-16x16.png resize 16 16
sharp -i public/icon.svg -o public/icons/icon-32x32.png resize 32 32
sharp -i public/icon.svg -o public/icons/icon-72x72.png resize 72 72
sharp -i public/icon.svg -o public/icons/icon-96x96.png resize 96 96
sharp -i public/icon.svg -o public/icons/icon-120x120.png resize 120 120
sharp -i public/icon.svg -o public/icons/icon-128x128.png resize 128 128
sharp -i public/icon.svg -o public/icons/icon-144x144.png resize 144 144
sharp -i public/icon.svg -o public/icons/icon-152x152.png resize 152 152
sharp -i public/icon.svg -o public/icons/icon-167x167.png resize 167 167
sharp -i public/icon.svg -o public/icons/icon-180x180.png resize 180 180
sharp -i public/icon.svg -o public/icons/icon-192x192.png resize 192 192
sharp -i public/icon.svg -o public/icons/icon-384x384.png resize 384 384
sharp -i public/icon.svg -o public/icons/icon-512x512.png resize 512 512
```

### 2. Social Media Images

**Priority: HIGH** - Required for proper social sharing

Create these images with Dialogato branding:

- `public/og-image.jpg` (1200x630px)
  - Use for Facebook, LinkedIn sharing
  - Include: Logo, tagline, gradient background
- `public/twitter-image.jpg` (1200x630px)
  - Twitter card image
  - Similar to og-image
- `public/logo.png` (512x512px)
  - Transparent background
  - For structured data and general use

**Design Guidelines:**

- Background: #0f172a (dark slate)
- Primary gradient: #6366f1 → #8b5cf6
- Include text: "Dialogato - Agentes IA para WhatsApp Business"
- Add Costa Rica flag or reference

### 3. PWA Shortcut Icons

**Priority: MEDIUM**

- `public/icons/whatsapp-shortcut.png` (96x96)
  - WhatsApp logo in brand colors
- `public/icons/pricing-shortcut.png` (96x96)
  - Price tag or dollar sign icon

### 4. iOS Splash Screens

**Priority: LOW** - Nice to have for iOS PWA

Create folder: `public/splash/`

Sizes needed:

- iphone5_splash.png (640x1136)
- iphone6_splash.png (750x1334)
- iphoneplus_splash.png (1242x2208)
- iphonex_splash.png (1125x2436)
- iphonexr_splash.png (828x1792)
- iphonexsmax_splash.png (1242x2688)
- ipad_splash.png (1536x2048)
- ipadpro1_splash.png (1668x2224)
- ipadpro2_splash.png (2048x2732)

**Design:** Dark background with centered logo and "Dialogato" text

### 5. PWA Screenshots

**Priority: LOW**

Create folder: `public/screenshots/`

- mobile-1.png (750x1334) - Mobile view of homepage
- desktop-1.png (1920x1080) - Desktop view of homepage

## Quick Start

### Minimum Viable Assets (30 minutes)

1. Generate favicons using realfavicongenerator.net
2. Create basic og-image.jpg in Canva/Figma
3. Copy og-image.jpg to twitter-image.jpg
4. Copy icon-512x512.png to logo.png

### Full Professional Setup (2-3 hours)

1. Design custom social media images
2. Create all PWA icons
3. Design iOS splash screens
4. Take screenshots of actual website
5. Create shortcut icons

## Brand Assets Reference

### Colors

```css
--background: #0f172a;
--primary: #6366f1;
--secondary: #8b5cf6;
--accent: #3b82f6;
```

### Typography

- Font: Inter
- Headings: Bold, tight tracking
- Body: Light weight

### Logo Concept

- Chat bubble with AI sparkles
- Gradient from primary to secondary
- Modern, tech-forward aesthetic

## Testing After Setup

1. **Favicon Test:**

   - Open site in browser
   - Check browser tab for icon
   - Check bookmarks

2. **Social Sharing Test:**

   - Facebook Sharing Debugger: https://developers.facebook.com/tools/debug/
   - Twitter Card Validator: https://cards-dev.twitter.com/validator
   - LinkedIn Post Inspector: https://www.linkedin.com/post-inspector/

3. **PWA Test:**

   - Open on mobile device
   - Add to home screen
   - Check icon appears correctly
   - Launch from home screen

4. **SEO Test:**
   - Google Rich Results Test: https://search.google.com/test/rich-results
   - Schema.org Validator: https://validator.schema.org/

## Current Status

✅ Created:

- SVG icon template (public/icon.svg)
- Icons directory (public/icons/)
- robots.txt
- sitemap.xml
- SEO metadata in layout.tsx
- Structured data (Schema.org)

❌ Missing:

- All PNG/ICO icon files
- Social media images
- Logo file
- Splash screens
- Screenshots
- Shortcut icons

## Next Steps

1. **Immediate:** Generate favicon and basic icons
2. **Short-term:** Create social media images
3. **Long-term:** Complete PWA assets for mobile experience
