import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Shared/Header/Header';
import Footer from '../pages/Shared/Footer/Footer';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Main = () => {
    return (
        <div>
            <div className="mx-28">
                <Header></Header>
                <ToastContainer />
                <Outlet></Outlet>
            </div>
            <div className="">
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Main;