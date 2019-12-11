<template lang="pug">
section.lineup
  h1 lineup
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class LineUp extends Vue {
  message: string = 'This is a message'
}
</script>

<style lang="sass" scoped>
h1
  color: #111
</style>
