import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter(),
  },
  preprocess: vitePreprocess()
};

export default config;