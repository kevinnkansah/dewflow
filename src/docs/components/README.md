# Components

## Overview

The application uses a combination of custom components and the Once UI component library to maintain a consistent design system.

## Core Components

### Header

```typescript
// components/Header.tsx
- Main navigation component
- Handles locale switching
- Manages authentication state
- Responsive design
```

### Footer

```typescript
// components/Footer.tsx
- Site-wide footer
- Contains links and information
- Consistent across pages
```

## Page Components

Each page follows a consistent structure:

```typescript
// [locale]/page.tsx
export default async function Page() {
    const t = await getTranslations();
    return (
        <Flex direction="column" gap="12" alignItems="center" paddingY="24">
            {/* Page-specific content */}
        </Flex>
    );
}
```

## Once UI Components

### Layout Components

- `Flex`: Flexible box layout
- `Grid`: Grid layout system
- `Container`: Content container

### Typography

- `Text`: Text component with variants
- `Heading`: Heading component
- `Paragraph`: Paragraph component

### Interactive Elements

- `Button`: Button component
- `Input`: Input fields
- `ToggleButton`: Toggle button

## Best Practices

1. **Component Structure**
   - Keep components focused and single-purpose
   - Use TypeScript for type safety
   - Document props and usage

2. **Styling**
   - Use Once UI components when possible
   - Follow design system guidelines
   - Maintain responsive design

3. **Performance**
   - Use Server Components by default
   - Client Components only when needed
   - Optimize for re-renders

4. **Accessibility**
   - Follow ARIA guidelines
   - Ensure keyboard navigation
   - Maintain proper contrast

## Adding New Components

1. Create component file in appropriate directory
2. Add TypeScript interfaces for props
3. Document usage and props
4. Add to component documentation

## Testing Components

1. Unit tests for logic
2. Integration tests for interactions
3. Visual regression testing
4. Accessibility testing
