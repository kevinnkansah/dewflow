# Internationalization Guide

This guide covers how to work with translations in the application.

## Translation Structure

Translations are stored in JSON files under the `messages` directory:
```
messages/
├── en.json
└── id.json
```

## Using Translations

### 1. Direct Translation Access

```typescript
// Server Components
import { getTranslations } from 'next-intl/server';

export default async function Page() {
    const t = await getTranslations();
    return <h1>{t('page.title')}</h1>;
}

// Client Components
'use client';
import { useTranslations } from 'next-intl';

export default function Component() {
    const t = useTranslations();
    return <button>{t('button.label')}</button>;
}
```

### 2. Page Metadata

Always use direct translation calls for metadata:

```typescript
export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
    const t = await getTranslations();
    
    return {
        title: t('page.title'),
        description: t('page.description'),
    };
}
```

### 3. Array Translations

When working with arrays in translations:

```typescript
// Translation file (en.json)
{
    "features": ["Feature 1", "Feature 2", "Feature 3"]
}

// Component
const features = t('features', [], { returnObjects: true });
features.map((feature: string) => <li>{feature}</li>);
```

### 4. Nested Objects

For nested translation objects:

```typescript
// Translation file (en.json)
{
    "pricing": {
        "plans": {
            "basic": {
                "name": "Basic",
                "features": ["Feature 1", "Feature 2"]
            }
        }
    }
}

// Component
const planName = t('pricing.plans.basic.name');
const features = t('pricing.plans.basic.features', [], { returnObjects: true });
```

## Best Practices

1. **Direct Translation Access**
   - Use direct translation calls with `t()` function
   - Avoid intermediate objects or helpers
   - Keep translation keys clear and hierarchical

2. **Type Safety**
   - Use `returnObjects: true` for array translations
   - Add type annotations for mapped arrays
   - Handle potential undefined values

3. **Organization**
   - Group translations by feature or page
   - Use consistent naming conventions
   - Keep nesting depth reasonable

4. **Dynamic Content**
   - Use placeholders for dynamic content: `{variable}`
   - Provide all required variables
   - Handle fallback cases

## Route Management

### 1. Route Configuration

Routes should be defined in the configuration:

```typescript
// config.js
export const routes = {
    '/': true,
    '/about': true,
    '/pricing': true,
    '/contact': true,
    '/signin': true,
};
```

### 2. Navigation Components

When using routes in navigation:

```typescript
import { routes } from '@/app/resources/config';

// Conditional rendering based on route config
{ routes['/about'] && (
    <Link href={`/${locale}/about`}>About</Link>
)}

// Always render new routes
<Link href={`/${locale}/pricing`}>Pricing</Link>
```

### 3. Page Structure

Keep pages minimal until ready for implementation:

```typescript
export default async function Page() {
    const t = await getTranslations();
    
    return (
        <Flex>
            <h1>{t('page.title')}</h1>
        </Flex>
    );
}
```

## Common Issues

1. **Translation Access**
   - Error: `Cannot read properties of undefined (reading 'title')`
   - Solution: Use direct translation calls instead of intermediate objects

2. **Array Handling**
   - Error: `t(...).map is not a function`
   - Solution: Add `{ returnObjects: true }` for array translations

3. **Route Management**
   - Issue: Routes not showing in navigation
   - Solution: Add new routes to config or remove route check for new pages
