"use client"
import React, { useState } from 'react'
import Diet from './Diet';
import Activities from './Activities';
import Exercise from './Exercise';

const AiResponse = (HealthStatus: string) => {
    const [index, setIndex] = useState(1)
  return (
    <div className='h-[85vh] w-[75%] bg-[#2893DF] items-center flex justify-center'>
        <div className='h-[90%] w-[90%] bg-[white] shadow-lg rounded-lg flex flex-col'>
            <div className='flex justify-start text-left border-b-2 w-full'>
                <button onClick={()=>{setIndex(1)}} className='p-2 m-2 bg-[#2893DF] text-white rounded-lg shadow-md'>Diet</button>
                <button onClick={()=>{setIndex(2)}} className='p-2 m-2 bg-[#2893DF] text-white rounded-lg shadow-md'>Exercises</button>
                <button onClick={()=>{setIndex(3)}} className='p-2 m-2 bg-[#2893DF] text-white rounded-lg shadow-md'>Activities</button>
            </div>
            <div>
                {index == 1 ? <Diet HealthStatus={HealthStatus}/> : index == 2 ? <Exercise/> : index == 3 ? <Activities/> : <Diet/> }
            </div>
        </div>
    </div>
  )
}

export default AiResponse