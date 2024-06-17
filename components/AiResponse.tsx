import React, { useState } from 'react';
import Diet from './Diet';
import Activities from './Activities';
import Exercise from './Exercise';

const AiResponse = ({ HealthStatus, isLoading }) => {
  const [index, setIndex] = useState(1);

  return (
    <div className='h-[85vh] w-[75%] bg-[#2893DF] flex items-center justify-center'>
      <div className='h-[90%] w-[90%] bg-white shadow-lg rounded-lg flex flex-col'>
        <div className='flex justify-start text-left border-b-2 w-full'>
          <button onClick={() => setIndex(1)} className='p-2 m-2 bg-[#2893DF] text-white rounded-lg shadow-md'> {HealthStatus} Diet</button>
          <button onClick={() => setIndex(2)} className='p-2 m-2 bg-[#2893DF] text-white rounded-lg shadow-md'>Mental Health</button>
          <button onClick={() => setIndex(3)} className='p-2 m-2 bg-[#2893DF] text-white rounded-lg shadow-md'>Healthy Activities</button>
        </div>
        <div className='flex-1 overflow-auto'>
          {index === 1 ? <Diet HealthStatus={HealthStatus} isLoading={isLoading} /> : index === 2 ? <Exercise /> : index === 3 ? <Activities /> : <Diet HealthStatus={HealthStatus} isLoading={isLoading} />}
        </div>
      </div>
    </div>
  );
};

export default AiResponse;
