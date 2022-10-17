import React from "react";
import { HiOutlineDocumentText, HiOutlineMail } from 'react-icons/hi'
import { TbPhoneCall } from 'react-icons/tb'
import { MdOutlineLocationOn } from 'react-icons/md'
import BaseLinkUrlBlankTab from "../utility-component/BaselinkUrlBlankTab";

export default function Contact() {

    const contactData = [
        { url: "https://www.google.com/maps/place/ROYAL+GARDEN+ESTATE,+E+12,+Sector+61,+Noida,+Uttar+Pradesh+201307/@28.5972827,77.3659647,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce579f4f7b9e5:0x9600e2852e68bf63!8m2!3d28.5973257!4d77.3681525", labelName: "Royal Garden, Sec-61, Noida", iconName: MdOutlineLocationOn },
        { url: "mailto: hy12632@gmail.com", labelName: "hy12632@gmail.com", iconName: HiOutlineMail },
        { url: "tel:8769476754", labelName: "+91-8769476754", iconName: TbPhoneCall },
        { url: "https://drive.google.com/file/d/1rNp6z1Dpii-WCZi_nNgQ2Y2Y-tZS24F8/view?usp=sharing", labelName: "Resume", iconName: HiOutlineDocumentText },
    ]

    return (

        <div name="contact" className="lg:h-screen sm:h-full w-full  bg-[#0a192f] text-gray-300 ">
            <div className="max-w-[1000px] mx-auto flex flex-col justify-center w-full h-full p-4 gap-6 ">
                <div>
                    <p className="text-4xl font-bold  underline decoration-pink-600 underline-offset-8">Contact</p>
                </div>
                <div className="px-4 ">
                    {
                        contactData.map(({ url, labelName, iconName: IconName }, index) => {
                            return (
                                <p key={index} className="flex items-center gap-3 mb-4">
                                    <IconName size={25} />
                                    <BaseLinkUrlBlankTab className="text-xl" url={url}>{labelName}</BaseLinkUrlBlankTab>
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}