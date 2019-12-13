<template lang="pug">
section#news
  .container
    h1.section-title news
    ul.news-table
      li.news-item(v-for="(item, index) in news" :key="`news_${index}`")
        .news-header
          p {{item.date}}
          h2 {{item.title}}
        p.news-text(v-if="item.text") {{item.text}}

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Ticket extends Vue {
  news = [
    {
      date: '11/12/12',
      title: 'ウェブサイトを公開しました！'
    },
    {
      date: '11/12/12',
      title: 'ウェブサイトを公開しました！',
      text: 'よろしくおねがいします！'
    },
    {
      date: '11/12/12',
      title: 'ウェブサイトを公開しました！'
    }
  ]
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
  font-size: 0.8rem


  h2
    font-weight: bold
    font-size: 1.2rem

  &:nth-of-type(3n)
    .news-header
      border-bottom: 3px solid  $theme-cyan

  &:nth-of-type(3n+1)
    .news-header
      border-bottom: 3px solid  $theme-magenta

  &:nth-of-type(3n+2)
    .news-header
      border-bottom: 3px solid  $theme-yellow

.news-text
  margin-top: 3px
</style>
