import Image from 'next/image'
import React from 'react'

const Activities = () => {
  return (
    <div className='flex flex-wrap'>
      <div className=' w-[150px] h-[150px] m-8 flex flex-col items-center justify-center'>
        <Image
          src={'/reading.svg'}
          width={180}
          height={180}
          alt='reading'
        />
        <label htmlFor="text" >Reading Productive Books</label>
      </div>
      <div className=' w-[150px] h-[150px] m-8 flex flex-col items-center justify-center'>
        <Image
          src={'/washhands.svg'}
          width={180}
          height={180}
          alt='reading'
        />
        <label htmlFor="text" >Wash hands properly</label>
      </div>
      <div className=' w-[150px] h-[150px] m-8 flex flex-col items-center justify-center'>
        <Image
          src={'/food.svg'}
          width={180}
          height={180}
          alt='reading'
        />
        <label htmlFor="text" >Eat Healthy remain Healthy</label>
      </div>
      <div className=' w-[150px] h-[150px] m-8 flex flex-col items-center justify-center'>
        <Image
          src={'/yoga.svg'}
          width={180}
          height={180}
          alt='reading'
        />
        <label htmlFor="text" >daily yoga relax your mind</label>
      </div>
      <div className=' w-[150px] h-[150px] m-8 flex flex-col items-center justify-center'>
        <Image
          src={'/help.svg'}
          width={180}
          height={180}
          alt='reading'
        />
        <label htmlFor="text" >Help Others</label>
      </div>
      <div className=' w-[150px] h-[150px] m-8 flex flex-col items-center justify-center'>
        <Image
          src={'/cycling.svg'}
          width={180}
          height={180}
          alt='reading'
        />
        <label htmlFor="text" >regular Cycling</label>
      </div>
      <div className=' w-[150px] h-[150px] m-8 flex flex-col items-center justify-center'>
        <Image
          src={'/washSurrounding.svg'}
          width={180}
          height={180}
          alt='reading'
        />
        <label htmlFor="text" >Remain your surrounding clean</label>
      </div>
      <div className=' w-[150px] h-[150px] m-8 flex flex-col items-center justify-center'>
        <Image
          src={'/noDrugs.svg'}
          width={180}
          height={180}
          alt='reading'
        />
        <label htmlFor="text" >Say No to Drugs</label>
      </div>
    </div>
  )
}

export default Activities