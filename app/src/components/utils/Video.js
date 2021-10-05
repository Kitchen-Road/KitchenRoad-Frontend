import React from "react";


const Video = (props) => {
    return (
        <iframe
        className ="video"
        width="475"
        height="267" 
        src={props.link}
        title="YouTube video player" 
        frameborder="0" 
        allow="autoplay;-write; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
    </iframe>
    )

}



export default Video;