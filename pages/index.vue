<template>
  <div>
    <Landing />
    <Introduction />
    <Skills />
    <Experience />
    <Footer />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Skills from '../components/Skills'
import Experience from '../components/Experience'

export default {
  head: {
    title: 'Petar Arandjic - Full Stack Web Developer located in Bosnia, Banja Luka',
    meta: [
      {
        hid: 'description',
        property: 'description',
        content: 'I\'m the full stack web developer working mostly with PHP, Symfony, Pimcore, Javascript and Vue'
      }

    ]
  },
  components: { Experience, Skills },
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
