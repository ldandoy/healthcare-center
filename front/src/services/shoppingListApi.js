import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const shoppingListApi = createApi({
    reducerPath: 'shoppingListApi',
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
    tagTypes: ['shopping-lists'],
    endpoints: (builder) => ({
        getShoppingLists: builder.query({
            query: () => `/shopping-lists?populate=user&sort[0]=createdAt%3Adesc`,
            providesTags: ['shopping-lists']
        }),
        addShoppingList: builder.mutation({
            query: (article) => ({
                url: `/shopping-lists`,
                method: "POST",
                body: { data: article }
            }),
            invalidatesTags: ['shopping-lists']
        })
    })
})

export const { useGetShoppingListsQuery, useAddShoppingListMutation } = shoppingListApi