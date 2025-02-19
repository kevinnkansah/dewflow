"use client";

import { useParams } from "next/navigation";
import { useEffect, useState, useTransition } from "react";

import { Flex, ToggleButton, Text, Heading, Logo, SmartLink} from "@/once-ui/components"
import styles from '@/components/Header.module.scss'

import { routes, display } from '@/app/resources'

import { routing } from '@/i18n/routing';
import { Locale, usePathname, useRouter } from '@/i18n/routing';
import { useTranslations } from "next-intl";
import { i18n } from "@/app/resources/config";
import { Navigation } from './Navigation';


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
                            <SmartLink href="/">
                                <img src="/DewFlow Logo Web.png" alt="DewFlow Logo" style={{ maxHeight: "30px" }} />
                            </SmartLink>
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
                            { routes['/blog'] && (
                                <ToggleButton
                                    prefixIcon="book"
                                    href={`/${params?.locale}/blog`}
                                    selected={isActive('blog')}>
                                    <Flex paddingX="2" hide="s">Articles</Flex>
                                </ToggleButton>
                            )}
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
