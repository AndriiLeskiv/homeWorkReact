import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'cars'}>Cars</Link></li>
                <li><Link to={'forms'}>Form created new car</Link></li>
                <li><Link to={'/cars/details'}>Cars details</Link></li>
            </ul>
        </div>
    );
};