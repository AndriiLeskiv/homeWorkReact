import {Menu} from "../components/menu/Menu.tsx";
import {Outlet} from "react-router-dom";

export const Layout = () => {
    return (
        <div>
            <Menu/>
            <hr/>
            <Outlet/>
        </div>
    );
};