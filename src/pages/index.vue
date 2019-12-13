<template lang="pug">
  main
    EyeCatch
    News
    LineUp
    TimeTable
    Access
    Attention
    Contact
    Back2top
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
    EyeCatch: () => import('~/components/contents/eye-catch.vue'),
    News: () => import('~/components/contents/news.vue'),
    LineUp: () => import('~/components/contents/lineup.vue'),
    TimeTable: () => import('~/components/contents/timetable.vue'),
    Attention: () => import('~/components/contents/attention.vue'),
    Access: () => import('~/components/contents/access.vue'),
    Ticket: () => import('~/components/contents/ticket.vue'),
    Contact: () => import('~/components/contents/contact.vue'),
    Back2top: () => import('~/components/navigations/backTop.vue')
  }
})
export default class Index extends Vue {}
</script>
