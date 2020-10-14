<template>
  <div class="P-contact">
    <h1>CONTACT</h1>
    <div class="P-contact__container">
      <form id="contact_form" class="P-contact__form" @submit.prevent="handleContactForm">
        <h4>Basic info</h4>
        <input
          v-model="contactFormData.full_name"
          type="text"
          placeholder="Please enter full name"
          required
        >

        <input
          v-model="contactFormData.email"
          type="email"
          placeholder="Please Enter E-mail"
          required
        >

        <h4 class="P-contact__form__headline_your_message">
          Your message
        </h4>

        <textarea
          v-model="contactFormData.message"
          class="P-contact__form__textarea"
          placeholder="How can I help you?"
        />

        <button type="submit" class="P-contact__form_button">
            Submit
          <SubmitButton
            :settings="buttonLoaderSettings"
          />
        </button>
        <recaptcha class="P-contact__google_req" @error="onError" @success="onSuccess" @expired="onExpired" />
        <p class="P-contact__form__thank_message" :class="[thankYouMessageClass]">Thank you for contacting me, I will reply as soon as possible</p>

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
            <i class="pa_website-github" /><a href="https://github.com/Pi-Solution">Github</a>
          </div>
          <div class="P-contact__container__other_ways__elements__content">
            <i class="pa_website-linkedin" /><a href="https://www.linkedin.com/in/petar-arandjic-b288a8168/">LinkedIn</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

export default {
  head: {
    title: 'Contact - Petar Arandjic',
    meta: [
      {
        hid: 'description',
        property: 'description',
        content: 'I\'m the full stack web developer contact me if you have interesting project I can help you out'
      }

    ]
  },
  name: 'Contact',
  data () {
    return {
      contactFormData: {
        full_name: '',
        email: '',
        message: ''
      },
      googleReqValidation: false,
      buttonClass: '',
      buttonLoaderSettings: {
        bgColor: '#D36135',
        active: false,
        icon: {
          size: '1rem',
          color1: 'black',
          color2: 'white'
        }
      },
      thankYouMessageClass: 'shared__opacity-0'
    }
  },
  mounted () {
    setTimeout(() => this.togglePreLoading(false), 300)
  },
  methods: {
    ...mapMutations({
      togglePreLoading: 'main/togglePreLoading'
    }),
    handleContactForm () {

      if (this.googleReqValidation) {

        const form = document.getElementById('contact_form')

        this.buttonLoaderSettings.active = true

        fetch('http://api.petar-arandjic.loc/contact/form', {

          method: 'POST',

          headers: {
            'Content-Type': 'application/json'
          },

          body: JSON.stringify(this.contactFormData)

        }).then((response) => {

          return response.json()

        }).then((data) => {

          if (data.saved) {
            // console.log('yes')

            this.contactFormData = {
              full_name: '',
              email: '',
              message: ''
            }

            this.buttonLoaderSettings.active = false

            this.thankYouMessageClass = ''

            form.reset()

          }

        })
      }
    },
    onError (error) {
      // console.log('Error happened:', error)
    },
    async onSubmit () {
      try {
        const token = await this.$recaptcha.getResponse()
        // console.log('ReCaptcha token:', token)
        await this.$recaptcha.reset()
      } catch (error) {
        // eslint-disable-next-line no-console
        // console.log('Login error:', error)
      }
    },
    onSuccess (token) {
      console.log('Succeeded:', token)
      // here you submit the form
      // this.$refs.form.submit()
      this.googleReqValidation = true
    },
    onExpired () {
      // console.log('Expired')
    }
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

    transition: transform 0.5s;
  }

  .P-contact__form--hide{
    transform: scale(0);
  }

  .P-contact__form h4{
    font-family: Roboto_Slab-Light;
    font-size: 1.4rem;
  }

  .P-contact__form__thank_message{

    font-family: Roboto_Slab-Light;
    margin-top: 1rem;

    transition: opacity 500ms ease-in-out;

  }

  .P-contact__google_req{
    margin-top: 1.5rem;
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
    position: relative;
    background: transparent;

    width: 100%;

    font-size: 0.8em;
    font-family: Roboto_Slab-Regular;
    color: #D36135;

    border: 1px solid #D36135;
    padding: 1em;

    margin-top: 1.5em;

    cursor: pointer;

    overflow: hidden;
  }

  .P-contact__form_button:active{
    outline: none;
  }

  .P-contact__form_button:hover{
    background: #D36135;
    color: white;
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
