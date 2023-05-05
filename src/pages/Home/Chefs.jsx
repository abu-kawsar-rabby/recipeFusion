import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';

const Chefs = () => {

    const [isLoading, setIsLoading] = useState(true);

    const datas = useLoaderData();

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center'>Our Most Popular Chef </h1>
            <p className='font-medium text-center my-5'> Discover the world's most renowned chefs and their signature dishes.</p>
            {isLoading ? (
                <div className="flex justify-center items-center h-full">
                    <svg className="animate-spin h-10 w-10 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm12 0a8 8 0 100-16v2a6 6 0 010 12v2a8 8 0 008 8h4c0-6.627-5.373-12-12-12z"></path>
                    </svg>
                </div>
            ) : (
                <div className="md:grid md:gap-10 md:grid-cols-3">
                    {datas?.slice(0, 6).map(data =>
                        <Chef
                            key={data.chef_id}
                            data={data}
                        ></Chef>)
                    }
                </div>
            )}
        </div>
    );
};

export default Chefs;
