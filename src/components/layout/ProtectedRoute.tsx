import { ReactNode } from "react"
import { useAppSelector } from "../../redux/hooks"
import {  selectCurrentUser } from "../../redux/features/auth/authSlice"
import { Navigate } from "react-router-dom"

const ProtectedRoute = ({children, role}: {children:ReactNode, role?:'customer'| 'admin'}) => {
    const user = useAppSelector(selectCurrentUser)
    if(!user){
      return <Navigate to={"/login"}/>
    }
    if(role && user?.role !== role){
      return <Navigate to={"/login"}/>
    }
  return children
}

export default ProtectedRoute