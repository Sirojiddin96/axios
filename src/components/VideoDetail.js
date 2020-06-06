import React,{useState} from 'react'
import styled from 'styled-components'

const VideoDetail=({video})=>{
    const [comment, setComment]=useState('')
    
    if(!video){
        return <div>Loading...</div>
    }
    const videoSrc=`https://www.youtube.com/embed/${video.id.videoId}`
    const onChangeHandler = event => {
        setComment(event.target.value);
      };
    const handleSubmit=e=>{
        e.preventDefault();
       console.log(`${comment}`)
    }   
    return (
    <div>
        <div className="ui embed">
        <iframe title="video player" src={videoSrc}/>
        </div>
        <div className="ui segment">
            <h4 className="ui header">{video.snippet.title}</h4>
            <p>{video.snippet.description}</p>
        </div>
        <label>Comment</label>
        <form className="ui fluid icon input" onSubmit={handleSubmit}>
            <input
            value={comment}
            onChange={onChangeHandler}
            type="text" 
            placeholder="Your comments are here..."/>
        </form>
            <div className="">Comments</div>
        </div>
    )
}

export default VideoDetail;

const Result=styled.div`

`