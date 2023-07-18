import './cssfile/PlayButton.css';
import { useState, useContext, memo } from 'react';
import ThemeContext from '../context/ThemeContext';


const PlayButton = memo(function PlayButton({children, onPlay, onPause}){
    console.log('render PlayuButton')
    const theme = useContext(ThemeContext);


    const [playing, setPlaying] = useState(false);  
    function handleClick(e){
        // console.log(e)
        e.stopPropagation()

        if(playing) onPause()
        else onPlay();

        setPlaying(!playing);
    }

    return (
        <button className={theme} onClick={handleClick}>{children} : {playing?'⏸️':'⏯️'}</button>
    )

})

export default PlayButton;