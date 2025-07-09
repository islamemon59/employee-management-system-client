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
    ],
  },
  {
    path: "dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "/dashboard/workSheet",
        Component: WorkSheet,
      },
      {
        path: "/dashboard/employeeList",
        Component: EmployeeList,
      },
      {
        path: "/dashboard/employeeDetails/:id",
        Component: EmployeeDetails,
      },
      {
        path: "/dashboard/progressList",
        Component: ProgressList,
      },
    ],
  },
]);
