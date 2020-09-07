<template>
  <div class="P-contact">
    <h1>CONTACT</h1>
    <div class="P-contact__container">
      <form action="" class="P-contact__form">
        <h4>Basic info</h4>
        <input type="text" placeholder="Please enter full name" required>
        <input type="email" placeholder="Please Enter E-mail" required>
        <h4 class="P-contact__form__headline_your_message">Your message</h4>
        <textarea class="P-contact__form__textarea" placeholder="How can I help you?"></textarea>
        <button type="submit" class="P-contact__form_button">Submit</button>
      </form>
      <div class="P-contact__container__other_ways">
        <div class="P-contact__container__other_ways__elements">
          <h4>Contact me buy e-mail</h4>
          <p>parandjic@gmail.com</p>
          <p>petar.arandjic.developer@gmail.com</p>
        </div>
        <div class="P-contact__container__other_ways__elements">
          <h4>Find me on</h4>
          <div class="P-contact__container__other_ways__elements__content">
            <i class="pa_website-github"></i><a href="https://github.com/Pi-Solution">Github</a>
          </div>
          <div class="P-contact__container__other_ways__elements__content">
            <i class="pa_website-linkedin"></i><a href="https://www.linkedin.com/in/petar-arandjic-b288a8168/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  name: 'contact',
  methods: {
    ...mapMutations({
      togglePreLoading: 'main/togglePreLoading'
    })
  },
  mounted () {
    setTimeout(() => this.togglePreLoading(false), 300)
  }
}
</script>

<style scoped>
  .P-contact{
    position: relative;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    flex-direction: column;

    padding-left: var(--horizontal-padding);
    padding-right: var(--horizontal-padding);

    color: #D36135;
  }

  .P-contact h1{
    font-family: Roboto_Slab-Light;
    font-size: 2.3em;
    margin-bottom: 1.5em;
  }

  .P-contact__container{
    position: relative;

    display: flex;

    width: 100%;
  }

  .P-contact__form{
    position: relative;
    width: 40%;
  }

  .P-contact__form h4{
    font-family: Roboto_Slab-Light;
    font-size: 1.4rem;
  }

  .P-contact__form input{
    position: relative;

    width: 100%;

    border: none;
    border-bottom: 1px solid #D36135;

    padding: 0.7em;

    color: #D36135;

    font-size: 1.2em;
    font-family: Roboto_Slab-Regular;

  }

  .P-contact__form input[type='text']{
    text-transform: capitalize;
  }

  .P-contact__form input::placeholder{
    font-family: Roboto;
    color: #D36135;
    text-align: right;
    font-size: 0.8em;
  }

  .P-contact__form input:active,
  .P-contact__form input:focus {
    /*border: none;*/
    outline: none;
  }

  .P-contact__form__headline_your_message{
    margin-top: 1.5em;
    margin-bottom: 1.5em;
  }

  .P-contact__form__textarea{
    border: 1px solid #D36135;

    width: 100%;

    height: 10em;

    resize: none;

    color: #D36135;

    padding: 1em;

    font-size: 1.2em;
    font-family: Roboto_Slab-Regular;
  }

  .P-contact__form__textarea,
  .P-contact__form__textarea {
    /*border: none;*/
    outline: none;
  }

  .P-contact__form__textarea::placeholder{
    color: #D36135;
    font-size: 0.8em;
  }

  .P-contact__form_button{
    background: transparent;

    width: 100%;

    font-size: 0.8em;
    font-family: Roboto_Slab-Regular;
    color: #D36135;

    border: 1px solid #D36135;
    padding: 1em;

    margin-top: 1.5em;

    cursor: pointer;
  }

  .P-contact__form_button:active{
    outline: none;
  }

  .P-contact__form_button:hover{
    background: #D36135;
    color: white;
  }

  .P-contact__form_button:focus{
    background: rgba(211, 97, 53, 0.8);
  }

  .P-contact__container__other_ways{
    position: relative;
    width: 60%;

    display: flex;
    padding-left: 10rem;
  }
  .P-contact__container__other_ways__elements{
    width: 50%;
  }

  .P-contact__container__other_ways__elements h4{
    font-family: Roboto_Slab-Light;
    margin-bottom: 1em;
    font-size: 1.4rem;
  }

  .P-contact__container__other_ways__elements p{
    font-family: Roboto_Slab-Light;
    margin-bottom: 0.5em;
    font-size: 0.9em;
  }

  .P-contact__container__other_ways__elements a{
    text-decoration: none;
    color: #D36135;
    font-family: Roboto_Slab-Light;
    font-size: 0.9em;
  }

  .P-contact__container__other_ways__elements a:hover{
    text-decoration: underline;
  }

  .pa_website-github{
    color: #1a171e;
    font-size: 1.3em;
    margin-right: 0.2em;
  }

  .pa_website-linkedin{
    color: #0e76a8;
    font-size: 1.3em;
    margin-right: 0.2em;
  }

  .P-contact__container__other_ways__elements__content{
    display: flex;
    align-items: center;
    margin-bottom: 0.5em;
  }

  @media only screen and (max-width: 1500px) {

    .P-contact__container__other_ways{
      display: flex;
      flex-direction: column;
    }

    .P-contact__container__other_ways__elements{
      margin-bottom: 4em;
    }
  }

  @media only screen and (max-width: 1500px) {

    .P-contact__container__other_ways{
      display: flex;
      flex-direction: column;
    }

    .P-contact__container__other_ways__elements{
      margin-bottom: 4em;
    }
  }

  @media only screen and (max-width: 1200px) {

    .P-contact__container__other_ways{
      padding-left: 6rem;
    }

  }

  @media only screen and (max-width: 992px) {

    .P-contact__container__other_ways{
      padding-left: 4rem;
    }

  }

  @media only screen and (max-width: 576px) {

    .P-contact{
      padding-top: 5rem;
    }

    .P-contact h1{
      margin-left: 1rem;
    }

    .P-contact__container{
      flex-direction: column;
    }

    .P-contact__form{
      width: 100%;

      padding-left: 1rem;
      padding-right: 1rem;

      margin-bottom: 2rem;
    }

    .P-contact__container__other_ways{
      padding: 1rem;
      width: 100%;
    }

    .P-contact__container__other_ways__elements{
      width: 100%;

      margin-bottom: 1rem;
    }

  }
</style>
