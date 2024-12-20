# Project Structure

## Directory Layout

```
src/
├── app/                    # Next.js App Router pages
│   ├── [locale]/          # Locale-specific routes
│   │   ├── page.tsx       # Home page
│   │   ├── about/        # About page
│   │   ├── pricing/      # Pricing page
│   │   ├── contact/      # Contact page
│   │   └── login/        # Login page
│   └── resources/        # App resources and config
├── components/            # Shared React components
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx        # Page footer
├── contexts/             # React context providers
├── docs/                 # Project documentation
├── i18n/                 # Internationalization
│   ├── messages/         # Translation files
│   └── routing.ts        # i18n routing config
├── lib/                  # Library code
├── once-ui/             # UI component library
├── pages/               # Legacy pages (if any)
├── types/               # TypeScript type definitions
└── utils/               # Utility functions

```

## Key Files

- `middleware.ts`: Handles internationalization and routing
- `app/resources/config.js`: Application configuration **VERY IMPORTANT**
- `i18n/messages/en.json`: English translations
- `components/Header.tsx`: Main navigation component

## Page Structure

Each page follows a consistent structure:

```typescript
// Metadata generation
export async function generateMetadata({ params: { locale } }) {
    const t = await getTranslations();
    return {
        title: t('Page.title'),
        description: t('Page.description'),
    };
}

// Page component
export default async function Page() {
    const t = await getTranslations();
    return (
        <Flex direction="column" gap="12" alignItems="center" paddingY="24">
            {/* Page content */}
        </Flex>
    );
}
```

## Naming Conventions

- **Components**: PascalCase (e.g., `Header.tsx`)
- **Pages**: lowercase (e.g., `page.tsx`)
- **Utilities**: camelCase (e.g., `formatDate.ts`)
- **Constants**: UPPER_CASE
- **Types/Interfaces**: PascalCase with Type/Interface suffix

## Internationalization

- Translations are stored in `/i18n/messages/{locale}.json`
- Each page has its own translation namespace
- Format: `PageName.key` (e.g., `About.title`)
