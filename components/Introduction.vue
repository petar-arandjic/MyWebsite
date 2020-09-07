<template>
  <div class="introduction">
    <h3 class="codeHeadline"><CodeText :codeText="'getUser(\'Petar\').getIntroduction( )'" :codeTextFinished="codeTextFinished" :uniqueId="'CTIntroduction'" /></h3>
    <div id="introduction__container">
      <h2 class="introduction__headline">Introduction</h2>
      <div class="introduction__container">
        <div class="introduction__container__elements">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consectetur dolore et ipsum maiores nostrum obcaecati quidem sit! Ad aliquid deleniti labore magni natus nesciunt non omnis quas ullam? Corporis doloribus eaque, earum est et ipsa quidem quos rem tempora ullam?</p>
        </div>
        <div class="introduction__container__elements icei--image">
          <div class="introduction__container__elements__image_container ">
            <img class="testc" src="/images/laptop-1478822_1280.jpg">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Text',
  methods: {
    codeTextFinished (state) {

      const introductionContainer = document.getElementById('introduction__container')

      if (state && introductionContainer.classList.contains('introduction__container--opacity-0')) {
        introductionContainer.classList.remove('introduction__container--opacity-0')
      } else if (!state && !introductionContainer.classList.contains('introduction__container--opacity-0')) {
        introductionContainer.classList.add('introduction__container--opacity-0')
      }
    }
  }
}
</script>

<style lang="scss" scoped>
  .introduction{
    position: relative;
    min-height: 50vh;

    padding: var(--vertical-padding) var(--horizontal-padding) var(--vertical-padding) var(--horizontal-padding);
  }

  .introduction__headline{
    font-family: Roboto_Slab-Light;
    text-transform: uppercase;
    letter-spacing: 1rem;
    color: #1a171e;

    margin-top: 1em;
    margin-bottom: 1em;
  }

  .codeHeadline{
    font-family: Roboto_Slab-Light;
  }

  .introduction__container{
    position: relative;

    display: flex;
    align-items: stretch;
    justify-content: space-between;
  }

  #introduction__container{
    transition: opacity 0.5s ease-in;
  }

  .introduction__container--opacity-0{
    opacity: 0;
  }

  .introduction__container__elements{
    position: relative;
    width: 50%;

  }

  .introduction__container__elements p{
    font-family: Roboto_Slab-Regular;
    padding-right: 5em;
    color: #858585;
    letter-spacing: 0.1em;
    line-height: 1.6em;
    font-size: 1.1rem;
  }

  .introduction__container__elements__image_container{
    position: relative;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }

  .introduction__container__elements__image_container img{
    position: relative;
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 1s ease-out;

  }

  .icei--image{
    transition: padding 1s ease-out;
    cursor: pointer;
  }

  .icei--image:hover{
    padding: 0.5em;
    img{

      transform: scale(1.1);
    }
  }

  @media only screen and (max-width: 992px) {

    .introduction{
      padding: 4rem;

      padding-bottom: 2rem;
    }
    .introduction__container{
      flex-direction: column;
    }

    .introduction__container__elements{
      width: 100%;
      margin-bottom: 0rem;
    }

    .introduction__container__elements p{
      padding: 0;
    }
  }

  @media only screen and (max-width: 576px) {

    .introduction {
      padding: 2rem;

      padding-bottom: 1rem;
    }

    .introduction__headline {
      letter-spacing: 0.5rem;
    }

    .introduction__container__elements p {
      font-size: 0.8rem;
    }

    .introduction__container__elements {
      width: 100%;
      margin-bottom: 2rem;
    }
  }

    @media only screen and (max-width: 329px) {

      .introduction__headline {
        letter-spacing: 0.3rem;
      }

      .introduction__container__elements p {
        font-size: 0.5rem;
      }
  }
</style>
