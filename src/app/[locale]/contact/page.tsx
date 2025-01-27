import { getTranslations, setRequestLocale } from 'next-intl/server';
import { Flex, Text } from '@/once-ui/components';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    setRequestLocale(locale);
    const t = await getTranslations();

    return {
        title: t('contact.title'),
        description: t('contact.description'),
    };
}

export default async function ContactPage() {
    setRequestLocale('en'); // Replace 'en' with the appropriate locale
    const t = await getTranslations();

    return (
        <Flex direction="column" gap="12" alignItems="center" paddingY="24">

        </Flex>
    );
}
