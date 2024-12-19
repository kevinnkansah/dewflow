import { getTranslations } from 'next-intl/server';
import { Flex } from '@/once-ui/components';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations();

    return {
        title: t('contact.title'),
        description: t('contact.description'),
    };
}

export default async function ContactPage() {
    const t = await getTranslations();

    return (
        <Flex direction="column" gap="12" alignItems="center" paddingY="24">
            <h1>{t('contact.title')}</h1>
        </Flex>
    );
}
