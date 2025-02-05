import { InlineCode } from "@/once-ui/components";

const createI18nContent = (t) => {
    
    const social = [
        {
            name: 'GitHub',
            icon: 'github',
            link: 'https://github.com/once-ui-system/nextjs-starter',
        },
        {
            name: 'LinkedIn',
            icon: 'linkedin',
            link: 'https://www.linkedin.com/company/once-ui/',
        },
        {
            name: 'X',
            icon: 'x',
            link: '',
        },
        {
            name: 'Email',
            icon: 'email',
            link: 'mailto:example@gmail.com',
        },
    ]

    const home = {
        label: t("home.label"),
        title: t("home.title"),
        description: t("home.description"),
        hero: {
            title: t("home.headline"),
            description: t("home.subline"),
            getStarted: t("home.getStarted"),
            bookDemo: t("home.bookDemo")
        },
        benefits: {
            title: t("home.benefitsTitle"),
            salesForecasting: {
                title: t("home.benefits.salesForecasting.title"),
                description: t("home.benefits.salesForecasting.description")
            },
            customerInsights: {
                title: t("home.benefits.customerInsights.title"),
                description: t("home.benefits.customerInsights.description")
            },
            financialTracking: {
                title: t("home.benefits.financialTracking.title"),
                description: t("home.benefits.financialTracking.description")
            }
        },
        testimonials: {
            title: t("home.testimonial.title"),
            quote: t("home.testimonial.quote"),
            author: t("home.testimonial.author"),
            role: t("home.testimonial.role")
        },
        cta: {
            title: t("home.cta.title"),
            description: t("home.cta.description")
        }
    }

    const about = {
        label: t("about.label"),
        title: t("about.title"),
        description: t("about.description"),
        intro: {
            title: t("about.intro.title"),
            description: <>{t("about.intro.description")}</>
        }
    }

    const blog = {
        label: t("blog.label"),
        title: t("blog.title"),
        description: t("blog.description")
    }

    return {
        social,
        home,
        about,
        blog,
    }
}

export { createI18nContent };
