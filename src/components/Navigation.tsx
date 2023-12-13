import React from 'react';
import {Link} from "react-router-dom";

const Navigation = () => {
    return (
        <nav>
            <span>
                <Link to='/'>Home</Link>
                <Link to='/favourite'>Favourite</Link>
            </span>
        </nav>
    );
};

export default Navigation;