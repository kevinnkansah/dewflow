import { Flex, Heading } from '@/once-ui/components';
import { Posts } from '@/components/blog/Posts';
import { baseURL, renderContent } from '@/app/resources'
import { getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { useTranslations } from 'next-intl';

export async function generateMetadata(
	{params: {locale}}: { params: { locale: string }}
) {

	const t = await getTranslations();
	const { blog } = renderContent(t);

	const title = "DewFlow AI | Blog";
	const description = blog.description;
	const ogImage = `https://${baseURL}/dewflow-opengraph-image.jpg`;

	return {
		title,
		description,
		openGraph: {
			title,
			description,
			type: 'website',
			url: `https://${baseURL}/${locale}/blog`,
			images: [
				{
					url: ogImage,
					alt: title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title,
			description,
			images: [ogImage],
		},
	};
}

export default function Blog(
	{ params: {locale}}: { params: { locale: string }}
) {
	unstable_setRequestLocale(locale);

	const t = useTranslations();
	const { blog } = renderContent(t);
    return (
        <Flex
			fillWidth maxWidth="s"
			direction="column">
            <script
				type="application/ld+json"
				suppressHydrationWarning
				dangerouslySetInnerHTML={{
					__html: JSON.stringify({
						'@context': 'https://schema.org',
						'@type': 'Blog',
						headline: blog.title,
						description: blog.description,
						url: `https://${baseURL}/blog`,
						image: `${baseURL}/og?title=${encodeURIComponent(blog.title)}`,
						author: {
							'@type': 'Person',
							name: 'Anonymous',
						},
					}),
				}}
			/>
            <Heading
                marginBottom="l"
                variant="display-strong-s">
                Design & Tech: Insights & Innovation
            </Heading>
			<Flex
				fillWidth flex={1} direction="column">
				<Posts range={[1,3]} locale={locale} thumbnail/>
				<Posts range={[4]} columns="2" locale={locale}/>
			</Flex>
        </Flex>
    );
}
