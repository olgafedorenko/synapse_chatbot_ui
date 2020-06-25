# Header

## Example

```jsx
import { Header } from "synapsefi-chatbot-ui";

<Header />;
```

## Props

| Property       | Type      | Required                    | Description                                          |
| -------------- | --------- | --------------------------- | ---------------------------------------------------- |
| clientColor    | `string`  | true                        | Client main color                                    |
| defaultPath    | `string`  | true                        | Current project name                                 |
| router         | `boolean` | true                        | Definition is the parent - Router chatbot            |
| headerText     | `string`  | true                        | Header text                                          |
| isBeta         | `boolean` | true                        | Beta banner                                          |
| headerSubText  | `string`  | false                       | Type of progress bar in Bank Logins                  |
| progressBar    | `string`  | true (just for Bank Logins) | Type of progress bar in Bank Logins (visual/regular) |
| progressIdx    | `string`  | true (just for Bank Logins) | Index of the step in progress bar                    |
| isBusiness     | `string`  | false                       | Definition if the project Business Bank Logins       |
| handleMinimize | `string`  | false                       | Callback function to minimize chatbot                |
| triggerModal   | `string`  | false                       | Callback function to open modal                      |
