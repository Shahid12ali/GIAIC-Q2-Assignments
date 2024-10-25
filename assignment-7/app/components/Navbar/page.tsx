import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav className='fixed top-0 left-0 w-full h-[100px] p-4 bg-black/60 border-b border-white flex items-center justify-between'>
        <div className='flex items-center'>
          <Image src='/images/pak.flag.nav.webp' alt='pak-flage' width={115} height={115} className="animate-flutter mr-2" />
          <h1 className='text-white text-xl'>Discover Pakistan</h1>
        </div>
        <ul className='flex space-x-6 ml-auto'>
          <li><Link href="/" className='text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-black/40 hover:text-white'>Home</Link></li>
          <li><Link href="/components/Karachi" className='text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-black/40 hover:text-white'>Karachi</Link></li>
          <li><Link href="/components/Islamabad" className='text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-black/40 hover:text-white'>Islamabad</Link></li>
          <li><Link href="/components/Lahore" className='text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-black/40 hover:text-white'>Lahore</Link></li>
          <li><Link href="/components/Multan" className='text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-black/40 hover:text-white'>Multan</Link></li>
          <li><Link href="/components/Peshawar" className='text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-black/40 hover:text-white'>Peshawar</Link></li>
          <li><Link href="/components/Quetta" className='text-white px-4 py-2 rounded-full transition duration-300 ease-in-out hover:bg-black/40 hover:text-white'>Quetta</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;