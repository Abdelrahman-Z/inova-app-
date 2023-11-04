import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className=' bg-white/20 pt-32 pb-8'>
        <div className=' container mx-auto'>
            {/* upper footer */}
            <div className=' flex justify-between items-start border-b border-solid border-gray-500 pb-10'>
                <div className=' flex-1 flex justify-start items-center'>
                    <Link href={'/'}>
                        <img src="/images/main-logo" alt="logo" />
                    </Link>
                    <div className=' text-white'>
                        <p className=' text-gray-400'>Join our</p>
                        <p>Newsetter</p>
                    </div>
                </div>
                <div className=' flex items-center flex-1'>
                    {/* issue */}
                    <input type="text" className=' py-1.5 px-2 outline-none bg-transparent border border-solid border-gray-400 text-white w-full' placeholder='What your are Looking for?'/>
                    <button className=' font-bold text-[#1e1e1e] bg-[#55e748] py-2 px-2'>
                        Subscrible
                    </button>
                </div>
            </div>
            {/* down footer */}
            <div className=' grid grid-cols-4 gap-12 pt-10'>
                <div className=' flex flex-col gap-4'>
                    <p className=' text-gray-400'>Lorem Ipsum is simply dummy text of the printing and typesett ing industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                    <p className=' text-white'>Follow us on</p>
                    <div className=' flex gap-16'>
                        <span className=' rounded-full bg-[#55e748] block w-fit p-3'>
                            <img src="/images/twitter.png" alt="" className=' w-6 h-6' />
                        </span>
                        <span className=' rounded-full bg-[#55e748] block w-fit p-3'>
                            <img src="/images/link.png" alt="" className=' w-6 h-6' />
                        </span>
                        <span className=' rounded-full bg-[#55e748] block w-fit p-3'>
                            <img src="/images/inesta.png" alt="" className=' w-6 h-6' />
                        </span>
                    </div>
                </div>
                <div className=' flex flex-col gap-5 text-white'>
                    <p>News</p>
                    <p>Tournaments</p>
                    <p>Courses</p>
                    <p>E-Books</p>
                </div>
                <div className=' flex flex-col gap-5 text-white'>
                    <p>Privacy policies</p>
                    <p>Terms & Conditions</p>
                    <p>Contact Us</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer