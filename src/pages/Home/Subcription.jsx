import React from 'react';
import sub_banner from '../../assets/banner/subcription_banner.jpg'
import { Link } from 'react-router-dom';

const Subcription = () => {
    return (
        <div className='mt-10 relative'>
            <img className='rounded-3xl h-72 w-full' src={sub_banner} alt="" />


            <div className='absolute top-1/2 left-1/2'>
                <h1 className='text-white text-3xl font-bold'>Subscribe to get Weekly
                    <br /> recipe updates
                </h1>
                <input type="email" name="" id="" />
                <Link to="/login"><button className='btn btn-success text-white'>Login</button></Link>
            </div>
        </div>
    );
};

export default Subcription;