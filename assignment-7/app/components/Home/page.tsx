'use client';
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  return (
    <div className="mt-[120px] text-center">
        <h1 className="text-4xl font-serif font-bold">Discover Pakistan – A Land of Majestic Beauty</h1>
        <hr className='border-1.5 border-gray-300 my-4' />
        <h1 className='text-2xl font-serif font-bold'>We Can Take You Across Pakistan’s Beauty For Less</h1>
        <br />
        <div className="flex flex-wrap">
        <Image src="/images/pak-flag2.jpg"alt="pak-flag"width={443}height={300}className="mx-0.5 mb-1"></Image>
        <Image src="/images/pak.jpg"alt="pak"width={443}height={300}className="mx-0.5 mb-1"></Image>
        <Image src="/images/pak-flag.jpg"alt="pak-flag"width={443}height={300}className="mx-0.5 mb-1"></Image>
        </div>
        <hr className='border-1.5 border-gray-300 my-4' />
         <p className="text-2xl font-sans text-justify m-4">
         Pakistan,officially the Islamic Republic of Pakistan, Pakistan’s vibrant cities showcase a unique blend of history, culture, and modernity that captivate every traveler. Karachi, the bustling metropolis by the sea,
         offers a mix of contemporary life and deep-rooted heritage. Islamabad, the capital, stands out with its serene landscapes, modern architecture, and lush greenery.
         Lahore, the heart of Pakistan, mesmerizes with its rich Mughal history, vibrant culture, and delicious cuisine. Multan, the city of saints, enchants with its ancient shrines and Sufi traditions.
         Quetta, nestled in the mountains, presents breathtaking views and a gateway to the beauty of Balochistan. Each city offers a journey through Pakistan’s rich cultural tapestry, where modern life meets centuries-old traditions.
         </p>
         
         <hr className='border-1.5 border-gray-300 my-4' />
         <p className="text-4xl font-serif font-bold">Lets Visit The Most Beautiful City’s In Pakistan</p>
         <br />
         <div className="flex flex-wrap">
         <Link href="/components/Karachi" target='_blank'><Image src="/images/karachi.1.jpg" alt='qaid.mazar' width={440} height={300} className='mx-0.5 mb-1'></Image></Link>
         <Link href="/components/Islamabad" target='_blank'><Image src="/images/isb1.jpg" alt='faisal.mosq' width={446} height={300} className='mx-0.5 mb-1'></Image></Link>
         <Link href="/components/Lahore" target='_blank'><Image src="/images/lhr.jpg" alt='minarePakistan' width={440} height={300} className='mx-0.5 mb-1'></Image></Link>
         <br /> <br />
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Link href="/components/Karachi" className='text-blue-600 underline font-bold italic'>Karachi The City Of Lights</Link>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Link href="/components/Islamabad" className='text-blue-600 underline font-bold italic'>Islamabad The Green City</Link>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Link href="/components/Lahore" className='text-blue-600 underline font-bold italic'>Lahore The City of Gardens</Link>
         <br /><br />
         <Link href="/components/Quetta" target='_blank'><Image src="/images/qta.png" alt='qta' width={440} height={300} className='mx-0.5 mb-1'></Image></Link>
         <Link href="/components/Multan" target='_blank'><Image src="/images/multan-57131.jpeg" alt='multan' width={455} height={300} className='mx-0.5 mb-1'></Image></Link>
         <Link href="/components/Peshawar" target='_blank'><Image src="/images/khyber-gate1.jpg" alt='khyber-gate' width={435} height={350} className='mx-0.5 mb-1'></Image></Link>
         <br /><br />
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Link href="/components/Quetta" className='text-blue-600 underline font-bold italic'>Quetta The Fruit Garden of Pakistan</Link>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Link href="/components/Multan" className='text-blue-600 underline font-bold italic'>Multan,the City of Saints, House of Gold</Link>
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <Link href="/components/Peshawar" className='text-blue-600 underline font-bold italic'>Peshawar City of Flowers</Link>
         <br /> 
         <hr className="border-2 border-gray-300 my-4 w-full h-1" />
         <p className="text-2xl font-sans text-justify m-4">
         Discover Pakistan - Your Journey, Your Destination
         With Discover Pakistan, you can explore the breathtaking beauty of this country like never before. Our travel agency takes you on an unforgettable journey through every corner of Pakistan,
         all at incredibly affordable prices. Whether you want to experience the sandy beaches of Karachi or the serene hills of Islamabad, we bring you closer to the charm of every city.
         Pakistan is renowned for its vibrant culture, stunning landscapes, and warm hospitality. From the colorful streets of Lahore to the historic bazaars of Multan, and the majestic mountains of Quetta,
         every city holds a special charm for travelers.
         With Discover Pakistan, not only will you embark on a journey to explore magnificent cities, but you will also connect with the soul of this nation. Become part of a new world away from home,
         and let us help you capture the essence of Pakistan in your memories forever.
         </p>
         </div>
         <button className="bg-blue-950 px-2 py-2 rounded text-white" onClick={() => router.push("/components/About")}>About Pakistan</button>
    </div>
  )
}

export default Home;