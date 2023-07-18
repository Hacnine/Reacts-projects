import { useState, useReducer, useCallback, useRef, lazy, Suspense } from 'react';
import './App.css';
import AddVideo from './components/AddVideo';
import videoDB from './data/data';
import VideoList from './components/VideoList';
import ThemeContext from './context/ThemeContext';
import VideosContext from './context/VideosContext';
import VideoDispatchContext from './context/VideoDispatchContext';
import Counter from './components/Counter';
import Dummy from './components/Dummy';
function App() {
  // console.log('render App')
    // const [videos,setVideos] = useState(videoDB);
    const [editableVideo, setEditableVideo] = useState(null);

    const [videos, dispatchFunction] = useReducer(videoReducerFunction, videoDB);
  
    // const themeContext = useContext(ThemeContext);
    // console.log('themeContext', themeContext);
  
    const [mode, setMode] = useState('darkMode');
    const inputRef = useRef(null);
    const [show, setShow]= useState(false);

    const Dummy = lazy(() => import('./components/Dummy.jsx'));

  function videoReducerFunction(videos, action) {
    // console.log('videos', videos);
    // console.log('action.payload', action.payload);
    switch (action.type) {
      case 'LOAD':
        return action.payload;
      case 'ADD':
        return [
          ...videos,
          { ...action.payload, id: videos.length + 1 }
        ]
      case 'DELETE':
        return videos.filter(video => video.id !== action.payload)

      case 'UPDATE':

        const index = videos.findIndex(v => v.id === action.payload.id)
        const newVideos = [...videos]
        newVideos.splice(index, 1, action.payload)
        // setEditableVideo(null);
        return newVideos

      default:
        return videos
    }
  }


  // function addVideos(video){
  //   dispatchFunction ({type: 'ADD', payload:video})

  // setVideos([
  //       ...videos,
  //       {...video, id: videos.length+1}
  //     ]);
  // }
  // function deleteVideo(id){
  //   dispatchFunction ({type: 'DELETE', payload:id})
  //   console.log(typeof videos);

  // setVideos(videos.filter(video=>video.id!==id))
  // }

  const editVideo = useCallback(function editVideo(id) {
    setEditableVideo(videos.find(video => video.id === id))
  }, [videos])

  // function updateVideo(video){
  // dispatchFunction({type:'UPDATE', payload:video})
  // const index = videos.findIndex(v=>v.id===video.id)
  // const newVideos = [...videos]
  // newVideos.splice(index,1,video)
  // setVideos(newVideos)
  // }


  return (
    <ThemeContext.Provider value={mode}>
      <VideosContext.Provider value={videos}>
        <VideoDispatchContext.Provider value={dispatchFunction}>
         
        <div className={`App ${mode}`}>
          <button className={mode} onClick={() => setMode(mode === 'darkMode' ? 'lightMode' : 'darkMode')}>Change Theme</button>
           {/* <Counter></Counter> */}
           <button onClick = {() =>{ inputRef.current.jumpTo()}}>Focus</button>
          <AddVideo editableVideo={editableVideo} setEditableVideo={setEditableVideo} ref={inputRef}></AddVideo>
          <VideoList editVideo={editVideo}></VideoList>
          <button onClick={()=> setShow(true)}>Show</button>
          {show? <Suspense fallback={<>Loading...</>}><Dummy/></Suspense>:null}
        </div>
        </VideoDispatchContext.Provider>
      </VideosContext.Provider>
    </ThemeContext.Provider>
  );


}

export default App;
