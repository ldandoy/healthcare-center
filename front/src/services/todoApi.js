import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const todoApi = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({ 
        baseUrl: `http://localhost:1337/api`,
        prepareHeaders: (headers, { getState }) => {
            const token = localStorage.getItem('jwt');
            if (token) {
                headers.set('authorization', `Bearer ${token}`)
            }
            return headers
        }
    }),
    tagTypes: ['todos'],
    endpoints: (builder) => ({
        getTodos: builder.query({
            query: () => `/todos?populate=user&sort[0]=createdAt%3Adesc`,
            providesTags: ['todos']
        }),
        addTodo: builder.mutation({
            query: (todo) => ({
                url: `/todos`,
                method: "POST",
                body: { data: todo }
            }),
            invalidatesTags: ['todos']
        })
    })
})

export const { useGetTodosQuery, useAddTodoMutation } = todoApi