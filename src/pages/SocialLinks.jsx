import React from "react";
import { FaGithub, FaFacebook, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import BaseLinkUrlBlankTab from "../utility-component/BaselinkUrlBlankTab";

export default function SocialLinks() {
    const socialLinkData = [
        { url: "https://www.linkedin.com/in/himanshu1807/", iconName: FaLinkedin },
        { url: "https://github.com/himanshu-x", iconName: FaGithub },
        { url: "https://twitter.com/himanshu87694", iconName: FaTwitterSquare },
        { url: "https://www.facebook.com/itshimanshu1807/", iconName: FaFacebook },
    ]

    return (
        <div className="flex lg:hidden gap-4 justify-center items-center text-white bg-[#0a192f] min-h-[200px]">
            {
                socialLinkData.map(({ url, iconName: IconName }, index) => (
                    <BaseLinkUrlBlankTab url={url} key={`social` + index} >
                        <IconName className="text-pink-800" size={40} />
                    </BaseLinkUrlBlankTab>
                ))
            }
        </div>
    )
}