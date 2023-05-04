import React from 'react';
import { FaHeart } from 'react-icons/fa';
import { useNavigate, useParams } from 'react-router-dom';

const RecipeCard = ({ recipe }) => {


    const navigate = useNavigate();
    const handleDetailsRecipes = (id) => {

        // navigate(`/chefs/${id}`)
    }
    return (
        <div>
            <div className="card h-[25rem] bg-base-100 shadow-xl">
                <figure className="">
                    <img className="rounded-3xl p-5 h-60 w-[30rem]" src={recipe?.picture} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <div className="flex justify-center items-center">
                        <h2 className="card-title mr-3">{recipe?.title}</h2>
                        <button><FaHeart className='' fill=''></FaHeart></button>
                    </div>
                    <div className="card-actions">
                        <label htmlFor="my-modal-4" className="btn btn-success text-white mt-5">View Details</label>
                    </div>
                </div>
            </div>
            <input type="checkbox" id="my-modal-4" className="modal-toggle" />
            <label htmlFor="my-modal-4" className="modal cursor-pointer">
                <label className="modal-box relative text-center" htmlFor="">
                    <h3 className="text-lg font-bold">{recipe?.title}</h3>
                    <img src={recipe?.picture} className='w-3/4 h-60 mx-auto rounded-3xl p-5' alt="" />
                    <ul className=' pl-5'>
                        <h1 className='font-bold text-xl'>Ingredients</h1>
                        {
                            recipe.ingredients.map((i, index) => <li key={index}>{i}</li>)
                        }
                    </ul>
                    <ul className='pl-5'>
                        <h1 className='font-bold text-xl'>Instructions</h1>
                        {
                            recipe.instructions.map((i, index) => <li key={index}>{i}</li>)
                        }
                    </ul>
                </label>
            </label>
        </div>
    );
};

export default RecipeCard;
