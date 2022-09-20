import React from "react";
import { FaGithub, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import { BsFacebook } from 'react-icons/bs'


export default function SocialLinks() {
    return (

        <div className="flex lg:hidden gap-4 justify-center items-center text-white   bg-[#0a192f] min-h-[200px]">
            <a href="https://www.linkedin.com/in/himanshu1807/"><FaLinkedin size={40} /></a>
            <a href="https://github.com/himanshu-x"> <FaGithub size={40} /></a>
            <a href="https://twitter.com/himanshu87694"><FaTwitterSquare size={40} /></a>
            <a href="https://www.facebook.com/itshimanshu1807/"><BsFacebook size={40} /></a>
        </div>

    )
}