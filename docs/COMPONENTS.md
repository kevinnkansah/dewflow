# Once UI Components Documentation

## Icon System

The Once UI library uses a centralized icon system defined in `src/once-ui/icons.ts`. Icons are organized into categories for better organization and discoverability:

```typescript
// Categories:
- Navigation (chevronUp, chevronDown, arrowUpRight, etc.)
- Status (check, helpCircle, infoCircle, etc.)
- Contact & Social (email, phone, discord, etc.)
- General UI (about, globe, person, etc.)
- Business & Commerce (cart, payment, analytics, etc.)
- Settings & Users (users, team, settings, etc.)
```

### Using Icons

Icons can be used in two ways:

1. With the Icon component:
```tsx
import { Icon } from '@/once-ui/components';

<Icon 
  name="dashboard" // from iconLibrary
  size="xl" // xs, s, m, l, xl
  onBackground="neutral-strong" 
/>
```

2. As button prefixes:
```tsx
<Button 
  prefixIcon="arrowUpRight"
  variant="primary"
  size="l"
>
  Click me
</Button>
```

## Layout Components

### Flex
The Flex component provides a flexible way to create layouts. Common props:

```tsx
<Flex
  direction="row" | "column"
  gap="8" | "16" | "24" | "32"
  padding="8" | "16" | "24" | "32"
  radius="s" | "m" | "l"
  border="neutral-medium"
  background="info-strong"
  className="additional-tailwind-classes"
/>
```

### Background
Used for creating gradient overlays and visual effects:

```tsx
<Background
  position="fixed" | "absolute" | "relative"
  gradient={{
    opacity: 0.5,
    colorStart: "#...",
    colorEnd: "#..."
  }}
  dots={{
    display: true,
    opacity: 0.5,
    size: "8"
  }}
/>
```

## Best Practices

1. Icon Positioning:
   - For absolute positioning, use Tailwind classes:
   ```tsx
   <div className="relative">
     <div className="absolute bottom-6 right-6">
       <Icon name="dashboard" size="xl" />
     </div>
   </div>
   ```

2. Color System:
   - Use semantic color names: info, success, warning, error
   - Intensity modifiers: weak, medium, strong
   ```tsx
   background="info-weak"
   border="neutral-medium"
   ```

3. Spacing:
   - Use consistent spacing tokens: 8, 16, 24, 32
   - For padding and gaps, use the token directly: padding="24"
   - For Tailwind classes, use p-6, gap-6 (24px = 6 in Tailwind)

4. Typography:
   - Use Text and Heading components for consistent typography
   - Available variants:
     - display-medium-m
     - body-default-l
     - body-default-m
     - body-default-s

5. Interactive Elements:
   - Use Arrow component with unique trigger IDs for hover effects
   - Combine with Button for consistent interactive patterns:
   ```tsx
   <Button id="unique-id">
     <Flex gap="8">
       Learn more
       <Arrow trigger="#unique-id" color="onBackground" />
     </Flex>
   </Button>
   ```

## Component Architecture

1. Hero Sections:
   - Use grid layout for responsive columns
   - Position icons absolutely within grid items
   - Maintain consistent spacing with padding="24"

2. Feature Sections:
   - Use Flex for card layouts
   - Maintain consistent typography hierarchy
   - Use semantic colors for visual hierarchy

3. Headers:
   - Use fixed position with z-index
   - Combine with Background for visual effects
   - Use consistent navigation patterns

## Type System

Important types are defined in `src/once-ui/types.ts`:

```typescript
type SpacingToken = "8" | "16" | "24" | "32"
type ColorIntensity = "weak" | "medium" | "strong"
type SemanticColor = "info" | "success" | "warning" | "error" | "neutral"
type IconSize = "xs" | "s" | "m" | "l" | "xl"
```
