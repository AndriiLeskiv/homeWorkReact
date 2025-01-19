import {UsersComponent} from "../components/users/UsersComponent.tsx";
import {PaginationComponent} from "../components/pagination/PaginationComponent.tsx";

export const UsersPage = () => {
    return (
        <div>
            <UsersComponent/>
            <PaginationComponent/>
        </div>
    );
};