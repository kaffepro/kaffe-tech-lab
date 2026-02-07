export const locales = ['en', 'zh-HK'] as const;
export const defaultLocale = 'en' as const;

export type Locale = (typeof locales)[number];
