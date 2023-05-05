import React from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa';

const Rating = ({ rating }) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = (rating - fullStars) >= 0.5;

    const stars = [];

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i} className="text-yellow-500" />);
    }

    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key={fullStars} className="text-yellow-500" />);
    }

    return (
        <div className="flex items-center justify-center">
            {stars}
            <span className="ml-2 text-gray-600 text-sm">{rating}</span>
        </div>
    );
};

export default Rating;
