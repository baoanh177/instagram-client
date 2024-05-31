import { Routes, useNavigate } from "react-router-dom";
import { routes, renderRoutes } from "./routes/routes";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setMoreMenu } from "./stores/slices/app.slice";
import { AppDispatch } from "./stores/stores";
import { AuthActions } from "./models/index.model";

const App = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { theme, moreMenu } = useSelector((state: any) => state.app);
  const { action } = useSelector((state: any) => state.auth)
  const navigate = useNavigate()
  useEffect(() => {
    switch (action) {
      case AuthActions.REGISTER:
        alert('vui lòng kiểm tra email để kích hoạt tài khoản')
        // navigate('/verify')
        break;
      case AuthActions.LOGOUT:
        navigate('/login')
        break;
      default:
        break;
    }

  }, [action])

  useEffect(() => {
    const onClick = (e: any) => {
      if (!e.target.closest(".more-menu-toggle") && !e.target.closest(".more-menu")) {
        if (moreMenu) dispatch(setMoreMenu(false))
      }
    }
    window.addEventListener("click", onClick)
    return () => {
      window.removeEventListener("click", onClick)
    }
  }, [moreMenu]);

  return (
    <>
      <div
        className={`h-full ${theme} ${theme == "dark" ? "bg-black text-white" : "bg-white text-black"
          }`}
      >
        <Routes>{renderRoutes(routes)}</Routes>
      </div>
    </>
  );
};

export default App;
