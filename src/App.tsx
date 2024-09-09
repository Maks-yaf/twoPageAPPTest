import React from 'react';
import style from './App.module.css'
import {BrowserRouter} from "react-router-dom";
import AppRouter from "./routing/AppRouter";
import NavBar from "./components/NavBar";

function App() {
    return (
        <BrowserRouter>
            <div className={style.app}>
                <NavBar />
                <AppRouter/>
            </div>
        </BrowserRouter>
    );
}

export default App;
