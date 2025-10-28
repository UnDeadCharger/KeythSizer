//Insert file path
//Return audio component with file path
//
import type { Key } from "ctrl-keys";
import React from "react";
import { onNotePlaying, onNoteStop } from "./useNotePlaying";

type LinkAudioProps = {
	audioFilePath: string;
	shortCutKey: Key;
	handler: any;
};

export const linkAudioToKey = ({ audioFilePath, shortCutKey, handler }: LinkAudioProps) => {
	const audioElement = new Audio(audioFilePath);

	handler.add(shortCutKey as Key, (e: KeyboardEvent) => {
		console.log(`Key ${shortCutKey} pressed`);
		onNotePlaying(shortCutKey);
		if (!e?.repeat) {
			playNote(audioElement);
		} else {
			console.log("looping note due to key hold", e?.repeat);
			loopNote(audioElement);
		}
	});

    
};

export const playNote = (note: HTMLAudioElement) => {
	note.pause(); // important!!!
	note.currentTime = 0;
	note.play();
};

export const loopNote = (note: HTMLAudioElement) => {
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
};

