import { Outlet } from "react-router-dom"

const AuthLayout = () => {
  return <>
    <h1>Auth Layout</h1>
    <Outlet />
  </>
}

export default AuthLayout