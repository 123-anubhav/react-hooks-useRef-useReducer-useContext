# react-hooks-useRef-useReducer-useContext
react hooks-useRef, useReducer, useContext

---

# React useRef Hook Example

This project demonstrates the use of the **`useRef` Hook** in React through a basic and a real-time example. The `useRef` hook is used to directly access DOM elements and to manage mutable data without triggering re-renders.

---

## Table of Contents
- [Features](#features)
- [Project Structure](#project-structure)
- [Code Overview](#code-overview)
  - [Basic Example](#basic-example)
  - [Real-Time Use Case](#real-time-use-case)
- [Setup and Run](#setup-and-run)
- [Screenshots](#screenshots)

---

## Features
1. **Basic Example**: Accessing DOM element attributes directly using `useRef`.
2. **Real-Time Use Case**: Dynamically enabling and disabling a button based on user interaction (checkbox state).

---

## Project Structure
```
src/
├── assets/
│   └── nature_img.png         # Example image used in the app
├── components/
│   └── UseRefHook.js          # Main component demonstrating useRef examples
├── App.css                    # Styling for the app
├── App.js                     # Main application file
└── style.css                  # Additional styles
```

---

## Code Overview

### **Basic Example**
This example uses `useRef` to reference an image element and log its attributes (e.g., `src`, `alt`, `height`, `width`) to the console when a button is clicked.

#### Key Features:
- `refEl` is created using `useRef`.
- The `click` function accesses the `current` property of `refEl` to retrieve the image's attributes.

```jsx
<img 
  src={img1} 
  alt="load img..." 
  height="150" 
  width="150" 
  ref={refEl} 
  className="img-fluid" 
/>
```

### **Real-Time Use Case**
This example demonstrates a common real-time application of `useRef`. The checkbox controls whether the submit button is enabled or disabled.

#### Key Features:
- The `enableBtn` function toggles the `disabled` attribute of the button based on the checkbox state.
- `useRef` is used to manage the button reference.

```jsx
<input 
  type="checkbox" 
  name="terms" 
  onChange={enableBtn} 
/> Accept terms and conditions
<button 
  type="submit" 
  ref={refEl} 
  disabled 
  className="btn btn-sm btn-warning"
> submit </button>
```

---

## Setup and Run

### Prerequisites
- [Node.js](https://nodejs.org/) installed on your system.

### Steps
1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```bash
   cd project-folder
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

The application will be accessible at `http://localhost:3000`.

---

## Screenshots

### Basic Example
Displays an image and logs its attributes when the "click me" button is clicked.

### Real-Time Use Case
Dynamically enables the submit button based on the checkbox state.

---

## Acknowledgments
- **React Documentation**: For clear and comprehensive guides on `useRef`.
- **Bootstrap**: Used for styling and responsive design.

---
