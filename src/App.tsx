import NotePlayContainer from "./PianoKey/NotePlayContainer";






function App() {
	// const [holdingMap, setHoldingMap] = useState<Record<string, boolean>>({});


	

	// // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
	// useEffect(() => {
	// 	Object.entries(DEFAULT_KEY_MAPPING).forEach(([key, audioElement]) => {
	// 		handler.add(key as Key, (e) => {
	// 			if(!e?.repeat) {
	// 				playNote(audioElement);
	// 			}
	// 			else{
	// 				console.log("looping note due to key hold", e?.repeat);
	// 			loopNote(audioElement)}}
	// 		)});
	// 	window.addEventListener("keydown", (event) => {
			

	// 		// setHoldingMap((prev) => ({
	// 		// 	...prev,
	// 		// 	[event.key]: true,
	// 		// }));
	// 		// keyboardPlaying(event);
	// 		handler.handle(event);
	// 	});
	// 	// window.addEventListener("keyup", (event) => {
	// 	// 	// setHoldingMap((prev) => ({
	// 	// 	// 	...prev,
	// 	// 	// 	[event.key]: false,
	// 	// 	// }));
	// 	// });
	// 	return window.removeEventListener("keydown", () => {
	// 		console.log("unmounted");
	// 	});
	// }, []);
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
			<NotePlayContainer/>

		</>
	);
}

export default App;

//PROBLEM TO SOLVE
//Buttons are not styled - no indicator when it is pressed
//indicator when press
// Keys mapping feature
