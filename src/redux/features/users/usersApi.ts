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
    updatePassword: builder.mutation({
      query: (payload) => {
        return {
          url: `/users/update-password`,
          method: "PATCH",
          body:payload
        };
      },
    }),
  }),
});

export const {
  useGetAllUsersQueryQuery,
  useToggleBlockUserMutation,
  useGetCurrentUserQuery,
  useUpdatePasswordMutation
} = usersApi;
