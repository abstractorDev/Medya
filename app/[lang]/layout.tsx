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
	params: Promise<{ lang: string }>;
}>) {
	// const locale = await params;
	// const dir0 = locale.lang === 'en' || 'kmr' ? 'ltr' : 'rtl';

	const { lang } = await params;

	if (!i18n.locales.includes(lang as Locale)) {
		throw new Error(`Invalid locale: ${lang}`);
	}

	const dir = ['en', 'kmr'].includes(lang) ? 'ltr' : 'rtl';
	// const dictionary = await getDictionary(lang as Locale);

	// Create any shared layout or styles here
	return (
		<html
			lang={lang}
			dir={dir}
			// h-full w-full
			className={`${geistSans.variable} ${geistMono.variable} antialiased`}
		>
			{/* min-h-full */}
			<body className='flex flex-col prose prose-headings:mt-8 prose-headings:font-semibold prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg dark:prose-headings:text-white dark:prose-a:text-white max-w-none'>
				{children}
			</body>
		</html>
	);
}
