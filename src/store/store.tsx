import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./user-reducer";
import {postAPI} from "../api/PostService";
import {commentAPI} from "../api/CommentService";
import {usersApi} from "../api/UsersService";

const rootReducer = combineReducers({
    userReducer,
    [postAPI.reducerPath]: postAPI.reducer,
    [commentAPI.reducerPath]: commentAPI.reducer,
    [usersApi.reducerPath]: usersApi.reducer,
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware()
                .concat(postAPI.middleware)
                .concat(commentAPI.middleware)
                .concat(usersApi.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type AppDispatch = AppState['dispatch']