import React from "react";

export default function BaseLinkUrlBlankTab({ url, children, ...linkProps }) {
    // const defaultClass = "flex justify-around items-center w-full text-gray-300"
    return (
        <a {...linkProps} href={url} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}