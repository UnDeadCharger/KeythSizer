import keys, { type Key } from "ctrl-keys";
import { useEffect, useState } from "react";
import { debounce, throttle } from "lodash";






function App() {
	// const [holdingMap, setHoldingMap] = useState<Record<string, boolean>>({});
	const handler = keys();


	

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
			</div>o
			<h1>Vite + React</h1>
			<p className="read-the-docs">
				Click on the Vite and React logos to learn moAccounre
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
