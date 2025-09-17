'use client'
import React, { useState } from 'react'

const TaskPage = () => {
  const [activeTab, setActiveTab] =  useState<'all'|'pending'|'completed'>('all');
  return (
    <div className=' w-full px-10 '>

        <div className=' between  '>
            <div onClick={()=>setActiveTab('all')} className=' cursor-pointer  border-b border-[#ffffff2d] p-2 px-5 rounded-lg card'>All</div>
            <div onClick={()=>setActiveTab('pending')} className=' cursor-pointer  border-b border-[#ffffff2d] p-2 px-5 rounded-lg card'>Pending</div>
            <div onClick={()=>setActiveTab('completed')} className=' cursor-pointer  border-b border-[#ffffff2d] p-2 px-5 rounded-lg card'>Completed</div>
        </div>
        
        {
          activeTab === 'all' ? <AllTask /> : activeTab === 'pending' ? <PendingTask /> : <CompletedTask />
        }
    </div>
  )
}

export default TaskPage

const AllTask = () => { 
  return(
    <div className=' mt-10 flex flex-col gap-5 '>
      
      <div className=' h-[150px] card bordercolor w-full flex flex-col rounded-2xl px-3'>
        <div className='p-2 flex gap-2  '>
          <img src="/user.jpg" className='rounded-full w-16' alt="" />
          <div className=' mt-2 ml-3'>
            <p className=' font-semibold '>bishal v</p>
          </div>
        </div>

        <div>
          <p>Delivery date 2025-08-30</p>
          <p>order status:Completed</p>
        </div>
      </div>



    </div>
  )
}
const PendingTask = () => { 
  return(
   <div className=' mt-10 flex flex-col gap-5 '>
      
      <div className=' h-[150px] card bordercolor w-full flex flex-col rounded-2xl px-3'>
        <div className='p-2 flex gap-2  '>
          <img src="/user.jpg" className='rounded-full w-16' alt="" />
          <div className=' mt-2 ml-3'>
            <p className=' font-semibold '>bishal v</p>
          </div>
        </div>

        <div>
          <p>Delivery date 2025-08-30</p>
          <p>order status:Pending</p>
        </div>
      </div>



    </div>
  )
}
const CompletedTask = () => { 
  return(
   <div className=' mt-10 flex flex-col gap-5 '>
      
      <div className=' h-[150px] card bordercolor w-full flex flex-col rounded-2xl px-3'>
        <div className='p-2 flex gap-2  '>
          <img src="/user.jpg" className='rounded-full w-16' alt="" />
          <div className=' mt-2 ml-3'>
            <p className=' font-semibold '>bishal v</p>
          </div>
        </div>

        <div>
          <p>Delivery date 2025-08-30</p>
          <p>order status:Completed</p>
        </div>
      </div>



    </div>
  )
}
