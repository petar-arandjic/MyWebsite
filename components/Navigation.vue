<template>
  <div class="navigation">
    <div class="navigation__bar">
      <nuxt-link to="/">
        <img class="navigation__bar__logo" src="~/assets/Logo/PA-logo.svg" height="30px" alt="">
      </nuxt-link>
      <h4 id="navigation__menu_icon" class="navigation__bar__button" :class="[isVisible ? 'navigation__bar__button--animate' : '']" @click="toggleShowNavigationMenu">
        <span>Menu</span>
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

      const menuIcon = document.getElementById('navigation__menu_icon')

      menuIcon.innerHTML = this.isVisible ? 'Close' : 'Menu'

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
    transition: transform 0.5s ease-out;
  }

  .navigation__bar__button--animate{
    transform: rotateX(360deg);
  }

  .navigation__menu{
    position: fixed;

    top: -120%;

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
      top: -120%;
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
      top: 120%;
    }
  }

  @media only screen and (max-width: 1200px) {

    .navigation__bar{
      background: white;
      -webkit-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.75);
      -moz-box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.75);
      box-shadow: 0px 0px 5px 3px rgba(0,0,0,0.75);

      opacity: 0.95;
    }
  }

  @media only screen and (max-width: 576px) {

    .navigation__bar{
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .navigation__bar__logo{
      height: 25px;
    }
  }
</style>
