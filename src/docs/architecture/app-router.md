# App Router Architecture

This document details the architecture and patterns used with Next.js App Router in our application.

## Directory Structure

```
src/app/
├── [locale]/              # Locale-based routing
│   ├── layout.tsx        # Root layout
│   ├── page.tsx          # Home page
│   ├── about/           # About section
│   │   └── page.tsx
│   ├── pricing/         # Pricing section
│   │   └── page.tsx
│   ├── contact/         # Contact section
│   │   └── page.tsx
│   └── work/            # Work section
│       ├── page.tsx     # Work listing
│       └── [slug]/      # Individual work
│           └── page.tsx
└── resources/          # Shared resources
```

## Key Concepts

### 1. Server Components
```tsx
// Default server component
export default async function Page() {
    const data = await fetchData();
    return <div>{data}</div>;
}

// Force client component
'use client';
export default function ClientPage() {
    const [state, setState] = useState();
    return <div>{state}</div>;
}
```

### 2. Layouts
```tsx
// app/[locale]/layout.tsx
export default function RootLayout({
    children,
    params: { locale }
}: {
    children: React.ReactNode;
    params: { locale: string };
}) {
    return (
        <html lang={locale}>
            <body>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
```

### 3. Route Groups
```
app/
├── (marketing)/        # Marketing pages
│   ├── about/
│   └── contact/
└── (auth)/            # Auth pages
    ├── login/
    └── register/
```

### 4. Dynamic Routes
```tsx
// app/[locale]/work/[slug]/page.tsx
export default async function WorkPage({
    params: { slug }
}: {
    params: { slug: string }
}) {
    const work = await getWorkBySlug(slug);
    return <WorkDetail work={work} />;
}
```

## Data Fetching

### 1. Server-Side Data Fetching
```tsx
// Direct fetch in Server Components
async function getData() {
    const res = await fetch('https://api.example.com/data');
    return res.json();
}

export default async function Page() {
    const data = await getData();
    return <div>{data.title}</div>;
}
```

### 2. Static Data Generation
```tsx
// Generate static params
export async function generateStaticParams() {
    const works = await getWorks();
    return works.map((work) => ({
        slug: work.slug,
    }));
}
```

### 3. Revalidation
```tsx
// Revalidate data every hour
fetch('https://api.example.com/data', {
    next: { revalidate: 3600 }
});
```

## Internationalization

### 1. Route Setup
```tsx
// middleware.ts
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from '@/i18n/config';

export default createMiddleware({
    locales,
    defaultLocale,
});
```

### 2. Translation Usage
```tsx
// Server Component
const t = await getTranslations();
return <h1>{t('page.title')}</h1>;

// Client Component
const t = useTranslations();
return <button>{t('button.submit')}</button>;
```

## Error Handling

### 1. Error Boundaries
```tsx
// app/[locale]/error.tsx
'use client';

export default function Error({
    error,
    reset,
}: {
    error: Error;
    reset: () => void;
}) {
    return (
        <div>
            <h2>Something went wrong!</h2>
            <button onClick={reset}>Try again</button>
        </div>
    );
}
```

### 2. Loading States
```tsx
// app/[locale]/loading.tsx
export default function Loading() {
    return <div>Loading...</div>;
}
```

### 3. Not Found
```tsx
// app/[locale]/not-found.tsx
export default function NotFound() {
    return <div>Page not found</div>;
}
```

## Metadata

### 1. Static Metadata
```tsx
export const metadata = {
    title: 'Page Title',
    description: 'Page description',
};
```

### 2. Dynamic Metadata
```tsx
export async function generateMetadata({
    params
}: {
    params: { slug: string }
}) {
    const product = await getProduct(params.slug);
    
    return {
        title: product.title,
        description: product.description,
    };
}
```

## Performance Optimization

### 1. Component Loading
```tsx
// Lazy load heavy components
const HeavyComponent = dynamic(() =>
    import('@/components/HeavyComponent')
);
```

### 2. Image Optimization
```tsx
import Image from 'next/image';

<Image
    src={src}
    alt={alt}
    width={width}
    height={height}
    loading="lazy"
    sizes="(max-width: 768px) 100vw,
           (max-width: 1200px) 50vw,
           33vw"
/>
```

### 3. Font Optimization
```tsx
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});
```

## State Management

### 1. Server State
```tsx
// Use React Cache
import { cache } from 'react';

const getUser = cache(async (id: string) => {
    const user = await db.user.findUnique({ id });
    return user;
});
```

### 2. Client State
```tsx
'use client';

import { useState } from 'react';

export function Counter() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => setCount(c => c + 1)}>
            Count: {count}
        </button>
    );
}
```

## Best Practices

1. **Component Organization**
   - Keep pages thin
   - Move logic to components
   - Use Server Components by default
   - Client Components only when needed

2. **Data Fetching**
   - Fetch as close to data usage as possible
   - Use proper caching strategies
   - Implement revalidation where needed
   - Handle loading and error states

3. **Performance**
   - Optimize images and fonts
   - Use proper caching
   - Implement streaming where beneficial
   - Monitor and optimize bundle size

4. **Security**
   - Validate user input
   - Implement proper authentication
   - Use security headers
   - Follow OWASP guidelines

5. **SEO**
   - Implement proper metadata
   - Use semantic HTML
   - Add structured data
   - Monitor performance metrics
