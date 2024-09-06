import {AppDispatch} from "./store";
import axios from "axios";
import {IPost} from "../models/IPost";
import {postSlice} from './main-reducer'

export const fetchPosts = () => async (dispatch: AppDispatch) => {
    try {
        dispatch(postSlice.actions.postsFetching())
        const response = await axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts")
        dispatch(postSlice.actions.postsFetchingSuccess(response.data))
    } catch (e ) {
        if (e instanceof Error) {
            dispatch(postSlice.actions.postsFetchingError(e.message));
        } else {
            dispatch(postSlice.actions.postsFetchingError("An unknown error occurred"));
        }
    }
}