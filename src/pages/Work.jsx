import React from 'react';
import Veganfood from '../assets/veganfood.png';
import DumyFoodWeb from '../assets/dumyfood.png';
import Tours from '../assets/tours.png';
import Village from '../assets/village.png';

const Work = () => {
    return (
        <div name='work' className='w-full lg:h-screen text-gray-300 bg-[#0a192f] '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>Check out some of my recent work</p>
                </div>

                {/* Container */}
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 min-h-full'>

                    {/* Grid Item */}
                    <marquee behavior="scroll" direction="up"
                        style={{ backgroundImage: `url(${Veganfood})` }}
                        className=' bg-cover 
                        object-center  shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 mt-6 '>
                            <span className='text-2xl font-bold text-white tracking-wider'>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </marquee>
                    <marquee behavior="scroll" direction="up"
                        style={{ backgroundImage: `url(${DumyFoodWeb})` }}
                        className=' bg-cover shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 mt-6'>
                            <span className='text-2xl font-bold text-white tracking-wider '>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </marquee>
                    <marquee
                        behavior="scroll" direction="up" style={{ backgroundImage: `url(${Tours})` }}
                        className=' bg-cover  shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 mt-6'>
                            <span className='text-2xl font-bold text-white tracking-wider '>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </marquee>
                    <marquee
                        behavior="scroll" direction="up" style={{ backgroundImage: `url(${Village})` }}
                        className=' bg-cover  shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'
                    >
                        {/* Hover Effects */}
                        <div className='opacity-0 group-hover:opacity-100 mt-6'>
                            <span className='text-2xl font-bold text-white tracking-wider '>
                                React JS Application
                            </span>
                            <div className='pt-8 text-center'>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href='/'>
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </marquee>
                </div>
            </div>
        </div>
    );
};

export default Work;