import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
    reducerPath: 'todoApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://lws-redux-backend-server.herokuapp.com'
    }),
    tagTypes:['todos'],
    endpoints: (builder) => ({
        getTodo: builder.query({
            query: () => '/todos',
            providesTags:['todos']
        }),
        addTodo: builder.mutation({
            query: (data) => ({
                url: `/todos`,
                method: 'POST',
                body: data,
            }),
            invalidatesTags:['todos']
        }),
        updateCompletionStatusOfTodo: builder.mutation({
            query: (data) => ({
                url: `/todos/${data.id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags:['todos']
        }),
        updateColorOfTodo: builder.mutation({
            query: (data) => ({
                url: `/todos/${data.id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags:['todos']
        }),
        editTextOfTodo: builder.mutation({
            query: (data) => ({
                url: `/todos/${data.id}`,
                method: 'PATCH',
                body: data,
            }),
            invalidatesTags:['todos']
        }),
        deleteTodo: builder.mutation({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
                
            }),
            invalidatesTags:['todos']
        }),
    })
})
export const { useGetTodoQuery,useAddTodoMutation,useUpdateCompletionStatusOfTodoMutation,useUpdateColorOfTodoMutation,useDeleteTodoMutation,useEditTextOfTodoMutation } = apiSlice;