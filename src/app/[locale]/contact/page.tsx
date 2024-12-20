import { getTranslations } from 'next-intl/server';
import { Flex, Text } from '@/once-ui/components';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations();

    return {
        title: t('Contact.title'),
        description: t('Contact.description'),
    };
}

export default async function ContactPage() {
    const t = await getTranslations();

    return (
        <Flex direction="column" gap="12" alignItems="center" paddingY="24">

        </Flex>
    );
}
