<template>
  <div class="C-experience">
    <h3 class="codeHeadline"><CodeText :codeText="'getUser(\'Petar\').getExperience( )'" :codeTextFinished="codeTextFinished" :uniqueId="'CTSExperience'" /></h3>
    <div id="C-experience__container" class="C-experience__container">
      <h2>IT Experience</h2>
      <div id="C-ec__element" class="shared__opacity-0">
        <div
          class="C-ec__elements"
          v-for="(job, index) in experience.experience"
          :key="index"
        >
          <div class="C-ec__elements__header">
            <h5 class="C-ec__elements__header__left_text"><fa :icon="[job.icon.prefix, job.icon.icon]"/>  {{ job.companyName }}</h5>
            <h5 class="C-ec__elements__header__right_text">{{ job.workedSince }}-{{ job.workedUntil }}</h5>
          </div>
          <div class="C-ec__elements__content">
            <div class="C-ec__elements__content__text">
              <h5>{{ job.headline }}</h5>
              <p>{{ job.text }}</p>
            </div>
            <a
              class="C-ec__elements__content__button"
              v-if="job.button"
              :href="job.button.href"
              target="_blank"
            >{{ job.button.text }}</a>
          </div>
        </div>
      </div>

      <p class="download_cv">
        <a href="/pdf/my-cv.pdf" download>Download</a> my CV as PDF
      </p>

    </div>
  </div>
</template>

<script>
import experience from '../static/json/experience.json'

export default {
  name: 'Experience',
  data () {
    return {
      experience
    }
  },
  methods: {
    codeTextFinished (state) {
      const experienceContainer = document.getElementById('C-ec__element')

      if (state && experienceContainer.classList.contains('shared__opacity-0')) {
        experienceContainer.classList.remove('shared__opacity-0')
      } else if (!state && !experienceContainer.classList.contains('shared__opacity-0')) {
        experienceContainer.classList.add('shared__opacity-0')
      }
    }
  }
}
</script>

<style scoped>
  .C-experience{
    position: relative;
  }

  .C-experience h3{
    font-family: Roboto_Slab-Light;
  }

  .C-experience h2{
    font-family: Roboto_Slab-Light;
    text-transform: uppercase;
    letter-spacing: 1rem;
    color: #1a171e;

    margin-top: 1em;
    margin-bottom: 1em;
  }

  .codeHeadline{
    padding-left: var(--horizontal-padding);
    padding-right: var(--horizontal-padding);
  }

  .C-experience__container{
    padding-left: var(--horizontal-padding);
    padding-right: var(--horizontal-padding);
  }

  #C-ec__element{
    transition: opacity 1s ease-out;
  }

  .C-ec__elements{
    position: relative;
    /*background: #D36135;*/
    overflow: hidden;
    box-sizing: border-box;

    margin-bottom: 4rem;
  }

  .C-ec__elements h5{
    font-size: 1em;
    font-family: Inconsolata-Regular;
    letter-spacing: 0.05rem;
  }

  .C-ec__elements p{
    font-size: 1em;
    font-family: Inconsolata-Regular;
    letter-spacing: 0.05rem;
    margin-top: 1rem;
    line-height: 1.2em;
  }

  .C-ec__elements__header{
    position: relative;
    border: 1px solid #D36135;
    padding: 0.8rem 1.5rem 0.8rem 1.5rem;

    display: flex;
    justify-content: space-between;
  }

  .C-ec__elements__content{
    position: relative;
    padding: 3rem 3rem 3rem 3rem;

    border: 1px solid #D36135;
    border-top: none;

    display: flex;

    justify-content: space-between;
  }

  .C-ec__elements__content__text{
    max-width: 60%;
  }

  .C-ec__elements__content__button{
    position: relative;
    /*margin-right: 2rem;*/
    padding: 0.5rem 1.5rem 0.5rem 1.5rem;

    display: flex;
    align-items: center;
    justify-content: center;

    height: 3rem;

    font-family: Inconsolata-Regular;
    font-weight: bold;
    font-size: 0.9em;

    background: none;

    border: 2px solid #D36135;
    border-radius: 2rem;

    text-decoration: none;
    color: inherit;

    transition: margin-right 500ms;
  }

  .C-ec__elements__content__button:hover{

    margin-right: 10px;

  }

  .C-ec__elements__content button:focus{
    outline: none;
  }

  @media only screen and (max-width: 576px) {

    .C-experience{
      padding-left: 2rem;
      padding-right: 2rem;
    }

    .C-ec__elements__content{
      flex-direction: column;
      padding: 2rem;
    }

    .C-ec__elements__content__text{
      max-width: 100%;

      margin-bottom: 2rem;
    }

    .C-ec__elements__header__left_text{
      margin-right: 0.5rem;
    }

    .C-ec__elements__header__right_text{
      margin-left: 0.5rem;
      text-align: right;
    }
  }

  .download_cv{
    font-family: Inconsolata-ExtraBold;
    margin-bottom: 2rem;
  }

  .download_cv a{
    color: #D36135;
  }

</style>
