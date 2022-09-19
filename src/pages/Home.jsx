import React from "react";
import { HiArrowNarrowDown, HiArrowNarrowRight } from "react-icons/hi";

export default function Home() {


    return (
        <div name="home" className="w-full lg:h-screen pt-[64px] bg-[#0a192f]">

            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4">
                <p className="text-pink-600 sm:text-md lg:text-xl"> Hi, my name is</p>
                <h1 className="text-3xl lg:text-7xl font-bold text-[#ccd6f6]">Himanshu Yadav</h1>
                <h1 className="text-2xl lg:text-7xl font-bold text-[#8892b0]"> I'm a Front End Developer.</h1>
                <p className="text-[#8892b0] py-4 max-w-[700px]"> Currently , I'm focused on building my career in IT field and create responsive web applications.</p>

                <div className="text-3xl flex justify-center font-bold ">
                    <p className="text-[#8892b0]  px-6 py-3 my-2 flex items-center animate-bounce hover:bg-pink-600  rounded-md"><HiArrowNarrowDown className="text-pink-600" />Scroll<HiArrowNarrowDown className="text-pink-600" />

                    </p>
                </div>
            </div>


        </div>
    )
}