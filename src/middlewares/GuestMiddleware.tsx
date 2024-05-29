import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const GuestMiddleware = () => {
  const {isLogin} = useSelector((state: any) => state.auth)
  console.log(isLogin);

  return !isLogin ? <Outlet /> : <Navigate to="/" />
}

export default GuestMiddleware