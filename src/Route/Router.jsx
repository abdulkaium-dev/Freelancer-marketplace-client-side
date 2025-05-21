
import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../Home/Home";
import AddTask from "../component/Add Task";
import BrowseTasks from "../component/browseTasks";
import MyPostedTasks from "../component/MyPostedTasks";
import Login from "../component/Login";




const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Root ,
             children: [
                {     
                      path: "/",
                    Component: Home,
                    hydrateFallbackElement: <div className="flex justify-center items-center mt-48 ">
                        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
                    </div>,

                },
                  {
                      path: "add-task",
                    Component: AddTask,
                    hydrateFallbackElement: <div className="flex justify-center items-center mt-48 ">
                        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
                    </div>,
                },
                     {
                      path: "browse-tasks",
                    Component: BrowseTasks,
                    hydrateFallbackElement: <div className="flex justify-center items-center mt-48 ">
                        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
                    </div>,
                },
                   {
                      path: "my-posted-tasks",
                    Component : MyPostedTasks,
                    hydrateFallbackElement: <div className="flex justify-center items-center mt-48 ">
                        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
                    </div>,
                },
                     {
                      path: "login",
                  Component : Login ,
                    hydrateFallbackElement: <div className="flex justify-center items-center mt-48 ">
                        <div className="w-12 h-12 border-4 border-dashed rounded-full animate-spin border-green-500"></div>
                    </div>,
                },

                
            ]
            
        }
    ])

export default router;