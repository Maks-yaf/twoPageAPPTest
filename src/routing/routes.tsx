import Main from "../pages/Main";
import {AUTH_ROUTE, MAIN_ROUTE} from "../utils/consts";
import Auth from "../pages/Auth";

export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    }
]