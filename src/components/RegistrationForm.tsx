import React, {useState} from 'react';
import style from "./RegistrationForm.module.css"
import {AppDispatch, RootState} from "../store/store";
import {useDispatch, useSelector} from "react-redux";
import {setUserAction} from "../store/user-reducer";
import {useNavigate} from "react-router-dom";

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
                alert(`Welcome, ${data[0].username}!`);
                navigate('/main');
            } else {
                alert('User not found.');
            }
        } catch (error) {
            alert('Error fetching user data.');
            console.error('Error fetching user:', error);
        }
    };

    return (
                <div className={style.container}>
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