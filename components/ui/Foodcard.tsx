import React from "react";

interface FoodcardProps {
  name: string;
  image: string;
  calories: number;
  minerals: string;

}

const Foodcard: React.FC<FoodcardProps> = ({ name, image, calories, minerals }) => {
  return (
    <div className="bg-[#2893DF] text-white mx-4 p-2 w-[150px] h-[150px] flex flex-col justify-between items-center shadow-md rounded-lg scroll-smooth overflow-auto mt-2">
      <p className="bg-white text-[#2893DF] shadow-md rounded-md p-1">{name}</p>
      <h1 className="text-white">Calories: {calories}</h1>
      <h1 className="text-md shadow-md">{minerals}</h1>
    </div>
  );
};

export default Foodcard;
