<template lang="pug">
section#news
  .container
    h1.section-title news
    ul.news-table
      li.news-item
        p 11/12/12
          span ウェブサイト公開
      li.news-item
        p 11/12/12
          span ウェブサイト公開
      li.news-item
        p 11/12/12
          span ウェブサイト公開

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class News extends Vue {
  message: string = 'This is a message'
}
</script>

<style lang="sass" scoped>
.news-table
  margin: 30px 0px

.news-item
  margin: 20px
  text-align: left
  list-style: none
  position: relative

  span
    font-weight: bold
    font-size: 1.2rem
    margin-left: 5px

  &::after
    content: ""
    height: 1px
    width: 100%
    position: absolute

  &:nth-of-type(3n)
    &::after
      background-color: $theme-cyan

  &:nth-of-type(3n+1)
    &::after
      background-color: $theme-magenta

  &:nth-of-type(3n+2)
    &::after
      background-color: $theme-yellow
</style>
