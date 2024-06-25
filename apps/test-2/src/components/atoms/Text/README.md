# Text

The Text component is a versatile React component for rendering various types of text elements (`p`, `h1-h6`, `span`, `italic`, `strong`) with customizable styles.

## Usage

```tsx
import Text from "./Text";

const App = () => (
  <div>
    <Text element="h1" color="blue" fontWeight="700">
      This is a Heading
    </Text>
    <Text element="p" color="black" fontWeight="400">
      This is a paragraph.
    </Text>
    <Text element="span" color="red" fontWeight="300">
      This is a span.
    </Text>
  </div>
);

export default App;
```

## Props

### TTextProps

The `Text` component accepts the following props:

- **element**: Specifies the type of text element to render. Can be one of "p", "h1", "h2", "h3", "h4", "h5", "h6", "span", "italic", "strong". (Required)
- **color**: Sets the color of the text.
- **fontWeight**: Sets the font weight of the text. It should match one of the values from your fontWeight type.
