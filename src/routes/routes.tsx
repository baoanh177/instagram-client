import { Route } from "react-router-dom";
import { IRoute } from "../models/shared/routes";
import { Fragment } from "react/jsx-runtime";
import NotFound from "../pages/Error/NotFound";
import DefaultLayout from "../layouts/Default";
import Home from "../pages/Home";
import Profile from "../pages/Profile";
import Login from "../pages/Login";
import AuthMiddleware from "../middlewares/AuthMiddleware";
import GuestMiddleware from "../middlewares/GuestMiddleware";
import AuthLayout from "../layouts/Auth";

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

        const completePath = (initPath + path).replaceAll("//", "/")
        return (
          <Fragment key={index}>
            <Route path="*" element={<NotFound />} />
            {Layout ? (
              <Route path="/" element={<Layout />}>
                {Middleware ? (
                  <Route path="/" element={<Middleware />}>
                    {Component ? <Route path={completePath} element={<Component />} /> : renderRoutes(route.pages ?? [], completePath)}
                  </Route>
                ) : (
                  Component ? <Route path={completePath} element={<Component />} /> : renderRoutes(route.pages ?? [], completePath)
                )}
              </Route>
            ) : Middleware ? (
              <Route path="/" element={<Middleware />}>
                {Component ? <Route path={completePath} element={<Component />} /> : renderRoutes(route.pages ?? [], completePath)}
              </Route>
            ) : (
              Component ? <Route path={completePath} element={<Component />} /> : renderRoutes(route.pages ?? [], completePath)
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
        path: "/profile",
        element: Profile,
        middleware: AuthMiddleware
      },
    ],
  },
  {
    path: "/login",
    element: Login,
    middleware: GuestMiddleware,
    layout: AuthLayout
  },
];

export { routes, renderRoutes };
