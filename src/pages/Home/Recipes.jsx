import React from 'react';
import RecipeCard from './RecipeCard';

const Recipes = ({ data }) => {

    const recipes = data.recipes;


    return (
        <div>
            <div>
                {recipes.slice(0, 2).map(recipe => (
                    <RecipeCard key={recipe.id} recipe={recipe} />
                ))}
            </div>
        </div>
    );
};

export default Recipes;