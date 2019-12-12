<template lang="pug">
section#timetable
  .container
    h1.section-title timetable
    ul.table
      li.table-item(v-for="(item, index) in groups", :key="`group_${index}`")
        .time-info
          .info-num #
            | {{index + 1}}
          .info-time {{item.time0}}<br>
            span 〜
            | <br> {{item.time1}}
        .time-group
          img.group-img(:src="require(`@/assets/img/${item.img}`)")
          h4.group-name {{item.name}}
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

type Gourp = {
  name: string
  img: string
  time0: string
  time1: string
}

@Component
export default class TimeTable extends Vue {
  groups: Gourp[] = [
    {
      name: '夏風アザミ',
      img: 'logo.png',
      time0: '16:00',
      time1: '16:30'
    },
    {
      name: '妄想機巧少女',
      img: 'logo.png',
      time0: '16:30',
      time1: '17:00'
    },
    {
      name: 'パレットフルカラーズ',
      img: 'logo.png',
      time0: '17:00',
      time1: '17:30'
    },
    {
      name: '12bite',
      img: 'logo.png',
      time0: '17:30',
      time1: '18:00'
    },
    {
      name: '喜雨かなで',
      img: 'logo.png',
      time0: '18:00',
      time1: '18:30'
    }
  ]
}
</script>

<style lang="sass" scoped>
.table
  margin-top: 30px

.table-item
  display: flex
  justify-content: space-between
  position: relative
  padding: 20px 0px
  &::after
    position: absolute
    content: ""
    width: 100%
    height: 1px
    bottom: 0
    left: 0
    background-color: $black-gray

  &:nth-child(1)::before
    position: absolute
    content: ""
    width: 100%
    height: 1px
    top: 0
    left: 0
    background-color: $black-gray

  &:nth-of-type(3n)
    .info-num
      &::after
        background-color: $theme-cyan

  &:nth-of-type(3n+1)
    .info-num
      &::after
        background-color: $theme-magenta

  &:nth-of-type(3n+2)
    .info-num
      &::after
        background-color: $theme-yellow

.time-info
  width: 30%
  display: flex
  flex-direction: column
  justify-content: space-between
  .info-num
    font-weight: bold
    font-size: 2rem
    position: relative
    &::after
      content: ''
      position: absolute
      bottom: 10px
      left: 15%
      width: 70%
      height: 5px
      z-index: -1
      transform: rotate(-3.73deg)
  .info-time
    font-weight: bold
    font-size: 1.5rem
    line-height: 0.8
    span
      font-size: 1rem
      line-height: 1.2

.time-group
  width: 70%
  .group-img
    width: 100%
  .group-name
    text-align: center
</style>
