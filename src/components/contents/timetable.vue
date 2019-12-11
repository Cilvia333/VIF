<template lang="pug">
section.timetable
  h1 timetable
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class TimeTable extends Vue {
  message: string = 'This is a message'
}
</script>

<style lang="sass" scoped>
h1
  color: #111
</style>
