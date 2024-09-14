import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IUsers } from '../types/IUsers';

export const usersApi = createApi({
    reducerPath: 'usersApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com' }),
    endpoints: (builder) => ({
        getUsers: builder.query<IUsers[], number>({
            query: (userID: number) => ({
                url: '/users',
                params: {
                    userID,
                }
            })
        })
    })
});
