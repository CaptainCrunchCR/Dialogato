# PWA Setup Guide - Dialogato

## Complete Progressive Web App Implementation

This project is configured as a 100% compliant PWA with iOS priority support.

---

## What's Implemented

### 1. Manifest.json (`/public/manifest.json`)

- Complete app metadata
- 8 icon sizes (72x72 to 512x512)
- Maskable icons support
- App shortcuts (WhatsApp, Pricing)
- Screenshots for app stores
- Share target API
- Standalone display mode
- Costa Rica locale (es-CR)

### 2. Service Worker (`/public/sw.js`)

- Network-first caching strategy
- Runtime cache for dynamic content
- Offline fallback support
- Background sync capability
- Push notifications support
- Automatic cache cleanup

### 3. iOS Support (Priority)

- `apple-mobile-web-app-capable`
- `apple-mobile-web-app-status-bar-style` (black-translucent)
- `apple-mobile-web-app-title`
- 5 Apple touch icon sizes (120x120 to 180x180)
- 9 iOS splash screens (iPhone 5 to iPad Pro)
- Proper viewport meta tags
- iOS-specific install instructions

### 4. Android Support

- `mobile-web-app-capable`
- Theme color meta tags
- BeforeInstallPrompt event handling
- One-click install button
- Install banner with benefits

### 5. Install Prompt Component (`/components/PWAInstall.tsx`)

- Auto-detects iOS vs Android
- Shows after 3 seconds (configurable)
- Dismissible with localStorage
- iOS step-by-step instructions
- Android one-click install
- Beautiful gradient design
- Framer Motion animations

### 6. Microsoft Support

- `browserconfig.xml`
- Tile images and colors
- Windows 10/11 support

---

## Required Assets

### Icons (Create these in `/public/icons/`)

Standard Icons:

- `icon-16x16.png`
- `icon-32x32.png`
- `icon-72x72.png`
- `icon-96x96.png`
- `icon-128x128.png`
- `icon-144x144.png`
- `icon-152x152.png`
- `icon-192x192.png`
- `icon-384x384.png`
- `icon-512x512.png`

iOS Icons:

- `icon-120x120.png` (iPhone)
- `icon-152x152.png` (iPad)
- `icon-167x167.png` (iPad Pro)
- `icon-180x180.png` (iPhone Plus)

Shortcuts:

- `whatsapp-shortcut.png` (96x96)
- `pricing-shortcut.png` (96x96)

Badge:

- `badge-72x72.png` (for notifications)

### Splash Screens (Create these in `/public/splash/`)

