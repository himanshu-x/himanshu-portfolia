import React from "react";

export default function BaseLinkUrlBlankTab(props) {

    // const defaultClass = "flex justify-around items-center w-full text-gray-300"
    const { url, children, ...linkProps } = props;
    return (
        <a {...linkProps} href={url} target="_blank" rel="noopener noreferrer">
            {children}
        </a>
    )
}