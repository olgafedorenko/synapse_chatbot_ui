# Text bubble

## Example

```jsx
import { TextBubble } from "synapsefi-chatbot-ui";

<TextBubble
  clientColor={clientColor}
  bubbleColor={bubbleColor}
  bubbleBorder={bubbleBorder}
  step={step}
/>;
```

## Props

| Property      | Type      | Required | Description                       |
| ------------- | --------- | -------- | --------------------------------- |
| clientColor   | `string`  | true     | Client main color                 |
| bubbleColor   | `string`  | true     | Color of text bubble              |
| bubbleBorder  | `string`  | true     | Color of the border of bubble     |
| step          | `object`  | true     | Step obj of chatbot               |
| withTail      | `boolean` | false    | Is the bubble has tail or not     |
| image         | `string`  | false    | Src of image                      |
| loading       | `boolean` | false    | Is bubble text loading or not     |
| fileType      | `string`  | false    | Definition of type of bubble      |
| horizontalImg | `string`  | false    | Is the image is horizontal or not |
