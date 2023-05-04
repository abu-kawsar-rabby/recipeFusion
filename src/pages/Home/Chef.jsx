import React from 'react';
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
                    <img className="rounded-3xl p-5 h-60 w-[30rem]" src={data?.chef_picture} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{data?.chef_name}</h2>
                    <p>{data.recipes[0].instructions[0]}</p>
                    <div className="card-actions">
                        <button onClick={() => handleDetailsRecipes(data?.chef_id)} className="btn btn-success">View Recipe</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Chef;