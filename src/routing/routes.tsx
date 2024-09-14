import {AUTH_ROUTE, MAIN_ROUTE, POST_ROUTE, USER_ROUTE} from "../utils/consts";
import Main from "../pages/Main";
import Auth from "../pages/Auth";
import PostDetail from "../pages/PostDetail";
import UserDetails from "../pages/UserDetails";


export const publicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: Main
    },
    {
        path: AUTH_ROUTE,
        Component: Auth
    },
    {
        path: POST_ROUTE,
        Component: PostDetail
    },
    {
        path: USER_ROUTE,
        Component: UserDetails
    },
]