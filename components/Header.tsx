import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div>
        <div className='bg-[#2893DF] text-white flex justify-center text-center items-center w-full h-[32px] text-sm rounded-b-md  font-[Montserrat]'>
            Start Your Heath Track Journey
        </div>
        <nav className='flex justify-between px-12 text-center items-center h-[73px] w-full shadow-md'>
            <div className='flex gap-4'>
                <Image
                    src={'/logo.svg'}
                    height={32}
                    width={32}
                    alt='logo'
                />
                <p className='text-black text-[20px] font-[Montserrat] flex items-center text-center opacity-75 font-bold'>HealthTrack</p>
            </div>

            <div className='flex gap-8'>
                <ul className='flex gap-4 font-thin'>
                    <li className=' list-none text-[16px]'> Nutrition tips </li>
                    <li className=' list-none text-[16px]'> Exercise </li>
                </ul>
                <ul className='flex gap-4 font-thin'>
                    <li className=' list-none text-[16px]'> AI recomendation </li>
                    <li className=' list-none text-[16px]'> BMI </li>
                </ul>
            </div>
            <div className='flex gap-4'>
                <Link href={'/signin'}>
                    <button className='text-white bg-[#2893DF] text-[16px] font-[Monoserrat] rounded-xl p-2 '>Sign Up</button>
                </Link>
                <button className='text-white bg-[#2893DF] text-[16px] font-[Monoserrat] rounded-xl p-2 '>Get Started</button>
            </div>
        </nav>
    </div>
  )
}

export default Header