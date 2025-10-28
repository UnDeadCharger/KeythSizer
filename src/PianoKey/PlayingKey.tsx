import React from 'react'
import useNotePlaying, { type UseNotePlayingProps } from '../Hooks/useNotePlaying'

function PlayingKey(
  { shortCutKey, audioFilePath, handler }: UseNotePlayingProps
) {
  console.log("Rendering PlayingKey for", shortCutKey);
  const {isPlaying, setIsPlaying} = useNotePlaying(
    { shortCutKey, audioFilePath, handler }
  )
  return (
    <button className={`piano-key-${shortCutKey} w-[50px] h-[150px] text-black`} type="button" onMouseDown={
    (e) => {
      e.preventDefault();
      if(!isPlaying)      
        setIsPlaying(true);;
    }}
    onMouseUp={
      (e) => {
        e.preventDefault();
        if(isPlaying)        
          setIsPlaying(false);;
      }
    }>
      {audioFilePath.slice(-6, -4)} ({shortCutKey})
    </button>
  )
}

export default PlayingKey