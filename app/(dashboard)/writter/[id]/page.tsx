'use client'
import { singleWritter } from '@/actions/user.action';
import Loading from '@/components/ui/loading';
import { useQuery } from '@tanstack/react-query';
import { useParams } from 'next/navigation';
import React from 'react'

const WritterPersonalPage = () => {
  const params = useParams<{ id: string }>();
  const id = params?.id || '';
  
  const { data, isLoading } = useQuery({
    queryKey: ['singleWritter', id],
    queryFn: async () => {
      return await singleWritter(id);
    },
  });

  if (isLoading) {
    <div className=' w-full min-h-screen  bg-red-50 px-10 max-md:px-5'>
      <div className=' flex gap-5 items-center mt-10'>

        <h1>loading </h1>
        <Loading boxes={1} parent=' !w-[180px] !h-[180px] ' child=' !w-full !h-full rounded-full' />
        
        <div>
          <Loading boxes={1} parent=' w-[200px] h-8 ' child='w-full rounded-lg' />
          <Loading boxes={1} parent=' w-[150px] h-5 mt-2 ' child='w-full rounded-lg' />
        </div>
       
      </div>
    </div>
  }
  else{ 
  return (
    <div className=' w-full min-h-screen px-10 max-md:px-5'>
      <div className=' flex gap-5 items-center mt-10'>
       { !isLoading ? <img src={data?.writters?.image} className='rounded-full object-cover w-[180px] h-[180px] ' alt="" />:
        <Loading boxes={1} parent=' !w-[180px] !h-[180px] ' child=' !w-full !h-full rounded-full' />
       }

        <div>
          <p className=' text-2xl font-bold'>{data?.writters?.name}</p>
          {/* <p>{data?.writters?.collegeName}</p> */}
        </div>
      </div>

      <div>
        <label className=' mt-5 block font-semibold text-xl'>Description</label>
        <p>{data?.writters?.description}</p>

        <label className=' mt-5 block font-semibold text-xl'>Showcase</label>

        <div className=' flex gap-3 overflow-x-auto py-3'>
          {data?.writters?.showsCasePhotos && data?.writters?.showsCasePhotos?.map((item: string, index: number) => (
            <img key={index} src={item} className=' w-[120px] h-[120px] object-cover rounded-lg' alt="" />
          ))}
        </div>

        <label className=' mt-5 block font-semibold text-xl'>Prices</label>

        <div className=' card p-4 mt-4 rounded-xl'>
          <div className='  w-full between'>Fixed minimum rate per page <div className=' gap-2 center '>
            <span className=' w-[32px] rounded-2xl px-1 card center gap-2'>₹{data?.writters?.pagePrice}</span>
          </div>
          </div>
          <div className='mt-4 w-full between border-t pt-2 border-[#ffffff2c] '>Fixed minimum rate per digram <div className=' gap-2 center '>
            <span className=' w-[32px] rounded-2xl px-1 card center gap-2'>₹{data?.writters?.digramsPrice}</span>
          </div>
          </div>

        </div>

        <div className=' w-full center my-5'>
          <button className=' buttonbg w-full rounded-2xl mt-5 py-2'>Message Writter</button>
        </div>

      </div>
    </div>
  )
    }
}

export default WritterPersonalPage