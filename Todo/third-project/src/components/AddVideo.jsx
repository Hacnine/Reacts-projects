import { useEffect, useState } from "react";

const initialState = {
    time: '1 month ago',
    channel: 'Coder Dost',
    verified: true,
    title:'',
    views:''
  }


export default function AddVideo({addVideos, updateVideos, editableVideos}){
    const [video, setVideo] = useState(initialState)
    function addName(e){
        
        setVideo(
            {...video,
             [e.target.name] : e.target.value})
    }
  

    function handleClick(event){
        event.preventDefault();
        if(editableVideos){
            updateVideos(video);
        }
        else {
            addVideos(video);
        }
        setVideo(initialState);
    }


    useEffect(() =>{
        if (editableVideos) {
            setVideo(editableVideos)
        }
    }, [editableVideos])


    return (
        <form>
            <input type="text" value={video.title} onChange={addName} name="title" placeholder="Title" />
            <input type="text" value={video.views} onChange={addName} name="views" placeholder="Views"/>
            <button onClick={handleClick}>
               {editableVideos? 'Edit' : 'Add'} Course 
                </button>
        </form>
    )
}