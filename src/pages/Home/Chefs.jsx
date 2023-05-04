import React, { useState, useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import Chef from './Chef';
import { FaSpinner } from 'react-icons/fa';

const Chefs = () => {
    const [isLoading, setIsLoading] = useState(true);
    const datas = useLoaderData();

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <div>
            <h1 className='text-3xl font-semibold text-center mt-5'>Our Most Popular Chef </h1>
            <p className='font-medium text-center mb-5'> <small>Discover the world's most renowned chefs and their signature dishes.</small></p>
            {isLoading ? (
                <FaSpinner />
            ) : (
                <div className="grid gap-10 grid-cols-3">
                    {datas.slice(0, 6).map(data =>
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
