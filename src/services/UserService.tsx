// import {setUserAction} from "../store/user-reducer";
// import {toast} from "react-toastify";
//
//
//
// export const handleSubmit = async () => {
//     try {
//         const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
//         const data = await response.json();
//         if (data.length > 0) {
//             dispatch(setUserAction(data[0]));
//             toast.success(`Welcome, ${data[0].username}!`);
//             navigate('/main');
//         } else {
//             toast.error(`User "${username}" not found.`);
//         }
//     } catch (error) {
//         toast.error('Error fetching user data.');
//     }
// };

export {}