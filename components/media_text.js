import React from 'react'
import Image from 'next/image'

const MediaText = (props) => {
    return (
        <div className="media-text">
            <div className="media">
                <Image src={props.img} alt={props.header}/>
            </div>
            <div className="text">
                <h2>{props.headerText}</h2>
                <p>{props.shortText}</p>
            </div>
        </div>
    )
}

export default MediaText
