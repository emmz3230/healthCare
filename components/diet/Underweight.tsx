import { mealRecommendations } from '@/data';
import React from 'react';
import Foodcard from '../ui/Foodcard';

const Underweight = () => {
  return (
    <div className='flex flex-wrap justify-center items-center w-full h-auto bg-white p-4 rounded-lg'>
      {mealRecommendations.underweight.map((food, index) => (
        <Foodcard
          key={index}
          name={food.name}
          image={food.image}
          calories={food.calories}
          minerals={food.minerals}
        />
      ))}
    </div>
  );
};

export default Underweight;
