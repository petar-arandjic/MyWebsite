<template>
  <div class="C-landing">
    <div class="C-landing__box C-landing__box--dark C-landing__box--full_size" :class="{'C-landing__box--shrink_size': shrinkLandingBox}">
      <h1>Petar Arandjic</h1>
      <h2>Full Stack Developer</h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data () {
    return {
      shrinkLandingBox: false
    }
  },
  mounted () {
    setTimeout(() => { this.shrinkLandingBox = true }, 300)
  }
}
</script>

<style scoped>
  .C-landing{
    position: relative;
    height: 100vh;
  }
  .C-landing__box{
    position: absolute;

    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    padding: 4em;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

  }

  .C-landing__box--shrink_size{

    animation: C-landing__box--shrink_size 1s forwards;

  }

  .C-landing__box h1{
    font-family: 'Inconsolata-Regular';
    font-weight: lighter;
  }

  .C-landing__box h2{
    font-family: 'Inconsolata-Regular';
    text-align: right;

    border-bottom: 1px solid white;
  }

  .C-landing__box--dark{
    background: #1a171e;
    color: white;
  }

  @media only screen and (max-width: 1200px) {

    .C-landing__box--shrink_size{
      animation: none;
    }
  }

  @media only screen and (max-width: 576px) {

    .C-landing__box{
      padding: 2rem;
    }
  }

  /** Animations **/
  @keyframes C-landing__box--shrink_size {
    0%{
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;

      z-index: 110;
    }
    50%{
      z-index: 110;
    }
    100%{
      top: var(--navigation-bar-height);
      left: var(--horizontal-padding);
      right: var(--horizontal-padding);
      bottom: 1em;

      z-index: 1;
    }
  }
</style>
