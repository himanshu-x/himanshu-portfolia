import React from "react";
import Html from "../assets/html-1.svg"
import Css from "../assets/css-3.svg"
import Github from "../assets/github-icon.svg"
import Javascript from "../assets/javascript-1.svg"
import Tailwindcss from "../assets/tailwindcss.svg"
import Reactjs from "../assets/react-2.svg"


export default function Skills() {

    return (
        <div name="skills" className=" w-full lg:h-screen bg-[#0a192f] text-gray-300 ">
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4">
                <div className="">
                    <p className="text-4xl font-bold inline  border-b-4 border-pink-600">Skills</p>
                    <p className="py-4">These are the technologies I've worked with.</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
                    <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
                        <a href="https://reactjs.org/"><img className="w-20 h-20 mx-auto" src={Reactjs} alt="reactjs icon" /></a>
                        <p className="my-4">REACTJS</p>
                    </div>
                    <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
                        <a href="https://www.w3schools.com/js/default.asp"><img className="w-20 h-20 mx-auto" src={Javascript} alt="javascript icon" /></a>
                        <p className="my-4">JAVASCRIPT</p>
                    </div>
                    <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
                        <a href="https://www.w3schools.com/html/default.asp"><img className="w-20 h-20 mx-auto" src={Html} alt="html icon" /></a>
                        <p className="my-4">HTML</p>
                    </div>
                    <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
                        <a href="https://www.w3schools.com/css/default.asp"> <img className="w-20 h-20 mx-auto" src={Css} alt="css icon" /></a>
                        <p className="my-4">CSS</p>
                    </div>
                    <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
                        <a href="https://tailwindcss.com/docs/installation"><img className="w-20 h-20 mx-auto" src={Tailwindcss} alt="tailwindcss icon" /></a>
                        <p className="my-4">TAILWINDCSS</p>
                    </div>
                    <div className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500">
                        <a href="https://github.com/"><img className="w-20 h-20 mx-auto" src={Github} alt="github icon" /></a>
                        <p className="my-4">GITHUB</p>
                    </div>
                </div>
            </div>
        </div>
    )
}