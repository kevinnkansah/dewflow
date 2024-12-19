# Project Structure

## Directory Layout

```
src/
├── app/                    # Next.js App Router directory
│   ├── [locale]/          # Locale-based routing
│   │   ├── layout.tsx     # Root layout with providers
│   │   ├── page.tsx       # Home page
│   │   ├── about/         # About page
│   │   ├── pricing/       # Pricing page
│   │   ├── contact/       # Contact page
│   │   └── work/          # Work pages
│   └── resources/         # Shared resources and utilities
├── components/            # Shared React components
│   ├── Header/           # Navigation and header components
│   └── Footer/           # Footer components
├── i18n/                 # Internationalization setup
│   ├── routing.ts        # i18n routing configuration
│   └── messages/         # Translation files
├── once-ui/             # UI component library
│   ├── components/      # Base UI components
│   ├── styles/          # Global styles and themes
│   └── tokens/          # Design tokens
└── docs/               # Project documentation
```

## Key Components

### App Router (`app/`)
- Uses Next.js 13+ App Router for file-system based routing
- Each page is a Server Component by default
- Locale-based routing with `[locale]` dynamic segment
- Shared layouts with `layout.tsx`

### Components (`components/`)
- Reusable React components
- Each component has its own directory with:
  - Component file (`.tsx`)
  - Styles (`.module.scss`)
  - Tests (`.test.tsx`)
  - Type definitions (if needed)

### Internationalization (`i18n/`)
- Uses `next-intl` for translations
- Supports multiple languages
- Locale-based routing
- Message files for each supported language

### UI Library (`once-ui/`)
- Custom UI component library
- Design system implementation
- Shared styles and themes
- Design tokens for consistency

## File Naming Conventions

### Components
- PascalCase for component files: `Header.tsx`
- Kebab-case for styles: `header.module.scss`
- Same name for tests: `Header.test.tsx`

### Pages
- Use `page.tsx` for page components
- Use `layout.tsx` for layout components
- Use `loading.tsx` for loading states
- Use `error.tsx` for error boundaries

### Utilities
- Camel case for utility files: `formatDate.ts`
- Type definitions in separate files: `types.ts`

## Best Practices

1. **Component Organization**
   - Keep components small and focused
   - Use composition over inheritance
   - Separate business logic from UI components

2. **Page Structure**
   - Use Server Components by default
   - Client Components when needed (use "use client" directive)
   - Keep pages thin, move logic to components

3. **Styling**
   - Use CSS Modules for component-specific styles
   - Follow BEM naming convention
   - Use design tokens from once-ui

4. **Type Safety**
   - Use TypeScript for all new code
   - Define interfaces for component props
   - Use strict type checking
