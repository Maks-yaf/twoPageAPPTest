import React, {FC} from 'react';
import style from "../moduleCss/moduleComponents/PostItem.module.css";
import {PostItemProps} from "../types/IPostItemProps";
import {Link} from "react-router-dom";

const PostItem: FC<PostItemProps> = ({post}) => {
    return (
        <Link to={`/post/${post.id}`} className={style.card}>
            <div className={style.image_placeholder}></div>
            <div className={style.card_title}>
                {post.title}
            </div>
            <div className={style.card_body}>
                {post.body}
            </div>
        </Link>
    );
};

export default PostItem;