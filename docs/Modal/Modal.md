# Modal

## Example

```jsx
import { Modal, Button } from "synapsefi-chatbot-ui";

<div>
	{isOpen ? 
		<Modal
			isOpen={isOpen}
			closeModal={() => this.setState({ isOpen: false })}
			disableOutsideOnClick
			className="modal"
			modalInnerStyle={{
				height: '500px'
			}}
		>
			<div>hello</div>
		</Modal>
		: null
	}
</div>

<Button onClick={() => this.setState({ isOpen: true })}>Open Modal</Button>
```

## Props

| Property              | Type                  | Required | Description                                                        |
| --------------------- | --------------------- | -------- | ------------------------------------------------------------------ |
| isOpen                | `bool`                | true     | Defines when the modal is visible                                  |
| closeModal            | `function`            | true     | Function that hides the modal, needed for clicking outside content |
| modalInnerStyle       | `innerStyle`          | false    | Inner Modal Inline CSS style of Modal                              |
| className             | `string`              | false    | className of the inner Modal                                       |
| disableOutsideOnClick | `bool`                | flase    | Disable outside click function which closes modal                      |
| children              | `componet/DOMelement` | flase    | Children componets                                                 |
