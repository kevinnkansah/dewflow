# Application Resources

The `/src/app/resources` directory contains essential configuration and content management files for the application. This guide explains the purpose and usage of each resource file.

## Directory Structure

```
src/app/resources/
├── config.js         # Application configuration
├── content.ts        # Content rendering helpers
└── index.ts         # Resource exports
```

## Configuration (config.js)

The `config.js` file contains global application settings and feature flags.

```javascript
// Base configuration
const baseURL = 'demo.magic-portfolio.com'

// Internationalization settings
const i18n = {
    enabled: false,
    locales: ['en'],
    defaultLocale: 'en'
}

// Route configuration
const routes = {
    '/': true,
    '/about': true,
    '/work': true,
    '/blog': true,
    '/gallery': true,
}

// Protected routes configuration
const protectedRoutes = {
    '/work/specific-page': true
}

// UI effects configuration
const effects = {
    mask: 'cursor',             // none | cursor | topLeft | topRight | bottomLeft | bottomRight
    gradient: {
        display: true,
        opacity: 0.4
    }
}

// Display settings
const display = {
    location: true,             // Show/hide location in header
    newsletter: true,           // Show/hide newsletter section
    navigation: true           // Show/hide navigation
}
```

### Usage

```typescript
import { routes, display, effects } from '@/app/resources/config';

// Check if a route is enabled
if (routes['/about']) {
    // Render about link
}

// Use display settings
if (display.location) {
    // Show location
}

// Apply effects
const maskEffect = effects.mask;
```

## Content Rendering (content.ts)

The `content.ts` file provides helpers for rendering localized content.

```typescript
import { TFunction } from 'next-intl';

export function renderContent(t: TFunction) {
    return {
        person: {
            role: t('person.role'),
            location: t('person.location')
        },
        home: {
            title: t('home.title'),
            description: t('home.description')
        },
        // ... other content sections
    };
}
```

### Best Practices

1. **Route Management**
   - Add new routes to `routes` object when creating new pages
   - Use route checks in navigation components
   - Keep route names consistent with file structure

2. **Protected Routes**
   - Add sensitive routes to `protectedRoutes`
   - Implement authentication checks
   - Document access requirements

3. **Display Configuration**
   - Use display flags for conditional rendering
   - Keep flags descriptive and focused
   - Document impact of each flag

4. **Effects**
   - Configure UI effects globally
   - Use consistent effect names
   - Document available options

## Common Patterns

### 1. Route Checking

```typescript
import { routes } from '@/app/resources';

// In navigation components
{routes['/about'] && (
    <Link href="/about">About</Link>
)}
```

### 2. Display Features

```typescript
import { display } from '@/app/resources';

// In components
{display.newsletter && (
    <NewsletterSection />
)}
```

### 3. Effect Application

```typescript
import { effects } from '@/app/resources';

// In components
<div className={`mask-${effects.mask}`}>
    {/* Content */}
</div>
```

## Migration and Updates

When updating the resources:

1. **Adding New Routes**
   ```javascript
   const routes = {
       ...existingRoutes,
       '/new-route': true
   }
   ```

2. **Modifying Display Settings**
   ```javascript
   const display = {
       ...existingDisplay,
       newFeature: true
   }
   ```

3. **Updating Effects**
   ```javascript
   const effects = {
       ...existingEffects,
       newEffect: {
           enabled: true,
           options: {}
       }
   }
   ```

## Troubleshooting

Common issues and solutions:

1. **Route Not Showing**
   - Check if route is defined in `routes` object
   - Verify route name matches exactly
   - Check for typos in path

2. **Content Not Rendering**
   - Verify display flag is enabled
   - Check content helper implementation
   - Verify translations exist

3. **Effects Not Working**
   - Check effect configuration
   - Verify CSS implementation
   - Check for conflicts

## Security Considerations

1. **Protected Routes**
   - Always add sensitive routes to `protectedRoutes`
   - Implement proper authentication
   - Validate access server-side

2. **Configuration**
   - Don't expose sensitive data
   - Use environment variables
   - Document security requirements

## Future Considerations

When extending the resources:

1. **Scalability**
   - Keep configuration modular
   - Document dependencies
   - Consider performance impact

2. **Maintenance**
   - Keep configuration clean
   - Remove unused settings
   - Update documentation

3. **Integration**
   - Consider third-party services
   - Document API requirements
   - Plan for updates
