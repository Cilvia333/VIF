<template lang="pug">
li.groupCard
  .overview(@click="changeActive")
    img.group-img(:src="require(`@/assets/img/${group.img}`)")
  .detail(:class="{active:isActive}")
    .group-cross(@click="changeActive")
      svg-icon.cross-svg(name="close")
    .group-name
      h2 {{group.name}}
    .group-description
      p {{group.description}}
    img.group-img(:src="require(`@/assets/img/${group.img}`)")

</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
export type Group = {
  name: string
  img: string
  description?: string
}

@Component
export default class GroupCard extends Vue {
  @Prop({ type: Object, required: true }) readonly group!: Group

  isActive: boolean = false

  changeActive() {
    this.isActive = !this.isActive
  }
}
</script>

<style lang="sass" scoped>
.overview
  margin-top: 30px
  padding: 5px
  list-style: none
  border-radius: 10px
  overflow: hidden
  background-color: $white
  filter: drop-shadow(0 2px 10px rgba($gray,0.1))

.group-img
  width: 100%

.detail
  position: fixed
  top: 0
  left: 0
  bottom: 0
  right: 0
  z-index: 400

  background-color: rgba($theme-magenta, 0.95)
  padding: 20px

  display: none

  &.active
    display: block
    animation: show .3s ease-out 0s

  .group-cross
    text-align: right
    .cross-svg
      size: 60px

  .group-name
    position: relative
    h2
      font-size: 2rem
      color: $white

    &::after
      content: ""
      position: absolute
      left: 0
      right: 0
      bottom: -10px
      margin: auto
      width: 100px
      height: 6px
      background-color: $white

  .group-description
    margin-top: 30px
    p
      font-size: 1rem
      color: $white

  .group-img
    margin-top: 40px
</style>
