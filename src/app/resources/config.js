const baseURL = 'demo.magic-portfolio.com'

// Enable localization
const i18n = false;

// Manage localized content in the messages folder
const i18nOptions = {
    locales: ['en'],            // A list of all locales that are supported, e.g. ['en','id']
    defaultLocale: 'en'         // Locale used by default and as a fallback
}

const routes = {
    '/':        true,
    '/about':   true,
    '/pricing': true,
    '/contact': true,
    '/blog':    false,
    '/gallery': true,
    '/sign-up': true,
    '/sign-in': true,
    '/work': true,
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
    '/work/automate-design-handovers-with-a-figma-to-code-pipeline': true
}

const effects = {
    mask: 'topLeft',             // none | cursor | topLeft | topRight | bottomLeft | bottomRight
    gradient: {
        display: true,
        opacity: 0.8            // 0 - 1
    },
    dots: {
        display: true,
        opacity: 1,           // 0 - 1
        size: '64'              // 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64
    },
    grid: {
      color: 'neutral-alpha-medium',
      display: true,
      height: 'var(--static-space-32)',
      opacity: 100,
      width: 'var(--static-space-32)'
    },
    lines: {
        display: false,
    },
}

const style = {
    theme: "dark", // dark | light
    neutral: "gray", // sand | gray | slate
    brand: "emerald", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent: "moss", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid: "color", // color | contrast | inverse
    solidStyle: "plastic", // flat | plastic
    border: "playful", // rounded | playful | conservative
    surface: "filled", // filled | translucent
    transition: "all", // all | micro | macro
    scaling: "90", // 90 | 95 | 100 | 105 | 110
  }

const display = {
    location: true,
    time:     true
}

const mailchimp = {
    action: 'https://url/subscribe/post?parameters',
    effects: {
        mask: 'none',           // none | cursor | topLeft | topRight | bottomLeft | bottomRight
        gradient: {
            display: true,
            opacity: 0.6            // 0 - 1
        },
        dots: {
            display: true,
        },
        lines: {
            display: true,
        },
    }
}

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL, i18n, i18nOptions };
