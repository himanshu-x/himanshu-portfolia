import React from "react";
import { HiOutlineDocumentText, HiOutlineMail } from 'react-icons/hi'
import { TbPhoneCall } from 'react-icons/tb'
import { MdOutlineLocationOn } from 'react-icons/md'

export default function Contact() {

    return (

        <div name="contact" className="lg:h-screen sm:h-full w-full  bg-[#0a192f] text-gray-300 ">
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4 gap-6 ">
                <div>
                    <p className="text-4xl font-bold  underline decoration-pink-600 underline-offset-8">Contact</p>
                </div>
                <div>
                    <p className="flex items-center gap-3 mb-4">
                        <MdOutlineLocationOn size={25} />
                        <a className="text-xl" target="_blank" rel="noopener noreferrer" href="https://www.google.com/maps/place/ROYAL+GARDEN+ESTATE,+E+12,+Sector+61,+Noida,+Uttar+Pradesh+201307/@28.5972827,77.3659647,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce579f4f7b9e5:0x9600e2852e68bf63!8m2!3d28.5973257!4d77.3681525">  Royal Garden, Sec-61, Noida</a>

                    </p>
                    <p className="flex items-center gap-3 mb-4">
                        <HiOutlineMail size={25} />
                        <a className="text-xl" target="_blank" rel="noopener noreferrer" href="mailto: hy12632@gmail.com">hy12632@gmail.com</a>
                    </p>
                    <p className="flex items-center gap-3 mb-4">
                        <TbPhoneCall size={25} />
                        <a className="text-xl" target="_blank" rel="noopener noreferrer" href="tel:8769476754">+91-8769476754</a>
                    </p>
                    <p className="flex items-center gap-3 mb-4">
                        <HiOutlineDocumentText size={25} />
                        <a className="text-xl" target="_blank" rel="noopener noreferrer" href="https://drive.google.com/file/d/1rNp6z1Dpii-WCZi_nNgQ2Y2Y-tZS24F8/view?usp=sharing">Resume</a>
                    </p>

                </div>
            </div>
        </div>
    )
}