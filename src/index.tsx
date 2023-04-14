// Codes By Mahdi Tasha
// Importing Part
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './pages/homePage';
import BlogPage from './pages/blogPage';
import HeaderHolderComponent from "./components/headerHolderComponent";

// Variables
const rootElement:HTMLElement = document.getElementById('root') as HTMLElement;
const root:ReactDOM.Root = ReactDOM.createRoot(rootElement);

// Rendering Whole App Into StickMode Wrapper And Rendering That Inside In Root We Created Above
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <HeaderHolderComponent />
            <Routes>
                <Route path={'/'} element={<HomePage />}/>
                <Route path={'/blogs/:encodedDate'} element={<BlogPage />}/>
                <Route path={'*'} element={<h1>nothing found</h1>} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
)