import React from 'react';
import {Link} from "react-router-dom";
import {usersApi} from "../api/UsersService";
import style from '../moduleCss/moduleComponents/UsersList.module.css'

const UsersList = () => {

    const {data: users, isLoading} = usersApi.useGetUsersQuery(10);

    return (
        <div className={style.card_grid}>
            {isLoading
                ?
                <h1 className={style.loading}>Loading users...</h1>
                :
                <div>
                    <h1 className={style.card_label}>All users</h1>
                    {users?.map((user) => (
                        <Link to={`/user/${user.id}`} className={style.link}>
                        <div
                            key={user.id}
                            className={style.userCard}
                        >
                            <div>{user.name}</div>
                        </div>
                        </Link >
                    ))}
                </div>
            }
        </div>
    );
};

export default UsersList;