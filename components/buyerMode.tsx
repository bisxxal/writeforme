'use client'
import { allWritters } from '@/actions/user.action'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useState } from 'react'
import Loading from './ui/loading'

const BuyerMode = () => {

  const [district, setDistrict] = useState(() => {
    if (typeof window !== 'undefined') {
      const val = localStorage.getItem('district');
      return val;
    }
    return null;
  });

  const { data, isLoading } = useQuery({
    queryKey: ['writters', district],
    queryFn: async () => {
      return await allWritters(district)
    },
  })

  return (
    <div className='min-h-screen w-full px-20 max-md:5'>

      <p className=' mt-5 font-bold text-3xl'>Find near by writters</p>
      {data && data?.writters && data?.writters?.length > 0 && <div className=' between mt-9 '>
        <p>Top writter </p>
        <Link href={`/writter`}>View all</Link>
      </div>}
      <div className='flex gap-3 px-5 max-md:px-2 scrollbar overflow-x-auto  w-full mt-4  p-1 text-sm'>

        {data && !isLoading && data?.writters && data?.writters?.length > 0 ? data?.writters?.map((writer) => (
          <>

            <Link href={`writter/${writer.id}`} key={writer.id} className=' !min-w-[200px] !min-h-[250px] card bordercolor rounded-2xl overflow-hidden'>
              <img src={writer?.showsCasePhotos[0]} className=' object-cover w-full h-[160px]' alt="" />
              <div className='flex px-2 mt-2'>
                <img className=' w-10 rounded-full ' src={writer.image} alt="" />
                <div className=' between w-full ml-5'>
                  <p className=' mt-1'>{writer?.name}</p>
                  <h2 className=' text-lg'>₹ {writer?.pagePrice}</h2>
                </div>

              </div>
              <p className=' mt-2 text-center '>{writer?.collegeName}</p>
            </Link>
          </>
        )) : isLoading ?
          <Loading boxes={5} parent=' !flex-row flex !min-w-[10px] !min-h-[250px]' child='rounded-2xl w-full h-full' /> :
          <p className=' mt-10 text-center w-full font-semibold'>No writter found</p>
        }
      </div>

    </div>
  )
}

export default BuyerMode