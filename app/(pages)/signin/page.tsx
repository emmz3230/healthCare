"use client"
import { signIn } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Page = () => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const router = useRouter()
  return (
    <div  className='w-full h-[100vh] bg-[#3237a7] '>
        <header className='text-[20] font-bold text-white font-[Montserrate] px-12 pt-4'>
            HealthCare
        </header>
        <div className=' w-full h-full p-24 flex items-center'>
            <div className='flex justify-center w-[50%] items-center'>
                <Image
                    src={'/signin.svg'}
                    height={500}
                    width={500}
                    alt='signin'
                />
            </div>
            <div className='flex flex-col w-[50%]'>
                <div className=' bg-white w-[380px] rounded-xl ml-20 h-[450px] shadow-lg pt-8'>
                    <h1 className='font-bold text-3xl flex justify-center py-8'>
                        Login
                    </h1>
                    <div className='text-center'>
                        <input type="text"  placeholder='enter your name' onChange={(e)=>{setName(e.target.value)}} className='w-[80%] text-start rounded-md p-3 border-2 '/>
                        <input type="email"  placeholder='enter your email' onChange={(e)=>{setEmail(e.target.value)}} className='w-[80%] text-start rounded-md p-3 border-2 mt-4 mb-4' required/>
                        <button onClick={async()=>{
                            const res = await signIn('credentials', {
                                redirect: false,
                                email: email,
                                name: name,
                            })
                            router.push('/')
                        }} className='w-[80%] text-center rounded-md p-3 border-2 bg-[#3237a7] text-white'
                        >
                            SignIn
                        </button>
                        <div className='py-12 gap-10 flex flex-row items-center justify-center'>
                            <Image
                                src={'/icon1.svg'}
                                width={48}
                                height={48}
                                alt='icon'
                            />
                            <Image
                                src={'/ai.svg'}
                                width={48}
                                height={48}
                                alt='icon'
                            />
                            <Image
                                src={'/icon2.svg'}
                                width={48}
                                height={48}
                                alt='icon'
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Page