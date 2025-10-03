'use client'
import BuyerMode from '@/components/buyerMode';
import WriterMode from '@/components/writerMode';
import { useProfileInfoHook } from '@/hooks/useProfileinfo';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react'

const Dashboard = () => {
  const { data, isLoading } = useProfileInfoHook();
  const [modeLoading, setModeLoading] = useState(true);
  const router = useRouter();
  const [collageName, setCollageName] = useState(() => {
      if (typeof window !== 'undefined') {
        const val = localStorage.getItem('collageName');
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

   const [districtName, setDistrictName] = useState(() => {
      if (typeof window !== 'undefined') {
        const val = localStorage.getItem('district');
        return val;
      }
      return null;
    });

  useEffect(()=>{
    if( !collageName || !districtName){
      router.push('profile')
    }
  },[collageName,data])

  return (
    <div>

      {
        modeLoading ? <div className=' w-full min-h-screen center'>
        </div> : !buyerMode ? <BuyerMode userId={data?.user?.id} /> : <WriterMode isLoading={isLoading} data={data?.user} />}

    </div>
  )
}

export default Dashboard