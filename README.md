# lumen-labs

A [React](https://reactjs.org/) user interface kit built with [TailwindCSS](https://tailwindcss.com/).

## Getting started

Firstly, install `lumen-labs`:

```
npm i @eqworks/lumen-labs
```

Next, install the required peer dependencies:

```
npm i -D tailwindcss@latest postcss@latest autoprefixer@latest
```

Once you have installed all the required dependencies, you can start using `lumen-labs` components:

```jsx
import { Button, Chip } from "@eqworks/lumen-labs";

const MyComponent = () => (
  <div>
    <Chip>CHIP</Chip>
    <Button variant="outlined" size="md">
      Click me
    </Button>
  </div>
);
```

> **Note:** You can override the `lumen-labs` default styling by passing a `classes` prop to the component.<br />[Click here to find out how to create your own theme/styling using TailwindCSS](https://tailwindcss.com/docs/installation).
