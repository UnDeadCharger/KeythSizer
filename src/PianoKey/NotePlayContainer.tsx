import { type Key, keys } from "ctrl-keys";
import PianoKeys from "./PianoKeys";
import { useEffect } from "react";

const defaultPath = "src/assets/notes/";


const DEFAULT_KEY_MAPPING: Partial<Record<Key, string>> = {
	a: `${defaultPath}c4.mp3`,
	s: `${defaultPath}d4.mp3`,
	d: `${defaultPath}e4.mp3`,
	f: `${defaultPath}f4.mp3`,
	g: `${defaultPath}g4.mp3`,
	h: `${defaultPath}a5.mp3`,
	j: `${defaultPath}b5.mp3`,
	k: `${defaultPath}c5.mp3`,
};

function NotePlayContainer() {
	const handler = keys();

  useEffect(() => {
    	window.addEventListener("keyup", (event) => {
        handler.handle(event);
    	});
    	return window.removeEventListener("keydown", () => {
    		console.log("unmounted");
    	});
    }, []);

	return <PianoKeys KeyMap={DEFAULT_KEY_MAPPING} handler={handler} />;
}

export default NotePlayContainer;
