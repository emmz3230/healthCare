"use client"
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Details from './ui/Details'
import Link from 'next/link'
import { getbmi } from '@/app/queries'
import { useSession } from 'next-auth/react'

const ProfileCard = () => {
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
    <div className='h-[85vh] w-[25%] bg-[#2893DF] shadow-lg items-center flex justify-center'>
        <div className='h-[90%] w-[90%] bg-[white] shadow-lg rounded-lg flex flex-col items-center pt-10'>
            <div>
                <Image
                    src={'/patient.svg'}
                    width={180}
                    height={180}
                    alt='patient'
                />
            </div>
            <div className='pt-8 w-[80%]'>
                {bmi ?
                <Details name={"Bmi Score"} value={bmi}/>
                : <Link href={'/'}> <div className='w-full font-thin bg-[#2893DF] rounded-lg p-2 '> Calculate bmi</div> </Link>}
                <Details name={"Name"} value={name}/>
                <Details name={"Email"} value={email}/>
                <Details name={"Status"} value={HealthStatus}/>
            </div>
        </div>
    </div>
  )
}

export default ProfileCard