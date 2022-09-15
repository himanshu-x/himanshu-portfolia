import React from "react";

export default function About() {

    return (
        <div name="about" className="h-screen w-full bg-[#0a192f] text-gray-300 ">
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4">
                <div className="">
                    <p className="text-4xl font-bold inline  border-b-4 border-pink-600">About</p>

                </div>
                <div className="w-full grid lg:grid-cols-2 sm:grid-cols-1 gap-4 text-center py-8">
                    <div className="sm:text-right text-3xl font-bold">
                        <p>Hi, I'm Himanshu, nice to meet you. Please take a look around.</p>
                    </div>
                    <p>I am passionate about building excellent software that improve the lives of those around me.
                    </p>

                </div>

            </div>
        </div>

    )
}