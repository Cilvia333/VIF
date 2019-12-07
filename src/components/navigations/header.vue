<template lang="pug">
header
  .container
    .menu-button(@click="buttonClick" :class="{ 'menu-button_open': isActiveHamburger }")
        .menu-icon
    nav.header-nav(:class="{ 'nav_open': isActiveHamburger }")
      ul.header-menu
        li: nuxt-action-link.header-link(@click="navClick" v-scroll-to="'#eye-catch'" to="/") TOP
        li: nuxt-action-link.header-link(@click="navClick" v-scroll-to="'#news'" to="/teams") NEWS
        li: nuxt-action-link.header-link(@click="navClick" v-scroll-to="'#line-up'" to="/rules") LINE UP
        li: nuxt-action-link.header-link(@click="navClick" v-scroll-to="'#time-table'" to="/result") TIME TABLE
        li: nuxt-action-link.header-link(@click="navClick" v-scroll-to="'#attention'" to="/result") ATTENTION
        li: nuxt-action-link.header-link(@click="navClick" v-scroll-to="'#access'" to="/result") ACCESS
        li: nuxt-action-link.header-link(@click="navClick" v-scroll-to="'#contact'" to="/result") CONTACT
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { store } from '~/store/index'

@Component({
  components: {
    NuxtActionLink: () => import('../utils/ NuxtActionLink.vue')
  }
})
export default class Header extends Vue {
  get isActiveHamburger(): Boolean {
    return store.getters['menu/isActiveHamburger']
  }

  buttonClick() {
    store.dispatch('menu/changeHamburgerState', !this.isActiveHamburger)
  }

  navClick() {
    store.dispatch('menu/changeHamburgerState', false)
  }
}
</script>

<style lang="sass" scoped>
header
  width: 100vw
  height: 60px
  position: fixed
  top: 0
  left: 0
  background-color: rgba($white, 0)
  z-index: 99

.container
  width: 100%
  height: 100%
  display: flex
  @include screen-mq(md)
    justify-content: flex-end
    align-items: center

  & > *
    padding-top: 0
    padding-bottom: 0

.header-nav
  width: 100%
  height: 100%
  padding-left: 0

  @include screen-mq(md)
    position: absolute
    background-color: $white
    top: 0px
    right: 0px
    width: 100%
    min-height: 100vh
    padding: 0
    left: 0
    z-index: 299
    text-align: center
    transform-origin: left top
    transform: scale(1, 0)
    transition: all 0.3s cubic-bezier(0, 1.06, 0.54, 1)
    overflow: hidden

  &.nav_open
    @include screen-mq(md)
      transform: scale(1, 1)

  ul
    display: flex
    margin: 0 0 0 auto
    padding: 0
    max-width: 300px
    height: 100%
    align-items: center
    justify-content: space-between
    text-align: left

    @include screen-mq(md)
      display: inline-flex
      margin: 0
      padding: 100px 0
      width: 90%
      height: calc(80% - 200px)
      flex-direction: column
      align-items: flex-end
      justify-content: space-between

    li
      display: block
      margin-right: 5px
      text-align: center

      @include screen-mq(md)
        display: inline
        text-align: center

.header-menu
  .header-link
    position: relative
    display: inline-block
    font-size: 16px
    padding: 0 5px

    color: black
    background-color: $white

    transition: all 0.5s cubic-bezier(0, 1.06, 0.54, 1)

    &:hover,
    &.nuxt-link-active
      color: red
      &::after
        width: 100%
        width: calc(100% + 1px)

    @include screen-mq(md)
      display: block
      font-size: 50px

    @include screen-mq(sm)
      font-size: 40px

    &::after
      background-color: red
      content: ''
      display: block
      position: absolute
      transition: all 0.5s cubic-bezier(0, 1.06, 0.54, 1)

      bottom: -3px
      height: 1px
      left: 0px
      width: 0px

      @include screen-mq(md)
        height: 3px

//Menu Button

.menu-button
  padding-left: 0

  width: 30px
  height: 30px
  background-color: transparent
  border: none
  outline: none
  cursor: pointer
  transition: 0.2s cubic-bezier(0.17, 0.07, 0.02, 0.98)
  z-index: 301

  display: none

  @include screen-mq(md)
    display: flex;

  &:hover
    transform: scale(0.9)

  .menu-icon
    margin: 16px auto
    width: 25px
    height: 2px
    background-color: $black
    position: relative
    border-radius: 4px
    transition: 0.5s cubic-bezier(0.17, 0.07, 0.02, 0.98)
    &::before
      content: ''
      position: absolute
      top: -8px
      left: 0
      width: 25px
      height: 2px
      background-color: $black
      border-radius: 4px
      transition: 0.5s cubic-bezier(0.17, 0.07, 0.02, 0.98)

    &::after
      content: ''
      position: absolute
      bottom: -8px
      left: 0
      width: 25px
      height: 2px
      background-color: $black
      border-radius: 4px
      transition: 0.5s cubic-bezier(0.17, 0.07, 0.02, 0.98)

.menu-button_open
  .menu-icon
    width: ((30px - 4px) * sqrt(2)) + 4px
    transform: rotate(-135deg)
    &::before
      top: -1 * (30px - 4px )/2 / sqrt(2)
      left: (30px - 4px)/2 / sqrt(2)
      width: (30px - 4px)/2 / sqrt(2) + 4px
      transform: rotate(90deg)
    &::after
      bottom:  -1 * (30px - 4px )/2 / sqrt(2)
      left: (30px - 4px)/2 / sqrt(2)
      width: ((30px - 4px)/2 / sqrt(2)) + 4px
      transform: rotate(90deg)
</style>
