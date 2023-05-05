import React from 'react';
import { NavLink } from 'react-router-dom';
import './ActiveLink.css'

const ActiveLink = ({ to, children }) => {
    return (
        <NavLink
            to={to}
            className={`text-lg mb-3 block font-bold mt-4 lg:inline-block lg:mt-0 mr-4 ${({ isActive }) => isActive && 'active'}`}
        >
            {children}
        </NavLink>
    );
};

export default ActiveLink;