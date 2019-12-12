<template lang="pug">
section#access
  .container
    h1.section-title access
    p なんかちずがいっぱいならんぶかんじ
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Access extends Vue {
  message: string = 'This is a message'
}
</script>

<style lang="sass" scoped>
#access
  position: relative
</style>
