'use client'
import Link from 'next/link'
import React from 'react'

const SellerMode = () => {
  return (
    <div className=' w-full px-10 '>

      <div className='flex flex-col card bordercolor p-3 rounded-lg flex gap-5 '>
        <p>Complete your writter profile to startreceving assignment</p>
        <Link className='buttonbg bg-blue-600 w-fit p-1 px-4 rounded-full' href='edit'>Active Now</Link>
      </div>

      <div>
        my level 
      </div>

      
    </div>
  )
}

export default SellerMode