import "@/styles/tailwind.css";
import "@/styles/fonts.css";
import "@/once-ui/styles/index.scss";
import "@/once-ui/tokens/index.scss";

import classNames from 'classnames';

import { Footer, Header, RouteGuard } from "@/components";
import { baseURL, effects, style } from '@/app/resources'

import { Inter, Plus_Jakarta_Sans, Source_Code_Pro } from 'next/font/google'

import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations, unstable_setRequestLocale } from 'next-intl/server';
import { dark, neobrutalism } from '@clerk/themes'
import { ClerkProvider } from '@clerk/nextjs';

import { routing } from "@/i18n/routing";
import { Background, Column, Flex, RevealFx, ToastProvider } from "@/once-ui/components";
import { SpacingToken } from "@/once-ui/types";

export async function generateMetadata(
	{ params: { locale }}: { params: { locale: string }}
) {
	const t = await getTranslations();

	return {
		metadataBase: new URL(`https://${baseURL}/${locale}`),
		title: 'DewFlow AI | Data Analytics & Modern Web Solutions',
		description: 'Leading AI automation and data analytics agency specializing in modern web development, business intelligence, and AI consulting for growing businesses.',
		openGraph: {
			title: 'Dew Flow AI',
			description: 'AI Automation & Analytics',
			url: baseURL,
			siteName: 'Dew Flow AI',
			locale: 'en_US',
			type: 'website',
			images: [
				{
					url: `https://${baseURL}/og?title=${encodeURIComponent('Dew Flow AI')}`,
					width: 1200,
					height: 630,
					alt: 'Dew Flow AI OG Image',
				},
			],
		},
			twitter: {
				card: 'summary_large_image',
				title: 'Dew Flow AI',
				description: 'AI Automation & Analytics',
				images: [`https://${baseURL}/logo.svg`],
			},
		robots: {
			index: true,
			follow: true,
			googleBot: {
				index: true,
				follow: true,
				'max-video-preview': -1,
				'max-image-preview': 'large',
				'max-snippet': -1,
			},
		},
		keywords: 'data analytics, AI automation, web development, business intelligence, AI consulting, modern websites, data visualization, SME solutions',
	}
};

const primary = Inter({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-primary',
	fallback: ['system-ui', 'arial'],
});

const secondary = Plus_Jakarta_Sans({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-secondary',
});

const code = Source_Code_Pro({
	subsets: ['latin'],
	display: 'swap',
	variable: '--font-code',
});

type FontConfig = {
	variable: string;
};

/*
	Replace with code for secondary and tertiary fonts
	from https://once-ui.com/customize
*/
const tertiary: FontConfig | undefined = undefined;

interface RootLayoutProps {
	children: React.ReactNode;
	params: {locale: string};
}

export function generateStaticParams() {
	return routing.locales.map((locale) => ({locale}));
}

export default async function RootLayout({
	children,
	params: {locale}
} : RootLayoutProps) {
	unstable_setRequestLocale(locale);
	const messages = await getMessages();
	
	return (
		<NextIntlClientProvider messages={messages}>
			<ClerkProvider
				appearance={{
					baseTheme: [dark]}}
				publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY}
				signInFallbackRedirectUrl="/"
				signUpFallbackRedirectUrl="/"
			>
				<Flex
					as="html" 
					lang="en"
					fillHeight
					background="page"
					data-neutral={style.neutral}
					data-brand={style.brand}
					data-accent={style.accent}
					data-border={style.border}
					data-theme={style.theme}
					data-solid={style.solid}
					data-solid-style={style.solidStyle}
					data-surface={style.surface}
					data-transition={style.transition}
					data-scaling={style.scaling}
					className={classNames(
						primary.variable,
						code.variable,
						secondary?.variable,
						tertiary?.variable,
					)}
				>
					<ToastProvider>
						<Column as="body" fillWidth margin="0" padding="0">
							<Background
								position="absolute"
								mask={effects.mask === 'cursor' ? {
									cursor: true,
									x: 50,
									y: 50,
									radius: 100,
								} : effects.mask === 'none' ? undefined : {
									x: effects.mask === 'topLeft' ? 0 : effects.mask === 'topRight' ? 100 : effects.mask === 'bottomLeft' ? 0 : 100,
									y: effects.mask === 'topLeft' || effects.mask === 'topRight' ? 0 : 100,
									radius: 100,
								}}
								gradient={effects.gradient.display ? {
									display: true,
									opacity: Math.round(effects.gradient.opacity * 100) as 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100,
									x: 100,
									y: 60,
									width: 70,
									height: 50,
									tilt: -40,
									colorStart: "accent-background-strong",
									colorEnd: "page-background",
								} : undefined}
								dots={effects.dots.display ? {
									display: true,
									opacity: Math.round(effects.dots.opacity * 100) as 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100,
									size: effects.dots.size as SpacingToken,
								} : undefined}
								grid={effects.grid.display ? {
									display: true,
									opacity: Math.round(effects.grid.opacity * 100) as 0 | 10 | 20 | 30 | 40 | 50 | 60 | 70 | 80 | 90 | 100,
									width: effects.grid.width,
									height: effects.grid.height,
									color: effects.grid.color,
								} : undefined}
								lines={effects.lines.display ? {
									display: true,
									opacity: 100 as const,
									size: "4" as const
								} : undefined}
							/>
							<Header />
							<Flex
								zIndex={0}
								fillWidth 
								paddingY="l" 
								paddingX="l"
								justifyContent="center" 
								flex={1}
							>
								<Flex
									justifyContent="center"
									fillWidth 
									minHeight="0"
								>
									<RouteGuard>
										<RevealFx>
											{children}
										</RevealFx>
										
									</RouteGuard>
								</Flex>
							</Flex>
							<Footer />
						</Column>
					</ToastProvider>
				</Flex>
			</ClerkProvider>
		</NextIntlClientProvider>
	);
}
