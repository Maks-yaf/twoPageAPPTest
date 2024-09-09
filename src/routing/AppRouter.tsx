import React from 'react';
import {Routes, Route} from 'react-router-dom';
import Main from "../pages/Main";
import {publicRoutes} from "./routes";

const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}/>
            )}
            <Route path="*" element={<Main/>}/>
        </Routes>
    );
};

export default AppRouter;