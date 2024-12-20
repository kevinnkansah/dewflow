# Component Guidelines

This guide outlines the best practices and patterns for creating and maintaining components in our application.

## Project Structure

The application follows a well-organized directory structure:

```
.
├── messages/                # i18n message files
│   ├── en.json
│   └── id.json
├── public/                 # Static assets
│   ├── fonts/
│   ├── images/
│   └── trademark/         # Brand assets
│
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── [locale]/     # Localized routes
│   │   │   ├── about/
│   │   │   ├── blog/
│   │   │   │   └── posts/    # Blog content
│   │   │   ├── contact/
│   │   │   ├── gallery/
│   │   │   ├── pricing/
│   │   │   ├── sign-in/
│   │   │   ├── sign-up/
│   │   │   └── work/
│   │   │       └── projects/ # Project content
│   │   ├── og/          # Open Graph image generation
│   │   ├── resources/   # App configurations
│   │   └── utils/       # App utilities
│   │
│   ├── components/      # Custom components
│   │   ├── about/      # About page components
│   │   ├── blog/       # Blog components
│   │   ├── gallery/    # Gallery components
│   │   ├── work/       # Work/portfolio components
│   │   └── [shared]/   # Shared components
│   │
│   ├── docs/           # Documentation
│   │   ├── architecture/
│   │   ├── components/
│   │   ├── configuration/
│   │   ├── development/
│   │   ├── i18n/
│   │   ├── once-ui/
│   │   ├── resources/
│   │   └── structure/
│   │
│   ├── once-ui/        # Once UI Component Library
│   │   ├── components/ # UI components
│   │   ├── styles/    # Global styles
│   │   │   ├── background.scss
│   │   │   ├── border.scss
│   │   │   ├── color.scss
│   │   │   ├── layout.scss
│   │   │   ├── spacing.scss
│   │   │   └── typography.scss
│   │   └── tokens/    # Design tokens
│   │       ├── border.scss
│   │       ├── scheme.scss
│   │       ├── shadow.scss
│   │       └── theme.scss
│   │
│   ├── pages/         # API Routes
│   │   └── api/
│   │
│   ├── utils/         # Shared utilities
│   │   └── supabase/  # Supabase client/server
│   │
│   ├── contexts/      # React Context providers
│   ├── hooks/         # Custom React hooks
│   ├── i18n/          # Internationalization
│   ├── lib/           # Third-party configurations
│   └── types/         # TypeScript definitions
│
├── next.config.mjs    # Next.js configuration
├── package.json       # Project dependencies
└── tsconfig.json      # TypeScript configuration
```

### Key Directories

#### Public Assets (`/public`)
- `fonts/` - Custom fonts (Inter.ttf)
- `trademark/` - Brand assets (logos, icons)
- `images/` - Static images

#### App Directory (`src/app/`)
- Next.js 13+ App Router implementation
- Localized routes under `[locale]`
- Content organization:
  - Blog posts: `[locale]/blog/posts/{lang}/`
  - Work projects: `[locale]/work/projects/{lang}/`
- Resources and configurations under `resources/`

#### Components (`src/components/`)
Feature-specific components organized by domain:
- `about/` - About page components
- `blog/` - Blog-related components
- `gallery/` - Gallery components
- `work/` - Work/portfolio components
- Shared components at root level (Header, Footer, etc.)

#### Once UI (`src/once-ui/`)
The core UI component library:
- `components/` - Reusable UI components
- `styles/` - Global styling system
  - Layout, typography, colors, spacing
- `tokens/` - Design system tokens
  - Theme, schemes, shadows, borders

#### Documentation (`src/docs/`)
Comprehensive documentation covering:
- Architecture
- Component guidelines
- Configuration
- Development guides
- i18n setup
- Once UI documentation
- Project structure

### File Organization Guidelines

1. **Component Files**
   - Use PascalCase for component files: `ComponentName.tsx`
   - Style modules should match component names: `ComponentName.module.scss`
   - Group related components in feature directories

2. **Content Organization**
   - Blog posts and work projects are organized by language
   - MDX files for content: `[slug].mdx`
   - Localized content under respective language directories

3. **Import Organization**
   ```typescript
   // External imports
   import React from 'react';
   import { useRouter } from 'next/router';
   
   // Once UI components
   import { Button, Input } from '@/once-ui/components';
   
   // Local components
   import { Header } from '@/components';
   
   // Styles
   import styles from './ComponentName.module.scss';
   ```

