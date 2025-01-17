import React from 'react'
import Link from 'next/link'



const Navbar = () => {
    return (
        <div>
            <div className=' w-screen fixed top-0 right-0 z-10'>
                <div className='grid grid-cols-2 mx-auto justify-between sm:items-center py-4 sm:py-6'>
                    <div className='text-white ml-2 text-xl  sm:text-3xl sm:ml-10'>Portfolio
                    </div>
                    <div className='flex justify-end mr-1.5 mt-1.5 gap-2 text-sm sm:text-lg sm:gap-10 sm:mr-24 font-serif'>
                        <Link href="/" className='text-white hover:text-blue-400 duration-500 '>Home</Link>
                        <Link href="/Components/About" className='text-white hover:text-blue-400 duration-500 '>About</Link>
                        <Link href="/Components/Skills" className='text-white hover:text-blue-400 duration-500 '>Skills</Link>
                        <Link href="/Components/Contact" className='text-white hover:text-blue-400 duration-500 '>Contact us</Link>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Navbar;