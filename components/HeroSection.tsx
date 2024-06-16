import Image from 'next/image'
import React from 'react'

const HeroSection = () => {
  return (
    <>
        <div className='h-[88vh]'>
            <div className='w-full flex flex-col justify-center items-center text-center gap-6 pt-12'>
            <div>
                <Image
                    src={'/HeroImage.svg'}
                    width={160}
                    height={160}
                    alt='leaf'
                    className='flex justify-center items-center text-center '
                />
            </div>
            <div>
                <h1 className='w-[718px] h-[156px] text-black font-[Montserrat] text-[48px] font-bold opacity-75'>
                    Achieve optimal health and happiness
                </h1>
            </div>
            <div className='m-4'>
                <button className='p-2 bg-[#2893DF] text-white font-[Montserrat] text-[16px] rounded-2xl px-4'>
                    Explore Now
                </button>
            </div>
            </div>
        </div>
        <div className='w-full h-[204px] bg-[#2893DF] flex justify-between items-center text-center px-12'>
            <div className='flex'>
                <Image 
                    src={'/face.svg'}
                    height={76}
                    width={76}
                    alt='face'
                />
                <div className='flex flex-col w-[300px] pl-4 justify-start text-left'>
                    <h1 className='text-[20px] font-bold'>Healthy mindset</h1>
                    <p className='text-[16px] flex'>Discover inner peace and maintain a healthy state of mind.</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <Image 
                    src={'/moon.svg'}
                    height={76}
                    width={76}
                    alt='moon'
                />
                <div className='flex flex-col w-[300px] pl-4 justify-start text-left'>
                    <h1 className='text-[20px] font-bold'>Quality sleep</h1>
                    <p className='text-[16px]'>Experience deep, restorative sleep and awaken rejuvenated.</p>
                </div>
            </div>
            <div className='flex gap-2'>
                <Image 
                    src={'fire.svg'}
                    height={76}
                    width={76}
                    alt='fire'
                />
                <div className='flex flex-col w-[300px] pl-4 justify-start text-left'>
                    <h1 className='text-[20px] font-bold'>Stress relief</h1>
                    <p className='text-[16px]'>Find inner peace and cultivate a positive mindset.</p>
                </div>
            </div>
        </div>
    </>
  )
}

export default HeroSection