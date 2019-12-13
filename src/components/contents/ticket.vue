<template lang="pug">
section#ticket
  .container
    h1.section-title Ticket
    ul.tickets
      li.tickets-item
        h2.ticket-title S席 8,000円（税込）
        p.ticket-text アリーナ席、イベントチケット限定グッズ付き
      li.tickets-item
        h2.ticket-title A席 7,000円（税込）
        p.ticket-text イベントチケット限定グッズ付き
      li.tickets-item
        h2.ticket-title B席 5,500円（税込）

      

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
.tickets
  margin: 30px 0px

.ticket-title
  font-weight: bold
</style>
