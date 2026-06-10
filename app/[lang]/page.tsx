import { getDictionary } from '@/i18n/getDictionary';
import { Locale } from '@/i18n/i18nConfig';
import Image from 'next/image';
import AppList from '@/public/AppList.mdx';

export default async function Home({
	params,
}: {
	params: Promise<{ lang: Locale }>;
}) {
	const { lang } = await params;

	const dictionary = await getDictionary(lang);

	return (
		<>
			<main className='container mx-auto mt-10 w-[90%] lg:w-9/10'>
				<AppList />
			</main>
		</>
	);
}
