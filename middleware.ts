import { authMiddleware } from "@clerk/nextjs";
import createMiddleware from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
    locales: ['en', 'de'],
    defaultLocale: 'en'
});

export default authMiddleware({
    beforeAuth: (req) => {
        return intlMiddleware(req);
    },

    // Public routes that don't require authentication
    publicRoutes: [
        '/',
        '/about',
        '/pricing',
        '/contact',
        '/sign-up(.*)',
        '/sign-in(.*)',
        '/:locale',
        '/:locale/about',
        '/:locale/pricing',
        '/:locale/contact',
        '/:locale/sign-up(.*)',
        '/:locale/sign-in(.*)',
    ],
});

export const config = {
    matcher: ['/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'],
};