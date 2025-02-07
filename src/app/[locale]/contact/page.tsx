// @ts-nocheck
"use client";
import { getTranslations, setRequestLocale } from 'next-intl/server';
import Cal, { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';
import { Flex, Heading, Text } from '@/once-ui/components';

export default function ContactPage() {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi({ namespace: '15min' });
            cal('ui', {
                cssVarsPerTheme: {
                    light: { 'cal-brand': '#6eccac' },
                    dark: { 'cal-brand': '#6eccac' },
                },
                hideEventTypeDetails: false,
                layout: 'month_view',
            });
        })();
    }, []);

    return (
        <Flex direction="column" gap="12" alignItems="center" paddingY="24" maxWidth="l">
            <Heading variant="display-medium-m" align="center" paddingY="8">
                Book a Call
            </Heading>
            <Text variant="body-default-l" align="center" paddingY="4">
                Schedule a meeting with us using the calendar below.
            </Text>
            <Cal
                namespace="15min"
                calLink="kevinnkansah/15min"
                style={{ width: '100%', height: '100%', overflow: 'scroll' }}
                config={{ layout: 'week_view' }}
            />
        </Flex>
    );
}
