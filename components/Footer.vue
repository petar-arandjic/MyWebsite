<template>
  <div class="C-footer">
    <div class="C-footer__elements C-footer__left"><h5>Let's build something great together</h5></div>
    <div class="C-footer__elements C-footer__center">
      <a class="C-footer__elements__linkedin" href="https://www.linkedin.com/in/petar-arandjic-b288a8168/"><i class="pa_website-linkedin"></i></a>
      <a class="C-footer__elements__github" href="https://github.com/Pi-Solution"><i class="pa_website-github"></i></a>
    </div>
    <div class="C-footer__elements C-footer__right">
      <div class="C-footer__right__logo"><img src="~/assets/Logo/PA-logo.svg" height="30px" alt=""></div>
      <div class="C-footer__right__signature">
        <h5>PETAR ARANDJIC</h5>
        <p>Full Stack Web Developer</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
  .C-footer{
    position: relative;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem var(--horizontal-padding) 5rem var(--horizontal-padding);

    font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  }

  .C-footer h5{
    font-size: 1rem;
    margin: 0;
  }

  .C-footer p{
    font-size: 0.75rem;
    margin: 0;
  }

  .C-footer__elements{
    flex: 1 1 0;
  }

  .C-footer__left{
    text-transform: uppercase;
  }

  .C-footer__center{
    display: flex;
    justify-content: center;
    font-size: 2rem;
    align-items: center;
  }

  .C-footer__elements__linkedin{
    color: #0e76a8;
    padding-right: 1rem;

    display: flex;
    align-items: center;
  }

  .C-footer__elements__github{
    color: #1a171e;
    padding-left: 1rem;
    border-left: 2px solid #1a171e;
  }

  .C-footer__right{
    display: flex;
    justify-content: flex-end;
  }

  .C-footer__right__logo{
    display: flex;
    align-items: center;
  }

  .C-footer__right__signature{
    margin-left: 1em;
    padding-left: 1em;
    border-left: 2px solid #1a171e;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  @media only screen and (max-width: 576px) {

    .C-footer{
      flex-direction: column;
      padding-left: 2rem;
      padding-right: 2rem;
      padding-bottom: 2rem;
    }

    .C-footer__elements{
      margin-bottom: 2rem;
    }

    .C-footer__left{
      order: 3;
      text-align: center;
    }

  }
</style>
