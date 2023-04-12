// Codes By Mahdi Tasha
// Importing Part
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage';
import HeaderComponent from './components/headerComponent';

// Variables
const rootElement:HTMLElement = document.getElementById('root') as HTMLElement;
const root:ReactDOM.Root = ReactDOM.createRoot(rootElement);

// Rendering Whole App Into StickMode Wrapper And Rendering That Inside In Root We Created Above
root.render(
    <React.StrictMode>
        <HeaderComponent />
        <BrowserRouter>
            <Routes>
                <Route path={'/'} element={<HomePage />}/>
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)
