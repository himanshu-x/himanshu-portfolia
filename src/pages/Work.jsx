import React from 'react';
import Veganfood from '../assets/justveganfood.jpg';
import DumyFoodWeb from '../assets/dumyfood-min.png';
import Tours from '../assets/tours-min.png';
import Village from '../assets/myvillage-min.png';
import RestaMenu from '../assets/RestaMenu.png';

const Work = () => {
    return (
        <div name='work' className='w-full lg:h-screen text-gray-300 bg-[#0a192f] '>
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600'>
                        Work
                    </p>
                    <p className='py-6'>Check out some of my recent work.</p>
                </div>
                <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 min-h-[500px]'>
                    <div
                        style={{ backgroundImage: `url(${Veganfood})` }}
                        className=' bg-cover object-center  shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                        <a className='border hover:bg-pink-600 bg-orange-600 rounded-md p-2' href="https://github.com/himanshu-x/just-vegan-react">Check Code</a>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${DumyFoodWeb})` }}
                        className=' bg-cover shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <a className='border  hover:bg-pink-600 bg-orange-600 rounded-md p-2' href="https://github.com/himanshu-x/new-food-react-websites">Check code</a>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${Tours})` }}
                        className=' bg-cover  shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <a className='border  hover:bg-pink-600 bg-orange-600 rounded-md p-2' href="https://github.com/himanshu-x/tours-app">Check code</a>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${Village})` }}
                        className=' bg-cover  shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <a className='border  hover:bg-pink-600 bg-orange-600 rounded-md p-2' href="https://github.com/himanshu-x/my-village">Check code</a>
                    </div>
                    <div
                        style={{ backgroundImage: `url(${RestaMenu})` }}
                        className=' bg-cover  shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        <a className='border  hover:bg-pink-600 bg-orange-600 rounded-md p-2' href="https://github.com/himanshu-x/restaurant-menu">Check code</a>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Work;