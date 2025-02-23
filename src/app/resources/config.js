const baseURL = 'www.dewflow.xyz'

// Enable localization
const i18n = false;

// Manage localized content in the messages folder
const i18nOptions = {
    locales: ['en'],            // A list of all locales that are supported, e.g. ['en','id']
    defaultLocale: 'en'         // Locale used by default and as a fallback
}

const routes = {
    '/':        true,
    '/about':   false,
    '/pricing': false,
    '/contact': true,
    '/blog':    true,
    '/gallery': true,
    '/sign-up': false,    
    '/sign-in': false,
}

// Enable password protection on selected routes
// Set password in pages/api/authenticate.ts
const protectedRoutes = {
    '/checkout': true
}

const effects = {
    mask: 'none',             // none | cursor | topLeft | topRight | bottomLeft | bottomRight
    gradient: {
        display: true,
        opacity: 1           // 0 - 1
    },
    dots: {
        display: true,
        opacity: 1,           // 0 - 1
        size: '128'              // 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64
    },
    grid: {
    color: 'info-alpha-weak',
    display: true,
    height: 'var(--static-space-64)',
    opacity: 100,
    width: 'var(--static-space-64)'
    },
    lines: {
        display: true,
    },
}

const style = {
    theme: "dark", // dark | light
    neutral: "gray", // sand | gray | slate
    brand: "aqua", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent: "emerald", // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid: "color", // color | contrast | inverse
    solidStyle: "plastic", // flat | plastic
    border: "playful", // rounded | playful | conservative
    surface: "filled", // filled | translucent
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
