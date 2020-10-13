<template>
    <span :id="uniqueId" class="code_text" v-html="colorizeText()" />
</template>

<script>
export default {
  name: 'CodeText',
  props: {
    codeText: String,
    codeTextFinished: Function,
    uniqueId: String
  },
  data () {
    return {
      slicedString: ''
    }
  },
  methods: {
    colorizeText () {

      const text = this.slicedString

      let colorizedText = '<span class="code-text--blue">'

      for (let i = 0; i < text.length; i++) {
        if (text[i] === '(' || text[i] === ')') {
          colorizedText += '</span><span class="code-text--orange">' + text[i]
        } else if (text[i] === '"' || text[i] === "'") {
          colorizedText += '</span><span class="code-text--red">' + text[i]
        } else if (text[i] === '.') {
          colorizedText += '</span><span class="code-text--blue">' + text[i]
        } else {
          colorizedText += text[i]
        }
      }

      colorizedText += '</span><span class="blinking_underscore">_</span>'

      return colorizedText

    },
    sliceString () {

      const pixelPerLetter = 15

      const codeText = document.getElementById(this.uniqueId)

      if (codeText.getBoundingClientRect().top < this.codeText.length * pixelPerLetter * 2 && codeText.getBoundingClientRect().top > 0) {
        // console.log(Math.floor((codeText.getBoundingClientRect().top - this.codeText.length * pixelPerLetter) / 15))

        this.slicedString = this.codeText.substring(0, this.codeText.length - Math.ceil((codeText.getBoundingClientRect().top - this.codeText.length * pixelPerLetter) / 15))

        if (this.codeText.length === this.slicedString.length) {
          this.codeTextFinished(true)
        } else {
          this.codeTextFinished(false)
        }
      }
    }
  },
  mounted () {
    this.sliceString()
    window.addEventListener('scroll', this.sliceString)
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.sliceString)
  }
}
</script>

<style>

  .code-text--blue{
    color: #003049;
  }

  .code-text--orange{
    color: #f77f00;
  }

  .code-text--red{
    color: #d62828;
  }

  .blinking_underscore{
    color: black;
    animation: blinking_underscore 500ms infinite;
  }
  @keyframes blinking_underscore {
    from{
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

</style>
