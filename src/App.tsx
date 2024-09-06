import React from 'react';
import './App.css';
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <div className="app">
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
}

export default App;
