import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const weightApi = createApi({
    reducerPath: 'weightApi',
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
    tagTypes: ['weights'],
    endpoints: (builder) => ({
        getWeights: builder.query({
            query: () => `/weights?populate=user&sort[0]=day%3Aasc`,
            providesTags: ['weights']
        }),
        addWeight: builder.mutation({
            query: (weight) => ({
                url: `/weights`,
                method: "POST",
                body: { data: weight}
            }),
            invalidatesTags: ['weights']
        }),
        deleteWeight: builder.mutation({
            query: (weightId) => ({
                url: `/weights/${weightId}`,
                method: "DELETE",
            }),
            invalidatesTags: ['weights']
        }),
    })
})

export const { useGetWeightsQuery, useAddWeightMutation, useDeleteWeightMutation } = weightApi