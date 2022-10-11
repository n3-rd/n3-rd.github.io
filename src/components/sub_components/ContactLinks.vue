<template>
  <div
    class="contact-links flex flex-col lg:flex-row justify-around items-center text-3xl md:text-5xl font-serif pb-[7rem]"
  >
    <div v-for="link in socialLinks" :key="link.name">
      <a :href="link.extLink" target="_blank">
        <div class="contact-link flex uppercase">
          {{ link.name }}
          <div class="hidden md:block">
            <div class="dark:block hidden">
              <svg width="61" height="61" viewBox="0 0 256 256">
                <path
                  fill="#ffffff"
                  d="M196 64v104a4 4 0 0 1-8 0V73.7L66.8 194.8a3.9 3.9 0 0 1-5.6 0a3.9 3.9 0 0 1 0-5.6L182.3 68H88a4 4 0 0 1 0-8h104a4 4 0 0 1 4 4Z"
                />
              </svg>
            </div>
            <div class="block dark:hidden sm:hidden">
              <svg width="61" height="61" viewBox="0 0 256 256">
                <path
                  fill="#282828"
                  d="M196 64v104a4 4 0 0 1-8 0V73.7L66.8 194.8a3.9 3.9 0 0 1-5.6 0a3.9 3.9 0 0 1 0-5.6L182.3 68H88a4 4 0 0 1 0-8h104a4 4 0 0 1 4 4Z"
                />
              </svg>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      socialLinks: [
        { name: "Twitter", extLink: "https://twitter.com/web_n3rd" },
        {
          name: "LinkedIN",
          extLink: "https://www.linkedin.com/in/godwin-jemegah-759866203/",
        },
        { name: "Email", extLink: "mailto:godwinjdayo@gmail.com" },
        { name: "Github", extLink: "https://github.com/n3-rd" },
      ],
    };
  },
};
</script>
