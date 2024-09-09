import React, {useEffect} from 'react';
import {postAPI} from "../api/PostService";
import PostItem from "./PostItem";
import {IPost} from "../types/IPost";
import style from "./PostContainer.module.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostContainer = () => {
    const {data: posts, error, isLoading} = postAPI.useFetchAllPostsQuery(8)

    useEffect(() => {
        if (error) {
            toast.error('An error occurred while fetching posts.');
        }
    }, [error]);

    return (
        <>
            <div className={style.toastContainer}><ToastContainer /></div>
            <div className={style.card_grid}>
                {isLoading && <h1>Loading....</h1>}
                {posts && posts.map((post: IPost) =>
                    <PostItem post={post} key={post.id}/>
                )}
            </div>
        </>

    );
};

export default PostContainer;