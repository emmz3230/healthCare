import React from 'react'
import { mealRecommendations } from '../data'
import Overweight from './diet/Overweight'
import Healthy from './diet/Healthy'
import Underweight from './diet/Underweight'
import Obese from './diet/Obese'

const Diet = ( status ) => {
  return (
    <div>
      {status == "Underweight" ? <Underweight/> : status == "Healthy" ? <Healthy/> : status == " Overweight" ? <Overweight/> : status == "obese" ? <Obese/> : <Healthy/>}
    </div>
  )
}

export default Diet