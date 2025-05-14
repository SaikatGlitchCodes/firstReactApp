import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <h1 style={{ color: 'red' }} >Hello, world!</h1>
    <p>Welcome to my React app.</p>
    <input type="text" placeholder="Type here..." />
    <p>Current date: { new Date().toLocaleDateString() }</p>
  </>
);
// inline, internal, and external styles


// JSX is a syntax extension for JavaScript that looks similar to XML or HTML. It allows you to write HTML-like code within JavaScript, making it easier to create and manage UI components in React applications. JSX is not required to use React, but it is widely adopted because it makes the code more readable and expressive.

// JSX rules:

// 1. JSX must have a single root element: All JSX code must be wrapped in a single parent element. You can use a <div>, <React.Fragment>, or any other valid HTML or React component as the root element.
// Adjacent JSX elements must be wrapped in an enclosing tag
// React.Fragement <> </> ---> React Fragment sugar form

// 2. JSX elements must be properly closed: Self-closing tags (like <img /> or <input />) must have a closing slash, and all other tags must have a corresponding closing tag.

// 3. JavaScript expressions can be embedded in JSX: You can use curly braces {} to embed JavaScript expressions within JSX. This allows you to dynamically render values, call functions, and perform calculations.

// 4. Class names in JSX: In JSX, the attribute for specifying CSS classes is className instead of class. This is because class is a reserved keyword in JavaScript.
// 5. Style attribute in JSX: The style attribute in JSX accepts an object with camelCased properties instead of a string. For example, instead of style="background-color: red;", you would use style={{ backgroundColor: "red" }}.
