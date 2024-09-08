import {IUser} from "../models/IUser";

interface UserState {
    user: IUser | null,
    isAuth: boolean,
    isLoading: boolean,
    error: string,
}

const initialState: UserState = {
    user: null,
    isAuth: false,
    isLoading: false,
    error: '',
}

const SET_USER = "SET_USER"
const LOG_OUT = "LOG_OUT"


const userReducer = (state = initialState, action: any): UserState => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
                isAuth: true,
            }
        case LOG_OUT: {
            return {
                ...state,
                user: null,
                isAuth: false,
            }
        }
        default:
            return state;
    }
};

export const setUserAction = (payload:any) => ({type:SET_USER, payload})
export const logOutAction = () => ({type:LOG_OUT})

export default userReducer;
