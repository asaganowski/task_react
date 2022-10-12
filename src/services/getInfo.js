import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const request = (url) => ({ url});

export const getInfo = createApi({
  reducerPath: 'getInfo',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://gorest.co.in/public/v1' }),
  endpoints: (builder) => ({
    getAllPosts: builder.query({
        query: () => request(`/posts`),
    }),
    
    getAllUsers: builder.query({
        query: () => request(`/users`),
    }),
    getAllTodos: builder.query({
      query: () => request(`/todos`),
    }),
    getUser: builder.query({
      query: (id) => request(`/users/${id}`),
    }),
    getCommentsByPostId: builder.query({
      query: (post_id) => request(`/posts/${post_id}/comments`),
    }),

  }),
})

export const { 
  useGetUserQuery,
  useGetAllUsersQuery,
  useGetAllPostsQuery, 
  useGetAllTodosQuery,
  useGetCommentsByPostIdQuery
} = getInfo // no needed refetch data when changing the path