import type { Key } from 'ctrl-keys';
import React, { useEffect, useState } from 'react'
import { linkAudioToKey } from './helper';

type UseNotePlayingProps = {
    key: Key;
    audioFilePath: string;    handler: any;
}

// onRowHover: (id: Id) => {
//     const elements = document.querySelectorAll(`.${keys.getRowKey(id)}`);
//     elements.forEach((ele) => ele.classList.add("bg-gray-400", "bg-opacity-10"));
//   },

// onRowLeave: (id: Id) => {
//     document
//       .querySelectorAll(`.${keys.getRowKey(id)}`)
//       .forEach((ele) => ele.classList.remove("bg-gray-400", "bg-opacity-10"));
//   },

export const onNotePlaying =  (key: Key) => {
    const elements = document.querySelectorAll(`.piano-key-${key}`);
    elements.forEach((ele) => {
        ele.classList.add("bg-blue-400", "bg-opacity-30");
    });
}

export const onNoteStop = (key: Key) => {
    const elements = document.querySelectorAll(`.piano-key-${key}`);
    elements.forEach((ele) => {
        ele.classList.remove("bg-blue-400", "bg-opacity-30");
    });
}


export function useNotePlaying({ key, audioFilePath, handler }: UseNotePlayingProps) {
  const [isPlaying, setIsPlaying] = useState(false);


  // biome-ignore lint/correctness/useExhaustiveDependencies: Only used once
  useEffect(() => {
    linkAudioToKey({ audioFilePath, key, handler });
  },[])

  return {
    isPlaying,
  }
}

export default useNotePlaying