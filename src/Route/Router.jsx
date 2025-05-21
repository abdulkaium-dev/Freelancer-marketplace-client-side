import { createBrowserRouter } from "react-router";
import Root from "../Root/Root";
import Home from "../home/Home";
import SubscriptionDetail from "../component/SubscriptionDetail";
import Error from "../component/Error";
// import Login from "../component/Login";
import Register from "../component/Register";
import Login from "../component/Login";
import Privateroute from "./Privateroute";
import Profile from "../component/Profile";
import About from "../component/About";




const router = createBrowserRouter(
    [
        {
            path: "/",
            Component: Root,
            errorElement: <Error></Error>,
        }
    ])

export default router;