export interface GalleryImage {
    src: string;
    alt: string;
    orientation: 'horizontal' | 'vertical';
}

export interface Gallery {
    label: string;
    title: string;
    description: string;
    images: GalleryImage[];
}

export interface Person {
    name: string;
    firstName: string;
    avatar: string;
    role: string;
    location: string;
}

export interface Home {
    title: string;
    description: string;
    // Add other home-specific properties as needed
}

export interface About {
    title: string;
    description: string;
    // Add other about-specific properties as needed
}

export interface SocialItem {
    name: string;
    link?: string;
    icon: string;
}

export interface Blog {
    title: string;
    description: string;
    // Add other blog-specific properties as needed
}

export interface Work {
    title: string;
    description: string;
}

export interface Newsletter {
    display: boolean;
    title: string | JSX.Element;
    description: string | JSX.Element;
}

export type ContentData = {
    home: {
        title: string;
        description: string;
    };
    about: {
        title: string;
        description: string;
    };
    social: any;
    blog: {
        label: string;
        title: string;
        description: string;
        posts: string;
    };
};
