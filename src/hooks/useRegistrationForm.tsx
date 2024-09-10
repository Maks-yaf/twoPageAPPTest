import {useState} from "react";
import {AppDispatch} from "../store/store";
import {useNavigate} from "react-router-dom";
import {fetchUserByUsername} from "../api/UserService";
import {setUserAction} from "../store/user-reducer";
import {toast} from "react-toastify";
import {IUser} from "../types/IUser";
import {useAppDispatch} from "./redux";

export const useRegistrationForm = () => {

    const [username, setUsername] = useState('');
    const dispatch: AppDispatch = useAppDispatch();
    const navigate = useNavigate()

    const handleSubmit = async () => {
        try {
            const data: IUser[] = await fetchUserByUsername(username);
            if (data.length > 0) {
                const user = data[0];
                dispatch(setUserAction(user));
                setTimeout(() => toast.success(`Welcome, ${user.username}!`), 100);
                navigate('/main');
            } else {
                toast.error(`User "${username}" not found.`);
            }
        } catch (error) {
            toast.error('Error fetching user data.');
        }
    };

    return {
        username,
        setUsername,
        handleSubmit,
    };
};