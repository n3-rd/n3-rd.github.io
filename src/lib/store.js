import { writable } from 'svelte/store';
import FontFaceObserver from 'fontfaceobserver';
import { browser } from '$app/environment';

export const pageLoaded = writable(false);
export const preloaderVisible = writable(true);

if (browser) {
	// wait for all fonts to load
	var font = new FontFaceObserver('Panchang');
	font.load().then(function () {
		pageLoaded.set(true);
	});
}
