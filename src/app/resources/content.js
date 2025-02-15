import { InlineCode } from "@/once-ui/components";

const person = {
    firstName: 'Dew',
    lastName:  'Flow AI',
    get name() {
        return `${this.firstName} ${this.lastName}`;
    },
    role:      'AI Consulting',
    location:  'Africa/Johannesburg',
    languages: ['English']
}

const newsletter = {
    display: true,
    title: <>Subscribe to {person.firstName}'s Newsletter</>,
    description: <>I occasionally write about design, technology, and share thoughts on the intersection of creativity and engineering.</>
}

const social = [
    {
        name: 'LinkedIn',
        icon: 'linkedin',
        link: 'https://www.linkedin.com/company/dewflow',
    },
    {
        name: 'Email',
        icon: 'email',
        link: 'mailto:contact@dewflow.xyz',
    },
]

const home = {
    label: 'Home',
    title: `${person.name}`,
    description: `AI Automation & Analytics`,
    headline: <>Design engineer and builder</>,
    subline: <>At DewFlow AI, we blend innovative design and engineering to create intuitive<br/> user experiences that empower your business growth.</>,
    hero: {
        title: 'Affordable Analytics for South African SMEs',
        description: 'Make data-driven decisions without the enterprise price tag. Built for SMEs like yours.',
        getStarted: 'Get Started Free',
        bookDemo: 'Book a Demo'
    },
}

const about = {
    label: 'About',
    title: 'About me',
    description: `Meet ${person.name}, ${person.role} from ${person.location}`,
    tableOfContent: {
        display: true,
        subItems: true
    },
    avatar: {
        display: true
    },
    calendar: {
        display: true,
        link: 'https://cal.com'
    },
    intro: {
        display: true,
        title: 'Introduction',
        description: <>DewFlow AI is a pioneering technology company dedicated to transforming complex challenges into elegant, intuitive digital solutions. Our work spans innovative interfaces, interactive experiences, and the seamless integration of design and technology.</>
    }
}

const blog = {
    label: 'Blog',
    title: 'Writing about design and tech...',
    description: `Read what ${person.name} has been up to recently`
}

const work = {
    label: 'Work',
    title: 'My projects',
    description: `Design and dev projects by ${person.name}`
}

const gallery = {
    label: 'Gallery',
    title: 'My photo gallery',
    description: `A photo collection by ${person.name}`
}

export { person, social, newsletter, home, about, blog, work, gallery };
