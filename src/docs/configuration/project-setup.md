# Project Configuration

This document outlines the core configuration and setup of the project.

## Next.js Configuration (`next.config.mjs`)

```javascript
import mdx from '@next/mdx';
import createNextIntlPlugin from 'next-intl/plugin';

const withMDX = mdx({
    extension: /\.mdx?$/,
    options: { },
});

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
    pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
};

export default withNextIntl(withMDX(nextConfig));
```

Key features:
- MDX support for content pages
- Internationalization with next-intl
- TypeScript and MDX file support

## TypeScript Configuration (`tsconfig.json`)

```json
{
    "compilerOptions": {
        "typeRoots": ["./types", "./node_modules/@types"],
        "lib": ["dom", "dom.iterable", "esnext"],
        "paths": {
            "@/*": ["./src/*"]
        }
        // ... other options
    }
}
```

Key features:
- Path aliases for clean imports
- Strict type checking
- Modern JavaScript features support
- Next.js type system integration

## Project Structure

```
project-root/
├── src/
│   ├── app/                 # Next.js App Router pages
│   ├── components/          # Shared React components
│   ├── once-ui/            # UI component library
│   ├── i18n/               # Internationalization setup
│   └── docs/               # Project documentation
├── public/                 # Static assets
├── messages/               # Translation files
├── next.config.mjs        # Next.js configuration
└── tsconfig.json          # TypeScript configuration
```

### Key Directories

1. **src/app/**
   - Uses Next.js 13+ App Router
   - Route groups for organization
   - Server components by default
   - Layout system for shared UI

2. **src/components/**
   - Shared React components
   - Component-specific styles
   - Unit tests
   - Type definitions

3. **public/**
   - Static assets (images, fonts, etc.)
   - Directly served at root path
   - Public resources and favicons

4. **messages/**
   - Translation files by locale
   - JSON format
   - Structured content
   - Dynamic content support

## Path Aliases

The project uses TypeScript path aliases for cleaner imports:

```typescript
// Instead of
import { Button } from '../../../once-ui/components/Button';

// Use
import { Button } from '@/once-ui/components';
```

Available aliases:
- `@/components/*` → `src/components/*`
- `@/once-ui/*` → `src/once-ui/*`
- `@/app/*` → `src/app/*`
- `@/i18n/*` → `src/i18n/*`

## Build and Development

### Development Mode
```bash
npm run dev
# or
yarn dev
```

Features:
- Hot module replacement
- Fast refresh
- Development error overlay
- Type checking

### Production Build
```bash
npm run build
# or
yarn build
```

Optimizations:
- Code splitting
- Image optimization
- CSS minification
- Static generation where possible

## Environment Variables

Create `.env.local` for local development:

```env
NEXT_PUBLIC_API_URL=http://localhost:3000
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

Environment files:
- `.env.local` - Local overrides (git-ignored)
- `.env.development` - Development defaults
- `.env.production` - Production defaults

## Type System

### Custom Type Declarations

```typescript
// types/index.d.ts
declare module '*.module.scss' {
    const classes: { [key: string]: string };
    export default classes;
}
```

### Component Props

```typescript
// components/Button/types.ts
export interface ButtonProps {
    variant: 'primary' | 'secondary';
    size?: 'small' | 'medium' | 'large';
    children: React.ReactNode;
    onClick?: () => void;
}
```

## Internationalization

### Setup
- Uses `next-intl` for translations
- Dynamic route handling
- Message formatting

### Usage
```typescript
// Server Components
const t = await getTranslations();

// Client Components
const t = useTranslations();
```

## Asset Handling

### Images
- Use Next.js Image component
- Automatic optimization
- Lazy loading
- Responsive sizes

```typescript
import Image from 'next/image';

<Image
    src="/path/to/image.jpg"
    alt="Description"
    width={800}
    height={600}
    priority={false}
/>
```

### Fonts
- Google Fonts integration
- Local font optimization
- Variable fonts support

```typescript
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin'],
    display: 'swap',
});
```

## Best Practices

1. **Code Organization**
   - Group by feature when possible
   - Keep components focused
   - Use TypeScript strictly
   - Follow naming conventions

2. **Performance**
   - Use Server Components by default
   - Implement proper caching
   - Optimize images and assets
   - Minimize client-side JavaScript

3. **Security**
   - Validate user input
   - Use proper CORS settings
   - Implement CSP headers
   - Keep dependencies updated

4. **Accessibility**
   - Semantic HTML
   - ARIA attributes
   - Keyboard navigation
   - Screen reader support

5. **SEO**
   - Proper metadata
   - Structured data
   - Social media tags
   - Performance optimization
