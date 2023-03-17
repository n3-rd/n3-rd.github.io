
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import adapter from "@sveltejs/adapter-static";

export default defineConfig({
  plugins: [sveltekit()],
  kit: {
    adapter: adapter(),
    paths: {
      base: process.env.NODE_ENV === "production" ? "/sveltekit-gh-pages" : "",
    },
  },

});

