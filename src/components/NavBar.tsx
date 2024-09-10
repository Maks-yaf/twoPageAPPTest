import React from 'react';
import style from '../moduleCss/moduleComponents/NavBar.module.css';
import {useNavigate} from "react-router-dom";
import {AppDispatch} from "../store/store";
import {logOutAction} from "../store/user-reducer";
import {useAppDispatch, useAppSelector} from "../hooks/redux";
import {AUTH_ROUTE, MAIN_ROUTE} from "../utils/consts";

const NavBar = () => {
    const dispatch: AppDispatch = useAppDispatch();
    const isAuth = useAppSelector((state) => state.userReducer.isAuth);
    const user = useAppSelector((state) => state.userReducer.user);
    const navigate = useNavigate();

    const handleLogOut = () => {
        dispatch(logOutAction());
        navigate(AUTH_ROUTE);
    };

    const handleNavigateMain = () => {
        navigate(MAIN_ROUTE);
    };

    const handleNavigateAuth = () => {
        navigate(AUTH_ROUTE);
    };

    return (
        <div className={style.navbar}>
            <h3 className={style.label} onClick={handleNavigateMain}>
                Best Application
            </h3>
            {isAuth && user ? (
                <>
                    <div>
                        <h2 className={style.welcome_message}>Welcome, {user.username}</h2>
                        <div className={style.user_info}>name: {user.name}</div>
                        <div className={style.user_info}>email: {user.email}</div>
                    </div>
                    <button className={style.button} onClick={handleLogOut}>
                        Log Out
                    </button>
                </>
            ) : (
                <button className={style.button} onClick={handleNavigateAuth}>
                    Sign In
                </button>
            )}
        </div>
    );
};

export default NavBar;