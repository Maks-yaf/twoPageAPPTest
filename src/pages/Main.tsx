import React from 'react';
import PostContainer from "../components/PostContainer";
import style from "../moduleCss/moodulePages/Main.module.css"

const Main = () => {
    return (
        <div className={style.main}>
            <PostContainer/>
        </div>
    )
}

export default Main;