import React from 'react';
import style from "../moduleCss/moduleComponents/RegistrationForm.module.css"
import {ToastContainer} from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import {useRegistrationForm} from "../hooks/useRegistrationForm";

const RegistrationForm = () => {

    const {username, setUsername, handleSubmit} = useRegistrationForm()

    return (
        <div className={style.container}>
            <div className={style.toastContainer}><ToastContainer/></div>
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