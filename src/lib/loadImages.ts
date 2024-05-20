import loadImage from 'image-promise';
import { writable } from 'svelte/store';

export const imagesLoaded = writable(false);

const images = [
	'/img/ohun.gif',
	'/img/aerror.png',
	'/img/curseur.gif',
	'/img/inspolist.png',
	'/img/yemisi.png',
	'/img/playlist-2023.png',
	'/img/afrobeats.png'
];

export const loadAllImages = () => {
	loadImage(images)
		.then(function (allImgs) {
			console.log(allImgs.length, 'images loaded!', allImgs);
			imagesLoaded.set(true);
		})
		.catch(function (err) {
			console.error('One or more images have failed to load :(');
			console.error(err.errored);
			console.info('But these loaded fine:');
			console.info(err.loaded);
		});
};