4. **Path Aliases**
   Use the following path aliases for cleaner imports:
   - `@/components` - Component imports
   - `@/once-ui` - Once UI components
   - `@/lib` - Library configurations
   - `@/utils` - Utility functions
   - `@/hooks` - Custom hooks
   - `@/contexts` - Context providers

## Component Structure

### Directory Organization

```
components/
├── ComponentName/
│   ├── index.tsx         # Main component
│   ├── types.ts          # Type definitions
│   ├── styles.module.scss # Component styles
│   └── __tests__/        # Test files
```

### Basic Component Template

```tsx
import { Flex } from "@/once-ui/components";
import styles from "./styles.module.scss";
import { ComponentProps } from "./types";

export function ComponentName({ prop1, prop2 }: ComponentProps) {
    return (
        <Flex className={styles.root}>
            {/* Component content */}
        </Flex>
    );
}
```

## Component Types

1. **UI Components**
   - Pure presentation
   - No business logic
   - Highly reusable

2. **Container Components**
   - Handle data fetching
   - Manage state
   - Coordinate UI components

3. **Layout Components**
   - Structure page layout
   - Handle responsiveness
   - Manage spacing

## Best Practices

### 1. Component Design

- Keep components focused and single-purpose
- Use composition over inheritance
- Follow the Single Responsibility Principle
- Make components as pure as possible

```tsx
// Good
function UserCard({ user, onEdit }: UserCardProps) {
    return (
        <Card>
            <UserInfo user={user} />
            <EditButton onClick={onEdit} />
        </Card>
    );
}

// Avoid
function UserCard({ user }: UserCardProps) {
    const [isEditing, setIsEditing] = useState(false);
    const [userData, setUserData] = useState(user);
    // Too much responsibility in one component
}
```

### 2. Props Design

- Use TypeScript interfaces for props
- Make props explicit and descriptive
- Provide default props when appropriate
- Use proper prop types

```tsx
// types.ts
interface ButtonProps {
    variant: "primary" | "secondary";
    size?: "small" | "medium" | "large";
    onClick: () => void;
    children: React.ReactNode;
}

// Component
export function Button({
    variant,
    size = "medium",
    onClick,
    children
}: ButtonProps) {
    // ...
}
```

### 3. Styling

- Use CSS Modules for component-specific styles
- Follow BEM naming convention
- Use design tokens from once-ui
- Keep styles modular and scoped

```scss
// styles.module.scss
.root {
    &__header {
        // ...
    }

    &__content {
        // ...
    }

    &--variant {
        // ...
    }
}
```

### 4. Performance

- Memoize when necessary
- Use proper key props in lists
- Avoid unnecessary re-renders
- Lazy load when appropriate

```tsx
// Memoization example
const MemoizedComponent = React.memo(function Component({ data }: Props) {
    return (
        // ...
    );
});

// Lazy loading
const LazyComponent = React.lazy(() => import('./HeavyComponent'));
```

## Styling Configuration

The application's styling configuration is managed in `src/app/resources/config.js`. This central configuration file controls various aspects of the application's appearance:

#### Theme Configuration
```javascript
const style = {
    theme: 'dark',        // dark | light
    neutral: 'slate',     // sand | gray | slate
    brand: 'emerald',     // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    accent: 'cyan',       // blue | indigo | violet | magenta | pink | red | orange | yellow | moss | green | emerald | aqua | cyan
    solid: 'color',       // color | contrast
    solidStyle: 'plastic' // flat | plastic
}
```

#### Visual Effects
```javascript
const effects = {
    mask: 'cursor',          // none | cursor | topLeft | topRight | bottomLeft | bottomRight
    gradient: {
        display: true,
        opacity: 0.7         // 0 - 1
    },
    dots: {
        display: true,
        opacity: 0.5,        // 0 - 1
        size: '20'           // 2 | 4 | 8 | 12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64
    },
    lines: {
        display: true
    }
}
```

When styling components, always refer to these configurations to maintain consistency with the application's theme. The configuration file provides a single source of truth for:
- Color schemes (theme, neutral, brand, and accent colors)
- Visual styles (solid colors and styles)
- UI effects (masks, gradients, dots, and lines)

## Once UI Components

Our application is built using Once UI, a comprehensive component library that ensures consistency, accessibility, and maintainability across the application. It is **crucial** to use these components instead of creating custom ones to maintain design consistency and reduce technical debt.

