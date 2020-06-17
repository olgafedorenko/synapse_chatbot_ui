# Header

## Example

```jsx
import { Header } from "synapsefi-chatbot-ui";

<Header />;
```

## Props

| Property       | Type      | Required | Description                                    |
| -------------- | --------- | -------- | ---------------------------------------------- |
| clientColor    | `string`  | true     | Client main color                              |
| defaultPath    | `string`  | true     | Current project name                           |
| router         | `boolean` | true     | Definition is the parent - Router chatbot      |
| headerText     | `string`  | true     | Header text                                    |
| headerSubText  | `string`  | false    | Type of progress bar in Bank Logins            |
| progressBar    | `string`  | false    | Type of progress bar in Bank Logins            |
| progressIdx    | `string`  | false    | Index of the step in progress bar              |
| isBusiness     | `string`  | false    | Definition if the project Business Bank Logins |
| handleMinimize | `string`  | false    | Callback function to minimize chatbot          |
| triggerModal   | `string`  | false    | Callback function to open modal                |
