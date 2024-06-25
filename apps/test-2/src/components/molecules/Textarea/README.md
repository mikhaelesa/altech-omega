# Textarea

The `Textarea` component is a React component that renders a textarea input with a label.

## Usage

```tsx
import Textarea from "./Textarea";

const App = () => (
  <div>
    <Textarea
      id="message"
      label="Message"
      placeholder="Enter your message"
      rows={4}
    />
    {/* Additional textarea fields */}
  </div>
);

export default App;
```

## Components Used

- **Text**: Imported from @/components/atoms/Text.

## Props

### ITextareaProps

The `Textarea` component accepts the following props:

- **id**: Specifies the id of the textarea element.
- **label**: Specifies the label text for the textarea element.
- **...props**: The component also accepts all other standard HTML attributes applicable to a <textarea> element.
