# Button

The `Button` component is a versatile and reusable button element for your React application. It supports different variants and can be rendered as either a native button or a link styled as a button. The component leverages clsx for conditional class names and useMemo for optimizing the element rendering.

## Usage

### Basic Example

Rendering a primary button:

```tsx
import Button from "@/components/atoms/Button";

const App = () => <Button variant="primary">Click Me</Button>;

export default App;
```

Rendering a text button:

```tsx
import Button from "@/components/atoms/Button";

const App = () => <Button variant="text">Click Me</Button>;

export default App;
```

### Rendering as a Link

To render the button as a link, set the element prop to "link" and provide an href:

```tsx
import Button from "@/components/atoms/Button";

const App = () => (
  <Button element="link" href="/path">
    Go to Path
  </Button>
);

export default App;
```

## Props

### TButtonProps

The `Button` component accepts the following props:

- **element (optional)**: Determines whether the button should be rendered as a "button" or a "link". Defaults to "button".
- **variant (optional)**: Specifies the button style. Accepts "primary" or "text". Defaults to "primary".
- **className (optional)**: Additional class names for custom styling.
  href (required if element is "link"): The URL for the link. Not needed if element is "button".
  Other standard HTML attributes for a <button> element.
