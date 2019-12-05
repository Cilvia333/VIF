<template lang="pug">
section.eye-catch
  h1 eye-catch
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Header extends Vue {
  message: string = 'This is a message'
}
</script>

<style lang="sass" scoped>
h1
  color: #111
</style>
