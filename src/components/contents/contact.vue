<template lang="pug">
section.contact
  h1 contact
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Contact extends Vue {
  message: string = 'This is a message'
}
</script>

<style lang="sass" scoped>
h1
  color: #111
</style>
