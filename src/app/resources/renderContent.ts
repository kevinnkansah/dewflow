import { ContentData } from './types';

export function renderContent(t: any): ContentData {
    return {
        home: {
            title: t('home.title'),
            description: t('home.description')
        },
        about: {
            title: t('about.title'),
            description: t('about.description')
        },
        social: t('social'),
        blog: {
            label: t('blog.label'),
            title: t('blog.title'),
            description: t('blog.description'),
            posts: t('blog.posts'),
        },
    };
}
