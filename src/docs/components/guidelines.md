# Component Guidelines

This guide outlines the best practices and patterns for creating and maintaining components in our application.

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
