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
        path: "/dashboard/workSheet",
        element: (
          <PrivateRoute>
            <WorkSheet></WorkSheet>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/paymentHistory",
        element: (
          <PrivateRoute>
            <EmployeePaymentHistory/>
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/employeeList",
        element: (
          <PrivateRoute>
            <EmployeeList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/employeeDetails/:id",
        element: (
          <PrivateRoute>
            <EmployeeList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/progressList",
        element: (
          <PrivateRoute>
            <ProgressList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/allEmployeeList",
        element: (
          <PrivateRoute>
            <AllEmployeeList />
          </PrivateRoute>
        ),
      },
      {
        path: "/dashboard/payRoll",
        Component: PayRoll,
        element: (
          <PrivateRoute>
            <PayRoll />
          </PrivateRoute>
        ),
      },
    ],
  },
  {
    path: "/forbidden",
    Component: Forbidden,
  },
]);
