<template lang="pug">
component(:is="rootTagName" :to="to" @click="click()" :class="{'nuxt-link-active': isSameUrl}" exact )
  slot
</template>

<script lang="ts">
import * as lodash from 'lodash'
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component
export default class NuxtActionLink extends Vue {
  @Prop({ default: '' }) to: string

  click() {
    this.$emit('click')
  }

  get isSameUrl() {
    const current = this.$route
    const to = this.$router.resolve(this.to).route

    return (
      current.name === to.name &&
      current.hash === to.hash &&
      lodash.isEqual(current.params, to.params) &&
      lodash.isEqual(current.query, to.query)
    )
  }

  get rootTagName() {
    return this.isSameUrl ? 'span' : 'nuxt-link'
  }
}
</script>

<style lang="sass" scoped>
span
  cursor: pointer
</style>
