import { getTranslations } from 'next-intl/server';
import { SignUp } from "@clerk/nextjs";
import { Flex, Text } from '@/once-ui/components';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations();
    return {
        title: t('SignUp.title'),
        description: t('SignUp.description'),
    };
}

export default async function SignUpPage() {
    const t = await getTranslations();

    return (
        <Flex direction="column" gap="12" alignItems="center" paddingY="24">
            <Text as="h1" variant="display-default-l">{t('SignUp.heading')}</Text>
            <Text variant="body-default-l" color="neutral-faded">{t('SignUp.subheading')}</Text>
            <SignUp />
        </Flex>
    );
}
