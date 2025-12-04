import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import PATH from "./path";

// Layouts
import UserLayout from "../layouts/UserLayout";
import RootLayout from "../layouts/RootLayout";

// Helper để lazy load mượt mà hơn (Optional)
// const Loadable = (Component) => (props) => (
//   <Suspense fallback={<LoadingScreen />}><Component {...props} /></Suspense>
// );

// Pages - Auth & General
const NotFoundPage = lazy(() => import("../pages/NotFoundPage"));
const LoginPage = lazy(() => import("../pages/LoginPage"));
const SignUpPage = lazy(() => import("../pages/SignUpPage"));

// Pages - User
const UserAppointmentPage = lazy(() => import("../pages/user/AppointmentPage"));
const UserHomePage = lazy(() => import("../pages/user/HomePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: PATH.LOGIN,
        element: <LoginPage />,
      },
      {
        path: PATH.SIGNUP,
        element: <SignUpPage />,
      },
    ],
  },
  // Uss Routes
  {
    path: PATH.BASEPATH_USER,
    element: <UserLayout />, // Layout này nên chứa Sidebar của User
    errorElement: <NotFoundPage />,
    children: [
      {
        index: true,
        element: <UserHomePage />,
      },
      {
        path: PATH.USER_APPOINTMENT,
        element: <UserAppointmentPage />,
      },
    ],
  },
  // 404 Not Found Route
  {
    path: PATH.NOT_FOUND,
    element: <NotFoundPage />,
  },
]);

export default router;