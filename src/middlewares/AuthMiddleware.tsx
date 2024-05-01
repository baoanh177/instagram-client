import { Navigate, Outlet } from "react-router-dom"

const AuthMiddleware = () => {
  const isLogin = false
  return isLogin ? <Outlet /> : <Navigate to="/login" />
}

export default AuthMiddleware