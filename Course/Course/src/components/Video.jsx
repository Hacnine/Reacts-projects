import { useContext, memo, useRef, useLayoutEffect, useId } from 'react';
import './cssfile/Video.css';
import ThemeContext from '../context/ThemeContext';

const Video = memo(function Video({ title, id, channel = "Coder", views, time, verified, children, dispatchFunction, editVideo }) {

  const theme = useContext(ThemeContext);
  const ref = useRef(null);
  const uid = useId(null);
  console.log('render Video', id);

  // useEffect(()=>{
  //   const idx = setInterval(() => {
  //   console.log('Video Playing', id);
  //   }, 2000);
  //   return () =>{
  //     clearInterval(idx);
  //   }
  // }, [id])

  useLayoutEffect(() => {
    const { height } = ref.current.getBoundingClientRect();
    console.log('height', height);
  }, []);



  return (
    <>
      <div id ={uid} ref={ref} className={`container ${theme}`}>
        <button className={`close ${theme} `} onClick={() => dispatchFunction({ type: 'DELETE', payload: id })}>X</button>
        <button className={`edit ${theme} `} onClick={() => editVideo(id)}>Edit</button>
        <div className="pic">
          <img src={`https://picsum.photos/id/${id}/160/90`} alt="Katherine Johnson" />
        </div>
        <div className="title">{title}</div>
        <div className="channel">{channel} {verified && '✅'} </div>
        <div className="views">
          {views} views <span>.</span> {time}
        </div>
        <div>
          {children}
        </div>
      </div>
    </>
  );
})

export default Video;
