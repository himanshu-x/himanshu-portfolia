import React from "react";
import Html from "../assets/html-1.svg"
import Css from "../assets/css-3.svg"
import Github from "../assets/github-icon.svg"
import Javascript from "../assets/javascript-1.svg"
import Tailwindcss from "../assets/tailwindcss.svg"
import Reactjs from "../assets/react-2.svg"
import BaseLinkUrlBlankTab from "../utility-component/BaselinkUrlBlankTab";

export default function Skills() {

    const skillsData = [
        { url: "https://reactjs.org/", labelName: "REACTJS", imgSrc: Reactjs },
        { url: "https://www.w3schools.com/js/default.asp", labelName: "JAVASCRIPT", imgSrc: Javascript },
        { url: "https://www.w3schools.com/html/default.asp", labelName: "HTML", imgSrc: Html },
        { url: "https://www.w3schools.com/css/default.asp", labelName: "CSS", imgSrc: Css },
        { url: "https://tailwindcss.com/docs/installation", labelName: "TAILWINDCSS", imgSrc: Tailwindcss },
        { url: "https://github.com/", labelName: "GITHUB", imgSrc: Github }
    ]


    return (
        <div name="skills" className=" w-full lg:h-screen bg-[#0a192f] text-gray-300 ">
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4">
                <div className="">
                    <p className="text-4xl font-bold inline  border-b-4 border-pink-600">Skills</p>
                    <p className="py-4">These are the technologies I've worked with.</p>
                </div>
                <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">

                    {
                        skillsData.map(({ url, labelName: LabelName, imgSrc: ImgSrc }, index) => {
                            return (
                                <div key={`skill` + index}
                                    className="shadow-md shadow-[#0a192f] hover:scale-110 duration-500" >
                                    <BaseLinkUrlBlankTab url={url}><img className="w-20 h-20 mx-auto" src={ImgSrc} alt="reactjs icon" /></BaseLinkUrlBlankTab>
                                    <p className="my-4">{LabelName}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div >
    )
}