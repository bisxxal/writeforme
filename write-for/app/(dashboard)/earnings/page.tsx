import React from 'react'

const EarningsPage = () => {
  return (
    <div className=' w-full px-10 '>
        <h1 className=' text-2xl font-bold'> Earnings </h1>

        <div className=' card bordercolor rounded-2xl p-5 mt-5 flex flex-col gap-5 '>
            <div className='between  '><p>Earnings in septmember</p> <span>₹0</span></div>
            <div className='between border-t border-[#ffffff37] pt-3 '><p>Completed assignment</p> <span>0</span></div>
            {/* <div><p>Earnings in septmember</p> <span>0</span></div> */}
        </div>
    </div>
  )
}

export default EarningsPage