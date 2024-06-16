import { mealRecommendations } from '@/data'
import React from 'react'
import Foodcard from '../ui/Foodcard'

const Underweight = () => {
  return (
    <div className='flex flex-row w-[200px] h-[300px] rounded-lg bg-[#2893DF] text-white'>
        {mealRecommendations.underweight.map((food, index)=>(
            <div className='flex flex-row w-[200px] h-[300px] rounded-lg bg-[#2893DF] text-white'>
                <Foodcard
                    key = {index}
                    name = {food.name}
                    image = {food.image}
                    calories = {food.calories}
                    minerals = {food.minerals}
                />
            </div>
        ))}
    </div>
  )
}

export default Underweight