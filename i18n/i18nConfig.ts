export const i18n = {
	defaultLocale: 'en',
	locales: ['en', 'kmr', 'fa', 'ckb'],
	// locales: ['en', 'fa', 'kmr', 'ckb'],
} as const;

export type Locale = (typeof i18n)['locales'][number];
