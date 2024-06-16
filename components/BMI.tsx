"use client";
import { updateBmiValue } from '@/actions';
import { getUserId } from '@/app/queries';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

const BMI = () => {
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<number>(0);
  const [bmi, setBmi] = useState<number | null>(null);

  const { data: session } = useSession();
    console.log(session)
  const calculateBmi = () => {
    if (height && weight) {
      const intWeight = parseFloat(weight.toString());
      const intHeight = parseFloat(height.toString());
      const calculatedBmi = intWeight / (intHeight * intHeight);
      setBmi(parseFloat(calculatedBmi.toFixed(2)));
      console.log("BMI calculated:", calculatedBmi.toFixed(2)); // Debug log
    }
  };

  const handleButtonClick = () => {
    console.log("Button clicked"); // Debug log
    calculateBmi();
  };

  useEffect(() => {
    if (bmi !== null) {
      console.log("useEffect triggered with BMI:", bmi); // Debug log
      const updateBmi = async () => {
        const id = await getUserId()
        if (id) {
            console.log("Updating BMI for user ID:", id); // Debug log
            await updateBmiValue(bmi, id);
            console.log("BMI updated successfully"); // Debug log
          } else {
            console.log("User ID not found in session"); // Debug log
        }
      };
      updateBmi();
    }
  }, [bmi]);

  return (
    <div className='w-full h-[680px] bg-[#CEE3F2] flex items-center justify-center' id='bmiSection'>
      <div className='flex flex-col justify-center items-center text-center w-[1100px] h-[620px] shadow-md rounded-lg bg-white'>
        <p className='text-black font-[Montserrat] font-bold text-2xl p-4'>Calculate BMI</p>
        <div className='shadow-lg h-[484px] w-[580px] rounded-lg'>
          <div className='flex flex-col justify-start items-start p-10 bg-[#E3E3E3] rounded-lg h-full'>
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
            <div className='flex flex-row justify-evenly w-full'>
              <div>
                <div className='py-[24px]'>
                  Your BMI result
                </div>
                <div className='font-bold text-2xl text-[#2893DF] flex flex-row justify-between w-full'>
                  <div>
                    BMI: {bmi !== null ? bmi : 'N/A'}
                  </div>
                </div>
              </div>
              <div>
                <p className=' py-[24px] pr-4'>Suggestions</p>
                <Link href={'/ai'}>
                  <div className='mr-4 p-1 font-thin rounded-lg  mb-1 border-2 border-[#2893DF] hover:bg-[#2893DF] hover:text-white '>
                    AI Nutritionist
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BMI;
