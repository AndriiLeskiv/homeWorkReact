import {IUser} from "../../models/users/IUser.ts";
import { useEffect, useState} from "react";
import {IUserResponseModel} from "../../models/users/IUserResponseModel.ts";
import {UserComponent} from "../user/UserComponent.tsx";
import {userService} from "../../services/api.service.ts";

export const UsersComponent = () => {

    const [users, setUser] = useState<IUser[]>([])
    useEffect(() => {
        userService.getAllUsers()
        .then(({users}: IUserResponseModel) =>{
            setUser(users);
        });
    }, []);

    return(
        <div>
            {
                users.map(user=> <UserComponent key={user.id} item={user}/>)
            }
        </div>
    )
}