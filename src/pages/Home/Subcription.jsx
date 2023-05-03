import React from 'react';
import { Link } from 'react-router-dom';

const Subcription = () => {
    return (
        <div className='mt-10 py-10 rounded-lg bg-neutral'>
            <div className='flex justify-center items-center'>
                <div>
                    <h1 className='text-white text-center text-3xl font-bold py-6'>Subscribe to get Weekly
                        <br /> recipe updates
                    </h1>
                    <div className="py-2 px-5 bg-white rounded-xl mb-2">
                        <input className='py-3 px-10 rounded-xl' type="email" name="" id="" />
                        <Link className='' to="/login"><button className='btn btn-success text-white'>Subcribe</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Subcription;