"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { FaLinkedin, FaGithub } from "react-icons/fa";


const Hero = () => {
    return (
        <div>
            <section className="flex flex-col lg:flex-row items-center justify-around h-screen mb-40 sm:mt-20">
                <div className='w-[300px] sm:w-[400px] sm:ml-10 '>
                    <h1 className='text-white text-5xl  font-bold pt-36 '> <span>Hi, </span> I'm</h1><br />
                    <h1 className='text-white text-5xl place-self-center font-bold  text-center'>Shahid Ali </h1><br />
                    <p className='text-white'> A passionate student of IT, Cloud Computing, GenAI, Web 3.0
                        Full Stack Developer at Govermor House Karachi.</p>
                    <div className='m-8 p-2 w-auto h-auto'>
                        <button className='inline-flex text-[35px] text-blue-600'><Link href='/' target='-blank'>
                            <FaLinkedin /></Link>
                        </button>
                        <button className='inline-flex text-[30px] text-white m-4'><Link href='/' target='-blank'>
                            <FaGithub /> </Link>
                        </button>
                    </div>
                </div>
                <div>
                    <Image src={"/images/profile.jpg"} alt="profile-image" width={350} height={350} className='mt-52  mb-20 w-auto h-auto rounded-[50%] shadow-lg shadow-white' />
                </div>
            </section>
        </div>
    );
}

export default Hero;

