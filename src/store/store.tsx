import {combineReducers, configureStore} from "@reduxjs/toolkit";
import userReducer from "./user-reducer";
import {postAPI} from "../api/PostService";

const rootReducer = combineReducers( {
    userReducer,
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