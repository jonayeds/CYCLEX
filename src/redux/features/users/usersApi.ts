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
        })
    })
})

export const {useGetAllUsersQueryQuery} = usersApi