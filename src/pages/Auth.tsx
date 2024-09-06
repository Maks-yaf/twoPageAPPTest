import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {addCashAction, getCashAction} from "../store/auth-reducer";

const Auth = () => {

    const dispatch = useDispatch();
    const cash = useSelector((state: any) => state.auth.cash)
    console.log(cash)

    const addCash = (cash:number) => {
        dispatch(addCashAction(cash))
    }

    const getCash = (cash:number) => {
        dispatch(getCashAction(cash))
    }

    return (
        <div>
            <div><h1>AUTH</h1></div>
            <div>{cash}</div>
            <button onClick={() => addCash(Number(prompt()))}>ADD CASH</button>
            <button onClick={() => getCash(Number(prompt()))}>GET CASH</button>
        </div>
    );
};

export default Auth;