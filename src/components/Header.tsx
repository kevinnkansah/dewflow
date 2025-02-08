"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

import { Flex, ToggleButton, Text, Heading, Logo} from "@/once-ui/components"
import styles from '@/components/Header.module.scss'

import { routes, display } from '@/app/resources'

import { routing } from '@/i18n/routing';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { useTranslations } from "next-intl";
import { i18n } from "@/app/resources/config";
import { Navigation } from './Navigation';

type TimeDisplayProps = {
    timeZone: string;
    locale?: string;  // Optionally allow locale, defaulting to 'en-GB'
};

const TimeDisplay: React.FC<TimeDisplayProps> = ({ timeZone, locale = 'en-GB' }) => {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        const updateTime = () => {
            const now = new Date();
            const options: Intl.DateTimeFormatOptions = {
                timeZone,
                hour: '2-digit',
                minute: '2-digit',
                hour12: false
            };

            setCurrentTime(new Intl.DateTimeFormat(locale, options).format(now));
        };

        // Update immediately and then every minute
        updateTime();
        const interval = setInterval(updateTime, 60000);

        return () => clearInterval(interval);
    }, [timeZone, locale]);

    return <span>{currentTime}</span>;
};

export default TimeDisplay;

export const Header = () => {
    const router = useRouter();
    const [isPending, startTransition] = useTransition();
    const pathname = usePathname() ?? '';
    const params = useParams();

    function handleLanguageChange(locale: string) {
        const nextLocale = locale as Locale;
        startTransition(() => {
            router.replace(
                pathname,
                {locale: nextLocale}
            )
        })
    }

    const t = useTranslations();

    const isActive = (path: string) => {
        const currentPath = pathname.split('/').pop() || '';
        return currentPath === path;
    };

    return (
        <>
            <Flex
                className={styles.mask}
                position="fixed" zIndex={10}
                fillWidth minHeight="80" justifyContent="center">
            </Flex>
            <Flex style={{height: 'fit-content'}}
                className={styles.position}
                as="header"
                zIndex={10}
                fillWidth padding="8"
                justifyContent="center">
                <Flex
                    paddingLeft="12" fillWidth
                    alignItems="center"
                    textVariant="body-default-s">
                    { display.location && (
                        <Flex hide="s">
                            <img src="/DewFlow.png" alt="DewFlow Logo" style={{ maxHeight: "40px" }} />
                        </Flex>
                    )}
                </Flex>
                <Flex fillWidth justifyContent="center">
                    <Flex
                        background="surface" border="neutral-medium" borderStyle="solid" radius="m-4" shadow="l"
                        padding="8"
                        justifyContent="center">
                        <Flex
                            gap="12"
                            textVariant="body-default-s">
                            <ToggleButton
                                prefixIcon="home"
                                href={`/${params?.locale}`}
                                selected={isActive('')}>
                                <Flex paddingX="2" hide="s">Home</Flex>
                            </ToggleButton>
                            { routes['/pricing'] && (
                                <ToggleButton
                                    prefixIcon="grid"
                                    href={`/${params?.locale}/pricing`}
                                    selected={isActive('pricing')}>
                                    <Flex paddingX="2" hide="s">Pricing</Flex>
                                </ToggleButton>
                            )}
                            { routes['/about'] && (
                                <ToggleButton
                                    prefixIcon="about"
                                    href={`/${params?.locale}/about`}
                                    selected={isActive('about')}>
                                    <Flex paddingX="2" hide="s">About</Flex>
                                </ToggleButton>
                            )}
                            <ToggleButton
                                prefixIcon="contact"
                                href={`/${params?.locale}/contact`}
                                selected={isActive('contact')}>
                                <Flex paddingX="2" hide="s">Contact</Flex>
                            </ToggleButton>
                            <Navigation />
                        </Flex>
                    </Flex>
                </Flex>
                <Flex fillWidth justifyContent="flex-end" alignItems="center">
                    <Flex
                        paddingRight="12"
                        justifyContent="flex-end" alignItems="center"
                        textVariant="body-default-s"
                        gap="20">
                        {routing.locales.length > 1 &&
                            <Flex
                                background="surface" border="neutral-medium" borderStyle="solid" radius="m-4" shadow="l"
                                padding="4" gap="2"
                                justifyContent="center">
                                {i18n && routing.locales.map((locale, index) => (
                                    <ToggleButton
                                        key={index}
                                        selected={params?.locale === locale}
                                        onClick={() => handleLanguageChange(locale)}
                                        className={isPending && 'pointer-events-none opacity-60' || ''}
                                        >
                                        {locale.toUpperCase()}
                                    </ToggleButton>
                                ))}
                            </Flex>
                        }
                    </Flex>
                </Flex>
            </Flex>
        </>
    )
}
