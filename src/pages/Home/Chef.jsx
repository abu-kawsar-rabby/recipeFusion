import React from 'react';
import { FaThumbsUp } from 'react-icons/fa';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom';

const Chef = ({ data }) => {
    const navigate = useNavigate();

    const handleDetailsRecipes = (id) => {
        navigate(`/chefs/${id}`);
    };

    return (
        <div>
            <div className="card h-[30rem] bg-base-100 shadow-xl">
                <figure>
                    <LazyLoadImage
                        alt={data?.chef_name}
                        src={data?.chef_picture}
                        className="rounded-3xl p-5 h-60 w-[30rem]"
                    />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{data?.chef_name}</h2>
                    <p className="text-sm">{data?.years_of_experience} Years Experience</p>
                    <p className="text-sm">{data?.num_of_recipes} Recipe </p>
                    <p className="text-sm flex justify-center items-center gap-2">
                        <FaThumbsUp />
                        {data?.likes} Likes
                    </p>
                    <div className="card-actions">
                        <button onClick={() => handleDetailsRecipes(data?.chef_id)} className="btn btn-success text-white">
                            View Recipes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;
