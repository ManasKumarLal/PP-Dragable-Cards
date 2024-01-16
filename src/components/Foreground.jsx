import React, { useRef } from "react";
import Card from "./Card";

const Foreground = () => {
    const foreGroundRef = useRef(null);
    const data = [
        {
            desc: "This is the first card u see man",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: false, tagTitle: "Download Now", tagColor: "bg-green-600" },
        },
        {
            desc: "This is the first card u see man",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-green-600" },
        },
        {
            desc: "This is the first card u see man",
            filesize: ".9mb",
            close: true,
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-red-600" },
        },
    ];

    return (
        <div ref={foreGroundRef} className="fixed top-0 left-0 z-[3] w-full h-full flex gap-5 flex-wrap p-10">
            {data.map((item, index) => {
                return <Card key={index} data={item} reference={foreGroundRef}/>
            })}
        </div>
    );
};

export default Foreground;
