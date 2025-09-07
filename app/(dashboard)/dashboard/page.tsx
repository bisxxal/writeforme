'use client'
import BuyerMode from '@/components/buyerMode';
import CollageName from '@/components/collageName';
import SellerMode from '@/components/sellerMode';
import { useProfileInfoHook } from '@/hooks/useProfileinfo';
import { Loader } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Dashboard = () => {

    const { data, isLoading } = useProfileInfoHook();
  
  const [modeLoading, setModeLoading] = useState(true);
  const [collageLoading, setCollageLoading] = useState(true);

  const [collageName, setCollageName] = useState(() => {
    if (typeof window !== 'undefined') {
      const val = localStorage.getItem('collageName');
      setCollageLoading(false);
      return val;
    }
    return null;
  });

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
        // !collageName && !collageLoading && <CollageName />  // retake in profile
      }

      {
        modeLoading ? <div className=' w-full min-h-screen center'>
          <Loader className=' animate-spin' />
        </div> : buyerMode ? <BuyerMode isLoading={isLoading} data={data} /> : <SellerMode isLoading={isLoading} data={data}/>}

    </div>
  )
}

export default Dashboard