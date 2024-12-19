import { getTranslations } from 'next-intl/server';
import { Flex, Button, Input } from '@/once-ui/components';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations();

    return {
        title: t('signin.title'),
        description: t('signin.description'),
    };
}

export default async function SignInPage() {
    const t = await getTranslations();

    return (
        <Flex direction="column" gap="12" alignItems="center" paddingY="24">
            
        </Flex>
    );
}
