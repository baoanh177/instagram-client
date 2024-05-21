import { Route } from "react-router-dom";
import { IRoute } from "../models/shared/routes";
import { Fragment } from "react/jsx-runtime";
import NotFound from "../pages/Error/NotFound";
import DefaultLayout from "../layouts/Default";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import GuestMiddleware from "../middlewares/GuestMiddleware";
import AuthLayout from "../layouts/Auth";

import Verify from "../pages/Verify";
import Explore from "../pages/Explore/Explore";
import Reels from "../pages/Reels/Reels";
import Messages from "../pages/Messages/Messages";
import Create from "../pages/Create/Create";
import Register from "../pages/Register/Register";
import ForgotPassword from "../pages/ForgotPassword/ForgotPassword";
import Status from "../pages/Status";
import Saved from "../pages/Saved";
import Tagged from "../pages/Tagged";

const renderRoutes = (routes: IRoute[], initPath = "/") => {
  return (
    <>
      {routes.map((route: IRoute, index) => {
        const {
          layout: Layout,
          middleware: Middleware,
          element: Component,
          path,
        } = route;

        const completePath = (initPath + path).replaceAll("//", "/");
        return (
          <Fragment key={index}>
            <Route path="*" element={<NotFound />} />
            {Layout ? (
              <Route path="/" element={<Layout />}>
                {Middleware ? (
                  <Route path="/" element={<Middleware />}>
                    {Component ? (
                      <Route path={completePath} element={<Component />} />
                    ) : (
                      renderRoutes(route.pages ?? [], completePath)
                    )}
                  </Route>
                ) : Component ? (
                  <Route path={completePath} element={<Component />} />
                ) : (
                  renderRoutes(route.pages ?? [], completePath)
                )}
              </Route>
            ) : Middleware ? (
              <Route path="/" element={<Middleware />}>
                {Component ? (
                  <Route path={completePath} element={<Component />} />
                ) : (
                  renderRoutes(route.pages ?? [], completePath)
                )}
              </Route>
            ) : Component ? (
              <Route path={completePath} element={<Component />} />
            ) : (
              renderRoutes(route.pages ?? [], completePath)
            )}
          </Fragment>
        );
      })}
    </>
  );
};

const routes: IRoute[] = [
  {
    path: "/",
    layout: DefaultLayout,
    pages: [
      {
        path: "/",
        element: Home,
      },
      {
        path: "/explore",
        element: Explore,
      },
      {
        path: "/reels",
        element: Reels,
      },
      {
        path: "/messages",
        element: Messages,
        // middleware: AuthMiddleware,
      },
      {
        path: "/create",
        element: Create,
      },
      {
        path: "/profile",
        layout: Profile,
        // middleware: AuthMiddleware,
        pages: [
          {
            path: '/',
            element: Status,
          },
          {
            path: '/tagged',
            element: Tagged,
          },
          {
            path: '/saved',
            element: Saved,
          },
        ]
      },
    ],
  },
  {
    path: "/login",
    element: Login,
    middleware: GuestMiddleware,
    layout: AuthLayout,
  },
  {
    path: "/register",
    element: Register,
    middleware: GuestMiddleware,
    layout: AuthLayout,
  },
  {
    path: "/verify",
    element: Verify,
    middleware: GuestMiddleware,
    layout: AuthLayout,
  },
  {
    path: "/password/reset",
    element: ForgotPassword,
    middleware: GuestMiddleware,
    layout: AuthLayout,
  },
];

export { routes, renderRoutes };
