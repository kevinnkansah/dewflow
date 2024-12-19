# once-ui Components

A comprehensive guide to the components available in once-ui.

## Layout Components

### Flex
The most versatile layout component for creating flexible layouts.

```tsx
import { Flex } from '@/once-ui/components';

// Basic usage
<Flex direction="row" gap="16" padding="24">
    {/* Content */}
</Flex>

// Complex layout
<Flex
    direction="column"
    gap="32"
    padding="24"
    alignItems="center"
    background="surface"
    border="neutral-medium"
    borderStyle="solid-1"
    radius="m-4"
    shadow="l">
    {/* Content */}
</Flex>
```

Properties:
- `direction`: "row" | "column"
- `gap`: spacing values
- `alignItems`: "start" | "center" | "end"
- `justifyContent`: "start" | "center" | "end" | "space-between"
- `wrap`: "wrap" | "nowrap"
- And more...

### Grid
For creating grid-based layouts.

```tsx
import { Grid } from '@/once-ui/components';

<Grid
    columns={3}
    gap="16"
    padding="24">
    {/* Grid items */}
</Grid>
```

Properties:
- `columns`: number
- `gap`: spacing values
- `rowGap`: spacing values
- `columnGap`: spacing values

## Interactive Components

### Button
```tsx
import { Button } from '@/once-ui/components';

<Button
    variant="primary"
    size="medium"
    onClick={handleClick}>
    Click Me
</Button>
```

Variants:
- `primary`
- `secondary`
- `tertiary`
- `danger`

Sizes:
- `small`
- `medium`
- `large`

### Input
```tsx
import { Input } from '@/once-ui/components';

<Input
    type="text"
    label="Username"
    placeholder="Enter username"
    value={value}
    onChange={handleChange}
    error={error}
    helperText="Helper text"
/>
```

Types:
- `text`
- `password`
- `email`
- `number`
- And more...

### Select
```tsx
import { Select } from '@/once-ui/components';

<Select
    label="Choose option"
    options={options}
    value={value}
    onChange={handleChange}
/>
```

### Checkbox
```tsx
import { Checkbox } from '@/once-ui/components';

<Checkbox
    label="Remember me"
    checked={checked}
    onChange={handleChange}
/>
```

## Display Components

### Avatar
```tsx
import { Avatar, AvatarGroup } from '@/once-ui/components';

<Avatar
    src="/path/to/image.jpg"
    alt="User name"
    size="medium"
/>

<AvatarGroup max={3}>
    <Avatar src="/user1.jpg" />
    <Avatar src="/user2.jpg" />
    <Avatar src="/user3.jpg" />
</AvatarGroup>
```

### Badge
```tsx
import { Badge } from '@/once-ui/components';

<Badge content="New" variant="primary">
    <Icon name="notification" />
</Badge>
```

### Dialog
```tsx
import { Dialog } from '@/once-ui/components';

<Dialog
    open={isOpen}
    onClose={handleClose}
    title="Dialog Title">
    <div>Dialog content</div>
</Dialog>
```

## Navigation Components

### Dropdown
```tsx
import { Dropdown } from '@/once-ui/components';

<Dropdown
    trigger={<Button>Open Menu</Button>}
    items={menuItems}
    onChange={handleChange}
/>
```

### ToggleButton
```tsx
import { ToggleButton } from '@/once-ui/components';

<ToggleButton
    selected={isSelected}
    onChange={handleChange}>
    Toggle Me
</ToggleButton>
```

## Special Effects

### RevealFx
```tsx
import { RevealFx } from '@/once-ui/components';

<RevealFx>
    <div>Content to reveal</div>
</RevealFx>
```

### LetterFx
```tsx
import { LetterFx } from '@/once-ui/components';

<LetterFx text="Animated Text" />
```

### GlitchFx
```tsx
import { GlitchFx } from '@/once-ui/components';

<GlitchFx>
    <Text>Glitch Text</Text>
</GlitchFx>
```

## Feedback Components

### Toast
```tsx
import { Toast, useToast } from '@/once-ui/components';

function Component() {
    const toast = useToast();

    const showToast = () => {
        toast.show({
            message: "Action completed",
            type: "success"
        });
    };

    return <Button onClick={showToast}>Show Toast</Button>;
}
```

### Spinner
```tsx
import { Spinner } from '@/once-ui/components';

<Spinner size="medium" color="primary" />
```

## Form Components

### Form Layout Example
```tsx
import {
    Flex,
    Input,
    Select,
    Button
} from '@/once-ui/components';

function Form() {
    return (
        <Flex direction="column" gap="16">
            <Input
                label="Name"
                placeholder="Enter your name"
            />
            <Select
                label="Country"
                options={countryOptions}
            />
            <Button type="submit">
                Submit
            </Button>
        </Flex>
    );
}
```

## Best Practices

1. **Component Composition**
```tsx
// Good
<Flex direction="column" gap="16">
    <Input label="Name" />
    <Select label="Option" />
</Flex>

// Avoid
<div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
    <Input label="Name" />
    <Select label="Option" />
</div>
```

2. **Responsive Design**
```tsx
<Flex
    direction={{ base: "column", m: "row" }}
    gap={{ base: "8", m: "16" }}>
    {/* Content */}
</Flex>
```

3. **Theme Integration**
```tsx
<Button
    variant="primary"  // Uses theme colors
    size="medium"      // Uses theme spacing
/>
```

4. **Accessibility**
```tsx
<Button
    aria-label="Close dialog"
    onClick={handleClose}>
    <Icon name="close" />
</Button>
```

## Component Customization

### Using CSS Modules
```scss
// Component.module.scss
.customButton {
    &:hover {
        transform: scale(1.05);
    }
}
```

```tsx
import styles from './Component.module.scss';

<Button className={styles.customButton}>
    Custom Button
</Button>
```

### Extending Components
```tsx
import { Button } from '@/once-ui/components';

function CustomButton({ children, ...props }) {
    return (
        <Button
            {...props}
            className={styles.customButton}>
            {children}
        </Button>
    );
}
```

## Performance Considerations

1. **Code Splitting**
```tsx
const HeavyComponent = React.lazy(() =>
    import('@/once-ui/components/HeavyComponent')
);
```

2. **Memoization**
```tsx
const MemoizedComponent = React.memo(function Component(props) {
    return <ComplexComponent {...props} />;
});
```

3. **Event Handling**
```tsx
// Use debounced handlers for frequent events
import { debounce } from '@/once-ui/utils';

const debouncedHandler = debounce(handleChange, 300);
```
