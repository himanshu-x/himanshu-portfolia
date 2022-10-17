import React from 'react';
import Veganfood from '../assets/justveganfood.jpg';
import DumyFoodWeb from '../assets/dumyfood-min.png';
import Tours from '../assets/tours-min.png';
import Village from '../assets/myvillage-min.png';
import RestaMenu from '../assets/RestaMenu.png';
import BaseLinkUrlBlankTab from '../utility-component/BaselinkUrlBlankTab';

const Work = () => {

    const aboutData = [
        { url: "https://github.com/himanshu-x/just-vegan-react", labelName: "Private Code", bgImg: Veganfood },
        { url: "https://github.com/himanshu-x/new-food-react-websites", labelName: "Check code", bgImg: DumyFoodWeb },
        { url: "https://github.com/himanshu-x/tours-app", labelName: "Check code", bgImg: Tours },
        { url: "https://github.com/himanshu-x/my-village", labelName: "Private Code", bgImg: Village },
        { url: "https://github.com/himanshu-x/restaurant-menu", labelName: "Check code", bgImg: RestaMenu },
    ]

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
                    {
                        aboutData.map(({ url, labelName, bgImg }, index) => {
                            const divClasses = "bg-cover object-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div "
                            const linkClasses = "border hover:bg-pink-600 bg-orange-600 rounded-md p-2"
                            return (
                                <div key={`about` + index}
                                    style={{ backgroundImage: `url(${bgImg})` }}
                                    className={divClasses}>
                                    <BaseLinkUrlBlankTab className={linkClasses} url={url}>{labelName}</BaseLinkUrlBlankTab>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    );
};

export default Work;