import React from 'react';
import Link from 'next/link';
import { FaGithub } from "react-icons/fa6";
import { MdMarkEmailRead } from "react-icons/md";
import { MdOutlineMobileFriendly } from "react-icons/md";
import { FaUserCheck } from "react-icons/fa";

const About = () => {
  return (
    <div>
      <section className='mt-[400px] sm:mt-72'>
        <h1 className="text-4xl text-white text-center mb-10 animate-bounce duration-500"><span>ABOUT</span></h1>
        <p className='text-white text-xl text-center px-20 font-serif'>
          I Am Passionate About pursuing a career in Cloud Computing and <br />
          Artificial intelligence (AI) technologies. I have a strong foundation in <span>HTML, CSS, JavaScript, Typescript, Tailwind CSS, NodeJs</span> and <span>NextJs</span> and I&apos;m continuously expanding my knowledge and skills in these areas. I am Enthusiastic about Cloud Engineering & GenAI, exploring and mastering various cloud services and solutions.
        </p>
        <div className='text-white flex flex-col sm:flex-row sm:justify-around text-center mt-10'>
          <article>
          <div className="flex items-center justify-center space-x-2">
              <FaUserCheck className='text-4xl'/>
              <h5><span>Full Name</span></h5>
            </div>
            <p className='mt-1'>Shahid Ali</p>
          </article>
          <article>
          <div className="flex items-center justify-center space-x-2">
              <MdMarkEmailRead className='text-4xl'/>
              <h5><span>Email</span></h5>
            </div>
            <p className='mt-1'>shahidbaloch.sm@gmail.com</p>
          </article>
          <article>
            <div className="flex items-center justify-center space-x-2">
              <FaGithub className="text-white text-4xl" />
              <h5><span>GitHub</span></h5>
            </div>
            <Link href="https://github.com/Shahid12ali" target='_blank' className="hover:underline block mt-1">
              https://github.com/Shahid12ali
            </Link>
          </article>
          <article>
          <div className="flex items-center justify-center space-x-2">
          <MdOutlineMobileFriendly className='text-4xl'/>
              <h5><span>Mobile</span></h5>
            </div>
            <p className='mt-1'>0301-3790005</p>
          </article>
        </div>
      </section>
    </div>
  );
};

export default About;
