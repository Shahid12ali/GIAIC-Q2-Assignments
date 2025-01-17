import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Skills = () => {
    return (
        <section className="bg-gray-600 py-28">
            <div className="container mx-auto px-4 text-center">
                <h1 className="text-5xl font-bold text-lime-500 mb-12">Skills</h1>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-12">

                    <div className="flex flex-col items-center">
                        <Image src="/images/html.png" alt="HTML" width={100} height={100} className="mb-4" />
                        <h2 className="text-lg font-semibold text-white">HTML</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/images/css.jpeg" alt="CSS" width={100} height={100} className="mb-4" />
                        <h2 className="text-lg font-semibold text-white">CSS</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/images/java.jpg" alt="javascript" width={100} height={100} className="mb-4" />
                        <h2 className="text-lg font-semibold text-white">javascript</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/images/python.png" alt="python" width={100} height={100} className="mb-4" />
                        <h2 className="text-lg font-semibold text-white">Python</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/images/next.js.png" alt="nextjs" width={100} height={100} className="mb-4" />
                        <h2 className="text-lg font-semibold text-white">NEXTJS</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/images/node-js.png" alt="nodejs" width={100} height={100} className="mb-4" />
                        <h2 className="text-lg font-semibold text-white">NODEJS</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/images/figma.png" alt="figma" width={100} height={100} className="mb-4" />
                        <h2 className="text-lg font-semibold text-white">FIGMA</h2>
                    </div>
                    <div className="flex flex-col items-center">
                        <Image src="/images/type.png" alt="adobe" width={100} height={100} className="mb-4" />
                        <h2 className="text-lg font-semibold text-white">TypeScript</h2>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Skills;