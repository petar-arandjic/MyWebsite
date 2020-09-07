<template>
  <div class="navigation">
    <div class="navigation__bar">
      <nuxt-link to="/">
        <img src="~/assets/Logo/PA-logo.svg" height="30px" alt="">
<!--        <i class="pa_website-PA-logo-01"></i>-->
      </nuxt-link>
      <h4 class="navigation__bar__button" @click="toggleShowNavigationMenu">
        Menu
      </h4>
    </div>

    <div class="navigation__menu navigation__menu--yellow" :class="[isVisible ? 'navigation__menu--show' : '', !isVisible && !isFirstLoad ? 'navigation__menu--hide' : '']">
      <nuxt-link to="/">
        <span @click="preLeaveAction($event)">
          Home
        </span>
      </nuxt-link>
      <nuxt-link to="/contact">
        <span @click="preLeaveAction">
          Contact
        </span>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'Navigation',
  data () {
    return {
      isVisible: false,
      isFirstLoad: true
    }
  },
  methods: {
    preLeaveAction (event) {
      this.toggleShowNavigationMenu()
      if (event.target.parentElement.getAttribute('href') !== this.$nuxt.$route.path) {
        this.showPreLoading(true)
      }
    },
    toggleShowNavigationMenu () {
      this.isVisible = !this.isVisible
      if (this.isFirstLoad) {
        this.isFirstLoad = false
      }
    },
    ...mapMutations({
      showPreLoading: 'main/togglePreLoading'
    })
  }
}
</script>

<style scoped>
  .navigation{
    z-index: 100;
  }

  .navigation__bar{
    position: fixed;

    top: 0;
    left: 0;
    right: 0;

    height: var(--navigation-bar-height);

    padding-left: 4.5em;
    padding-right: 4.5em;

    display: flex;
    align-items: center;
    justify-content: space-between;

    z-index: 102;
  }

  .navigation__bar__button{
    cursor: pointer;
    font-weight: 300;
  }

  .navigation__menu{
    position: fixed;

    top: -100%;

    width: 100%;
    height: 100%;

    z-index: 101;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .navigation__menu--yellow{
    background: #ffe74c;
  }

  .navigation__menu a{
    font-family: Inconsolata-ExtraBold;

    text-decoration: none;
    font-size: 2.2em;
    text-transform: uppercase;
    color: #1a171e;
  }
  .navigation__menu a:hover{
    text-decoration: underline;
  }

  .navigation__menu--show{
    animation: navigation__menu--animate_show 0.5s forwards;
  }

  .navigation__menu--hide{
    animation: navigation__menu--animate_hide 0.5s forwards;
  }

  @keyframes navigation__menu--animate_show {
    from {
      top: -100%;
    }

    to {
      top: 0;
    }
  }

  @keyframes navigation__menu--animate_hide {
    from {
      top: 0;
    }

    to {
      top: 100%;
    }
  }
</style>
