import React, { useContext } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const RecipesDetails = () => {
    const { id } = useParams();
    const datas = useLoaderData();
    console.log(datas.meals)
    return (
        <div>
            <h3>this is recipe details page and id is {id} and name: {datas.meals[0].strMeal}</h3>
        </div>
    );
};

export default RecipesDetails;