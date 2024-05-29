import { useSelector } from "react-redux"
import { Navigate, Outlet } from "react-router-dom"

const AuthMiddleware = () => {

  const {isLogin} = useSelector((state :any) => state.auth);
  console.log("AuthMiddleware - isLogin:", isLogin);
  
  return isLogin ? <Outlet /> : <Navigate to="/login" />
}

export default AuthMiddleware