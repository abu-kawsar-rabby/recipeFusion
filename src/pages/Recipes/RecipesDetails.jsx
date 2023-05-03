import React from 'react';
import { useParams } from 'react-router-dom';

const RecipesDetails = () => {
    const { id } = useParams();
    return (
        <div>
            <h3>this is recipe details page and id is {id}</h3>
        </div>
    );
};

export default RecipesDetails;