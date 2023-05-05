import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {

    const data = useLoaderData();

    return (
        <div className='mb-10'>
            <div className="hero min-h-screen shadow-2xl rounded-2xl">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={data?.chef_picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='text-center'>
                        <h1 className="text-5xl font-bold">{data?.chef_name}</h1>
                        <p className="py-6 mx-auto w-5/6">{data?.description}</p>
                        <p className="p font-bold text-xl">{data?.likes} Likes</p>
                        <p className="p my-3 font-bold text-xl">{data?.num_of_recipes} Recipes</p>
                        <p className="p font-bold text-xl">{data?.years_of_experience} Years Experience</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;