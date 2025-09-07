import { allWritters } from '@/actions/user.action'
import { useQuery } from '@tanstack/react-query'
import Link from 'next/link'
import React from 'react'
import Loading from './ui/loading'

const BuyerMode = () => {

  const { data, isLoading } = useQuery({
    queryKey: ['userProfile'],
    queryFn: async () => {
      return await allWritters()
    },
  })
  return (
    <div className='min-h-screen w-full px-20 max-md:5'>
      <div>

        <p className=' mt-5 font-bold text-3xl'>Find near by writters</p>
        <div className=' between mt-9 '>
          <p>Top writter </p>
          <Link href={`/writter`}>View all</Link>
        </div>
      </div>

      <div className='flex gap-3 px-5 max-md:px-2 scrollbar overflow-x-auto  w-full mt-4  p-1 text-sm'>

        {data && !isLoading && data?.writters?.length > 0 ? data?.writters?.map((writer, index) => (
          <Link href={`writter/${writer.id}`} key={index} className=' !min-w-[200px] !min-h-[250px] card bordercolor rounded-2xl overflow-hidden'>
            <img src={writer?.showsCasePhotos[0]} className=' object-cover w-full h-[160px]' alt="" />
            <div className=' between px-2 mt-2'>
              <p className=' mt-1'>{writer?.name}</p>
              <h2>₹ {writer?.pagePrice}</h2>
            </div>
            <p className=' mt-2 text-center text-lg'>College name</p>
          </Link>
        )):
        //  <div className=' flex  w-full '>
        <Loading boxes={5} parent=' !flex-row flex !min-w-[10px] !min-h-[250px]' child='rounded-2xl w-full h-full' />
      }
      {/* </div> */}

        

      </div>


      

    </div>
  )
}

export default BuyerMode