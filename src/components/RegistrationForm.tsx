import React, {useEffect, useState} from 'react';
import style from "./RegistrationForm.module.css"
import {AppDispatch} from "../store/store";
import {useDispatch} from "react-redux";
import {setUserAction} from "../store/user-reducer";
import {useNavigate} from "react-router-dom";
import {toast, ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const RegistrationForm = () => {

    const [username, setUsername] = useState('');
    const dispatch: AppDispatch = useDispatch();

    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
            const data = await response.json();
            if (data.length > 0) {
                dispatch(setUserAction(data[0]));
                toast.success(`Welcome, ${data[0].username}!`);
                navigate('/main');
            } else {
                toast.error(`User "${username}" not found.`);
            }
        } catch (error) {
            toast.error('Error fetching user data.');
        }
    };


    return (
        <div className={style.container}>
            <div className={style.toastContainer }><ToastContainer /></div>
            <h2>Sign In</h2>
            <div className={style.login_form}>
                <input
                    className={style.input}
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Username"
                />
                <button
                    className={style.submit_button}
                    onClick={handleSubmit}
                >Submit
                </button>
            </div>
        </div>
    );
};

export default RegistrationForm;