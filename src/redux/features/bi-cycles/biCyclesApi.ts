
import { TQueryParams } from "../../../types/global.types";
import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints:(builder)=>({
        getAllBiCycles: builder.query({
            query:(args)=>{
                const params = new URLSearchParams()
                args?.forEach((item: TQueryParams) =>
                    params.append(item.name, item.value)
                  );
                return{
                url:"/products/",
                method:"GET",
                params
            }}
        }),
        getSingleBicycle: builder.query({
            query:(params)=>{
                return {
                    url:`/products/${params}`,
                    method:'GET'
                }
            }
        })
    })
})

export const {useGetAllBiCyclesQuery, useGetSingleBicycleQuery} = authApi