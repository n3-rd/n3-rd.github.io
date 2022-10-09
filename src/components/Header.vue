<template>
  <div class="w-screen flex justify-between items-center py-4 fixed">
    <div class="header-logo text-4xl font-black font-display opacity-70">G.</div>
    <div class="header-links flex justify-between w-40">
      <div class="font-black cursor-pointer" data-toggle-theme="dark,light" data-lg-hover>
        Dark/Light
      </div>
    </div>
  </div>
</template>
<script>
import luge from "@waaark/luge";

const getCurrentTheme = () => {
  const theme = localStorage.getItem("theme");
  const html = document.querySelector("html");
  if (theme === "dark") {
    html.classList.add("dark");
  } else {
    html.classList.remove("dark");
    html.classList.add("light");
  }
};

const changeTheme = () => {
  const toggleTheme = document.querySelector("[data-toggle-theme]");
  const html = document.querySelector("html");

  toggleTheme.addEventListener("click", () => {
    const theme = toggleTheme.getAttribute("data-toggle-theme");
    const themeArray = theme.split(",");
    const theme1 = themeArray[0];
    const theme2 = themeArray[1];
    const currentTheme = html.classList.contains(theme1) ? theme1 : theme2;
    const newTheme = currentTheme === theme1 ? theme2 : theme1;
    html.classList.remove(currentTheme);
    html.classList.add(newTheme);
    toggleTheme.setAttribute("data-toggle-theme", `${newTheme},${currentTheme}`);

    // Save theme to local storage
    localStorage.setItem("theme", newTheme);
  });
  luge.lifecycle.refresh();
};

export default {
  name: "Header",
  mounted() {
    getCurrentTheme();
    changeTheme();
  },
};
</script>
