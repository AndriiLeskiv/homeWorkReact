import {FC} from "react";
import {IUser} from "../../model/user/IUser.ts";
import "./UserComponent.css";

type UserTypeProps ={
    item:IUser
}

export const UserComponent:FC<UserTypeProps> = ({item}) => {
    return (
        <div className="card">
            <img src={item.image} alt={item.username}/>
            <h3>{item.firstName} {item.lastName}</h3>
        </div>
    );
};