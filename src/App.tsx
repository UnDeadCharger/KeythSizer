import keys, { type Key } from "ctrl-keys";
import { useEffect, useState } from "react";
import { debounce, throttle } from "lodash";

const playNote = (note: HTMLAudioElement) => {
	note.pause(); // important!!!
	note.currentTime = 0;
	note.play();
};

const loopNote = (note: HTMLAudioElement) => {
	//turn this on if i wanna make the hold note sound funky lmao
	// // if(note.currentTime + 100 >)
	// if(note.currentTime < note.duration - 0.3599999){
	// 	//do nothing
	// 	return;
	// }
	// console.log("looping note",note.currentTime, note.duration);
	// //otherwise we loop
	// note.pause();
	// console.timeEnd("play");
	// note.currentTime = note.duration - 0.36;
	// console.log(note.duration - 0.36, note.duration - 0.359);
	// console.time("play");
	// note.play();
}


function App() {
	// const [holdingMap, setHoldingMap] = useState<Record<string, boolean>>({});
	const handler = keys();

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

	

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		Object.entries(DEFAULT_KEY_MAPPING).forEach(([key, audioElement]) => {
			handler.add(key as Key, (e) => {
				if(!e?.repeat) {
					playNote(audioElement);
				}
				else{
					console.log("looping note due to key hold", e?.repeat);
				loopNote(audioElement)}}
			)});
		window.addEventListener("keydown", (event) => {

			// setHoldingMap((prev) => ({
			// 	...prev,
			// 	[event.key]: true,
			// }));
			// keyboardPlaying(event);
			handler.handle(event);
		});
		// window.addEventListener("keyup", (event) => {
		// 	// setHoldingMap((prev) => ({
		// 	// 	...prev,
		// 	// 	[event.key]: false,
		// 	// }));
		// });
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
						{audioElement.src.slice(-6, -4)} ({key.toUpperCase()}) note
					</button>
				);
			})}
		</>
	);
}

export default App;

//PROBLEM TO SOLVE
//Buttons are not styled - no indicator when it is pressed
//indicator when press
// Keys mapping feature
