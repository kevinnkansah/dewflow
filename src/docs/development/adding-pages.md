# Adding New Pages

This guide explains how to add new pages to the application while following our established patterns and best practices.

## Basic Page Structure

1. Create a new directory in `src/app/[locale]/your-page-name/`
2. Add a `page.tsx` file with this structure:

```tsx
import { Flex } from "@/once-ui/components";
import { getTranslations } from "next-intl/server";
import { renderContent } from "@/app/resources";

export async function generateMetadata() {
    const t = await getTranslations();
    const { pageName } = renderContent(t);

    return {
        title: pageName.title,
        description: pageName.description,
    };
}

export default async function YourPageName() {
    const t = await getTranslations();
    const { pageName } = renderContent(t);

    return (
        <Flex
            as="main"
            direction="column"
            gap="32"
            padding="32"
            alignItems="center">
            {/* Your page content */}
        </Flex>
    );
}
```

## Steps to Add a New Page

1. **Create the Page Component**
   - Follow the basic structure above
   - Use Server Components by default
   - Add "use client" directive only when needed

2. **Add Translations**
   - Add translation keys in `src/i18n/messages/`
   - Follow the established translation structure
   - Include all required text content

3. **Update Navigation (if needed)**
   - Add the page to Header.tsx if it should appear in navigation
   - Update the routes configuration

4. **Add Metadata**
   - Implement generateMetadata for SEO
   - Include title and description
   - Add OpenGraph metadata if needed

## Example: Adding a New Feature Page

```tsx
// src/app/[locale]/features/page.tsx
import { Flex } from "@/once-ui/components";
import { getTranslations } from "next-intl/server";
import { renderContent } from "@/app/resources";

export async function generateMetadata() {
    const t = await getTranslations();
    const { features } = renderContent(t);

    return {
        title: features.title,
        description: features.description,
    };
}

export default async function FeaturesPage() {
    const t = await getTranslations();
    const { features } = renderContent(t);

    return (
        <Flex
            as="main"
            direction="column"
            gap="32"
            padding="32"
            alignItems="center">
            <Flex
                direction="column"
                gap="16"
                alignItems="center"
                textAlign="center">
                <h1>{features.title}</h1>
                <p>{features.description}</p>
            </Flex>
            <Flex
                direction="row"
                gap="32"
                wrap="wrap"
                justifyContent="center">
                {features.list.map((feature, index) => (
                    <FeatureCard
                        key={index}
                        title={feature.title}
                        description={feature.description}
                        icon={feature.icon}
                    />
                ))}
            </Flex>
        </Flex>
    );
}
```

## Best Practices

1. **Component Organization**
   - Keep pages simple and focused on layout
   - Move complex UI elements to components
   - Use composition for reusable patterns

2. **Data Fetching**
   - Use Server Components for data fetching
   - Handle loading and error states
   - Implement proper caching strategies

3. **Styling**
   - Use once-ui components for consistency
   - Follow the established design system
   - Use CSS Modules for custom styles

4. **Performance**
   - Implement proper loading states
   - Use dynamic imports for large components
   - Optimize images and assets

5. **Accessibility**
   - Include proper ARIA labels
   - Ensure keyboard navigation
   - Test with screen readers

## Avoiding Common Errors

1. **Ensure All Imports Are Correct**
   - Verify that all components and utilities are correctly imported.
   - Check for any missing or incorrect imports that could lead to runtime errors.

2. **Verify Translation Keys**
   - Ensure that all translation keys used in the page are defined in the `en.json` file.
   - Double-check for typos or mismatches in translation keys.

3. **Check Component Props**
   - Ensure that all required props are passed to components.
   - Verify the types of props to avoid type errors.

4. **Update Content Files**
   - Ensure that content files like `content.js` include all necessary properties.
   - Update the content structure to match the expected format in the page.

## Testing

1. Create a test file: `page.test.tsx`
2. Test the main functionality
3. Include accessibility tests
4. Test different viewport sizes

## Checklist

Before deploying a new page, ensure:

- [ ] Page follows the basic structure
- [ ] Translations are complete
- [ ] Navigation is updated
- [ ] Metadata is properly set
- [ ] Tests are written and passing
- [ ] Accessibility is considered
- [ ] Mobile responsiveness is implemented
- [ ] Performance is optimized
