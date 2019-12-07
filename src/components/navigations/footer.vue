<template lang="pug">
footer
  h3 バーチャルアイドルフェスティバル実行委員会 ©️2019
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Footer extends Vue {}
</script>

<style lang="sass" scoped>
footer
  background-color: $black
  padding: 20px

h3
  color: $white
  text-align: center

  @include screen-mq(md)
    font-size: 0.5rem
</style>
