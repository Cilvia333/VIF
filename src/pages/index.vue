<template lang="pug">
  main
    EyeCatch
    News
    LineUp
    TimeTable
    Access
    Contact
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'

@Component({
  components: {
    EyeCatch: () => import('~/components/contents/eye-catch.vue'),
    News: () => import('~/components/contents/news.vue'),
    LineUp: () => import('~/components/contents/lineup.vue'),
    TimeTable: () => import('~/components/contents/timetable.vue'),
    Access: () => import('~/components/contents/access.vue'),
    Contact: () => import('~/components/contents/contact.vue')
  }
})
export default class Index extends Vue {
  message: string = 'This is a message'
}
</script>
