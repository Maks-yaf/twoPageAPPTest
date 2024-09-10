import React from 'react';
import RegistrationForm from "../components/RegistrationForm";
import style from "../moduleCss/moodulePages/Auth.module.css"

const Auth = () => {
    return (
        <div className={style.registrationForm}>
            <RegistrationForm/>
        </div>
    );
};

export default Auth;