'use client'
import React from 'react'
import { useCourse } from './hook'
import Link from 'next/link'
import { Accordion, AccordionItem, Spinner } from '@nextui-org/react'
import ReactPlayer from 'react-player'

const Course = () => {
    const {data ,isLoading} = useCourse()
    if (isLoading) {
        return <Spinner/>
    }
  return (
    <div className=' bg-black py-14'>
        <div className=' text-white container mx-auto'>
            {/* header */}
            <div className='flex justify-between'>
                <div>
                    <h1 className=' font-bold text-3xl'>   
                        {data?.data?.attributes?.course?.title}
                    </h1>
                    <div className=' flex items-center'>
                    </div>
                </div>
                <div className=' flex flex-col gap-3 w-1/4'>
                    <h1 className=' font-bold text-3xl'>   
                        USD <span className='font-bold text-5xl'>{data?.data?.attributes?.price}</span>
                    </h1>
                    <div className=' flex gap-2 '>
                        <button className=' bg-lime-400 text-black font-bold py-3 flex-1'>Pay</button>
                        <button className=' bg-black border border-lime-400 text-lime-400  py-3'>
                            cart
                        </button>
                    </div>
                </div>
            </div>
            {/* viedeo */}
            <div className=' w-full video'>
                {data && <ReactPlayer
                    light={<img src={data?.data?.attributes?.course?.image_url} alt='Thumbnail' />}
                    url={data?.data?.attributes?.course?.video_url}
                    style={{width: "100%"}}
                    controls
                />}
            </div>
            {/* sctions */}
            <div className=' flex flex-col gap-10'>
                <div>
                    <Link href={'/'} className=' font-semibold hover:text-lime-400 hover:border-b hover:border-lime-400 hover:border-solid p-4'>about</Link>
                    <Link href={'/'} className=' font-semibold hover:text-lime-400 hover:border-b hover:border-lime-400 hover:border-solid p-4'>contet</Link>
                </div>
                <div className=' flex flex-col gap-5 '>
                    <h1 className=' text-white text-6xl font-bold'>LEVEL</h1>
                    <p className=' text-gray-400'>
                        {data?.data?.attributes?.course?.level.value}
                    </p>
                </div>
                <div className=' flex flex-col gap-5 '>
                    <h1 className=' text-white text-6xl font-bold'>DESCRIPTIONS</h1>
                    <p className=' text-gray-400'>
                        Description for course
                    </p>
                </div>
                <div className=' bg-gray-900 py-7 flex gap-8'>
                    <div className=' p-4 border border-white border-solid flex justify-center items-center flex-col'>
                        <h1 className=' text-3xl font-bold'>DURATION</h1>
                        <p>3 sessions (4 hours)</p>
                    </div>
                    <div className=' p-4 border border-white border-solid flex justify-center items-center flex-col'>
                        <h1 className=' text-3xl font-bold'>START DATE</h1>
                        <p>01/02/2023</p>
                    </div>
                </div>
                <div>
                    <h1 className='text-white text-6xl font-bold'>CONTENT</h1>
                    <div className=' pt-10 flex gap-10 '>
                        <div className=' flex flex-col gap-10 w-1/4'>
                            <p>Week 1</p>
                            <p>Week 2</p>
                        </div>
                       {data && <Accordion>
                        {data?.data?.sections?.map((el:any) => 
                            <AccordionItem key={el.section_id} classNames={{title:'text-white text-6xl font-bold' , indicator: 'bg-lime-400 text-lime-400'}} title={el.title}>
                                {el.sections.map((el:any) => <div key={el.course_session_id} className='flex justify-between'>
                                    <div>
                                        <img src="/images/playlist.png" alt="" />
                                        <p>{el.title}</p>
                                    </div>
                                    <div className=' flex gap-2 items-center'>
                                        {el.position}
                                        <img src="/images/lock.png" alt="" />
                                    </div>
                                </div>)}
                            </AccordionItem>
                        )}
                         
                        </Accordion>}
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Course