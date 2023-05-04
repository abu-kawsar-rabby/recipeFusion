import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import ChefDetails from './ChefDetails';
import RecipeDetails from './RecipeDetails';
import RecipeCard from '../Home/RecipeCard';

const ChefRecipes = () => {
    const { id } = useParams();
    const datas = useLoaderData();
    const recipes = datas.recipes;

    return (
        <div>
            <ChefDetails></ChefDetails>
            <div className=''>

                <div className='grid grid-cols-4 gap-5'>
                    {recipes.map(recipe => (
                        <RecipeCard key={recipe.id} recipe={recipe} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ChefRecipes;