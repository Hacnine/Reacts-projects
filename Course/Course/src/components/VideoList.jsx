import Video from "./Video";
import PlayButton from "./PlayButton";
import './cssfile/Video.css';
import useVideoDispatch from "../hooks/VideoDispatch";
import useVideos from "../hooks/Videos";
import { useCallback, useTransition, useState } from "react";
import axios from 'axios';
import moreData from '../data/moredata';
import { useDeferredValue } from "react";

function VideoList({editVideo}){
  const url = "https://my.api.mockaroo.com/video.json.json?key=107ef8f0"
  const videos = useVideos();
  // console.log(typeof videos);
  // const [videos, setVideos] = useState([]);
  const dispatchFunction = useVideoDispatch();
  const defVideos = useDeferredValue(videos);
  // const [isPending, startTransition] =  useTransition();
  
  function getVideos(){
    dispatchFunction({type: 'LOAD', payload: moreData})
    // startTransition(()=>{
    //   setVideos(moreData);
    // })
  }


  // async function handleClick (){
  //   const res = await axios.get(url);
  //   console.log('getVideos', res.data)
  //   setVideos(res.data);
  //   // dispatchFunction({type:'LOAD',payload:res.data})
  //  }

  // useEffect(()=>{
  //   async function getVideos (){
  //     const res = await axios.get(url);
  //     console.log('getVideos', res.data)
  //     dispatchFunction({type:'LOAD',payload:res.data})
  //    }
  //    getVideos()
  // },[dispatchFunction])

     const play = useCallback (() => console.log('Playing..'), [])
     const pause =useCallback(() => console.log('Paused..'), [])
     const playBtn = useCallback( () =>(
     <PlayButton
      onPlay={play}
      onPause={pause}> Play </PlayButton>) , [play, pause])
    return(
        <>
        {defVideos.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
              id={video.id}
              dispatchFunction={dispatchFunction}
              editVideo={editVideo}
            >
              {playBtn}
            </Video>
          ))}
          <button className='back' onClick={getVideos}>Get Videos</button>
          </>
    )
}

export default VideoList