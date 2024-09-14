import React from 'react';
import PostContainer from "../components/PostContainer";
import style from "../moduleCss/moodulePages/Main.module.css"
import {useAppSelector} from "../hooks/redux";
import UsersList from "../components/UsersList";

const Main = () => {

    const isAuth = useAppSelector((state) => state.userReducer.isAuth);

    return (
        <>
            {isAuth
                ? (
                    <div className={style.main}>
                        <div className={style.usersListContainer}>
                            <UsersList/>
                        </div>
                        <div className={style.postContainer}>
                            <PostContainer/>
                        </div>
                    </div>
                )
                : (
                    <div className={style.mainContainer}>
                    <PostContainer/>
                    </div>

                )
            }
        </>
    )
}

export default Main;