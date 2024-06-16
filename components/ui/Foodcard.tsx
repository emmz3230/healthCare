import React from "react";

const Foodcard = ({ name, image, calories, minerals }) => {
  return (
    <div className="bg-[#2893DF] text-white m-8 p-2 w-[150px] h-[150px] scroll-smooth">
      <p className="bg-white text-[#2893DF] shadow-md rounded-md p-1">{name}</p>
      <h1 className="text-white">calories: {calories}</h1>
      <h1 className="text-md shadow-md">{minerals}</h1>
    </div>
  );
};

export default Foodcard;
