import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home/Home";
import Register from "../Shared/Register/Register";
import Login from "../Shared/Login/Login";
import DashboardLayout from "../Layout/DashboardLayout";
import WorkSheet from "../Pages/Dashboard/WorkSheet/WorkSheet";
import EmployeeList from "../Pages/Dashboard/HRField/EmployeeList/EmployeeList";
import EmployeeDetails from "../Pages/Dashboard/HRField/EmployeeDetails/EmployeeDetails";
import ProgressList from "../Pages/Dashboard/HRField/ProgressList/ProgressList";
import AllEmployeeList from "../Pages/Dashboard/AdminField/EmployeeList/AllEmployeeList";
import PayRoll from "../Pages/Dashboard/AdminField/PayRoll/PayRoll";
import Forbidden from "../Components/Forbidden/Forbidden";
import PrivateRoute from "../Private/PrivateRoute";
import EmployeePaymentHistory from "../Pages/Dashboard/PaymentHistory/EmployeePaymentHistory";
import ContactUs from "../Pages/ContactUs/ContactUs";
import ErrorPage from "../Components/ErrorPage/ErrorPage";
import DashboardHome from "../Pages/Dashboard/DashboardHome/DashboardHome";
import VisitorMessage from "../Pages/Dashboard/AdminField/VisitorMessage/VisitorMessage";
import EmployeeRoute from "../Private/EmployeeRoute";
import HrRoute from "../Private/HrRoute";
import AdminRoute from "../Private/AdminRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "login",
        Component: Login,
      },
      {
        path: "contactUs",
        Component: ContactUs,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    children: [
      {
        path: "dashboard",
        element: (
          <PrivateRoute>
            <DashboardHome />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/workSheet",
        element: (
          <EmployeeRoute>
            <WorkSheet></WorkSheet>
          </EmployeeRoute>
        ),
      },
      {
        path: "/dashboard/paymentHistory",
        element: (
          <EmployeeRoute>
            <EmployeePaymentHistory />
          </EmployeeRoute>
        ),
      },
      {
        path: "/dashboard/employeeList",
        element: (
          <HrRoute>
            <EmployeeList />
          </HrRoute>
        ),
      },
      {
        path: "/dashboard/employeeDetails/:id",
        element: (
          <HrRoute>
            <EmployeeDetails />
          </HrRoute>
        ),
      },
      {
        path: "/dashboard/employeeDetails/:id",
        element: (
          <HrRoute>
            <EmployeeList />
          </HrRoute>
        ),
      },
      {
        path: "/dashboard/progressList",
        element: (
          <HrRoute>
            <ProgressList />
          </HrRoute>
        ),
      },
      {
        path: "/dashboard/allEmployeeList",
        element: (
          <AdminRoute>
            <AllEmployeeList />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payRoll",
        Component: PayRoll,
        element: (
          <AdminRoute>
            <PayRoll />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/visitor",
        element: (
          <AdminRoute>
            <VisitorMessage />
          </AdminRoute>
        ),
      },
    ],
  },
  {
    path: "/forbidden",
    Component: Forbidden,
  },
  {
    path: "*",
    Component: ErrorPage,
  },
]);
