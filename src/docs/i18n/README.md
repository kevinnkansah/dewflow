# Internationalization (i18n)

## Overview

The application uses `next-intl` for internationalization, supporting multiple languages with a locale-based routing system.

## Configuration

### Middleware

```typescript
// middleware.ts
import { createMiddleware } from 'next-intl/middleware';

const intlMiddleware = createMiddleware({
  locales: ['en', 'de'],
  defaultLocale: 'en'
});
```

### Translation Structure

Translations are organized by page and feature in `/i18n/messages/{locale}.json`:

```json
{
  "Index": {
    "title": "Home",
    "description": "Welcome to our application"
  },
  "About": {
    "title": "About Us",
    "description": "Learn more about our company"
  },
  "Pricing": {
    "title": "Pricing",
    "description": "View our pricing plans"
  },
  "Contact": {
    "title": "Contact Us",
    "description": "Get in touch with us"
  },
  "Login": {
    "title": "Login",
    "description": "Sign in to your account"
  }
}
```

## Usage in Pages

### Metadata Generation

```typescript
export async function generateMetadata({ params: { locale } }) {
    const t = await getTranslations();
    return {
        title: t('PageName.title'),
        description: t('PageName.description'),
    };
}
```

### Page Content

```typescript
export default async function Page() {
    const t = await getTranslations();
    return (
        <Flex>
            <Text>{t('PageName.heading')}</Text>
        </Flex>
    );
}
```

## Adding New Languages

1. Create a new translation file in `/i18n/messages/{locale}.json`
2. Add the locale to the middleware configuration
3. Update any locale-specific components or content

## URL Structure

- Each page is accessed through its locale: `/{locale}/page`
- Default locale can be accessed without prefix: `/page`
- Supported URLs:
  - `/en/about`
  - `/de/about`
  - `/about` (redirects to default locale)

## Best Practices

1. **Translation Keys**
   - Use PascalCase for page names
   - Use camelCase for keys
   - Group related translations

2. **Content Management**
   - Keep translations organized by feature
   - Use variables for dynamic content
   - Maintain consistent key naming

3. **Performance**
   - Messages are loaded on-demand
   - Use static rendering where possible
   - Cache translations appropriately

4. **Maintenance**
   - Keep translation files in sync
   - Document new translation keys
   - Review unused translations
