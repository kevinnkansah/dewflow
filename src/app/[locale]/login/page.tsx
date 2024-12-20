import { getTranslations } from 'next-intl/server';
import { Flex, Text } from '@/once-ui/components';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations();

    return {
        title: t('Login.title'),
        description: t('Login.description'),
    };
}

export default async function LoginPage() {
    const t = await getTranslations();

    return (
        <Flex direction="column" gap="12" alignItems="center" paddingY="24">

        </Flex>
    );
}
