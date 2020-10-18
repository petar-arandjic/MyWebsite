<!-- Insert inside of the button -->

<!--
# requirements
    CSS
      overflow: hidden
    PROPS:

]
-->

<template>
  <div class="_C_S_A-SB" :class="[showLoaderClass]">
    <div class="_C_S_A-SB__icon">
      <div class="_C_S_A-SB__icon__con1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SubmitButton',
  props: {
    Settings: Object
  },
  data () {
    return {
      showLoaderClass: ''
    }
  },
  watch: {
    Settings: {
      handler () {
        this.showLoaderClass = this.Settings.active ? '_C_S_A-SB--show' : ''
        // console.log(this.showLoaderClass)
      },
      deep: true
    }
  }
}
</script>

<style scoped>
  ._C_S_A-SB{
    position: absolute;

    width: 100%;
    height: 100%;

    top: 100%;
    left: 0;
    opacity: 0;

    background: #D36135;

    display: flex;
    justify-content: center;
    align-items: center;

    transition: top 300ms ease-in-out, opacity 300ms ease-in-out;

  }

  ._C_S_A-SB--show{
    top: 0;
    opacity: 1;
  }

  ._C_S_A-SB__icon{
    position: relative;

    width: 20px;
    height: 20px;

    border-radius: 50%;

    background: white;

    overflow: hidden;

    animation-duration: 0.5s;
    animation-name: rotateSpinner;
    animation-iteration-count: infinite;
    animation-direction: alternate;

  }

  ._C_S_A-SB__icon__con1{
    position: absolute;

    width: 50%;
    height: 50%;

    background: #D36135;
  }

  @keyframes rotateSpinner {

    from{
      transform: rotateZ(0deg);
    }
    to{
      transform: rotateZ(360deg);
    }

  }
</style>
