import {useEffect, useState} from "react";
import {IUser} from "../../model/user/IUser.ts";
import {UserComponent} from "../user/UserComponent.tsx";
import {allUsersPagination} from "../../services/api.service.ts";
import {useSearchParams} from "react-router-dom";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [query] = useSearchParams()

    useEffect(() => {
        allUsersPagination.getUsersPagination(query.get('page') || '')
            .then((allUsers) => {
                setUsers(allUsers);
            })
    }, [query]);

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }
        </div>
    );
};