import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className=' flex bg-white/20 text-white'>
        <div className=' container mx-auto flex justify-between items-center'>
            <ul className=' flex gap-10'>
                <li><Link href={'/'}>Home</Link></li>
                <li><Link href={'/'}>News</Link></li>
                <li><Link href={'/'}>Courses</Link></li>
                <li><Link href={'/'}>E-books</Link></li>
                <li><Link href={'/'}>Contact Us</Link></li>
            </ul>
            <Link href={'/'} className=' flex items-center font-semibold gap-2 py-3'>
                <img src="/images/cart.png" alt="cart" />
                <span>cart</span>
            </Link>
        </div>
    </nav>
  )
}

export default Navbar