export type initialStateType = {
    cash: number,
}

let initialState: initialStateType = {
    cash: 24,
}

const ADD_CASH = "ADD_CASH"
const GET_CASH = "GET_CASH"


const authReducer = (state = initialState, action: any): initialStateType => {
    switch (action.type) {
        case ADD_CASH:
            return {
                ...state,
                cash: state.cash + action.payload,
            }
        case GET_CASH: {
            return {
                ...state,
                cash: state.cash - action.payload,
            }
        }
        default:
            return state;
    }
};

export const addCashAction = (payload:any) => ({type:ADD_CASH, payload})
export const getCashAction = (payload:any) => ({type:GET_CASH, payload})

export default authReducer;