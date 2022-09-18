import React from "react";
import Himanshu from "../assets/him1.png"
export default function About() {

    return (
        <div name="about" className="lg:h-screen w-full bg-[#0a192f] text-gray-300 ">
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4">
                <div className="">
                    <p className="text-4xl font-bold inline  border-b-4 border-pink-600">About</p>
                </div>
                <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-2 text-center py-8">
                    <img className="p-3 object-contain mx-auto rounded-full max-w-xs" src={Himanshu} alt="img" />
                    <div className="">
                        <p className="sm:text-right text-3xl font-bold">Hi, I'm Himanshu, nice to meet you. Please take a look around.</p>
                        <p className="p-9">I am passionate about building excellent software that improve the lives of those around me.</p>
                    </div>
                </div>

            </div>
        </div>

    )
}