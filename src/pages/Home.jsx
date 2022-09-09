import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

export default function Home() {


    return (
        <div name="home" className="w-full h-screen bg-[#0a192f]">

            <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
                <p className="text-pink-600 text-xl "> Hi, my name is</p>
                <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">Himanshu Yadav</h1>
                <h1 className="text-3xl sm:text-7xl font-bold text-[#8892b0]"> I'm a Front End Developer.</h1>
                <p className="text-[#8892b0] py-4 max-w-[700px]"> Currently , I focused on build my career in IT field and building responsive web applications.</p>

                <div>
                    <button className="text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 ">View Work
                        <span className="group-hover:rotate-90 duration-200s"><HiArrowNarrowRight className="ml-3" /></span>

                    </button>
                </div>
            </div>


        </div>
    )
}