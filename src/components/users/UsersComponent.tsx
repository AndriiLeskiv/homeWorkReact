import {useEffect, useState} from "react";
import {IUser} from "../../model/user/IUser.ts";
import {UserComponent} from "../user/UserComponent.tsx";
import {allUsersPagination} from "../../services/api.service.ts";
import {useSearchParams} from "react-router-dom";
import {PaginationComponent} from "../pagination/PaginationComponent.tsx";

export const UsersComponent = () => {
    const [users, setUsers] = useState<IUser[]>([]);
    const [totalPages, setTotalPages] = useState<number>(0);
    const [query] = useSearchParams()

    useEffect(() => {
        const fetchData = async () => {
            const page = parseInt(query.get('page') || '1', 10);
            const { users, totalUsers } = await allUsersPagination.getUsersPagination(page.toString());

            const calculatedTotalPages = Math.ceil(totalUsers / 30);

            setUsers(users);
            setTotalPages(calculatedTotalPages);
        };

        fetchData();
    }, [query]);

    return (
        <div>
            {
                users.map(user => <UserComponent key={user.id} item={user}/>)
            }
            <PaginationComponent totalPages={totalPages} />
        </div>
    );
};