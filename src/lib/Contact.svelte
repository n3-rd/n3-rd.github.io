<script>
	let message = '';
	const mailTo = () => {
		window.open(
			`mailto:godwinjdayo@gmail.com?subject=Mail%20from%20portfolio&body=${message}`,
			'_blank'
		);
	};
</script>

<div class="contact md:px-10 lg:px-20" id="contact">
	<div class="header text-4xl sm:text-6xl md:text-[14vw] font-black">Contact.</div>
	<div class="w-full flex flex-col items-center gap-4 md:gap-8 py-7">
		<div class="w-full md:w-4/5 flex flex-col md:flex-row items-center">
			<textarea
				placeholder="Write me an email!"
				class="w-full md:w-2/3 bg-transparent py-4 px-6 border-b-2 border-white focus:ring-0 outline-none mb-4 md:mb-0"
				bind:value={message}
			/>
			<button
				class="w-full md:w-1/3 bg-white text-black text-2xl md:text-4xl py-4 px-6 border-b-2 border-white"
				on:click={mailTo}
			>
				Send
			</button>
		</div>

		<div class="my-4">Or</div>

		<div class="contact-links w-full md:w-4/5 flex gap-4 justify-between">
			<a
				href="https://www.linkedin.com/in/godwin-jemegah-759866203/"
				target="_blank"
				class=" hover:underline">LinkedIn</a
			>
			<a href="https://github.com/n3-rd" target="_blank" class=" hover:underline">GitHub</a>
			<a href="https://twitter.com/n3_rdd" target="_blank" class=" hover:underline">Twitter</a>
		</div>

		<div class="buy-coffee mt-4">
			<a href="https://www.buymeacoffee.com/n3rdyn3rd" target="_blank">
				<img
					src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png"
					alt="Buy Me A Coffee"
					class="h-12 md:h-16 lg:h-20"
				/>
			</a>
		</div>
	</div>
</div>
