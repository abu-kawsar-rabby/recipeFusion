import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const RecipesDetails = () => {
    const { id } = useParams();
    const data = useLoaderData();
    console.log(data)
    return (
        <div>
            <h3>this is recipe details page and id is {id} and name: {data?.chef_name}</h3>
        </div>
    );
};

export default RecipesDetails;