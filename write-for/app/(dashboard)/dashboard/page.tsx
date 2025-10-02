'use client'
import BuyerMode from '@/components/buyerMode';
import SellerMode from '@/components/sellerMode';
import { useProfileInfoHook } from '@/hooks/useProfileinfo';
import { Loader } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const { data, isLoading } = useProfileInfoHook();
  const [modeLoading, setModeLoading] = useState(true);

  const [buyerMode, setBuyerMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const val = localStorage.getItem('buyerMode');
      setModeLoading(false);
      return val === 'true' ? true : false;
    }
    return false;
  })

  return (
    <div>

      {
        modeLoading ? <div className=' w-full min-h-screen center'>
          {/* <Loader className=' animate-spin' /> */}
        </div> : buyerMode ? <BuyerMode /> : <SellerMode isLoading={isLoading} data={data?.user} />}

    </div>
  )
}

export default Dashboard