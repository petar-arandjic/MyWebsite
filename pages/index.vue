<template>
  <div>
    <Landing />
    <Introduction />
    <Skills />
    <Experience />
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import Skills from '../components/Skills'
import Experience from '../components/Experience'

export default {
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