iOS splash screens with dark gradient background (#0f172a):

- `iphone5_splash.png` - 640x1136px
- `iphone6_splash.png` - 750x1334px
- `iphoneplus_splash.png` - 1242x2208px
- `iphonex_splash.png` - 1125x2436px
- `iphonexr_splash.png` - 828x1792px
- `iphonexsmax_splash.png` - 1242x2688px
- `ipad_splash.png` - 1536x2048px
- `ipadpro1_splash.png` - 1668x2224px
- `ipadpro2_splash.png` - 2048x2732px

### Screenshots (Create these in `/public/screenshots/`)

- `mobile-1.png` - 750x1334px (mobile view)
- `desktop-1.png` - 1920x1080px (desktop view)

### Other

- `favicon.ico` - 32x32px

---

## Icon Design Guidelines

### Colors

- Background: `#0f172a` (primary-950)
- Accent: `#22d3ee` (accent-400)
- Secondary: `#a855f7` (secondary-500)

### Logo

Use the Dialogato logo centered on the dark background with a subtle glow effect.

### Maskable Icons

Add 20% safe zone padding for maskable icons to prevent cropping on different devices.

---

## How to Test PWA

### iOS (Safari)

1. Open site in Safari on iPhone/iPad
2. Tap Share button
3. Scroll and tap "Add to Home Screen"
4. Tap "Add"
5. App icon appears on home screen
6. Open app - runs in standalone mode

### Android (Chrome)

1. Open site in Chrome on Android
2. Install banner appears automatically
3. Tap "Install" button
4. App installs like native app
5. Icon appears in app drawer
6. Open app - runs in standalone mode

### Desktop (Chrome/Edge)

1. Open site in Chrome/Edge
2. Look for install icon in address bar
3. Click install
4. App opens in standalone window

---

## PWA Checklist

### Manifest

- Valid manifest.json
- Name and short_name
- Icons (192x192 and 512x512 minimum)
- start_url
- display: standalone
- theme_color
- background_color

### Service Worker

- Registered and active
- Caching strategy implemented
- Offline support
- HTTPS (required for production)

### iOS

- Apple touch icons
- apple-mobile-web-app-capable
- apple-mobile-web-app-status-bar-style
- Splash screens
- Viewport meta tag

### Performance

- Fast loading (< 3s)
- Responsive design
- Touch-friendly (44px+ tap targets)
- Smooth animations

### SEO

- Meta description
- Open Graph tags
- Structured data
- Sitemap

---

## Testing Tools

### Lighthouse (Chrome DevTools)

```bash
1. Open Chrome DevTools (F12)
2. Go to "Lighthouse" tab
3. Select "Progressive Web App"
4. Click "Generate report"
5. Aim for 100% PWA score
```

### PWA Builder

Visit: https://www.pwabuilder.com/

- Enter your URL
- Get detailed PWA report
- Download app packages for stores

### Manifest Validator

Visit: https://manifest-validator.appspot.com/

- Paste manifest.json content
- Validate structure

---

## App Store Submission

### Google Play Store (Android)

1. Use PWA Builder to generate `.aab` file
2. Create Google Play Console account
3. Upload app bundle
4. Add screenshots and description
5. Submit for review

### Apple App Store (iOS)

1. Use PWA Builder to generate Xcode project
2. Open in Xcode
3. Configure signing
4. Add screenshots
5. Submit via App Store Connect

---

## Configuration

### Update Manifest

Edit `/public/manifest.json`:

- Change `name` and `short_name`
- Update `description`
- Modify `theme_color` if needed
- Add/remove shortcuts

### Update Service Worker

Edit `/public/sw.js`:

- Change `CACHE_NAME` version
- Modify caching strategy
- Add/remove cached assets

### Customize Install Prompt

Edit `/components/PWAInstall.tsx`:

- Change delay time (default: 3s)
- Modify text and styling
- Add/remove features

---

## Analytics

Track PWA installations:

```javascript
window.addEventListener("beforeinstallprompt", (e) => {
  gtag("event", "pwa_install_prompt_shown");
});

window.addEventListener("appinstalled", (e) => {
  gtag("event", "pwa_installed");
});
```

---

## Best Practices

1. Always use HTTPS in production
2. Test on real devices (iOS and Android)
3. Keep service worker updated (increment version)
4. Optimize icons (use PNG with transparency)
5. Test offline functionality
6. Monitor install rates
7. Update splash screens when branding changes
8. Test on different screen sizes

---

## Troubleshooting

### Service Worker not registering

- Check HTTPS (required except localhost)
- Clear browser cache
- Check console for errors
- Verify `/sw.js` is accessible

### iOS not showing "Add to Home Screen"

- Must use Safari browser
- Check apple-mobile-web-app-capable meta tag
- Verify icons are accessible
- Test on real device (not simulator)

### Install prompt not showing (Android)

- Must meet PWA criteria (Lighthouse check)
- User must visit site at least twice
- 5-minute gap between visits required
- Check beforeinstallprompt event

### Icons not displaying

- Verify file paths in manifest
- Check file sizes match manifest
- Use PNG format
- Test with different icon sizes

---

## Support

For PWA-specific issues:

- Check browser console for errors
- Use Lighthouse for diagnostics
- Test on multiple devices
- Verify all assets are accessible

---

Last Updated: January 2026  
PWA Version: 1.0  
Supported Platforms: iOS 11.3+, Android 5.0+, Desktop (Chrome/Edge)
