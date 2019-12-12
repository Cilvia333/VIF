<template lang="pug">
section#eyecatch
  .background
    .magenta
    .yellow
    .cyan
  .container
    img.logo-img(src="~/assets/img/logo.png")
    .logo-text
      .logo-title 
        h3 バーチャルアイドルフェスティバル
      .logo-tag 
        h3 #VIF
    .overview
      .locate 
        h2 @DMM Hole
      .date 
        h2 2020/1/20
      .time 
        h2 18:00〜21:00
    .next
      .next-text
        h2 WE ARE <br> THE VIRTUAL IDOL
      .next-arrow
        svg-icon.next-svg(name="arrow")

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class EyeCatch extends Vue {
  message: string = 'This is a message'
}
</script>

<style lang="sass" scoped>
#eyecatch
  position: relative

.background
  position: absolute
  overflow-x: hidden
  width: 100vw
  height: 120vh
  top: -7%
  left: 0
  z-index: -1
  & > *
    position: absolute
    width: 100%
  .magenta
    top: -100px
    left: 0
    height: 200px
    background-color: $theme-magenta
    transform: skew(0deg,10.5deg)
  .yellow
    top: 20%
    left: -15%
    height: 40vh
    border-left: 150vw solid $theme-yellow;
    border-top: 0px solid transparent;
    border-bottom: 100px solid transparent;
    transform: rotate(-15deg)
  .cyan
    top: 65%
    left: -15%
    height: 35vh
    border-left: 150vw solid $theme-cyan;
    border-top: 30px solid transparent;
    border-bottom: 50px solid transparent;
    transform: rotate(15deg)

.container
  height: 100vh
  padding-top: 0
  padding-bottom: 0

.logo-img
  width: 90%
  transform: rotate(-3.17deg)
  margin-top: 21vh

.logo-text
  text-align: right
  margin-top: 10px
  & > *
    h3
      background-color: $black
      color: $white
      font-size: 0.5rem
      display: inline

.overview
  text-align: right
  & > *
    h2
      display: inline
      font-weight: bold
  .locate > h2
    background: linear-gradient(0deg,rgba($theme-cyan, 1) 0%,rgba($theme-cyan, 1) 50%,rgba($white, 0) 50%,rgba($white, 0) 100%)
  .date > h2
    background: linear-gradient(0deg,rgba($theme-magenta, 1) 0%,rgba($theme-magenta, 1) 50%,rgba($white, 0) 50%,rgba($white, 0) 100%)
  .time > h2
    background: linear-gradient(0deg,rgba($theme-yellow, 1) 0%,rgba($theme-yellow, 1) 50%,rgba($white, 0) 50%,rgba($white, 0) 100%)

.next
  position: absolute
  width: calc(100% - 40px)
  bottom: 20px

.next-text
  text-align: left
  color: $white
  margin-top: 30px
  h2
    font-size: 2em
    font-weight: bold

.next-arrow
  text-align: center
  margin: 10px 0px

  .next-svg
    height: 50px
    display: inline
</style>
