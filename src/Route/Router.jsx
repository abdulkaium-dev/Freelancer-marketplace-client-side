import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AddTask from "../component/Add Task";
import BrowseTasks from "../component/browseTasks";
import MyPostedTasks from "../component/MyPostedTasks";
import Login from "../component/Login";
import Error from "../component/Error";
import Register from "../component/Register";
import Details from "../component/Details";
import Update from "../component/Update";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        Component: Home,
        loader: () => fetch("http://localhost:3000/datas"),
        hydrateFallbackElement: (
          <div className="flex justify-center items-center mt-48 ">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
          </div>
        ),
      },
      {
        path: "add-task",
        Component: AddTask,
        hydrateFallbackElement: (
          <div className="flex justify-center items-center mt-48 ">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
          </div>
        ),
      },
      {
        path: "browse-tasks",
        Component: BrowseTasks,
        loader: () => fetch("http://localhost:3000/datas"),
        hydrateFallbackElement: (
          <div className="flex justify-center items-center mt-48 ">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
          </div>
        ),
      },
      {
        path: "details/:_id",
        Component: Details,
        loader: () => fetch("http://localhost:3000/datas"),
        hydrateFallbackElement: (
          <div className="flex justify-center items-center mt-48 ">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
          </div>
        ),
      },
      {
        path: "my-posted-tasks",
        Component: MyPostedTasks,
        loader: () => fetch("http://localhost:3000/datas"),
        hydrateFallbackElement: (
          <div className="flex justify-center items-center mt-48 ">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
          </div>
        ),
      },
      {
        path: "update/:id",
        Component: Update,
        hydrateFallbackElement: (
          <div className="flex justify-center items-center mt-48 ">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
          </div>
        ),
      },
      {
        path: "login",
        Component: Login,
        hydrateFallbackElement: (
          <div className="flex justify-center items-center mt-48 ">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
          </div>
        ),
      },
      {
        path: "register",
        Component: Register,
        hydrateFallbackElement: (
          <div className="flex justify-center items-center mt-48 ">
            <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
          </div>
        ),
      },
    ],
  },
]);

export default router;
