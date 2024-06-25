# AppLayout

The `AppLayout` component is a layout component that includes a navbar at the top and wraps its children inside a <main> tag.

## Usage

```tsx
import AppLayout from "./AppLayout";

const App = () => {
  return <AppLayout>{/* Your content goes here */}</AppLayout>;
};

export default App;
```

## Components Used

- **Navbar**: Imported from @/components/organisms/Navbar.

## Props

### PropsWithChildren

The AppLayout component accepts the following props:

- **children**: React node(s) that represent the content to be displayed within the layout.
