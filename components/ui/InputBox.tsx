"use client"
import React, { EventHandler } from 'react'

const InputBox = ({label, onChange}: {label: string, onChange: ()=>{}}) => {
  return (
    <div className='w-[100%] p-4'>
        <input type="text" placeholder= {`Enter Your ${label}`} className='text-start bg-white text-black p-4 w-full rounded-lg' onChange={onChange} />
    </div>
  )
}

export default InputBox