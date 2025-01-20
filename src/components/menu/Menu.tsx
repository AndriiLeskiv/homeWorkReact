import {Link} from "react-router-dom";

export const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to={'cars'}>Cars</Link></li>
                <li><Link to={'forms'}>Form</Link></li>
            </ul>
        </div>
    );
};