import React, { useState, useEffect } from 'react';
import Recipes from './Recipes';

const FeaturedRecipes = ({ datas }) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        setIsLoading(false);
    }, []);

    return (
        <div className='my-10'>
            <h1 className='text-4xl font-bold text-center'>Featured Recipes</h1>
            <p className='font-medium text-center my-5'>Discover the world's most renowned food and dishes.</p>

            <div className='md:grid md:gap-10 md:grid-cols-3'>
                {datas.slice(0, 3).map(data => (
                    <Recipes key={data.chef_id} data={data} />
                ))}
            </div>
        </div>
    );
};

export default FeaturedRecipes;
