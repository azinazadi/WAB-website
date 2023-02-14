import React from 'react'
import ExportedImage from "next-image-export-optimizer";
import Image from "next/image";

const MediaText = (props) => {
    return (
        <div className="media-text">
            <div className="media">
                <Image
                    src={props.img}
                    alt={props.header}
                    fill
                    quality={80}
                    sizes="(max-width: 768px) 100vw,
                           (max-width: 1000px) 50vw,
                           660px"
                />
            </div>
            <div className="text">
                <div className="h3">{props.header}</div>
                <p>{props.text}</p>
            </div>
        </div>
    )
}

export default MediaText
