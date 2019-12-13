<template lang="pug">
section#lineup
  .background
    .magenta
    .yellow
    .cyan
  .container
    h1.section-title lineup
    ul.groups
      li.groups-item(v-for="(item, index) in groups", :key="`group_${index}`")
        GroupCard(:group="item")


</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Group } from '~/store/modules/idols'
import { store } from '~/store/index'

@Component({
  components: {
    GroupCard: () => import('~/components/parts/groupCard.vue')
  }
})
export default class LineUp extends Vue {
  public get groups(): Group {
    return store.getters['idols/getIdols']
  }
}
</script>

<style lang="sass" scoped>
#lineup
  position: relative

.background
  position: absolute
  overflow-x: hidden
  width: 100vw
  height: 100%
  left: 0
  z-index: -1
  & > *
    position: absolute
    width: 100%
  .magenta
    top: 20%
    right: -15%
    height: 200px
    border-left: 150vw solid $theme-magenta;
    border-top: 10px solid transparent;
    border-bottom: 100px solid transparent;
    transform: rotate(15deg)
  .yellow
    top: 50%
    left: -15%
    height: 200px
    border-right: 150vw solid $theme-yellow;
    border-top: 0px solid transparent;
    border-bottom: 100px solid transparent;
    transform: rotate(-15deg)
  .cyan
    top: 80%
    left: -15%
    height: 200px
    border-left: 150vw solid $theme-cyan;
    border-top: 30px solid transparent;
    border-bottom: 50px solid transparent;
    transform: rotate(15deg)

.container
  margin-bottom: 50px

.groups-item
  margin-top: 30px
  list-style: none

  &:nth-of-type(3n)
    .group-name
      h4::after
        background-color: $theme-cyan

  &:nth-of-type(3n+1)
    .group-name
      h4::after
        background-color: $theme-magenta

  &:nth-of-type(3n+2)
    .group-name
      h4::after
        background-color: $theme-yellow

  &:hover
    .group-name
      h4::after
        width: 100%
        transition: all .2s ease-in

.group-img
  width: 100%

.group-name
  text-align: right
  h4
    position: relative
    display: inline
    font-size: 1.5rem
    font-weight: bold
    &::after
      content: ""
      position: absolute
      bottom: 0
      right: 0
      width: 0
      height: 6px
      z-index: -1
      transition: all .2s ease-out
</style>
