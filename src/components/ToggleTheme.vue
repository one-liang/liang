<template>
  <a
    class="cursor-pointer select-none"
    title="Toggle Dark Mode"
    @click.prevent="toggle"
  >
    <i-heroicons-outline:sun v-show="isDark" class="w-5 h-5" />
    <i-heroicons-outline:moon v-show="!isDark" class="w-5 h-5" />
  </a>
</template>

<script>
export default {
  name: "ToggleTheme",
  data() {
    return {
      isDark: null,
    };
  },
  created() {
    const prefersDark =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches;
    const setting = localStorage.getItem("theme") || "auto";
    if (setting === "dark" || (prefersDark && setting !== "light")) {
      this.isDark = true;
    } else {
      this.isDark = false;
    }
  },
  methods: {
    toggle() {
      let htmlClasses = document.querySelector("html").classList;
      if (localStorage.theme == "dark") {
        htmlClasses.remove("dark");
        localStorage.removeItem("theme");
        localStorage.theme = "light";
        this.isDark = false;
      } else {
        htmlClasses.add("dark");
        localStorage.removeItem("theme");
        localStorage.theme = "dark";
        this.isDark = true;
      }
    },
  },
};
</script>