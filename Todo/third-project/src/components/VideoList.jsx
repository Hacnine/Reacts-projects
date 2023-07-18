import Video from "./Video"
import PlayButton from "./PlayButton"

export default function VideoList({videos, editVideo, deleteVideo}){
    return (
        <>
        {videos.map((video) => (
            <Video
              key={video.id}
              title={video.title}
              views={video.views}
              time={video.time}
              channel={video.channel}
              verified={video.verified}
              id={video.id}
              deleteVideo={deleteVideo}
              editVideo={editVideo}
            >
              <PlayButton name='Ghorardim'> {video.title} </PlayButton>
            </Video>
          ))}
        </>
    )
}