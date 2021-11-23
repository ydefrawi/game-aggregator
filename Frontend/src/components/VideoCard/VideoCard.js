import React, { Children } from 'react'
import './VideoCard.css'

function VideoCard ({videoData}){

    // const video = document.querySelector("video");
    // const img = document.querySelector("img")
    const vid = document.getElementById(videoData.id)

    function startPreview(e) {
        e.preventDefault()
        if(vid){
            const pvideo = vid.querySelector("video")
            const img = vid.querySelector('img')

            pvideo.style="display:block";
            img.style = "display:none"

            pvideo.muted = true;
            pvideo.currentTime = 10;
            pvideo.playbackRate = 0.75;
            pvideo.play();
            // video.loop()
        }
    }

    function stopPreview(e) {
        e.preventDefault()
        // pimg.style ="display:block";
        const pvideo = vid.querySelector('video')
        const img = vid.querySelector('img')
        pvideo.style="display:none";
        img.style="display:block"
        // pvideo.currentTime = 6;
        pvideo.playbackRate = 0.5;
        pvideo.pause();
    }

    return(
    <div id = {videoData.id} className ="preview col-3" >
        <img className="preview preview-image"  src= {videoData.preview} onMouseOver = {startPreview}/>
        <video class ="preview preview-video"onMouseLeave= {stopPreview} >
            <source src={videoData.data[Object.keys(videoData.data)[0]]} />
        </video>
        <>{console.log("videoData", videoData)}</> 
    </div>
    )
}

export default VideoCard