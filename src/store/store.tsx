import {combineReducers, configureStore} from "@reduxjs/toolkit";
import authReducer from "./auth-reducer";
import mainReducer from "./main-reducer";
import postReducer from "./main-reducer";

const rootReducer = combineReducers( {
    main: mainReducer,
    auth: authReducer,
    postReducer,
})

export const setupStore = () => {
    return configureStore( {
        reducer: rootReducer
    })
}



// export default store

export type RootState = ReturnType<typeof rootReducer>
export type AppState = ReturnType<typeof setupStore>
export type AppDispatch = AppState['dispatch']