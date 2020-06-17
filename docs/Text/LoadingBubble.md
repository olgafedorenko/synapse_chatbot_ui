# Loading bubble

## Example

```jsx
import { LoadingBubble } from "synapsefi-chatbot-ui";

<LoadingBubble
  clientColor={clientColor}
  bubbleColor={bubbleColor}
  bubbleBorder={bubbleBorder}
  withTail
/>;
```

## Props

| Property      | Type       | Required | Description                                    |
| ------------- | ---------- | -------- | ---------------------------------------------- |
| clientColor   | `string`   | true     | Client main color                              |
| bubbleColor   | `string`   | true     | Color of text bubble                           |
| bubbleBorder  | `string`   | true     | Color of the border of bubble                  |
| withTail      | `boolean`  | false    | Is the bubble has tail or not                  |