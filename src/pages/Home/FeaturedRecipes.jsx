import React, { useState, useEffect } from 'react';
import { FaSpinner } from 'react-icons/fa';
import Recipes from './Recipes';

const FeaturedRecipes = ({ datas }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <div>
            <h1 className='text-3xl font-semibold text-center mt-5'>Featured Recipes</h1>
            <p className='font-medium text-center mb-5'><small>Discover the world's most renowned food and dishes.</small></p>
            {isLoading ? (
                <FaSpinner className="animate-spin h-8 w-8 mx-auto" />
            ) : (
                <div className='grid gap-10 grid-cols-3'>
                    {datas.slice(0,3).map(data => (
                        <Recipes key={data.chef_id} data={data} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FeaturedRecipes;
