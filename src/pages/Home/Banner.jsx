import React from 'react';
import meat from './../../assets/meat.png'

const Banner = () => {
    return (
        <div className='flex justify-between'>
            <div className="flex justify-center items-center">
                <div>
                    <h1 className='text-5xl font-bold leading-normal'>Let's Start
                        <br /> Cooking With
                        <br /> Popular Recipes</h1>
                    <p className='my-4 font-semibold'>Discover delicious and easy-to-follow recipes for every meal
                        <br /> and occasion on our website.</p>
                    <button className='btn btn-success text-white my-3 mr-3'>Get Started</button>
                    <button className='btn btn-outline btn-success text-white'>Explore More</button>
                </div>
            </div>
            <div className=''>
                <img className='pt-5' src={meat} alt="" />
            </div>
        </div>
    );
};

export default Banner;