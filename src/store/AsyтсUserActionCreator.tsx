export {}
// import {AppDispatch} from "./store";
// import axios from "axios";
// import {userSlice} from './user-reducer'
// import {IUser} from "../models/IUser";
//
// export const fetchUser = () => async (dispatch: AppDispatch) => {
//     try {
//         dispatch(userSlice.actions.usersFetching())
//         const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users?username=${username}")
//         dispatch(userSlice.actions.usersFetchingSuccess(response.data))
//     } catch (e ) {
//         if (e instanceof Error) {
//             dispatch(userSlice.actions.usersFetchingError(e.message));
//         } else {
//             dispatch(userSlice.actions.usersFetchingError("Error fetching user"));
//         }
//     }
// }