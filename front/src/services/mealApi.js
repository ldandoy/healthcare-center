import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const mealApi = createApi({
    reducerPath: 'mealApi',
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
    tagTypes: ['meals'],
    endpoints: (builder) => ({
        getMeals: builder.query({
            query: () => `/meals?populate=user&sort[0]=createdAt%3Adesc`,
            providesTags: ['meals']
        }),
        getMeal: builder.query({
            query: (mealId) => `/meals/${mealId}?populate=user`,
            providesTags: ['meals']
        }),
        addMeal: builder.mutation({
            query: (meal) => ({
                url: `/meals`,
                method: "POST",
                body: { data: meal }
            }),
            invalidatesTags: ['meals']
        }),
        deleteMeal: builder.mutation({
            query: (mealId) => ({
                url: `/meals/${mealId}`,
                method: "DELETE",
            }),
            invalidatesTags: ['meals']
        }),
        updateMeal: builder.mutation({
            query: ({mealId, ...meal}) => ({
                url: `/meals/${mealId}`,
                method: "PUT",
                body: { data: meal }
            }),
            invalidatesTags: ['meals']
        })
    })
})

export const { 
    useGetMealsQuery, 
    useGetMealQuery, 
    useAddMealMutation, 
    useDeleteMealMutation, 
    useUpdateMealMutation 
} = mealApi