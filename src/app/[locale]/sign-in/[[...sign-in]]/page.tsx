import { getTranslations } from 'next-intl/server';
import { SignIn } from "@clerk/nextjs";
import { Flex, Text } from '@/once-ui/components';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations();
    return {
        title: t('SignIn.title'),
        description: t('SignIn.description'),
    };
}

export default async function SignInPage() {
    const t = await getTranslations();

    return (
        <Flex direction="column" gap="12" alignItems="center" paddingY="24">
            <Text as="h1" variant="display-default-l">{t('SignIn.heading')}</Text>
            <Text variant="body-default-l" color="neutral-faded">{t('SignIn.subheading')}</Text>
            <SignIn />
        </Flex>
    );
}
