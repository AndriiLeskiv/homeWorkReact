import {useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../redux/store.ts";
import {userAction} from "../redux/slices/UserSlice.ts";
import {IUser} from "../models/IUser.ts";

export const UsersPage = () => {
    const dispatch = useAppDispatch();
    const users =  useAppSelector((state)=> state.userStoreSlice.users)
    useEffect(() => {
        dispatch(userAction.loadUsers())
    }, []);

    return (
        <div>
            {users.length > 0 ? (
                users.map((user: IUser) => (
                    <div key={user.id}>
                        {user.name}
                    </div>
                ))
            ) : (
                <p>No users found.</p>
            )}
        </div>
    );
};