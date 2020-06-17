# Modal

## Example

```jsx
import { Modal } from "synapsefi-chatbot-ui";

<Modal modalType="EDIT" fullWidth modalInnerStyle={{ height: "214px" }} />;
```

## Props

| Property        | Type         | Required | Description                                                  |
| --------------- | ------------ | -------- | ------------------------------------------------------------ |
| modalType       | `string`     | true     | Type of the Modal, `EDIT`, `LOADING`, `TERMINATED`, `RATING` |
| fullWidth       | `string`     | true     | Is the Modal customizable or not                             |
| modalInnerStyle | `innerStyle` | true     | Inner CSS style of Modal                                     |
| selectPath      | `function`   | false    | Callback function of which path modal inside                 |
