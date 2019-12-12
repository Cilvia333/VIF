<template lang="pug">
section#access
  .background
    .top
  .container
    h1.section-title access
    p なんかちずがいっぱいならんぶかんじ
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
  margin-top: 50px

.background
  position: absolute
  top: -50px
  left: 0
  width: 100vw
  height: 500px
  overflow-x: hidden
.top
  position: absolute
  width: 120vw
  height: 100px
  top: 30px
  left: -10px
  background-color: $black-gray
  transform: rotate(6deg)
</style>
