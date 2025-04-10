import { baseApi } from "../../api/baseApi";

const usersApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllUsersQuery: builder.query({
            query:()=>{
                return {
                    url:"/users/",
                    method:"GET",
                }
            }
        }),
        toggleBlockUser: builder.mutation({
            query:(userId:string)=>{
                return {
                    url:`/users/${userId}`,
                    method:"PATCH",
                }
            }
        })
    })
})

export const {useGetAllUsersQueryQuery, useToggleBlockUserMutation} = usersApi