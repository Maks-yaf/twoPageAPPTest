import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {IPost} from "../types/IPost";
import {IComment} from "../types/IComment";
import {postAPI} from "../api/PostService";
import {commentAPI} from "../api/CommentService";
import {toast, ToastContainer} from "react-toastify";
import style from '../moduleCss/moodulePages/PostDetail.module.css';

const PostDetail = () => {
    const {id} = useParams<{ id: string }>();
    const [post, setPost] = useState<IPost | null>(null);
    const [comments, setComments] = useState<IComment[]>([]);
    const {
        data: fetchedPost,
        error: postError,
        isLoading: postLoading
    } = postAPI.useFetchAllPostsQuery(Number(id));
    const {
        data: fetchedComments,
        error: commentError,
        isLoading: commentLoading
    } = commentAPI.useFetchCommentsByPostQuery(Number(id));

    useEffect(() => {
        if (postError) {
            toast.error('An error occurred while fetching the post.');
        }
        if (commentError) {
            toast.error('An error occurred while fetching comments.');
        }
    }, [postError, commentError]);

    useEffect(() => {
        if (fetchedPost) {
            const postDetail = fetchedPost.find(p => p.id === Number(id));
            setPost(postDetail || null);
        }
    }, [fetchedPost, id]);

    useEffect(() => {
        if (fetchedComments) {
            setComments(fetchedComments);
        }
    }, [fetchedComments]);

    return (
        <>
            {(postLoading || commentLoading) && <h1 className={style.loading}>Loading...</h1>}
            <div className={style.postDetail}>
                <ToastContainer/>
                {post && (
                    <>
                        <h1 className={style.postTitle}>{post.title}</h1>
                        <p className={style.postBody}>{post.body}</p>
                        <h2 className={style.commentsTitle}>Comments:</h2>
                        <ul>
                            {comments.map(comment => (
                                <li key={comment.id} className={style.commentCard}>
                                    <p className={style.commentAuthor}>{comment.name}</p>
                                    <p className={style.commentBody}>{comment.body}</p>
                                    <p className={style.commentEmail}>{comment.email}</p>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </>
    );
};

export default PostDetail;