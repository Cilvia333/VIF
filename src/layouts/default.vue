<template lang="pug">
.default
  Header(v-if="isMobile")
  nuxt(v-if="isMobile")
  Footer(v-if="isMobile")
  //- .pc(v-if="!isMobile")
  //-   h1 モバイルからアクセスしてください
  //-   img(src="~/assets/img/QR.png")
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component({
  components: {
    Header: () => import('~/components/navigations/header.vue'),
    Footer: () => import('~/components/navigations/footer.vue')
  }
})
export default class Default extends Vue {
  isMobile: boolean = true

  mounted() {
    const regexp = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
    if (window.navigator.userAgent.search(regexp) !== -1) {
      this.isMobile = true
    }
    console.log(window.navigator.userAgent)
  }
}
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

.pc
  padding: 30px
</style>
