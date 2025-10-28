import type { Key } from 'ctrl-keys'
import React from 'react'
import PlayingKey from './PlayingKey'

function PianoKeys({KeyMap, handler} : {KeyMap : Partial<Record<Key, string>>; handler: any}) {
  console.log(Object.entries(KeyMap));
  const data = Object.entries(KeyMap);
  return ( <>
    { data.map(
     ([key, audioFilePath]) => <PlayingKey 
       shortCutKey={key as Key} 
       audioFilePath={audioFilePath} 
       handler={handler} />
     )}
    </>
  )
}

export default PianoKeys