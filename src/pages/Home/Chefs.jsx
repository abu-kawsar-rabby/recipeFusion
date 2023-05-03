import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Chefs = () => {

    const chefs = useLoaderData();
    console.log(chefs)
    return (
        <div>
            <h1>total chef  is </h1>
        </div>
    );
};

export default Chefs;