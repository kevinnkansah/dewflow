import { getTranslations } from 'next-intl/server';
import { Flex } from '@/once-ui/components';

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations();

    return {
        title: t('pricing.title'),
        description: t('pricing.description'),
    };
}

export default async function PricingPage() {
    const t = await getTranslations();

    return (
        <Flex>
            
        </Flex>
    );
}