### Available Components

The following components are available in our Once UI library:

#### Layout Components
- `Flex` - Flexible box layout component
- `Grid` - Grid layout system
- `Background` - Background wrapper component
- `Scroller` - Custom scrollable container

#### Interactive Components
- `Button` - Standard button component
- `IconButton` - Button with icon
- `Input` - Text input field
- `Textarea` - Multiline text input
- `Select` - Dropdown select component
- `Checkbox` - Checkbox input
- `RadioButton` - Radio button input
- `Switch` - Toggle switch
- `ToggleButton` - Toggleable button
- `Dropdown` - Dropdown menu
- `SegmentedControl` - Segmented control component
- `Accordion` - Collapsible content sections

#### Display Components
- `Text` - Text component with various styles
- `Heading` - Heading component
- `Avatar` - User avatar display
- `AvatarGroup` - Group of avatars
- `Badge` - Badge indicator
- `Chip` - Chip component
- `Tag` - Tag component
- `StatusIndicator` - Status indicator
- `Spinner` - Loading spinner
- `Skeleton` - Loading placeholder
- `Icon` - Icon component
- `Logo` - Logo component

#### Feedback Components
- `Dialog` - Modal dialog
- `Toast` - Toast notifications
- `Tooltip` - Tooltip component
- `Feedback` - Feedback messages

#### Special Effects
- `GlitchFx` - Glitch effect component
- `RevealFx` - Reveal animation
- `SparkleFx` - Sparkle effect
- `LetterFx` - Letter animation effect

#### Navigation
- `SmartLink` - Enhanced link component
- `NavIcon` - Navigation icon
- `UserMenu` - User menu component

### Importance of Using Once UI Components

1. **Consistency**: Once UI components ensure a consistent look and feel across the application.
2. **Accessibility**: Components are built with accessibility in mind, following WCAG guidelines.
3. **Maintenance**: Using standard components reduces technical debt and makes maintenance easier.
4. **Performance**: Components are optimized for performance and follow React best practices.
5. **Documentation**: All components are well-documented and have predictable behavior.

### Using Components

Always import components from the Once UI library:

```tsx
import { Button, Input, Flex } from "@/once-ui/components";
```

### Styling Components

Components should be styled using the provided Once UI styling system. Custom styles should be applied through:

1. Component props
2. CSS Modules (when extending components)
3. Theme variables

## Working with once-ui

### 1. Using Base Components

```tsx
import { Flex, Text, Button } from "@/once-ui/components";

function MyComponent() {
    return (
        <Flex direction="column" gap="16">
            <Text variant="heading-l">Title</Text>
            <Button variant="primary">Click me</Button>
        </Flex>
    );
}
```

### 2. Extending Components

```tsx
import { Button } from "@/once-ui/components";
import styles from "./styles.module.scss";

function CustomButton({ children, ...props }) {
    return (
        <Button 
            className={styles.customButton}
            {...props}
        >
            {children}
        </Button>
    );
}
```

## Testing Components

### 1. Test Setup

```tsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { ComponentName } from './';

describe('ComponentName', () => {
    it('renders correctly', () => {
        render(<ComponentName />);
        // assertions
    });
});
```

### 2. Test Coverage

- Unit tests for logic
- Integration tests for complex interactions
- Snapshot tests for UI stability
- Accessibility tests

## Accessibility

- Use semantic HTML
- Include ARIA labels
- Ensure keyboard navigation
- Test with screen readers

```tsx
function AccessibleButton({ label, onClick }: Props) {
    return (
        <button
            onClick={onClick}
            aria-label={label}
            role="button"
            tabIndex={0}
        >
            {label}
        </button>
    );
}
```

## Documentation

- Document component API
- Include usage examples
- Document props and types
- Add comments for complex logic

```tsx
/**
 * Button component with various styles and sizes.
 * @param variant - The style variant of the button
 * @param size - The size of the button
 * @param onClick - Click handler function
 */
export function Button({ variant, size, onClick }: ButtonProps) {
    // ...
}
```

## Checklist for New Components

- [ ] Component follows directory structure
- [ ] Props are properly typed
- [ ] Styles use CSS Modules
- [ ] Tests are written
- [ ] Accessibility is considered
- [ ] Documentation is complete
- [ ] Performance is optimized
- [ ] Code is reviewed
