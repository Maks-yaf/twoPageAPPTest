import React from 'react';
import RegistrationForm from "../components/RegistrationForm";
import style from "./Auth.module.css"

const Auth = () => {
    return (
        <div className={style.registrationForm}>
            <RegistrationForm />
        </div>
    );
};

export default Auth;