'use client'
import { allWritters } from '@/actions/user.action'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import Loading from './ui/loading'
import Image from 'next/image'
import { Star } from 'lucide-react'

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

  const [sortedWritters, setSortedWritters] = useState<any[]>([]);


  useEffect(() => {

    const writersWithRating = data?.writters.map(writer => {
      const total = writer.ratingsReceived?.reduce((acc, curr) => acc + Number(curr.stars), 0) || 0;
      const average = writer.ratingsReceived?.length ? total / writer.ratingsReceived.length : 0;
      return { ...writer, averageRating: average };
    }).sort((a, b) => b.averageRating - a.averageRating);

    setSortedWritters(writersWithRating || []);
  }, [data])

  return (
    <div className='min-h-screen w-full px-20  max-md:px-4'>

      <p className=' mt-5 font-bold text-3xl max-md:text-2xl'>Writers near by you</p>

      <div className='flex gap-3 px-5 max-md:px-2 scrollbar overflow-x-auto  w-full mt-4  p-1 text-sm'>

        {data && !isLoading && data?.writters && data?.writters?.length > 0 ? data?.writters?.map((writer) => {
          const total = writer.ratingsReceived?.reduce((acc: { stars: number }, curr: { stars: number }) => Number(acc) + Number(curr.stars), 0) || 0;
          const average = writer.ratingsReceived?.length ? (total / writer.ratingsReceived.length) : 0;
          return (
            <Link href={`writter/${writer.id}`} key={writer.id} className=' !min-w-[200px] !min-h-[250px] card bordercolor rounded-2xl overflow-hidden'>
              <img src={writer?.showsCasePhotos[0]} className=' object-cover w-full h-[160px]' alt="" />
              <div className='flex px-2 mt-2'>
                <Image height={200} width={200} className=' w-10 rounded-full ' src={writer?.image || ""} alt="" />
                <div className=' between w-full ml-5'>
                  <p className=' mt-1'>{writer?.name}</p>
                  <h2 className=' text-lg'>₹ {writer?.pagePrice}</h2>
                </div>
              </div>
              <div className='px-2 my-1 flex justify-between items-center'>
                <p className=' flex gap-0.5'>
                  {Number(Number(average).toFixed(1)) !== 0 ? Array.from({ length: 5 }).map((_, index) => {
                    const roundedRating = average - index;
                    if (roundedRating >= 1) return <span key={index}> <Star color='#facc15' fill='#facc15' /> </span>;
                    if (roundedRating >= 0.5) return <span key={index}><Star /></span>;
                    return <span key={index}><Star /></span>;
                  }) : <span className=' text-gray-500 pl-2'>No ratings yet</span>}
                </p>
                <p className=' text-lg textbase font-medium'>  {Number(Number(average).toFixed(1)) !== 0 && average.toFixed(1)}</p>
              </div>
              <p className=' mt-2 px-2 max-md:px-1 max-md:text-center text-xs'>{writer?.collegeName}</p>
            </Link>
          )
        }

        ) : isLoading ?
          <Loading boxes={5} parent=' !flex-row flex !justify-start !min-w-[200px] !h-[290px]' child='rounded-2xl min-w-[200px] h-full' /> :
          <p className=' mt-10 text-center w-full font-semibold'>No writter found</p>
        }
      </div>


      <p className=' my-5 mt-10 font-bold text-3xl max-md:text-2xl'>Top writers</p>

      <div>
        {data && !isLoading && data?.writters && data?.writters?.length > 0 ? sortedWritters.map((writer) => {
          const total = writer.ratingsReceived?.reduce((acc: { stars: number }, curr: { stars: number }) => Number(acc) + Number(curr.stars), 0) || 0;
          const average = writer.ratingsReceived?.length ? (total / writer.ratingsReceived.length) : 0;
          return (
            <Link href={`writter/${writer.id}`} key={writer.id} className=' card bordercolor h-[200px] max-md:h-[230px] overflow-hidden p-2 pr-6 mt-2 flex gap-3 rounded-2xl'>

            <div className=' flex justify-between w-full items-center max-md:flex-col max-md:justify-start max-md:items-end max-md:gap-1'>

                <div className='max-md:w-full flex gap-5 max-md:gap-2  h-full max-md:h-fit '>
                <Image height={200} width={200} className='w-[200px] max-md:min-w-[140px] object-cover rounded-2xl max-md:h-[140px] ' src={writer?.showsCasePhotos[0]} alt="" />

                <div className=' flex flex-col'>
                  <div className='flex   gap-3 mt-2'>
                    <Image height={200} width={200} className=' w-10 rounded-full ' src={writer?.image || ""} alt="" />
                    <p className=' capitalize mt-1'>{writer?.name}</p>
                  </div>

                  <h2 className=' text-3xl max-md:text-xl mt-2 font-bold'>₹{writer?.pagePrice}</h2>
                  <p className=' mt-2 text-sm max-md:text-xs'>{writer?.collegeName}</p>
                </div>
              </div>


              <div className='px-2 my-1 flex flex-col justify-center    items-end'>
                <p className=' textbase text-4xl max-md:text-3xl font-bold'>  {Number(Number(average).toFixed(1)) !== 0 && average.toFixed(1)}</p>
                <p className=' flex gap-0.5'>
                  {Number(Number(average).toFixed(1)) !== 0 ? Array.from({ length: 5 }).map((_, index) => {
                    const roundedRating = average - index;
                    if (roundedRating >= 1) return <span key={index}> <Star color='#facc15' fill='#facc15' /> </span>;
                    if (roundedRating >= 0.5) return <span key={index}><Star /></span>;
                    return <span key={index}><Star /></span>;
                  }) : <span className=' text-gray-500 pl-2'>No ratings yet</span>}
                </p>
              </div>
            </div>
            </Link>
          )
        }
        ) : isLoading ?
          <Loading boxes={2} parent='w-full flex !justify-start h-[420px] max-md:h-[490px] mt-2' child='rounded-2xl w-full h-full' /> :
          <p className=' mt-10 text-center w-full font-semibold'>No writter found</p>
        }

      </div>

    </div>
  )
}

export default BuyerMode