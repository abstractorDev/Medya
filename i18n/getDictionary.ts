import 'server-only';
import type { Locale } from './i18nConfig';

const dictionaries = {
	en: () => import('../dictionary/en.json').then((module) => module.default),
	fa: () => import('../dictionary/fa.json').then((module) => module.default),
	ckb: () => import('../dictionary/ckb.json').then((module) => module.default),
	kmr: () => import('../dictionary/kmr.json').then((module) => module.default),
} as const;

export const getDictionary = async (locale: Locale) =>
	dictionaries[locale]?.() ?? dictionaries.en();
