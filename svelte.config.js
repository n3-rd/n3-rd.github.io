import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/kit/vite';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    adapter: adapter({
      pages: 'docs',
    }),
  },
  paths: {
    base: process.env.NODE_ENV === "production" ? "/sveltekit-gh-pages" : "",
  },
  preprocess: vitePreprocess()
};

export default config;