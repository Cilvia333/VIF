<template lang="pug">
section#lineup
  .background
  .container
    h1.section-title lineup
    ul.groups
      li.groups-item(v-for="(item, index) in groups", :key="`group_${index}`")
        GroupCard(:group="item")


</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import { Group } from '~/components/parts/groupCard.vue'

@Component({
  components: {
    GroupCard: () => import('~/components/parts/groupCard.vue')
  }
})
export default class LineUp extends Vue {
  groups: Group[] = [
    {
      name: '夏風アザミ',
      img: 'logo.png',
      description: 'hoge'
    },
    {
      name: '妄想機巧少女',
      img: 'logo.png',
      description: 'hoge'
    },
    {
      name: 'パレットフルカラーズ',
      img: 'logo.png',
      description: 'hoge'
    },
    {
      name: '12bite',
      img: 'logo.png',
      description: 'hoge'
    },
    {
      name: '喜雨かなで',
      img: 'logo.png',
      description: 'hoge'
    }
  ]
}
</script>

<style lang="sass" scoped>
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
