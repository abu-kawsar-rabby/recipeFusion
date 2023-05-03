import React from 'react';
import { NavLink } from 'react-router-dom';
const ActiveLink = ({ to, children }) => {
    // const acti = { isActive };
    // console.log(acti)
    return (
        <NavLink
            to={to}
            className={`text-lg font-medium text-primary block mt-4 lg:inline-block lg:mt-0 hover:text-blue-400 mr-4 ${({ isActive }) => isActive && 'text-primary'}`}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;