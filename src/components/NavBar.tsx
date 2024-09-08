import React from 'react';
import style from './NavBar.module.css'
import {useNavigate} from "react-router-dom";
import {AUTH_ROUTE, MAIN_ROUTE} from "../utils/consts";
import {AppDispatch, RootState} from "../store/store";
import {useDispatch, useSelector} from "react-redux";
import {logOutAction} from "../store/user-reducer";
import "react-toastify/dist/ReactToastify.css";

const NavBar = () => {

    const dispatch: AppDispatch = useDispatch();
    const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);
    const user = useSelector((state: RootState) => state.userReducer.user);
    const navigate = useNavigate()

    const handleLogOut = () => {
        dispatch(logOutAction())
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
            {isAuth && user ? (
                <>
                    <h3 className={style.label} onClick={handleNavigateMain}>
                        Best Application
                    </h3>
                    <h2 className={style.welcome_message}>Welcome, {user.username}</h2>
                    <div>name: {user.name}</div>
                    <div>email: {user.email}</div>
                    <button className={style.button} onClick={handleLogOut}>
                        Log Out
                    </button>
                </>
            ) : (
                <>
                    <h3 className={style.label} onClick={handleNavigateMain}>
                        Best Application
                    </h3>
                    <button className={style.button} onClick={handleNavigateAuth}>
                        Sign In
                    </button>
                </>
            )}
        </div>
    );
};

export default NavBar;