import { useReducer, useState } from 'react';
import './App.css';
import AddVideo from './components/AddVideo';
import videoDB from './data/data';
import VideoList from './components/VideoList';
function App() {

  // console.log('render App')



  const [videos, dispatchFunction] = useReducer(videoReducerFunction, videoDB);
  // const [videos,setVideos] = useState(videoDB);
  const [editableVideos, seteditableVideos] = useState(null);

  function addVideos(video){
    dispatchFunction : ({type: 'ADD', payload:video})


      // action : {tyoe: 'ADD', payload: video}

      // setVideos([
      //       ...videos,
      //       {...video, id: videos.length+1}
      //     ]);
  }

  function deleteVideo(id){
    // setVideos( videos.filter((item) => item.id !== id));

}

function editVideo(id){
  seteditableVideos( videos.find((item) => item.id === id));
}

function updateVideos(video){
  const index = videos.findIndex((item) => item.id === video.id);
  const newVideos = [...videos];
  console.log([...videos]);
  newVideos.splice(index, 1, video)
  // setVideos(newVideos);
}

  return (
    <div className="App" >
       <AddVideo addVideos={addVideos} updateVideos={updateVideos} editableVideos={editableVideos}></AddVideo>
       <VideoList videos={videos} editVideo={editVideo} deleteVideo={deleteVideo}></VideoList>
    </div>
  );
}

export default App;
