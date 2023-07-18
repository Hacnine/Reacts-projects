import './cssfile/AddVideo.css';
import { useContext, useEffect, useState, useRef, forwardRef, useImperativeHandle} from 'react';
import ThemeContext from '../context/ThemeContext';
// import VideoDispatchContext from '../context/VideoDispatchContext';
import useVideoDispatch from '../hooks/VideoDispatch';


const initialState = {
    time: '1 month ago',
    channel: 'Coder Dost',
    verified: true,
    title:'',
    views:''
  }

const AddVideo = forwardRef(function AddVideo({editableVideo, setEditableVideo}, ref) {
  const [video, setVideo] = useState(initialState);
  const theme = useContext(ThemeContext);
  // const dispatchFunction = useContext(VideoDispatchContext)
  const dispatchFunction = useVideoDispatch();
  // const inputRef = useRef(null);
  const iRef = useRef(null);

useImperativeHandle(ref, ()=>{
    return {
      jumpTo(){
        iRef.current.focus();
      }
    }
  }, [])


  function handleSubmit(e) {
    e.preventDefault();
    if(editableVideo){
      dispatchFunction({type:'UPDATE', payload:video})
      setEditableVideo(null);

    }else{
      dispatchFunction ({type: 'ADD', payload:video})

    }
    
    setVideo(initialState)

  }
  function handleChange(e) {
    setVideo({...video,
        [e.target.name] : e.target.value
    })
  }

  useEffect(()=>{
    if(editableVideo){
      setVideo(editableVideo)
    }
    // ref.current.focus();
  },[editableVideo])

  return (
    <form>      
      <input
        ref={iRef}
        type="text"
        name="title"
        onChange={handleChange}
        placeholder="title"
        value={video.title}
      />
      <input
        type="text"
        name="views"
        onChange={handleChange}
        placeholder="views"
        value={video.views}
      />
      <button
        className={theme}
        onClick={handleSubmit}
      >
        {editableVideo?'Edit':'Add'} Video
      </button>
    </form>
  );
})

export default AddVideo;
