import { defineRouting } from 'next-intl/routing';

export const locales = ['uz', 'ru', 'uzc'];
export const defaultLocale = 'uz';

export const routing = defineRouting({
    locales,
    defaultLocale,
});
