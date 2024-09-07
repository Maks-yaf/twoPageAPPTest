import React from 'react';
import {postAPI} from "../services/PostService";
import PostItem from "./PostItem";
import {IPost} from "../models/IPost";
import style from "./PostContainer.module.css"

const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(8)
    return (
        <div className={style.card_grid}>
                {isLoading && <h1>Loading....</h1>}
                {error && <h1>An unknown error occurred</h1>}
                {posts && posts.map((post:IPost) =>
                    <PostItem post={post} key={post.id}/>
                )}
        </div>
    );
};

export default PostContainer;