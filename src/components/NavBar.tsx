import React from 'react';
import style from './NavBar.module.css'
import {NavLink} from "react-router-dom";
import {AUTH_ROUTE, MAIN_ROUTE} from "../utils/consts";
import {AppDispatch, RootState} from "../store/store";
import {useDispatch, useSelector} from "react-redux";
import {logOutAction} from "../store/user-reducer";

const NavBar = () => {

    const dispatch: AppDispatch = useDispatch();
    const isAuth = useSelector((state: RootState) => state.userReducer.isAuth);
    const user = useSelector((state: RootState) => state.userReducer.user);

    const handleLogOut = () => {
        dispatch(logOutAction());
    };


    return (
        <div className={style.navbar}>
            {isAuth && user ? (
                <>
                    <NavLink to={MAIN_ROUTE} className={style.link}>
                        <h3 className={style.label}>Best Application</h3>
                    </NavLink>
                    <>
                        <h2 className={style.welcome_message}>Welcome, {user.username}</h2>
                        <div>name: {user.name}</div>
                        <div>email: {user.email}</div>
                        <button
                            className={style.button}
                            onClick={handleLogOut}
                        >
                            Log Out
                        </button>
                    </>
                </>
            ) : (
                <>
                    <NavLink to={MAIN_ROUTE} className={style.link}>
                        <h3 className={style.label}>Best Application</h3>
                    </NavLink>
                    <NavLink to={AUTH_ROUTE}>
                        <button className={style.button}>Sign In</button>
                    </NavLink>
                </>
            )}
        </div>
    );
};

export default NavBar;