<template>
  <div class="window_element">
    <div
      v-for="(element, index) in elements"
      class="window_element__bubble"
      :class="[!index ? 'S-display--flex' : '']"
      :key="index"
    >
      <div
        class="window_element__bubble__image"
        :style="{ backgroundColor: element.bgColor, backgroundImage: `url(${element.bgImage})` }"
      >

      </div>
      <h3>{{ element.text }}</h3>
    </div>
  </div>
</template>

<script>
import elements from '../../../static/json/window_element.json'

export default {
  name: 'WindowElement',
  data () {
    return {
      elements,
      currentIndex: 0,
      HTMLElements: '',
      elementsLength: elements.length,
      bgColor: 'red',
      text: 'Develop'
    }
  },
  methods: {
    setNextSlide () {
      this.HTMLElements[this.currentIndex].classList.remove('S-display--flex')
      this.currentIndex = this.currentIndex < this.elementsLength - 1 ? this.currentIndex + 1 : 0
      this.HTMLElements[this.currentIndex].classList.add('S-display--flex')
    }
  },
  mounted () {
    this.HTMLElements = document.getElementsByClassName('window_element__bubble')
    setInterval(this.setNextSlide, 200)
  },
  beforeDestroy () {
    clearInterval(this.setNextSlide)
  }
}
</script>

<style scoped>
  .window_element{
    display: none;
  }

  @media only screen and (max-width: 1200px){

    .window_element{
      display: block;

      position: absolute;
      width: 100%;
      height: 100%;

      left: 0;
      top: 0;

      overflow: hidden;
    }

    .window_element__bubble{

      position: absolute;

      display: none;

      justify-content: center;
      align-items: center;

      bottom: 0;
      left: -15%;
      right: -15%;

      height: 25vh;

      border-radius: 50% 50% 0 0;

      text-transform: uppercase;

      background-color: black;
      padding: 1px;
      box-shadow: 0 0 2px 0 #1a171e inset, 0 0 1px 0 #1a171e;

      overflow: hidden;

    }

    .window_element__bubble__image{
      position: absolute;
      width: 100%;
      height: 100%;

      background-position: center;
      background-size: cover;
    }

  }
</style>
