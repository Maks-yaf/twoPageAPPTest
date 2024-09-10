import React, {useEffect, useState} from 'react';
import {postAPI} from "../api/PostService";
import PostItem from "./PostItem";
import {IPost} from "../types/IPost";
import style from "../moduleCss/moduleComponents/PostContainer.module.css";
import {toast, ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PostContainer = () => {

    const [limit, setLimit] = useState<number>(8)
    const {
        data: posts,
        error,
        isLoading
    } = postAPI.useFetchAllPostsQuery(limit)

    useEffect(() => {
        if (error) {
            toast.error('An error occurred while fetching posts.');
        }
    }, [error]);

    const handleLimitChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setLimit(parseInt(e.target.value));
    };

    return (
        <>
            <div className={style.toastContainer}><ToastContainer/></div>
            <div className={style.filterContainer}>
                <label className={style.filterLabel}>
                    Show posts:
                </label>
                <select id="postLimit" value={limit} onChange={handleLimitChange} className={style.select}>
                    <option value="4">4</option>
                    <option value="8">8</option>
                    <option value="16">16</option>
                    <option value="32">32</option>
                    <option value="100">All (100)</option>
                </select>
            </div>
            <div className={style.card_grid}>
                {isLoading && <h1 className={style.loading}>Loading....</h1>}
                {posts && posts.map((post: IPost) =>
                    <PostItem post={post} key={post.id}/>
                )}
            </div>
        </>
    );
};

export default PostContainer;