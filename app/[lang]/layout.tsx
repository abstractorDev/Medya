import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { i18n, type Locale } from '@/i18n/i18nConfig';
import { getDictionary } from '@/i18n/getDictionary';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Medya',
	description: 'Medya is a flow',
};

export async function generateStaticParams() {
	return i18n.locales.map((locale) => ({ lang: locale }));
}

export default async function RootLayout({
	children,
	params,
}: Readonly<{
	children: React.ReactNode;
	params: Promise<{ lang: Locale }>;
}>) {
	const locale = await params;
	const dir = locale.lang === 'en' || 'kmr' ? 'ltr' : 'rtl';

	const { lang } = await params;
	const dictionary = await getDictionary(lang);

	return (
		<html
			lang={locale.lang}
			dir={dir}
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className='min-h-full flex flex-col'>{children}</body>
		</html>
	);
}
