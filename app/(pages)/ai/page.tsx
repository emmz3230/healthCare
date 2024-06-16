"use client"
import { getbmi } from '@/app/queries'
import AiResponse from '@/components/AiResponse'
import Header from '@/components/Header'
import ProfileCard from '@/components/ProfileCard'
import { useSession } from 'next-auth/react'
import React, { useEffect, useState } from 'react'

const page = () => {

  const session = useSession()
    const [name, setName] = useState('User')
    const [email, setEmail] = useState('')
    const [bmi, setBmi]  = useState(0)

    useEffect(() => {
        if (session) {
            setName(session.data?.user.name)
            setEmail(session.data?.user.email)
        }
    }, [session]);


    useEffect(() => {
        fetchbmi();
    }, []);
    const fetchbmi = async()=>{
        const bmiValue = await getbmi()
        function getLatestBMI(data) {
            data.sort((a, b) => new Date(b.date) - new Date(a.date));
            const latestEntry = data.find(entry => entry.bmi !== null && entry.bmi !== undefined);
            return latestEntry ? latestEntry.bmi : null;
        }
        const latestBMI = getLatestBMI(bmiValue)
        setBmi(latestBMI)
        return latestBMI
    }
    if(bmi){
        var HealthStatus = 
        bmi < 18.5 ? "Underweight" :
        bmi >= 18.5 && bmi < 24.9 ? "Healthy" :
        bmi >= 24.9 && bmi < 30.5 ? "Overweight" :
        "Obese";
    }else{
        var HealthStatus = "Calculate Bmi"
    }

  return (
    <div>
        <div>
            <Header/>
        </div>
        <div className='flex flex-row'>
            <ProfileCard/>
            <AiResponse HealthStatus={HealthStatus}/>
        </div>
    </div>
  )
}

export default page