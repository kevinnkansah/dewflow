# once-ui Styling System

The once-ui styling system provides a comprehensive set of SCSS modules for consistent styling across your application.

## Core Style Modules

### 1. Color System (`color.scss`)
```scss
// Usage
.element {
    color: var(--color-primary);
    background: var(--color-surface);
}
```

Available color variables:
- Primary colors: `--color-primary`, `--color-primary-light`, `--color-primary-dark`
- Surface colors: `--color-surface`, `--color-surface-variant`
- Neutral colors: `--color-neutral-{100-900}`
- Semantic colors: `--color-success`, `--color-error`, `--color-warning`, `--color-info`

### 2. Typography (`typography.scss`)
```scss
// Usage
.element {
    @include typography-heading-l;
    // or
    font: var(--typography-body-default-m);
}
```

Text variants:
- Headings: `heading-{xs,s,m,l,xl}`
- Body: `body-default-{xs,s,m,l}`, `body-mono-{xs,s,m,l}`
- Display: `display-{s,m,l}`

### 3. Spacing (`spacing.scss`)
```scss
// Usage
.element {
    padding: var(--spacing-4);
    margin: var(--spacing-8);
    gap: var(--spacing-16);
}
```

Spacing scale:
- Base unit: 4px
- Available sizes: 0-64 (multiplied by base unit)
- Special values: `auto`

### 4. Borders (`border.scss`)
```scss
// Usage
.element {
    border: var(--border-neutral-medium);
    border-radius: var(--radius-m-4);
}
```

Border properties:
- Styles: `solid-{1,2}`, `dashed-{1,2}`
- Colors: `neutral-{light,medium,strong}`
- Radii: `s-{2,4}`, `m-{2,4}`, `l-{2,4}`, `circle`

### 5. Shadows (`shadow.scss`)
```scss
// Usage
.element {
    box-shadow: var(--shadow-s);
}
```

Shadow levels:
- `--shadow-xs`: Subtle elevation
- `--shadow-s`: Light elevation
- `--shadow-m`: Medium elevation
- `--shadow-l`: Strong elevation
- `--shadow-xl`: Maximum elevation

### 6. Breakpoints (`breakpoints.scss`)
```scss
// Usage
@include breakpoint-up(m) {
    // Styles for medium screens and up
}
```

Available breakpoints:
- `xs`: 0px
- `s`: 600px
- `m`: 905px
- `l`: 1240px
- `xl`: 1440px

### 7. Layout (`layout.scss`)
```scss
// Usage
.element {
    @include layout-container;
    @include layout-grid(3);
}
```

Layout utilities:
- Container widths
- Grid systems
- Flex helpers
- Position utilities

## Global Styles

### Base Styles (`global.scss`)
```scss
// Automatically applied to the application
body {
    font-family: var(--font-primary);
    color: var(--color-text);
    background: var(--color-background);
}
```

Includes:
- Reset styles
- Base typography
- Default colors
- Accessibility basics

## Best Practices

1. **Using Variables**
```scss
// Do
.element {
    color: var(--color-primary);
    padding: var(--spacing-4);
}

// Don't
.element {
    color: #1a73e8;
    padding: 16px;
}
```

2. **Responsive Design**
```scss
.element {
    @include breakpoint-up(s) {
        width: 50%;
    }
    @include breakpoint-up(m) {
        width: 33.33%;
    }
}
```

3. **Component-Specific Styles**
```scss
// ComponentName.module.scss
.root {
    @include typography-body-default-m;
    padding: var(--spacing-4);
    
    &--variant {
        background: var(--color-surface-variant);
    }
}
```

4. **Theme Compatibility**
```scss
.element {
    // Uses theme-aware variables
    background: var(--color-surface);
    color: var(--color-on-surface);
}
```

## Using with Components

```tsx
import styles from './Component.module.scss';
import { Flex } from '@/once-ui/components';

export function Component() {
    return (
        <Flex
            className={styles.root}
            padding="4"
            gap="8"
            background="surface">
            {/* Component content */}
        </Flex>
    );
}
```

## Custom Properties

### Adding Custom Properties
```scss
// theme.scss
:root {
    --custom-property: value;
}
```

### Using Custom Properties
```scss
.element {
    property: var(--custom-property);
}
```

## Utility Classes

The styling system provides utility classes for common patterns:

```scss
// Margin utilities
.m-4 { margin: var(--spacing-4); }
.mt-4 { margin-top: var(--spacing-4); }

// Padding utilities
.p-4 { padding: var(--spacing-4); }
.pt-4 { padding-top: var(--spacing-4); }

// Typography utilities
.text-heading-l { @include typography-heading-l; }
.text-body-m { @include typography-body-default-m; }
```

## Theme Customization

To customize the theme:

1. Create a theme file:
```scss
// custom-theme.scss
:root {
    --color-primary: #your-color;
    --font-primary: 'Your Font', sans-serif;
    // ... other customizations
}
```

2. Import in your main stylesheet:
```scss
@import 'custom-theme.scss';
@import '@/once-ui/styles/index.scss';
```
