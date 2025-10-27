const audioElementC4 = new Audio("src/assets/notes/c4.mp3");
const audioElementD4 = new Audio("src/assets/notes/d4.mp3");
const audioElementE4 = new Audio("src/assets/notes/e4.mp3");
const audioElementF4 = new Audio("src/assets/notes/f4.mp3");
const audioElementG4 = new Audio("src/assets/notes/g4.mp3");
const audioElementA5 = new Audio("src/assets/notes/a5.mp3");
const audioElementB5 = new Audio("src/assets/notes/b5.mp3");
const audioElementC5 = new Audio("src/assets/notes/c5.mp3");

const DEFAULT_KEY_MAPPING: Record<string, HTMLAudioElement> = {
    a: audioElementC4,
    s: audioElementD4,
    d: audioElementE4,
    f: audioElementF4,
    g: audioElementG4,
    h: audioElementA5,
    j: audioElementB5,
    k: audioElementC5,
};



function NotePlayContainer() {
  return (
    <div>NotePlayContainer</div>
  )
}

export default NotePlayContainer