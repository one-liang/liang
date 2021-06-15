<template>
  <header class="text-gray-600">
    <div
      class="container flex flex-col flex-wrap items-center p-5 mx-auto md:flex-row"
    >
      <router-link to="/" class="w-12 h-12 mb-4 text-xl font-medium md:mb-0">
        <Logo />
      </router-link>
      <nav
        class="flex flex-wrap items-center justify-center space-x-5 text-base md:ml-auto"
      >
        <router-link to="/">
          <i-eva:person-outline class="w-5 h-5 fill-current" />
        </router-link>
        <router-link to="/experience">
          <i-ic:baseline-work-outline class="w-5 h-5 fill-current" />
        </router-link>
        <router-link to="/portfolio">
          <i-ri:profile-line class="w-5 h-5 fill-current" />
        </router-link>
        <router-link to="/bookmark">
          <i-uil:bookmark class="w-5 h-5 fill-current" />
        </router-link>
        <a
          href="https://github.com/one-liang"
          target="_blank"
          rel="noopener noreferrer"
          >
          <i-uil:github-alt class="w-5 h-5 fill-current" />
        </a>
        <ToggleTheme />
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "Navbar",
};
</script>