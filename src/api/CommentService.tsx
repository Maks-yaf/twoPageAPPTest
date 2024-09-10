import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import {IComment} from '../types/IComment';

export const commentAPI = createApi({
    reducerPath: 'commentAPI',
    baseQuery: fetchBaseQuery({baseUrl: 'https://jsonplaceholder.typicode.com'}),
    endpoints: (build) => ({
        fetchCommentsByPost: build.query<IComment[], number>({
            query: (postId: number) => ({
                url: '/comments',
                params: {
                    postId,
                }
            })
        })
    })
});