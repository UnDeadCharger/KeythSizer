import { useEffect, useState } from "react";

import keys, { type Character, type Key } from 'ctrl-keys'

const playNote = (note: HTMLAudioElement) => {
	note.pause(); // important!!!
	note.currentTime = 0;
	note.play();
};


function App() {
	const [count, setCount] = useState(0);

	const handler = keys();

	const audioElementC4 = new Audio("src/assets/notes/c4.mp3");
	const audioElementD4= new Audio("src/assets/notes/d4.mp3");
	const audioElementE4 = new Audio("src/assets/notes/e4.mp3");
	const audioElementF4 = new Audio("src/assets/notes/f4.mp3");
	const audioElementG4 = new Audio("src/assets/notes/g4.mp3");
	const audioElementA5 = new Audio("src/assets/notes/a5.mp3");
	const audioElementB5 = new Audio("src/assets/notes/b5.mp3");
	const audioElementC5 = new Audio("src/assets/notes/c5.mp3");

	const DEFAULT_KEY_MAPPING: Record<string, HTMLAudioElement> = {
		"a": audioElementC4,
		"s": audioElementD4,
		"d": audioElementE4,
		"f": audioElementF4,
		"g": audioElementG4,
		"h": audioElementA5,
		"j": audioElementB5,
		"k": audioElementC5,
	}
	

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		Object.entries(DEFAULT_KEY_MAPPING).forEach(([key, audioElement]) => {
			handler.add(key as Key, () => playNote(audioElement));
		});
		window.addEventListener("keydown", (event) => {
			// keyboardPlaying(event);
			handler.handle(event);
		});
		return window.removeEventListener("keydown", () => {
			console.log("unmounted");
		});
	}, []);
	return (
		<>
			<div>
				<a href="https://vite.dev">v</a>
				<a href="https://react.dev">a</a>
			</div>
			<h1>Vite + React</h1>
			<div className="card">
				<button type="button" onClick={() => setCount((count) => count + 1)}>
					count is {count}
				</button>
				<p>
					Edit <code>src/App.tsx</code> and save to test HMR
				</p>
			</div>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn more
			</p>
			{Object.entries(DEFAULT_KEY_MAPPING).map(([key, audioElement]) => {
				return (
					<button
						key={key}
						type="button"
						onClick={() => {
							playNote(audioElement);
						}}
					>				
{						audioElement.src.slice(-6, -4)
}						{" "}
						({key.toUpperCase()}) note
					</button>
				);
		})}
		</>
	);
}

export default App;

//PROBLEM TO SOLVE
//Audio get cut off
//Cannot have multiple notes playing at the same time
//Holding a key repeat the note repeatedly - instead it should trail off
//Buttons are not styled - no indicator when it is pressed
	//indicator when press
	// Keys mapping feature