import {IUser} from "../types/IUser";

export const fetchUserByUsername = async (username: string): Promise<IUser[]> => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users?username=${username}`);
    if (!response.ok) {
        throw new Error('Network response not ok');
    }
    return response.json();
};