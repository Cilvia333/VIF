<template lang="pug">
section#access
  .background-bk
    .top
  .container
    h1.section-title access
    h2 DMM VR THEATER
    .link
      a(href="https://vr-theater.dmm.com/") https://vr-theater.dmm.com/
  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3249.5800459435072!2d139.61978929490667!3d35.46518986674099!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60185c0d718e8109%3A0xfb338c84938f04fc!2sDMM%20VR%20THEATER%20YOKOHAMA!5e0!3m2!1sja!2sjp!4v1576196041031!5m2!1sja!2sjp" height="450" frameborder="0" style="border:0;" allowfullscreen=""></iframe>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Access extends Vue {
  message: string = 'This is a message'
}
</script>

<style lang="sass" scoped>
#access
  position: relative
  display: block
  margin-top: 50px

.link
  a
    color: $theme-cyan
    display: inline
    font-size: 1rem

iframe
  width: 100%
</style>
