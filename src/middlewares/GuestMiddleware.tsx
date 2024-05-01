import { Navigate, Outlet } from "react-router-dom"

const GuestMiddleware = () => {
  const isLogin = false
  return !isLogin ? <Outlet /> : <Navigate to="/" />
}

export default GuestMiddleware