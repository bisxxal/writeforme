import Link from 'next/link'
import React from 'react'

const WritterPage = () => {
    return (
        <div className=' w-full px-20 max-md:5'>
            <p className=' text-center text-2xl font-bold'>Top writters</p>

            <div>
                <Link href={`/writter/345`} className='mt-5 card bordercolor h-[200px] overflow-hidden p-2 flex gap-3 rounded-2xl'>
                <img className='w-[200px] rounded-2xl h-full' src="https://img.freepik.com/premium-vector/unreadable-hand-written-text-illegible-antique-english-cursive-fake-document-linear-abstract-text_994710-487.jpg" alt="" />

                <div className=' flex flex-col'>
                    <p>Name</p>
                    <p>College</p>
                </div>
            </Link>

            <Link href={`/writter/345`} className='mt-5 card bordercolor h-[200px] overflow-hidden p-2 flex gap-3 rounded-2xl'>
                <img className='w-[200px] rounded-2xl h-full' src="https://img.freepik.com/premium-vector/unreadable-hand-written-text-illegible-antique-english-cursive-fake-document-linear-abstract-text_994710-487.jpg" alt="" />

                <div className=' flex flex-col'>
                    <p>Name</p>
                    <p>College</p>
                </div>
            </Link>

            <Link href={`/writter/345`} className='mt-5 card bordercolor h-[200px] overflow-hidden p-2 flex gap-3 rounded-2xl'>
                <img className='w-[200px] rounded-2xl h-full' src="https://img.freepik.com/premium-vector/unreadable-hand-written-text-illegible-antique-english-cursive-fake-document-linear-abstract-text_994710-487.jpg" alt="" />

                <div className=' flex flex-col'>
                    <p>Name</p>
                    <p>College</p>
                </div>
            </Link>

            <Link href={`/writter/345`} className='mt-5 card bordercolor h-[200px] overflow-hidden p-2 flex gap-3 rounded-2xl'>
                <img className='w-[200px] rounded-2xl h-full' src="https://img.freepik.com/premium-vector/unreadable-hand-written-text-illegible-antique-english-cursive-fake-document-linear-abstract-text_994710-487.jpg" alt="" />

                <div className=' flex flex-col'>
                    <p>Name</p>
                    <p>College</p>
                </div>
            </Link>
            </div>
        </div>
    )
}

export default WritterPage