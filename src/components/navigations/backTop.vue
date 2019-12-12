<template lang="pug">
.back2top(v-scroll-to="'#eyecatch'" :class="{'show-button':position > 200}")
  svg-icon.icon(name="top")
  h2.text TOP
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class back2top extends Vue {
  position: number = 0

  mounted() {
    if (!process.browser) return
    this.$nextTick(() => {
      window.addEventListener('scroll', this.handleScroll)
    })
  }

  handleScroll() {
    this.position = window.scrollY
  }
}
</script>

<style lang="sass" scoped>
.back2top
  background-color: $white
  border-radius: 50%
  size: 75px
  bottom: 65px
  right: 10px
  position: fixed

  display: flex
  flex-direction: column
  justify-content: center
  align-items: center

  opacity: 0
  cursor: pointer

  transition: all .3s ease-out
  z-index: 200
  filter: drop-shadow(0 2px 6px rgba($black-gray,0.8));

.show-button
  opacity: 1

.icon
  size: 30px

.text
  text-align: center
  font-size: 1rem
</style>
