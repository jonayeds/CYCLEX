import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
// import { RootState } from '../store'

// const baseQuery = fetchBaseQuery({
//     baseUrl:"http://localhost:3000/api/v1",
//     credentials:"include",
//     prepareHeaders:(headers,{getState})=>{
//         const token = (getState() as RootState).auth.token
//     }
// })

export const pokemonApi = createApi({
    reducerPath: 'baseApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://pokeapi.co/api/v2/' }),
    endpoints:()=>({})
  })