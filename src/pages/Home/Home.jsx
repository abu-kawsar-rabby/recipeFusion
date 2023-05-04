import React from 'react';
import Banner from './Banner';
import Chefs from './Chefs';
import Subcription from './Subcription';
import FeaturedRecipes from './FeaturedRecipes';
import { useLoaderData } from 'react-router-dom';

const Home = () => {
    const datas = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Chefs></Chefs>
            <FeaturedRecipes
                datas={datas}
            ></FeaturedRecipes>
            <Subcription></Subcription>
        </div>
    );
};

export default Home;