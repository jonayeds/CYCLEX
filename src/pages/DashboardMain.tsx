import AdminDashboard from "../components/dashboard/AdminDashboard"
import CustomerDashboard from "../components/dashboard/CustomerDashboard"
import { selectCurrentUser } from "../redux/features/auth/authSlice"
import { useAppSelector } from "../redux/hooks"

const DashboardMain = () => {
    const user = useAppSelector(selectCurrentUser)
    console.log(user)
  return (
    <div>
        {
            user?.role ==="customer"? <CustomerDashboard/>:<AdminDashboard/>
        }
    </div>
  )
}

export default DashboardMain