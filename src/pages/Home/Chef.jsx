import React from 'react';
import LazyLoad from 'react-lazy-load';
import { useNavigate, useParams } from 'react-router-dom';

const Chef = ({ data }) => {

    const navigate = useNavigate();
    const handleDetailsRecipes = (id) => {
        navigate(`/chefs/${id}`)
    }
    return (
        <div>
            <div className="card h-[30rem] bg-base-100 shadow-xl">
                <figure className="">
                    <LazyLoad height={762} width={400} threshold={0.95} onContentVisible={() => { console.log('loaded!') }}>
                        <img className="rounded-3xl p-5 h-60 w-[30rem]" src={data?.chef_picture} alt="" />
                    </LazyLoad>

                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{data?.chef_name}</h2>
                    <p>Experience: {data?.years_of_experience}</p>
                    <p>Recipe: {data?.num_of_recipes}</p>
                    <p>Likes: {data?.likes}</p>
                    <div className="card-actions">
                        <button onClick={() => handleDetailsRecipes(data?.chef_id)} className="btn btn-success text-white">View Recipes</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;