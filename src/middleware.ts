import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';
import { defaultLocale, locales } from './i18n/routing';

export default async function middleware(request: NextRequest) {
    const handleI18nRouting = createMiddleware({
        locales,
        defaultLocale,
    });
    const response = handleI18nRouting(request);
    return response;
}

export const config = {
    matcher: '/((?!api|trpc|_next|_vercel|.*\\..*).*)',
};
