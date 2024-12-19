# once-ui Effects

A guide to using the special effects components in once-ui.

## Available Effects

### 1. RevealFx
Smooth reveal animation for content.

```tsx
import { RevealFx } from '@/once-ui/components';

// Basic usage
<RevealFx>
    <div>Content to reveal</div>
</RevealFx>

// With options
<RevealFx
    direction="left"
    duration={0.8}
    delay={0.2}>
    <div>Content to reveal</div>
</RevealFx>
```

Properties:
- `direction`: "left" | "right" | "top" | "bottom"
- `duration`: number (seconds)
- `delay`: number (seconds)
- `easing`: string (CSS easing function)

### 2. LetterFx
Animated text effects.

```tsx
import { LetterFx } from '@/once-ui/components';

// Basic usage
<LetterFx text="Animated Text" />

// With options
<LetterFx
    text="Animated Text"
    effect="wave"
    duration={0.5}
    stagger={0.05}>
</LetterFx>
```

Properties:
- `text`: string
- `effect`: "wave" | "fade" | "slide" | "bounce"
- `duration`: number (seconds)
- `stagger`: number (delay between letters)
- `direction`: "forward" | "reverse" | "random"

### 3. SparkleFx
Adds sparkle effects to elements.

```tsx
import { SparkleFx } from '@/once-ui/components';

// Basic usage
<SparkleFx>
    <button>✨ Sparkle Button</button>
</SparkleFx>

// With options
<SparkleFx
    color="#FFD700"
    count={20}
    size={6}
    duration={0.8}>
    <div>✨ Sparkly Content</div>
</SparkleFx>
```

Properties:
- `color`: string (CSS color)
- `count`: number (sparkle count)
- `size`: number (sparkle size in pixels)
- `duration`: number (animation duration)
- `randomness`: number (0-1, position randomness)

### 4. GlitchFx
Creates a glitch effect on text or elements.

```tsx
import { GlitchFx } from '@/once-ui/components';

// Basic usage
<GlitchFx>
    <Text>Glitch Text</Text>
</GlitchFx>

// With options
<GlitchFx
    intensity={0.5}
    speed={50}
    colors={['#ff0000', '#00ff00', '#0000ff']}>
    <div>Glitch Content</div>
</GlitchFx>
```

Properties:
- `intensity`: number (0-1)
- `speed`: number (milliseconds)
- `colors`: string[] (glitch colors)
- `active`: boolean (control effect)
- `mode`: "constant" | "hover" | "click"

## Combining Effects

### Layered Effects
```tsx
import { RevealFx, LetterFx } from '@/once-ui/components';

<RevealFx>
    <LetterFx text="Combined Effects" />
</RevealFx>
```

### Sequential Effects
```tsx
import { RevealFx, SparkleFx } from '@/once-ui/components';

<Flex direction="column" gap="16">
    <RevealFx delay={0}>
        <div>First Effect</div>
    </RevealFx>
    <RevealFx delay={0.2}>
        <SparkleFx>
            <div>Second Effect</div>
        </SparkleFx>
    </RevealFx>
</Flex>
```

## Performance Optimization

### 1. Effect Throttling
```tsx
// Limit effect updates
import { useThrottle } from '@/once-ui/hooks';

function Component() {
    const throttledEffect = useThrottle(handleEffect, 100);
    
    return (
        <GlitchFx onUpdate={throttledEffect}>
            <Text>Optimized Effect</Text>
        </GlitchFx>
    );
}
```

### 2. Conditional Rendering
```tsx
// Only render effects when needed
function Component() {
    const [isVisible, setIsVisible] = useState(false);
    
    return isVisible && (
        <RevealFx>
            <div>Conditional Effect</div>
        </RevealFx>
    );
}
```

### 3. Effect Cleanup
```tsx
// Proper cleanup in useEffect
useEffect(() => {
    // Initialize effect
    return () => {
        // Cleanup effect
    };
}, []);
```

## Custom Effects

### Creating a Custom Effect
```tsx
import { useEffect, useState } from 'react';
import styles from './CustomEffect.module.scss';

interface CustomEffectProps {
    children: React.ReactNode;
    config?: CustomEffectConfig;
}

export function CustomEffect({ children, config }: CustomEffectProps) {
    const [active, setActive] = useState(false);
    
    useEffect(() => {
        // Effect logic
    }, [config]);
    
    return (
        <div className={styles.customEffect}>
            {children}
        </div>
    );
}
```

### Custom Effect Styles
```scss
// CustomEffect.module.scss
.customEffect {
    position: relative;
    
    &::before,
    &::after {
        content: '';
        position: absolute;
        // Effect styles
    }
    
    @keyframes customAnimation {
        // Animation keyframes
    }
}
```

## Accessibility Considerations

### 1. Reduced Motion
```tsx
import { useReducedMotion } from '@/once-ui/hooks';

function Component() {
    const prefersReducedMotion = useReducedMotion();
    
    return (
        <RevealFx disabled={prefersReducedMotion}>
            <div>Content</div>
        </RevealFx>
    );
}
```

### 2. Effect Controls
```tsx
<GlitchFx
    aria-label="Glitch effect"
    role="presentation"
    userControllable>
    <div>Controllable Effect</div>
</GlitchFx>
```

## Best Practices

1. **Effect Timing**
```tsx
// Stagger multiple effects
<Flex direction="column">
    <RevealFx delay={0}>First</RevealFx>
    <RevealFx delay={0.2}>Second</RevealFx>
    <RevealFx delay={0.4}>Third</RevealFx>
</Flex>
```

2. **Effect Intensity**
```tsx
// Adjust effect intensity based on context
<GlitchFx
    intensity={isError ? 0.8 : 0.3}
    speed={isError ? 30 : 100}>
    <Text>Context-Aware Effect</Text>
</GlitchFx>
```

3. **Mobile Optimization**
```tsx
// Adjust effects for mobile
<LetterFx
    duration={{ base: 0.3, m: 0.5 }}
    stagger={{ base: 0.02, m: 0.05 }}>
    Responsive Effect
</LetterFx>
```
