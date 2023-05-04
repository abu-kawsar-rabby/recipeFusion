import React from 'react';
import { useLoaderData } from 'react-router-dom';

const ChefDetails = () => {

    const data = useLoaderData();

    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={data?.chef_picture} className="max-w-sm rounded-lg shadow-2xl" />
                    <div>
                        <h1 className="text-5xl font-bold">{data?.chef_name}</h1>
                        <p className="py-6">{data?.chef_description}</p>
                        <p className="py-6">Likes{data?.likes}</p>
                        <p className="py-6">num_of_recipes{data?.num_of_recipes}</p>
                        <p className="py-6">years_of_experience{data?.years_of_experience}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefDetails;