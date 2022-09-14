import React from "react";
import Html from "../assets/html5.png"
import Css from "../assets/css.png"
import Github from "../assets/github.png"
import Javascript from "../assets/javascript.png"
import Nodejs from "../assets/node.png"
import Tailwindcss from "../assets/tailwind.png"
import Reactjs from "../assets/react.png"


export default function Skills() {

    return (
        <div name="skills" className="h-screen w-full bg-[#0a192f] text-gray-300 ">
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4">
                <div className="">
                    <p className="text-4xl font-bold inline  border-b-4 border-pink-600">Skills</p>
                    <p className="py-4">These are the technologies I've worked with</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
                        <img className="w-20 h-20 mx-auto" src={Html} alt="html icon" />
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
                        <img className="w-20 h-20 mx-auto" src={Css} alt="css icon" />
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
                        <img className="w-20 h-20 mx-auto" src={Javascript} alt="javascript icon" />
                        <p className="my-4">JAVASCRIPT</p>
                    </div>
                    <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
                        <img className="w-20 h-20 mx-auto" src={Tailwindcss} alt="tailwindcss icon" />
                        <p className="my-4">TAILWINDCSS</p>
                    </div>
                    <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
                        <img className="w-20 h-20 mx-auto" src={Reactjs} alt="reactjs icon" />
                        <p className="my-4">REACTJS</p>
                    </div>
                    <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
                        <img className="w-20 h-20 mx-auto" src={Nodejs} alt="nodejs icon" />
                        <p className="my-4">NODEJS</p>
                    </div>
                    <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
                        <img className="w-20 h-20 mx-auto" src={Github} alt="github icon" />
                        <p className="my-4">GITHUB</p>
                    </div>
                </div>

            </div>
        </div>
    )
}