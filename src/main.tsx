// Importing Part
// Codes By Mahdi Tasha
import React from 'react'
import ReactDOM from 'react-dom/client'

// Variables
const rootElement:HTMLElement = document.getElementById('root') as HTMLElement;
const root:ReactDOM.Root = ReactDOM.createRoot(rootElement);

// Rendering Whole App Into StickMode Wrapper And Rendering That Inside In Root We Created Above
root.render(
  <React.StrictMode>
    <h1>asd</h1>
  </React.StrictMode>,
)
