import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail, HiOutlineDocumentText } from 'react-icons/hi'
import { FiPhoneCall } from 'react-icons/fi'
import { MdOutlineLocationOn } from 'react-icons/md'
import LogoHy from "../assets/him.png"
import { Link as LinkScroll } from 'react-scroll'

export default function Navbar() {

    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }


    return (
        <div className="fixed w-full h-[64px] flex justify-between bg-[#0a192f] md:justify-around items-center px-8 text-gray-300">

            <img className="mt-2" src={LogoHy} alt="hy logo" style={{ width: "64px" }} />

            {/* menu  */}

            <ul className="hidden md:flex gap-8 text-xl  ">
                <li className="hover:text-pink-600 hover:underline cursor-pointer "> <LinkScroll to="home" smooth={true} duration={500} >
                    Home
                </LinkScroll></li>
                <li className="hover:text-pink-600 hover:underline cursor-pointer "> <LinkScroll to="about" smooth={true} duration={500} >
                    About
                </LinkScroll></li>
                <li className="hover:text-pink-600 hover:underline cursor-pointer "> <LinkScroll to="skills" smooth={true} duration={500} >
                    Skills
                </LinkScroll></li>
                <li className="hover:text-pink-600 hover:underline cursor-pointer "> <LinkScroll to="work" smooth={true} duration={500} >
                    Work
                </LinkScroll></li>
                <li className="hover:text-pink-600 hover:underline cursor-pointer "> <LinkScroll to="contact" smooth={true} duration={500} >
                    Contact
                </LinkScroll></li>
            </ul>

            {/* sideBar  */}

            <div onClick={handleClick} className="md:hidden z-10  text-2xl ">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobile menu  */}

            <ul className={!nav ? 'hidden' : 'absolute top-16 right-4 text-[#0a192f] p-4 bg-pink-600 flex flex-col justify-center items-center '}>
                <li className="py-1 text-2xl"><LinkScroll onClick={handleClick} to="home" smooth={true} duration={500} >
                    Home
                </LinkScroll></li>
                <li className="py-1 text-2xl"><LinkScroll onClick={handleClick} to="about" smooth={true} duration={500} >
                    About
                </LinkScroll></li>
                <li className="py-1 text-2xl"><LinkScroll onClick={handleClick} to="skills" smooth={true} duration={500} >
                    Skills
                </LinkScroll></li>
                <li className="py-1 text-2xl"><LinkScroll onClick={handleClick} to="work" smooth={true} duration={500} >
                    Work
                </LinkScroll></li>
                <li className="py-1 text-2xl"><LinkScroll onClick={handleClick} to="contact" smooth={true} duration={500} >
                    Contact
                </LinkScroll></li>
            </ul>
            {/* Social icons  */}
            <div className="hidden lg:flex fixed flex-col top-[25%] left-0 ">
                <ul>
                    <li className=" w-[160px] h-[60px] flex justify-between  items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500">
                        <a className="flex justify-around items-center w-full text-gray-300" href="https://www.linkedin.com/in/himanshu1807/">
                            Linkedin <FaLinkedin size={30} />
                        </a>
                    </li>
                    <li className=" w-[160px] h-[60px] flex justify-between  item-center ml-[-100px] hover:ml-[-10px] duration-300  bg-[#333333] ">
                        <a className="flex justify-around items-center w-full text-gray-300" href="https://github.com/himanshu-x">
                            Github <FaGithub size={30} />
                        </a>
                    </li>
                    <li className=" w-[160px] h-[60px] flex justify-between  item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]">
                        <a className="flex justify-around items-center w-full text-gray-300" href="mailto: hy12632@gmail.com">
                            Email <HiOutlineMail size={30} />
                        </a>

                    </li>
                    <li className=" w-[160px] h-[60px] flex justify-between  item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a className="flex justify-around items-center w-full text-gray-300" href="tel:8769476754">
                            Phone <FiPhoneCall size={30} />
                        </a>
                    </li>
                    <li className=" w-[160px] h-[60px] flex justify-between  item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-slate-600">
                        <a className="flex justify-around items-center w-full text-gray-300" href="https://www.google.com/maps/place/ROYAL+GARDEN+ESTATE,+E+12,+Sector+61,+Noida,+Uttar+Pradesh+201307/@28.5972827,77.3681534,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce579f4f7b9e5:0x9600e2852e68bf63!8m2!3d28.5973257!4d77.3681525">
                            Address <MdOutlineLocationOn size={30} />
                        </a>
                    </li>
                    <li className=" w-[160px] h-[60px] flex justify-between  item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-amber-700">
                        <a className="flex justify-around items-center w-full text-gray-300" href="https://drive.google.com/file/d/1rNp6z1Dpii-WCZi_nNgQ2Y2Y-tZS24F8/view?usp=sharing">
                            Resume <HiOutlineDocumentText size={30} />
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}