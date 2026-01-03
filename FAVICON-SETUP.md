# Favicon and Icon Setup Guide

## Current Status

The project references multiple favicon and icon files but they don't exist yet. This guide explains what needs to be created.

## Required Files

### 1. Favicon Files

- `public/favicon.ico` - Standard favicon (32x32, 16x16 multi-resolution)
- `public/icon.svg` - ✓ Created - Modern SVG favicon

### 2. PWA Icons (public/icons/)

All icons should be PNG format with transparent or branded background:

- `icon-16x16.png`
- `icon-32x32.png`
- `icon-72x72.png`
- `icon-96x96.png`
- `icon-120x120.png` (iOS)
- `icon-128x128.png`
- `icon-144x144.png` (Windows)
- `icon-152x152.png` (iOS)
- `icon-167x167.png` (iOS)
- `icon-180x180.png` (iOS)
- `icon-192x192.png` (Android)
- `icon-384x384.png`
- `icon-512x512.png` (Android, PWA)

### 3. Social Media Images (public/)

- `og-image.jpg` - Open Graph image (1200x630px)
- `twitter-image.jpg` - Twitter card image (1200x630px)
- `logo.png` - Company logo for structured data

### 4. Shortcut Icons (public/icons/)

- `whatsapp-shortcut.png` (96x96)
- `pricing-shortcut.png` (96x96)

### 5. iOS Splash Screens (public/splash/)

Various sizes for different iPhone/iPad models

## How to Generate Icons

### Option 1: Use Online Tools

1. **Favicon Generator**: https://realfavicongenerator.net/

   - Upload the `icon.svg` file
   - Download the complete package
   - Extract to appropriate folders

2. **PWA Asset Generator**: https://www.pwabuilder.com/imageGenerator
   - Upload a 512x512 PNG version of your logo
   - Generate all required sizes

### Option 2: Use Command Line Tools

```bash
# Install sharp-cli
npm install -g sharp-cli

# Generate all sizes from SVG
sharp -i public/icon.svg -o public/icons/icon-16x16.png resize 16 16
sharp -i public/icon.svg -o public/icons/icon-32x32.png resize 32 32
sharp -i public/icon.svg -o public/icons/icon-72x72.png resize 72 72
# ... repeat for all sizes
```

### Option 3: Design Tool

Use Figma, Adobe Illustrator, or similar to create:

1. Design a 512x512px logo with the Dialogato brand
2. Export at all required sizes
3. Create social media images with brand colors

## Brand Colors Reference

- Background: `#0f172a` (slate-900)
- Primary: `#6366f1` (indigo-500)
- Secondary: `#8b5cf6` (violet-500)
- Accent: `#3b82f6` (blue-500)

## Next Steps

1. Generate all icon sizes from the SVG
2. Create social media images
3. Create iOS splash screens
4. Test PWA installation on mobile devices
5. Verify all icons display correctly
