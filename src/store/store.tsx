import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
import mainReducer from "./main-reducer";
import postReducer from "./main-reducer";
import {postAPI} from "../services/PostService";

const rootReducer = combineReducers( {
    // main: mainReducer,
    // auth: authReducer,
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



// export default store

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type AppDispatch = AppState['dispatch']