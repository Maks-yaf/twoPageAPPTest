import React, {useEffect, useState} from 'react';
import style from '../moduleCss/moodulePages/UserDetails.module.css';
import {useParams} from "react-router-dom";
import {IUsers} from "../types/IUsers";
import {usersApi} from "../api/UsersService";
import {toast, ToastContainer} from "react-toastify";
import UsersList from "../components/UsersList";

const UserDetails: React.FC = () => {

    const {id} = useParams<{ id: string }>();
    const [userInfo, setUserInfo] = useState<IUsers | null>(null);
    const {
        data: fetchedUser,
        error: userError,
        isLoading: userLoading,
    } = usersApi.useGetUsersQuery((Number(id)))

    useEffect(() => {
        if (userError) {
            toast.error('An error occurred while fetching the user info.');
        }
    }, [userError]);

    useEffect(() => {
        if (fetchedUser) {
            const userDetail = fetchedUser.find(p => p.id === Number(id));
            setUserInfo(userDetail || null);
        }
    }, [fetchedUser, id]);

    return (
        <>
            {userLoading && <h1 className={style.loading}>Loading...</h1>}
            <ToastContainer />
            <div className={style.container}>
                <div className={style.usersListContainer}>
                    <UsersList />
                </div>
                <div className={style.userDetailsContainer}>
                    {userInfo && (
                        <>
                            <h2>{userInfo.name}</h2>
                            <p><strong>Username:</strong> {userInfo.username}</p>
                            <p><strong>Email:</strong> {userInfo.email}</p>
                            <p><strong>Phone:</strong> {userInfo.phone}</p>
                            <p><strong>Website:</strong> {userInfo.website}</p>
                            <p><strong>Company:</strong> {userInfo.company.name}</p>
                            <p><strong>Company Catch Phrase:</strong> {userInfo.company.catchPhrase}</p>
                            <p><strong>Company BS:</strong> {userInfo.company.bs}</p>
                            <p>
                                <strong>Address:</strong> { `
                                ${userInfo.address.street}, 
                                ${userInfo.address.suite}, 
                                ${userInfo.address.city}, 
                                ${userInfo.address.zipcode}`}
                            </p>
                            <p><strong>Coordinates:</strong> Latitude: {userInfo.address.geo.lat},
                                Longitude: {userInfo.address.geo.lng}</p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default UserDetails;