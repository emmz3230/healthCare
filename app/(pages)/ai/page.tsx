"use client";
import { getbmi } from '@/app/queries';
import AiResponse from '@/components/AiResponse';
import Header from '@/components/Header';
import ProfileCard from '@/components/ProfileCard';
import { useSession, SessionContextValue } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

// Define types for BMI data
interface BmiData {
  date: string;
  bmi: number | null;
}

const Page: React.FC = () => {
  const session: SessionContextValue | null = useSession();
  const [name, setName] = useState<string>('User');
  const [email, setEmail] = useState<string>('');
  const [bmi, setBmi] = useState<number>(0);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    if (session && session.data) {
      setName(session.data.user?.name || 'User');
      setEmail(session.data.user?.email || '');
    }
  }, [session]);

  useEffect(() => {
    fetchBmi();
  }, []);  // Add an empty dependency array to avoid infinite re-renders

  const fetchBmi = async () => {
    try {
      // @ts-ignore
      const bmiValue: BmiData[] = await getbmi();
      const latestBMI = getLatestBMI(bmiValue);
      // @ts-ignore
      setBmi(latestBMI);
    } catch (error) {
      console.error("Failed to fetch BMI", error);
    } finally {
      setIsLoading(false);
    }
  };

  const getLatestBMI = (data: BmiData[]): number | null => {
    data.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    const latestEntry = data.find((entry) => entry.bmi !== null && entry.bmi !== undefined);
    return latestEntry ? latestEntry.bmi : null;
  };

  let HealthStatus = "Calculate Bmi";
  if (bmi) {
    HealthStatus = 
      bmi < 18.5 ? "Underweight" :
      bmi >= 18.5 && bmi < 24.9 ? "Healthy" :
      bmi >= 24.9 && bmi < 30.5 ? "Overweight" :
      "Obese";
  }

  return (
    <div>
      <Header />
      <div className='flex flex-row'>
        <ProfileCard />
        <AiResponse HealthStatus={HealthStatus} isLoading={isLoading} />
      </div>
    </div>
  );
};

export default Page;
