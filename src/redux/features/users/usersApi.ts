import { baseApi } from "../../api/baseApi";

const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllUsersQuery: builder.query({
      query: () => {
        return {
          url: "/users/",
          method: "GET",
        };
      },
    }),
    toggleBlockUser: builder.mutation({
      query: (userId: string) => {
        return {
          url: `/users/${userId}`,
          method: "PATCH",
        };
      },
    }),
    getCurrentUser: builder.query({
      query: () => {
        return {
          url: `/users/get-me`,
          method: "GET",
        };
      },
    }),
    getMyOrders: builder.query({
      query: () => {
        return {
          url: `/orders/my-orders`,
          method: "GET",
        };
      },
    }),
    updatePassword: builder.mutation({
      query: (payload) => {
        return {
          url: `/users/update-password`,
          method: "PATCH",
          body:payload
        };
      },
    }),
    deleteOrder: builder.mutation({
      query: (payload:string) => {
        return {
          url: `/orders/${payload}`,
          method: "DELETE",
        };
      },
    }),
  }),
});

export const {
  useGetAllUsersQueryQuery,
  useToggleBlockUserMutation,
  useGetCurrentUserQuery,
  useUpdatePasswordMutation,
  useGetMyOrdersQuery,
  useDeleteOrderMutation
} = usersApi;
