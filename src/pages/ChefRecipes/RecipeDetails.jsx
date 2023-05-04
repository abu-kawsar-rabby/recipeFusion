import React from 'react';

const RecipeDetails = ({ data }) => {
    return (
        <div>
            <div className="card card-compact w-96 bg-base-100 shadow-xl">
                <figure><img src={data?.picture} alt="Shoes" className='p-5 rounded-lg' /></figure>
                <div className="card-body">
                    <h2 className="card-title">{data?.title}!</h2>
                    <p>If a dog chews shoes whose shoes does he choose?</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-success">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RecipeDetails;