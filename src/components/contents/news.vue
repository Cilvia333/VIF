<template lang="pug">
section.news
  h1 news
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class News extends Vue {
  message: string = 'This is a message'
}
</script>

<style lang="sass" scoped>
h1
  color: #111
</style>
