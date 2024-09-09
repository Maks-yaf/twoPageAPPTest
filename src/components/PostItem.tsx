import React, {FC} from 'react';
import style from "./PostItem.module.css";
import {PostItemProps} from "../types/IPostItemProps";

const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <div className={style.card}>
            <div className={style.image_placeholder}></div>
            <div className={style.card_title}>
                {post.title}
            </div>
            <div className={style.card_body}>
                {post.body}
            </div>
        </div>
    );
};

export default PostItem;