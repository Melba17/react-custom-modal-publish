# React Custom Modal

An **accessible and customizable modal window** built with React, designed to replace the jQuery plugin [`jquery.modal`](https://github.com/kylefox/jquery-modal).

This component is built to be **lightweight**, **keyboard accessible**, **easy to style with CSS**, and perfectly reusable in modern projects.

---

## ✨ Features

- ⚛️ Reusable React component  
- ♿ Accessibility support (`role="dialog"`, `aria-modal`, keyboard navigation)  
- 🎨 Fully customizable design (size, colors, typography…)  
- 🚀 Modern icons via [Font Awesome](https://fontawesome.com/)  
- 🌈 Smooth opening animation (`fadeInScale`)  
- 💻 Styling inspired by the HRnet design system  

---

## ⚠️ Requirements

This component requires:

- React 17 or higher  
- react-dom  

---

## 📦 Installation

```bash
npm install react-custom-modal-publish
```

> This package assumes that `react` and `react-dom` are already installed in your project.

### External dependencies

If you haven’t already, install the Font Awesome icons used by the modal:

```bash
npm install @fortawesome/react-fontawesome @fortawesome/free-solid-svg-icons
```

---

## 🚀 How to use

```jsx
import Modal from 'react-custom-modal-publish'
import { useState } from 'react'

function App() {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <button onClick={() => setShowModal(true)}>Open Modal</button>

      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        title="Great news!"
      >
        <p>The new employee has been successfully created.</p>
      </Modal>
    </>
  )
}
```

---

## 📋 Available props

| Prop        | Type         | Required | Description                                              |
|-------------|--------------|----------|----------------------------------------------------------|
| `isOpen`    | `boolean`    | ✅       | Controls the modal's visibility                          |
| `onClose`   | `function`   | ✅       | Called when the modal is closed                          |
| `title`     | `string`     | ✅       | Modal header title, displayed with a rocket icon         |
| `children`  | `ReactNode`  | ✅       | Modal content (text, HTML elements, or React components) |

---

## 🎨 Styling

The modal styling is handled through the included `Modal.css` file.

You can customize it freely:

- **Default font**: `'Segoe UI', sans-serif`  
- **Colors** consistent with the HRnet UI  
- **Zoom/fade** animation on open  
- **Styled buttons**, FontAwesome icons (rocket and close)  

---

## 📁 Example file structure

```plaintext
src/
├── components/
│   ├── Modal.jsx
│   └── Modal.css
```

---

## 📝 License

MIT – free to use and modify.

---

## 🔗 Useful links

📦 [View on npm](https://www.npmjs.com/package/react-custom-modal-publish)  
💻 [Source code on GitHub](https://github.com/Melba17/react-custom-modal-publish)
