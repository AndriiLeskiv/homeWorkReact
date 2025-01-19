import {IUser} from "../../models/IUser.ts";
import {useNavigate} from "react-router-dom";
import {FC} from "react";


type Props = {
    user:IUser;
}

export const UserComponent:FC<Props> = ({user}) => {

    const navigate = useNavigate();

    const onButtonClickNavigate = () => {
        navigate('/users/' + user.id + '/carts');
    }

    return <div>
        <h3>{user.username}</h3>
        <p>{user.lastName} {user.firstName}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <img src={user.image} alt={user.username}/>
        <button className={'border-2 border-black'} onClick={
            onButtonClickNavigate
        }>click me</button>
    </div>;
}