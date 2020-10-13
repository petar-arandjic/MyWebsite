<template lang="html">
  <div class="loading-page" :class="[isShown ? 'loading-page--show' : 'loading-page--hide']">
    <img class="loading-page__logo" src="~/assets/Logo/PA-logo-white.svg" alt="">
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: mapGetters({ isShown: 'main/getShowPreLoading' })
}
</script>

<style scoped>
  .loading-page {
    position: fixed;

    display: flex;
    justify-content: center;
    align-items: center;

    top: 120%;
    left: 0;

    width: 100%;
    height: 100%;

    background: #1a171e;

    color: white;
    z-index: 600;
  }

  .loading-page__logo{
    width: 10rem;
  }

  .loading-page--show{
    animation: show_loading_page 300ms forwards;
  }

  @keyframes show_loading_page {
    0% {
      top: -120%;
    }

    100% {
      top: 0;
    }
  }

  .loading-page--hide{
    animation: hide_loading_page 300ms forwards;
  }

  @keyframes hide_loading_page {
    0% {
      top: 0;
    }

    100% {
      top: 120%;
    }
  }
</style>
