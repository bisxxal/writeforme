'use client'
import { userProfile } from '@/actions/user.action'
import CollageName from '@/components/collageName'
import { useQuery } from '@tanstack/react-query'
import { LogOut, Pencil } from 'lucide-react'
import { signOut } from 'next-auth/react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const ProfilePage = () => {
  const [showCollege, setShowCollege] = useState(false);

  const router = useRouter();
  const { data, isLoading } = useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => await userProfile()
  })
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
      return val === 'true' ? true : false;
    }
    return false;
  })
  const handelBuyerMode = (mode: boolean) => {
    setBuyerMode(mode)
    if (typeof window !== 'undefined') {
      localStorage.setItem('buyerMode', mode.toString());
    }
    router.push('/dashboard')
  }

  useEffect(() => {
    const res = localStorage.getItem('collageName');
    setCollageName(res);

  }, [showCollege])



  return (
    <div className=' w-full relative px-10 flex flex-col gap-5'>

      <div className=' absolute top-5 right-5'>
        <button onClick={() => signOut()}><LogOut /></button>
      </div>

      <div className='mt-14 card border bordercolor rounded-2xl p-5 center flex-col gap-3 '>
        <div>
          {data?.user?.image && <Image loading='lazy' src={data?.user?.image!} alt="User Avatar" width={40} height={40} className=' max-md: w-24  rounded-full' />}
        </div>
        <h1>{data?.user?.name}</h1>
      </div>

      <div className='card between bordercolor rounded-2xl p-5  gap-3 '>
        <p>Switch to {!buyerMode ? 'seller' : 'buyer'} mode</p>

        <label className="inline-flex items-center cursor-pointer">
          <input type="checkbox" onClick={() => handelBuyerMode(!buyerMode)} checked={buyerMode} className="sr-only peer" />
          <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-green-300 dark:peer-focus:ring-green-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-green-500 dark:peer-checked:bg-green-500"></div>
        </label>

      </div>

      <p className=' text-2xl font-bold'>About</p>
      <div className=' card bordercolor rounded-2xl p-5 flex flex-col gap-3 '>
        <div>
          <div className=' mb-2 border-b border-[#d3d3d346] pb-2'>
            <p onClick={() => setShowCollege(!showCollege)} className='between text-gray-400'>Collage Name <Pencil size={20} /></p>
            {!showCollege && <p className=' mt-4'>{collageName}</p>}

            {
              showCollege && <CollageName showCollege={showCollege} setShowCollege={setShowCollege} />
            }
          </div>

          <div className=' mb-2 border-b border-[#d3d3d346] pb-2'>
            <p className='between text-gray-400'>Member since</p>
            {/* <p className=' mt-4'>{new Date(data?.user?.createdAt)}</p> */}
            <p className=' mt-4'>{data?.user?.createdAt.toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</p>
          </div>

          <div className=' mb-2 border-b border-[#d3d3d346] pb-2'>
            <p className='between text-gray-400'>Email</p>
            <p className=' mt-4'>{data?.user?.email}</p>
          </div>

        </div>
      </div>


    </div>
  )
}

export default ProfilePage