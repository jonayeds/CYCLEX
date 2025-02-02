import { jwtDecode } from "jwt-decode"

export const varifyToken = (token:string)=>{
    const decoded = jwtDecode(token)
    console.log(decoded)
    return decoded
}