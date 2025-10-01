'use client'
import Link from 'next/link'
import React from 'react'

const SellerMode = ({data, isLoading}) => {
  return (
    <div className=' w-full px-10 max-md:px-4 pb-20 mt-20'>

      { !isLoading && data?.user?.isSellerModeActive !== true && <div className='  flex-col card bordercolor p-3 rounded-lg flex gap-5 '>
        <p>Complete your writter profile to startreceving assignment</p>
        <Link className='buttonbg bg-blue-600 w-fit p-1 px-4 rounded-full' href='edit'>Active Now</Link>
      </div>}

      <div className=' flex flex-col gap-5 mt-5 '>

        <div className=" card bordercolor rounded-2xl p-5   gap-3 ">
          <div>

          </div>

          <div className=" flex flex-col gap-2 ">
            <div>
              <p className=' text-lg  '>My Ratings</p>
              <p className='text-3xl font-bold'>0.00</p>
              <div>
                <span className=' text-yellow-400 '>★</span>
                <span className=' text-yellow-400 '>★</span>
                <span className=' text-gray-500 '>★</span>
                <span className=' text-gray-500 '>★</span>
                <span className=' text-gray-500 '>★</span>
              </div>

            </div>
            <h2 className=' between'>Earning <span>₹0</span></h2>
            <h2 className=' between'>Completed Assignment <span>0</span></h2>
          </div>
        </div>

        <p>Assignments</p>
        <div className="between p-2 px-4 rounded-2xl  card bordercolor">
          <div>
            <p>Pending Assignments</p>
            <p className=' text-3xl '>0</p>
          </div>
          <Link href={`/task`} className=' buttonbg p-2 rounded-4xl px-5'>View Details</Link>
        </div>

        <p>Earnings</p>
        <div className="between p-2 px-4 rounded-2xl  card bordercolor">
          <div>
            <p>Total Earnings</p>
            <p className=' text-3xl '>₹0</p>
          </div>
          <Link href={`/earnings`} className=' buttonbg p-2 rounded-4xl px-5'>View Details</Link>
        </div>

      </div>
    </div>
  )
}

export default SellerMode