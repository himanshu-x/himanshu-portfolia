import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineDocumentText } from 'react-icons/hi'
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineLocationOn } from 'react-icons/md'
import LogoHy from "../assets/him.png"
import { Link as LinkScroll } from 'react-scroll'
import BaseLinkUrlBlankTab from "./BaselinkUrlBlankTab";

export default function Navbar() {

    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }
    const socialData = [
        { url: "https://www.linkedin.com/in/himanshu1807/", labelName: "Linkedin", iconName: FaLinkedin, bgColor: `bg-blue-500` },
        { url: "https://github.com/himanshu-x", labelName: "Github", iconName: FaGithub, bgColor: `bg-[#333333]` },
        { url: "mailto: hy12632@gmail.com", labelName: "Email", iconName: HiOutlineMail, bgColor: `bg-[#565f69]` },
        { url: "tel:8769476754", labelName: "Phone", iconName: FiPhoneCall, bgColor: `bg-[#6fc2b0]` },
        { url: "https://www.google.com/maps/place/ROYAL+GARDEN+ESTATE,+E+12,+Sector+61,+Noida,+Uttar+Pradesh+201307/@28.5972827,77.3681534,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce579f4f7b9e5:0x9600e2852e68bf63!8m2!3d28.5973257!4d77.3681525", labelName: "Address", iconName: MdOutlineLocationOn, bgColor: `bg-slate-600` },
        { url: "https://drive.google.com/file/d/1R31CetvFR78RM3xdxwPSnkKIUQb4o_xV/view?usp=share_link", labelName: "Resume", iconName: HiOutlineDocumentText, bgColor: `bg-amber-700` },
    ]

    const mobileNavMenuData = [
        { toLink: "home", labelName: "Home" },
        { toLink: "about", labelName: "About" },
        { toLink: "skills", labelName: "Skills" },
        { toLink: "work", labelName: "Work" },
        { toLink: "contact", labelName: "Contact" },
    ]

    return (
        <div className="fixed w-full h-[64px] flex justify-between bg-[#0a192f] md:justify-around items-center px-8 text-gray-300">

            <img className="mt-2" src={LogoHy} alt="hy logo" style={{ width: "64px" }} />

            {/* NavBarMenu  */}
            <ul className="hidden md:flex gap-8 text-xl">
                {
                    mobileNavMenuData.map(({ toLink, labelName }, index) => {
                        return (
                            <li key={`NavBarMenu` + index} className="hover:text-pink-600 hover:underline cursor-pointer">
                                <LinkScroll to={toLink} smooth={true} duration={500} >
                                    {labelName}
                                </LinkScroll>
                            </li>
                        )
                    })
                }
            </ul>

            {/* SideBar  */}
            <div onClick={handleClick} className="md:hidden z-10  text-2xl ">
                {!nav ? <FaBars className="text-pink-800" /> : <FaTimes className="text-pink-800" />}
            </div>

            {/* Mobile Menu  */}
            <ul className={!nav ? 'hidden' : 'absolute top-16 right-4 text-[#0a192f] p-4 bg-pink-600 flex flex-col justify-center items-center '}>
                {
                    mobileNavMenuData.map(({ toLink: ToLink, labelName: LabelName }, index) => {
                        return (
                            <li key={`mobileIcons` + index} className="py-1 text-2xl"><LinkScroll onClick={handleClick} to={ToLink} smooth={true} duration={500} >
                                {LabelName}
                            </LinkScroll></li>
                        )
                    })
                }
            </ul>

            {/* Side Social Icons  */}
            <div className="hidden lg:flex fixed flex-col top-[25%] left-0 ">
                <ul>
                    {
                        socialData.map(({ url, labelName: Name, iconName: IconName, bgColor: BgColor }, index) => {
                            const linkClasses = "flex justify-around items-center w-full text-gray-300 "
                            const listClasses = `w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-10px] duration-300 ${BgColor}`
                            return (
                                <li key={`sideIcons` + index} className={listClasses}>
                                    <BaseLinkUrlBlankTab className={linkClasses} url={url}> {Name} <IconName size={30} /></BaseLinkUrlBlankTab>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        </div>
    )
}