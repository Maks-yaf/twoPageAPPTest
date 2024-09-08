import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./user-reducer";
import postReducer from "./main-reducer";
import {postAPI} from "../services/PostService";

const rootReducer = combineReducers( {
    userReducer,
    postReducer,
    [postAPI.reducerPath] : postAPI.reducer
})

export const setupStore = () => {
    return configureStore( {
        reducer: rootReducer,
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(postAPI.middleware)
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type AppDispatch = AppState['dispatch']