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
    '/blog':    true,
    '/gallery': true,
    '/sign-up': true,
    '/sign-in': true,
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
    '/work/automate-design-handovers-with-a-figma-to-code-pipeline': true
}

const effects = {
    mask: 'cursor',             // none | cursor | topLeft | topRight | bottomLeft | bottomRight
    gradient: {
        display: false,
        opacity: 0.7            // 0 - 1
    },
    dots: {
        display: false,
        opacity: 0.5,           // 0 - 1
        size: '20'              // 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64
    },
    grid: {
        display: true,
        opacity: 1,             // 0 - 1
        width: "0.25rem",
        height: "0.25rem",
        color: "neutral-alpha-medium"
    },
    lines: {
        display: false,
    },
}

const style = {
    theme: "dark", // dark | light
    neutral: "gray", // sand | gray | slate
    brand: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent: "cyan", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid: "contrast", // color | contrast | inverse
    solidStyle: "flat", // flat | plastic
    border: "playful", // rounded | playful | conservative
    surface: "translucent", // filled | translucent
    transition: "all", // all | micro | macro
    scaling: "100", // 90 | 95 | 100 | 105 | 110
  }

const display = {
    location: true,
    time:     true
}

const mailchimp = {
    action: 'https://url/subscribe/post?parameters',
    effects: {
        mask: 'topRight',           // none | cursor | topLeft | topRight | bottomLeft | bottomRight
        gradient: {
            display: true,
            opacity: 0.6            // 0 - 1
        },
        dots: {
            display: false,
        },
        lines: {
            display: false,
        },
    }
}

export { routes, protectedRoutes, effects, style, display, mailchimp, baseURL, i18n, i18nOptions };