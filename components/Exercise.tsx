import Image from 'next/image'
import React from 'react'

const Exercise = () => {
  return (
    <div className='flex flex-wrap'>
      <div className=' w-[150px] h-[150px] m-8 flex flex-col items-center justify-center'>
        <Image
          src={'/lotus.svg'}
          width={180}
          height={180}
          alt='reading'
        />
        <label htmlFor="text" >lotus yoga pose</label>
      </div>
      <div className=' w-[150px] h-[150px] m-8 flex flex-col items-center justify-center'>
        <Image
          src={'/halfPigeon.svg'}
          width={180}
          height={180}
          alt='reading'
        />
        <label htmlFor="text" >half pigeon yoga pose</label>
      </div>
      <div className=' w-[150px] h-[150px] m-8 flex flex-col items-center justify-center'>
        <Image
          src={'/warrior.svg'}
          width={180}
          height={180}
          alt='reading'
        />
        <label htmlFor="text" >Warrior Yoga Pose</label>
      </div>
      <div className=' w-[150px] h-[150px] m-8 flex flex-col items-center justify-center'>
        <Image
          src={'/chairYoga.svg'}
          width={180}
          height={180}
          alt='reading'
        />
        <label htmlFor="text" >Chair Yoga pose </label>
      </div>
      <div className=' w-[150px] h-[150px] m-8 flex flex-col items-center justify-center'>
        <Image
          src={'/seated.svg'}
          width={180}
          height={180}
          alt='reading'
        />
        <label htmlFor="text" >seated forward bend pose</label>
      </div>
      <div className=' w-[150px] h-[150px] m-8 flex flex-col items-center justify-center'>
        <Image
          src={'/warrior3.svg'}
          width={180}
          height={180}
          alt='reading'
        />
        <label htmlFor="text" >warrior yoga pose</label>
      </div>
      <div className=' w-[150px] h-[150px] m-8 flex flex-col items-center justify-center'>
        <Image
          src={'/plank.svg'}
          width={180}
          height={180}
          alt='reading'
        />
        <label htmlFor="text" >Plank yoga pose</label>
      </div>
      <div className=' w-[150px] h-[150px] m-8 flex flex-col items-center justify-center'>
        <Image
          src={'/downwardPose.svg'}
          width={180}
          height={180}
          alt='reading'
        />
        <label htmlFor="text" >downward facing yoga pose </label>
      </div>
    </div>
  )
}

export default Exercise