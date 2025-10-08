import React, { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import SetLoading from "../components/SetLoading";
const Home = lazy(() => import("../pages/Home"));
const Root = lazy(() => import("../layouts/Root"));
const Apps = lazy(() => import("../pages/Apps"));
const Installation = lazy(() => import("../pages/Installation"));
const AppDetails = lazy(() => import("../pages/AppDetails"));
const NotFound = lazy(() => import("../pages/NotFound"));

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    hydrateFallbackElement: SetLoading,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/all-apps",
        Component: Apps,
      },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/product-details/:id",
        Component: AppDetails,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
