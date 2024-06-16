import React from 'react'

const Details = ({name, value}:{name: string, value: number | string}) => {
  return (
    <div className='w-full flex justify-between bg-[#2893DF] p-2 rounded-lg shadow-lg my-4'>
        <p className='text-black font-thin text-lg'>{name}</p>
        <p className='text-white text-md'>{`${value}`}</p>
    </div>
  )
}

export default Details