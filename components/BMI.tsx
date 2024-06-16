"use client"
import { updateBmiValue } from '@/actions';
import prisma from '@/db';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const BMI = () => {
    const [weight, setWeight] = useState(0);
    const [height, setHeight] = useState(0);
    const [bmi, setBmi] = useState(0);

    const session = useSession()

    const calculateBmi = () => {
        if (height && weight) {
            // @ts-ignore
            const intWeight = parseFloat(weight);
            // @ts-ignore
            const intHeight = parseFloat(height);
            const calculatedBmi = intWeight / (intHeight * intHeight);
            // @ts-ignore
            const bmiValue = setBmi(calculatedBmi.toFixed(2));
            return bmiValue;
        }
    };
    const handleButtonClick = async ()=>{
        await updateBmiValue(bmi);
        const bmiValue = calculateBmi()
    }
    return (
        <div className='w-full h-[680px] bg-[#CEE3F2] flex items-center justify-center'>
            <div className='flex flex-col justify-center items-center text-center w-[1100px] h-[620px] shadow-md rounded-lg bg-white'>
                <p className='text-black font-[Montserrat] font-bold text-2xl p-4'>Calculate BMI</p>
                <div className='shadow-lg h-[484px] w-[580px]'>
                    <div className='flex flex-col justify-start items-start p-10 bg-[#E3E3E3] h-full'>
                        <label htmlFor="weight" className='font-[roboto]'> Weight (Kg) </label>
                        <div className='w-[100%] p-4'>
                            <input 
                                onChange={(e) => setWeight(parseFloat(e.target.value))} 
                                type="number" 
                                placeholder='Enter Your Weight' 
                                className='text-start bg-white text-black p-4 w-full rounded-lg'
                            />
                        </div>
                        <label htmlFor="height" className='font-[roboto]'> Height (m) </label>
                        <div className='w-[100%] p-4'>
                            <input 
                                onChange={(e) => setHeight(parseFloat(e.target.value))} 
                                type="number" 
                                placeholder='Enter Your Height' 
                                className='text-start bg-white text-black p-4 w-full rounded-lg'
                            />
                        </div>
                        <button 
                            onClick={handleButtonClick} 
                            className='w-[95%] p-3 ml-3 mt-6 bg-[#2893DF] rounded-lg text-white text-xl font-bold'
                        >
                            Calculate BMI
                        </button>
                        <div className='py-[24px]'>
                            Your BMI result
                        </div>
                        <div className='font-bold text-2xl text-[#2893DF]'>
                            BMI: {bmi}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BMI;
