import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetails from './ChefDetails';
import RecipeCard from '../Home/RecipeCard';
import { FaSpinner } from 'react-icons/fa';

const ChefRecipes = () => {
    const { id } = useParams();
    const [isLoading, setIsLoading] = useState(true);
    const datas = useLoaderData();
    const recipes = datas.recipes;

    useEffect(() => {

        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 2000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            <ChefDetails></ChefDetails>
            {isLoading ? (
                <FaSpinner className='w-full mx-auto' />
            ) : (
                <div className=''>
                    <h1 className='text-4xl font-bold text-center'>Recipe Info</h1>
                    <p className='font-medium text-center my-5'>Here's the all most renowned recipe from the chef.</p>
                    <div className='grid grid-cols-3 gap-5'>
                        {recipes.map(recipe => (
                            <RecipeCard key={recipe.id} recipe={recipe} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChefRecipes;
