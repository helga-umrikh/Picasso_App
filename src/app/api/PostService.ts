import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IPost } from '../interface/IPost'

export const postAPI = createApi({
    reducerPath: 'postAPI',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://jsonplaceholder.typicode.com/',
    }),
    endpoints: (builder) => ({
        fetchAllPosts: builder.query<IPost[], { limit: number, startCount: number}>({
            query: ({limit, startCount}) => ({
                url: '/posts',
                params: {
                    _limit: limit,
                    _start: startCount,
                },
            }),
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            merge: (currentCache, newItems) => {
                currentCache.push(...newItems);
            },
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            }
        }),
        fetchPostById: builder.query<IPost, number>({
            query: (id: number) => `/posts/${id}`,
        }),
    }),
})

export const { useFetchAllPostsQuery } = postAPI;
