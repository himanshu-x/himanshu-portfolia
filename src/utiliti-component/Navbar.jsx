import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import LogoHy from "../assets/him.png"
import { Link as LinkScroll } from 'react-scroll'

export default function Navbar() {

    const [nav, setNav] = useState(false)
    const handleClick = () => {
        setNav(!nav)
    }


    return (
        <div className="fixed w-full h-[80px] flex justify-between bg-[#0a192f] md:justify-around items-center px-8 text-gray-300">
            <div>
                <img src={LogoHy} alt="hy logo" style={{ width: "60px" }} />
            </div>

            {/* menu  */}

            <ul className="hidden md:flex gap-8 text-xl  ">
                <li className="hover:text-pink-600 hover:underline "> <LinkScroll to="home" smooth={true} duration={500} >
                    Home
                </LinkScroll></li>
                <li className="hover:text-pink-600 hover:underline"> <LinkScroll to="about" smooth={true} duration={500} >
                    About
                </LinkScroll></li>
                <li className="hover:text-pink-600 hover:underline"> <LinkScroll to="skills" smooth={true} duration={500} >
                    Skills
                </LinkScroll></li>
                <li className="hover:text-pink-600 hover:underline"> <LinkScroll to="work" smooth={true} duration={500} >
                    Work
                </LinkScroll></li>
                <li className="hover:text-pink-600 hover:underline"> <LinkScroll to="contact" smooth={true} duration={500} >
                    Contact
                </LinkScroll></li>
            </ul>

            {/* sideBar  */}

            <div onClick={handleClick} className="md:hidden z-10  text-2xl ">
                {!nav ? <FaBars /> : <FaTimes />}
            </div>
            {/* mobile menu  */}

            <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center '}>
                <li className="py-6 text-4xl"><LinkScroll onClick={handleClick} to="home" smooth={true} duration={500} >
                    Home
                </LinkScroll></li>
                <li className="py-6 text-4xl"><LinkScroll onClick={handleClick} to="about" smooth={true} duration={500} >
                    About
                </LinkScroll></li>
                <li className="py-6 text-4xl"><LinkScroll onClick={handleClick} to="skills" smooth={true} duration={500} >
                    Skills
                </LinkScroll></li>
                <li className="py-6 text-4xl"><LinkScroll onClick={handleClick} to="work" smooth={true} duration={500} >
                    Work
                </LinkScroll></li>
                <li className="py-6 text-4xl"><LinkScroll onClick={handleClick} to="contact" smooth={true} duration={500} >
                    Contact
                </LinkScroll></li>
            </ul>
            {/* Social icons  */}
            <div className="hidden lg:flex fixed flex-col top-[35%] left-0 ">
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
                        <a className="flex justify-around items-center w-full text-gray-300" href="/">
                            Email <HiOutlineMail size={30} />
                        </a>
                    </li>
                    <li className=" w-[160px] h-[60px] flex justify-between  item-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
                        <a className="flex justify-around items-center w-full text-gray-300" href="/">
                            Resume <BsFillPersonLinesFill size={30} />
                        </a>
                    </li>
                </ul>
            </div>

        </div>
    )
}