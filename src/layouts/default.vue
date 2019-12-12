<template lang="pug">
.default
  Header
  nuxt
  Footer
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    Header: () => import('~/components/navigations/header.vue'),
    Footer: () => import('~/components/navigations/footer.vue')
  }
})
export default class Default extends Vue {}
</script>

<style lang="sass">
html
  font-family: Futura, 'Century Gothic', 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box

*
*::before,
*::after
  box-sizing: border-box
  margin: 0
</style>
