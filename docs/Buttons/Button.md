# Button

## Example

```jsx
import { Button } from "synapsefi-chatbot-ui";

<Button onClick={() => console.log("This is an alert")} isDisabled fullWidth>
  Click
</Button>;
```

## Props

| Property    | Type          | Required | Description                                                 |
| ----------- | ------------- | -------- | ----------------------------------------------------------- |
| isDisabled  | `boolean`     | false    | Set isDisabled style, will prevent on click action          |
| onClick     | `function`    | false    | The onclick function that gets triggered when clicked       |
| fullWidth   | `boolean`     | false    | Rounded button or full width                                |
| id          | `string`      | false    | Id of the Button                                            |
| form        | `string`      | false    | The form attribute specifies the form the button belongs to |
| disableText | `string`      | false    | Text shown during the isDisabled state                      |
| buttonColor | `string`      | false    | Background color of the button                              |
| style       | `string`      | false    | Customized style                                            |
| children    | `htmlElement` | false    | Children of the button, usually string                      |
| type        | `string`      | false    | Type of the button                                          |
