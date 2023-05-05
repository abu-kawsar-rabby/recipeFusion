import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Rating from './Rating';
import '../Blog/Modal/Modal.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';

const RecipeCard = ({ recipe }) => {

    const [clicked, setClicked] = useState(false);

    const handleLikebtn = () => {
        toast('the recipe is your favorite')
        setClicked(true);
    }
    return (
        <div>
            <div className="card h-[25rem] bg-base-100 mb-5 shadow-xl">
                <figure className="rounded-3xl">
                    <LazyLoadImage
                        alt={recipe?.chef_name}
                        src={recipe?.picture}
                        className="rounded-3xl p-5 h-60 w-[30rem]"
                    />
                </figure>
                <div className="card-body items-center">
                    <div className="flex justify-center items-center">
                        <h2 className="card-title">{recipe?.title}</h2>
                    </div>
                    <div className="card-actions">
                        <p className='text-sm font-bold text-center'> Rating:
                            <Rating rating={recipe.rating} /></p>
                        <div className='text-center'>
                            <label htmlFor={`my-modal-${recipe.id}`} className="btn btn-success text-white mt-3 mr-3">View Details</label>
                            <button className="btn btn-success mt-1 text-white" disabled={clicked} onClick={handleLikebtn}>
                                Add To Favorite
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <input type="checkbox" id={`my-modal-${recipe.id}`} className="modal-toggle" />
            <label htmlFor={`my-modal-${recipe.id}`} className="modal cursor-pointer">
                <div className="modal-box relative text-center">
                    <button className="modal-close absolute top-0 right-0" htmlFor={`my-modal-${recipe.id}`}><i className="fas fa-times"></i></button>
                    <h3 className="text-lg font-bold">{recipe?.title}</h3>
                    <img src={recipe?.picture} className='w-3/4 h-60 mx-auto rounded-3xl p-5' alt="" />
                    <div className="ingredients-and-instructions flex justify-between">
                        <ul className='w-1/2 pl-5'>
                            <h1 className='font-bold text-xl'>Ingredients</h1>
                            {
                                recipe.ingredients.map((i, index) => <li key={index}>{i}</li>)
                            }
                        </ul>
                        <ul className='w-1/2 pl-5'>
                            <h1 className='font-bold text-xl'>Instructions</h1>
                            {
                                recipe.cooking_method.map((i, index) => <li key={index}>{i}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </label>
        </div>
    );
};

export default RecipeCard;
