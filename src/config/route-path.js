import Home from "views/home/home";
import Vendors from "views/vendors/vendors";

const routes = [
    {
        path: "/",
        component: Home,
    },
    {
        path: '/vendors',
        component: Vendors
    }


];

export default routes;
