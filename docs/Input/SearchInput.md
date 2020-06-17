# Search Input

## Example

```jsx
import { InputSearch } from "synapsefi-chatbot-ui";

<InputSearch clientColor={clientColor} value={value} />;
```

## Props

| Property      | Type          | Required | Description                                                  |
| ------------- | ------------- | -------- | ------------------------------------------------------------ |
| clientColor   | `string`      | true     | Client main color                                            |
| value         | `string`      | true     | Value of input                                               |
| onChange      | `function`    | true     | The onchange function that gets triggered when input changes |
| handleSubmit  | `function`    | true     | The handleSubmit function that gets triggered after enter    |
| fullWidth     | `boolean`     | false    | Rounded input box style or full width style                  |
| removeMessage | `function`    | false    | Remove input box text value Function                         |
| placeholder   | `string`      | false    | Placeholder of the input box                                 |
| onFocus       | `function`    | false    | Onfocus function triggered when it got focused               |
