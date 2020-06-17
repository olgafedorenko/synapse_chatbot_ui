# Dropup

## Example

```jsx
import { Dropup } from "synapsefi-chatbot-ui";

<Dropup fullWidth hide onClick={() => console.log("This is an alert")} />;
```

## Props

| Property  | Type           | Required | Description                  |
| --------- | -------------- | -------- | ---------------------------- |
| hide      | `boolean`      | false    | Hide dropup                  |
| onClick   | `function`     | false    | Triggers on selection        |
| fullWidth | `boolean`      | false    | Rounded button or full width |
| items     | `Array of Obj` | true     | List item of Dropup          |
