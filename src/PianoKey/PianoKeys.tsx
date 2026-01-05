import type { Key } from 'ctrl-keys';
import PlayingKey from './PlayingKey';

function PianoKeys({KeyMap, handler} : {KeyMap : Partial<Record<Key, string>>; handler: any}) {
  console.log(Object.entries(KeyMap));
  const data = Object.entries(KeyMap);
  return ( <>
    { data.map(
     // biome-ignore lint/correctness/useJsxKeyInIterable: <explanation>
     ([key, audioFilePath]) => <PlayingKey 
       shortCutKey={key as Key} 
       audioFilePath={audioFilePath} 
       handler={handler} />
     )}
    </>
  )
}

export default PianoKeys