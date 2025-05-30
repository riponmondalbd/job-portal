import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import AddJob from "../pages/AddJob/AddJob";
import Home from "../pages/Home/Home";
import JobApply from "../pages/JobApply/JobApply";
import JobDetails from "../pages/JobDetails/JobDetails";
import MyApplications from "../pages/MyApplications/MyApplications";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import Register from "../pages/Register/Register";
import SignIn from "../pages/SignIn/SignIn";
import ViewApplications from "../pages/ViewApplications/ViewApplications";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h2>Route not found</h2>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "signin",
        element: <SignIn />,
      },
      {
        path: "/jobs/:id",
        element: (
          <PrivateRoute>
            <JobDetails />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/jobApply/:id",
        element: (
          <PrivateRoute>
            <JobApply />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/jobs/${params.id}`),
      },
      {
        path: "/myApplications",
        element: (
          <PrivateRoute>
            <MyApplications />
          </PrivateRoute>
        ),
      },
      {
        path: "/addJob",
        element: (
          <PrivateRoute>
            <AddJob />
          </PrivateRoute>
        ),
      },
      {
        path: "/myPostedJobs",
        element: (
          <PrivateRoute>
            <MyPostedJobs />
          </PrivateRoute>
        ),
      },
      {
        path: "/viewApplications/:job_id",
        element: (
          <PrivateRoute>
            <ViewApplications />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/job-applications/jobs/${params.job_id}`),
      },
    ],
  },
]);

export default router;
