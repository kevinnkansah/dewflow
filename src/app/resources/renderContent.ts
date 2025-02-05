import { ContentData } from './types';

export function renderContent(t: any): ContentData {
    return {
        gallery: {
            label: t('gallery.label'),
            title: t('gallery.title'),
            description: t('gallery.description'),
            images: t('gallery.images', [], { returnObjects: true })
        },
        person: {
            name: t('person.name'),
            firstName: t('person.firstName'),
            avatar: t('person.avatar'),
            role: t('person.role'),
            location: t('person.location')
        },
        home: {
            title: t('home.title'),
            description: t('home.description')
        },
        about: {
            title: t('about.title'),
            description: t('about.description')
        },
        social: t('social', [], { returnObjects: true }),
        blog: {
            title: t('blog.title'),
            description: t('blog.description')
        },
        work: {
            title: t('work.title'),
            description: t('work.description')
        },

    };
}
