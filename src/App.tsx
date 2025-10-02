import { useEffect, useState } from "react";

const playNote = (note: HTMLAudioElement) => {
	note.pause(); // important!!!
	note.currentTime = 0;
	note.play();
};

function App() {
	const [count, setCount] = useState(0);

	const audioElementC = new Audio("src/assets/notes/c4.mp3");
	const audioElementD = new Audio("src/assets/notes/d4.mp3");
	const audioElementE = new Audio("src/assets/notes/e4.mp3");
	const audioElementF = new Audio("src/assets/notes/f4.mp3");
	const audioElementG = new Audio("src/assets/notes/g4.mp3");
	const audioElementA = new Audio("src/assets/notes/a5.mp3");
	const audioElementB = new Audio("src/assets/notes/b5.mp3");
	const audioElementC5 = new Audio("src/assets/notes/c5.mp3");

	const keyboardPlaying = (event: KeyboardEvent) => {
		switch (event.key) {
			case "a":
				playNote(audioElementC);
				break;
			case "s":
				playNote(audioElementD);
				break;
			case "d":
				playNote(audioElementE);
				break;
			case "f":
				playNote(audioElementF);
				break;
			case "g":
				playNote(audioElementG);
				break;
			case "h":
				playNote(audioElementA);
				break;
			case "j":
				playNote(audioElementB);
				break;
			case "k":
				playNote(audioElementC5);
				break;
			default:
				break;
		}
	};

	// biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	useEffect(() => {
		window.addEventListener("keydown", (event) => {
			keyboardPlaying(event);
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

			<button
				type="button"
				onClick={() => {
					playNote(audioElementC);
				}}
			>
				{" "}
				C$ note
			</button>
			<button
				type="button"
				onClick={() => {
					playNote(audioElementD);
				}}
			>
				{" "}
				D$ note
			</button>
			<button
				type="button"
				onClick={() => {
					playNote(audioElementE);
				}}
			>
				{" "}
				E$ note
			</button>
			<button
				type="button"
				onClick={() => {
					playNote(audioElementF);
				}}
			>
				{" "}
				F$ note
			</button>
			<button
				type="button"
				onClick={() => {
					playNote(audioElementG);
				}}
			>
				{" "}
				G$ note
			</button>
			<button
				type="button"
				onClick={() => {
					playNote(audioElementA);
				}}
			>
				{" "}
				A$ note
			</button>
			<button
				type="button"
				onClick={() => {
					playNote(audioElementB);
				}}
			>
				{" "}
				B$ note
			</button>
			<button
				type="button"
				onClick={() => {
					playNote(audioElementC5);
				}}
			>
				{" "}
				C$$ note
			</button>
		</>
	);
}

export default App;

//PROBLEM TO SOLVE