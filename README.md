# Dialogato Landing Page

A modern, responsive landing page for Dialogato - a complete solution for automated customer communication on WhatsApp and other messaging platforms. Built with Next.js, React, TypeScript, and TailwindCSS.

## Features

- **Modern Design**: Clean, professional UI with smooth animations
- **Fully Responsive**: Optimized for all device sizes
- **Internationalization (i18n)**: Full support for English and Spanish with automatic locale detection
- **TypeScript**: Type-safe code for better development experience
- **TailwindCSS**: Utility-first CSS for rapid styling
- **Component-Based**: Modular architecture for easy maintenance

## Tech Stack

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Icons**: Lucide React
- **Font**: Inter (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone <repository-url>
cd AutomatedSolutions
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

```
AutomatedSolutions/
├── app/
│   ├── layout.tsx          # Root layout with LanguageProvider
│   ├── page.tsx            # Home page
│   └── globals.css         # Global styles
├── components/
│   ├── Navbar.tsx          # Navigation bar with language switcher
│   ├── Hero.tsx            # Hero section
│   ├── Features.tsx        # Features showcase
│   ├── Platforms.tsx       # Platform integrations
│   ├── Benefits.tsx        # Business benefits
│   ├── Analytics.tsx       # Analytics features
│   ├── CTA.tsx             # Call-to-action form
│   ├── Footer.tsx          # Footer
│   └── LanguageSwitcher.tsx # Language toggle component
├── contexts/
│   └── LanguageContext.tsx # i18n context and hooks
├── lib/
│   └── i18n.ts             # i18n utilities
├── locales/
│   ├── en.properties       # English translations
│   └── es.properties       # Spanish translations
├── public/                 # Static assets
├── tailwind.config.ts      # Tailwind configuration
├── tsconfig.json           # TypeScript configuration
└── package.json            # Dependencies
```

## Sections

1. **Hero**: Compelling headline with key statistics
2. **Features**: Six core features of the automation system
3. **Platforms**: Multi-channel support (WhatsApp, Telegram, Messenger, SMS)
4. **Benefits**: Business impact and ROI metrics
5. **Analytics**: Data-driven insights dashboard preview
6. **CTA**: Lead capture form with free trial offer
7. **Footer**: Company info and links

## Internationalization (i18n)

The application supports English and Spanish with automatic locale detection based on user's browser settings.

### Language Detection

- Automatically detects user's browser language on first visit
- Defaults to English if language is not Spanish
- User preference is saved in localStorage

### Language Switcher

Click the globe icon in the navigation bar to toggle between English (EN) and Spanish (ES).

### Adding Translations

1. Edit translation files in `/locales/`:

   - `en.properties` for English
   - `es.properties` for Spanish

2. Use the translation key in components:

```typescript
const { t } = useLanguage()
<h1>{t('your.translation.key')}</h1>
```

3. Format: `key=value` (one per line)
4. Comments start with `#`
5. Use `{variable}` for dynamic values

### Adding New Languages

1. Create a new `.properties` file (e.g., `fr.properties`)
2. Update `Locale` type in `lib/i18n.ts`
3. Update `detectLocale()` function to include new language
4. Add language option to `LanguageSwitcher.tsx`

## Customization

### Colors

Edit the color scheme in `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    // Your custom colors
  }
}
```

### Content

Update translations in `/locales/en.properties` and `/locales/es.properties`.

### Styling

Modify global styles in `app/globals.css` or use Tailwind utility classes.

## Build for Production

```bash
npm run build
npm start
```

## Deployment

This Next.js app can be deployed to:

- Vercel (recommended)
- Netlify
- AWS Amplify
- Any Node.js hosting platform

## License

MIT License - feel free to use this for your projects!

## Support

For questions or issues, please open an issue in the repository.
