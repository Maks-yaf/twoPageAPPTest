import {IPost} from "../models/IPost";
import {createSlice, PayloadAction} from "@reduxjs/toolkit";

// const ADD_CUSTOMER = "ADD_CUSTOMER"
// const REMOVE_CUSTOMER = "REMOVE_CUSTOMER"
// const ADD_MANY_CUSTOMER = "ADD_MANY_CUSTOMER"

interface PostState {
    posts: IPost[],
    isLoading: boolean,
    error: string,
}

const initialState: PostState = {
    posts: [],
    isLoading: false,
    error: '',
}

export const postSlice = createSlice( {
    name: "post",
    initialState,
    reducers: {
        postsFetching(state) {
            state.isLoading = true;

        },
        postsFetchingSuccess(state, action: PayloadAction<IPost[]>) {
            state.isLoading = false;
            state.error = '';
            state.posts = action.payload;
        },
        postsFetchingError(state, action: PayloadAction<string>) {
            state.isLoading = false;
            state.error = action.payload;
        },
    }
})

export default postSlice.reducer;



//
// export type initialStateType = {
//     customers: any,
// }
//
// let initialState: initialStateType = {
//     customers: [],
// }
//
// export type RootState = {
//     auth: initialStateType,
// }
//
//
// const mainReducer = (state = initialState, action: any): initialStateType => {
//     switch (action.type) {
//         case ADD_MANY_CUSTOMER:
//             return {
//                 ...state,
//                 customers: [...state.customers, ...action.payload],
//             }
//         case ADD_CUSTOMER:
//             return {
//                 ...state,
//                 customers: [...state.customers, action.payload],
//
//             }
//         case REMOVE_CUSTOMER:
//             return {
//                 ...state,
//                 customers: state.customers.filter((customer: any) => customer.id !== action.payload),
//             }
//         default:
//             return state;
//     }
// };
//
// export const addCustomerAction = (payload: any) => ({type: ADD_CUSTOMER, payload})
// export const addManyCustomerAction = (payload: any) => ({type: ADD_MANY_CUSTOMER, payload})
// export const removerCustomerAction = (payload: any) => ({type: REMOVE_CUSTOMER, payload})
//
// export default mainReducer;