import React, {FC} from 'react';
import {IPost} from "../models/IPost";
import style from "./PostItem.module.css";

interface PostItemProps {
    post: IPost;
}


const PostItem: FC<PostItemProps>= ({post}) => {
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