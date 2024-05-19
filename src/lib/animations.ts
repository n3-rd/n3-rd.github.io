import { scroll, animate } from 'motion';

export let asterikRotation = 0;
export let asterikScale = 1;

export const asterikScroll = (y) => {
	// Adjust rotation based on scroll progress
	asterikRotation = y.progress * 360; // Rotate 360 degrees when scroll progress reaches 1

	// Adjust scale based on scroll progress
	// The asterisk will become fullscreen when scroll progress reaches 1
	// You may need to adjust the multiplier depending on the initial size of the asterisk and the size of the screen
	asterikScale = y.progress / 2 + 0.5; // Scale from 0.5 to 1
};
