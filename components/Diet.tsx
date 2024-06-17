import React from 'react';
import Underweight from './diet/Underweight';
import Healthy from './diet/Healthy';
import Overweight from './diet/Overweight';
import Obese from './diet/Obese';

interface DietProps {
  HealthStatus: string;
  isLoading: boolean;
}

const Diet: React.FC<DietProps> = ({ HealthStatus, isLoading }) => {
  if (isLoading) {
    return <div className='h-full flex items-center justify-center text-center'>Loading...</div>;
  }

  switch (HealthStatus) {
    case 'Underweight':
      return <Underweight />;
    case 'Healthy':
      return <Healthy />;
    case 'Overweight':
      return <Overweight />;
    case 'Obese':
      return <Obese />;
    default:
      return <Healthy />;
  }
};

export default Diet;
