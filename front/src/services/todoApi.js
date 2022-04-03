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
        getTodo: builder.query({
            query: (todoId) => `/todos/${todoId}?populate=user`,
            providesTags: ['todos']
        }),
        addTodo: builder.mutation({
            query: (todo) => ({
                url: `/todos`,
                method: "POST",
                body: { data: todo }
            }),
            invalidatesTags: ['todos']
        }),
        deleteTodo: builder.mutation({
            query: (todoId) => ({
                url: `/todos/${todoId}`,
                method: "DELETE",
            }),
            invalidatesTags: ['todos']
        }),
        updateTodo: builder.mutation({
            query: ({todoId, ...todo}) => ({
                url: `/todos/${todoId}`,
                method: "PUT",
                body: { data: todo }
            }),
            invalidatesTags: ['todos']
        })
    })
})

export const { 
    useGetTodosQuery, 
    useGetTodoQuery, 
    useAddTodoMutation, 
    useDeleteTodoMutation, 
    useUpdateTodoMutation 
} = todoApi