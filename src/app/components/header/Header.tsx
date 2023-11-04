import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <header className=' text-white'>
        <div className=' container mx-auto'>
            <div className=' py-5 flex justify-end border-b border-solid border-white/40'>
                العربيه
            </div>
            <div className=' w-full flex justify-between items-center py-5'>
                <Link href={'/'}>
                    <img  alt='logo' src='/images/main-logo.svg'/>
                </Link>
                <Link href={'/sighnup'}>
                    Sign In or Sign Up
                </Link>
            </div>
        </div>
    </header>
  )
}

export default Header