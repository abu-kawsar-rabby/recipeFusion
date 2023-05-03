import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';

const Main = () => {
    return (
        <div>
            <div className="mx-28">
                <Header></Header>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Main;