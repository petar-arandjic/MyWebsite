<template>
  <div class="C-skills">
    <div id="C-skills__headline_container" class="C-skills_container">
      <h3 class="codeHeadline"><CodeText :codeText="'getUser(\'Petar\').getSkills( )'" :codeTextFinished="codeTextFinished" :uniqueId="'CTSkills'" /></h3>
      <h2 class="C-skills__headline">Skills</h2>
    </div>
    <div id="C-all_skills_con" class="shared__opacity-0">
      <div
        class="C-skills__container"
        v-for="(skills, skillType, index) in mySkills.skills"
        :key="index"
        :class="{ 'C-skills__container--gray': index % 2 === 0 }"
      >
        <div class="C-skills__container__left">
          <h3 class="C-skills__container__left__headline">{{ skillType }}</h3>
        </div>

        <div class="C-skills__container__right">

          <div class="C-skills__container__right__cards" v-for="( skill, index ) in skills" :key="index">
            <div class="C-skills__container__right__cards__icon">
              <fa
                v-if="skill.icon.icon"
                :icon="[skill.icon.prefix, skill.icon.icon]"
                :style="{ color: skill.color }"
              />
              <img v-if="skill.icon.link" class="C-skills__container__right__cards__icon__svg" :src="skill.icon.link" >
            </div>
            <div class="C-skills__container__right__cards__text" :style="{borderColor: skill.color}">
              <div class="C-skills__container__right__cards__headline_con">
                <h5 class="C-skills__container__right__cards__headline">{{ skill.text.headline }}</h5>
                <p class="C-skills__container__right__cards__text__subheadline">{{ skill.text.subheadline }}</p>
              </div>
              <p class="C-skills__container__right__cards__text__paragraph" v-for="paragraph in skill.text.paragraphs" :key="paragraph">{{ paragraph }}</p>
              <p v-for="(extra, extra_headline) in skill.text.extra" :key="extra"><strong>{{ extra_headline }}</strong> {{ extra }}</p>
            </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import mySkills from '../static/json/skills.json'

export default {
  name: 'Skills',
  data () {
    return {
      mySkills
    }
  },
  methods: {
    codeTextFinished (state) {
      const introductionContainer = document.getElementById('C-all_skills_con')

      if (state && introductionContainer.classList.contains('shared__opacity-0')) {
        introductionContainer.classList.remove('shared__opacity-0')
      } else if (!state && !introductionContainer.classList.contains('shared__opacity-0')) {
        introductionContainer.classList.add('shared__opacity-0')
      }
    }
  }
}
</script>

<style scoped>
  .C-skills{
    position: relative;

    padding-top: var(--vertical-padding);
    /*padding-bottom: var(--vertical-padding);*/
    font-family: Inconsolata-Regular;
  }

  #C-skills__headline_container{
    transition: opacity 1s ease-out;
    padding-left: var(--horizontal-padding);
    padding-right: var(--horizontal-padding);
  }

  #C-all_skills_con{
    transition: opacity 1s;
  }

  .codeHeadline{
    font-family: Roboto_Slab-Light;
  }

  .C-skills__headline{
    font-family: Roboto_Slab-Light;
    text-transform: uppercase;
    letter-spacing: 1rem;
    color: #1a171e;

    margin-top: 1em;
    margin-bottom: 1em;
  }

  .C-skills__container{
    position: relative;
    display: flex;

    padding: var(--vertical-padding) var(--horizontal-padding) var(--vertical-padding) var(--horizontal-padding)
  }

  .C-skills__container--gray{
    background: #f4f6ff;
  }

  .C-skills__container__left{
    position: relative;
    width: 15%;
  }

  .C-skills__container__left__headline{
    border-left: 4px solid black;
    padding-left: 1rem;
  }

  .C-skills__container__right{
    position: relative;
    display: flex;
    flex-direction: column;
  }

  .C-skills__container__right__cards{
    display: flex;
    margin-bottom: 1rem;
  }

  .C-skills__container__right__cards__icon{
    width: 70px;
    height: 70px;

    margin-left: 3rem;
    margin-right: 3rem;

    display: flex;
    justify-content: center;

    font-size: 3rem;
  }

  .C-skills__container__right__cards__icon__svg{
    max-width: 80px;
    height: 70px;
  }

  .C-skills__container__right__cards__text{
    position: relative;
    max-width: 50vw;
    border-left: 3px solid;

    padding-left: 1.5rem;

    margin-bottom: 1.5rem;
  }

  .C-skills__container__right__cards__text__paragraph{
    margin-bottom: 0.5rem;
    letter-spacing: 0.07rem;
  }

  .C-skills__container__right__cards__text__subheadline{
    font-style: italic;
    margin-bottom: 1rem;
    letter-spacing: 0.03rem;
    color: #858585;
    font-family: Roboto_Slab-Regular;
  }

  @media only screen and (max-width: 992px) {

    .C-skills{
      padding-top: 2rem;
    }
  }

  @media only screen and (max-width: 576px) {

    .C-skills{
      padding-top: 0;
    }

    .C-skills_container{
      margin: 2rem;

    }

    .C-skills__container{
      flex-direction: column;

      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    .C-skills__container__left__headline{

      width: 100%;

      margin-bottom: 2rem;
      margin-left: 2rem;

    }

    .C-skills__container__right__cards__icon{
      display: none;
    }

    .C-skills__container__right__cards__text{
      margin-left: 2rem;
      margin-right: 2rem;
      max-width: 100%;
    }

  }

</style>
