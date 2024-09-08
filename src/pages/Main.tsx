import React from 'react';

import PostContainer from "../components/PostContainer";
import style from "./Main.module.css"

const Main = () => {
    return (
        <div className={style.main}>
            <PostContainer/>
        </div>
    )
}

export default Main;