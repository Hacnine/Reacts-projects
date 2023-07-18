import VideosContext from "../context/VideosContext";
import{useContext} from "react";

function useVideos(){
    return useContext(VideosContext);
}

export default useVideos;