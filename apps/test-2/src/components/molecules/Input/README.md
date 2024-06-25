# Input

The `Input` component is a React component that renders an input field with a label.

## Usage

```tsx
import Input from "./Input";

const App = () => (
  <div>
    <Input
      id="username"
      label="Username"
      type="text"
      placeholder="Enter your username"
    />
    {/* Additional input fields */}
  </div>
);

export default App;
```

## Components Used

- **Text**: Imported from @/components/atoms/Text.

## Props

### IInputProps

The Input component accepts the following props:

- **id**: Specifies the id of the input element.
- **label**: Specifies the label text for the input element.
- **...props**: The component also accepts all other standard HTML attributes applicable to an <input> element.
