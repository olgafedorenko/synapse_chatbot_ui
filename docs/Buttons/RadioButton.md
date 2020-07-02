# Radio Button

## Example

```jsx
import { RadioButton } from "synapsefi-chatbot-ui";

<RadioButton
  key={`selection-${idx}-${Math.random()}`}
  className={className}
  fullWidth={customButton}
  content="text"
  checked={checkedButton === data.label}
  onClick={() => console.log("checked")}
  clientColor={`#${clientColor}`}
  borderRadius={borderRadius}
/>;
```

## Props

| Property     | Type     | Required | Description                   |
| ------------ | -------- | -------- | ----------------------------- |
| key          | `string` | true     | Key of each radio button      |
| content      | `string` | true     | Content of each radio button  |
| className    | `string` | false    | Name of class of radio button |
| fullWidth    | `bool`   | false    | FullWidth button style        |
| checked      | `bool`   | false    | Radio button is selected      |
| clientColor  | `string` | false    | Color of radio button         |
| borderRadius | `string` | false    | Border radius of radio button |
