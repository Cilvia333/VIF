<template lang="pug">
section#lineup
  .background
  .container
    h1.section-title lineup
    ul.groups
      li.groups-item(v-for="(item, index) in groups", :key="`group_${index}`")
        img.group-img(:src="require(`@/assets/img/${item.img}`)")
        h4.group-name {{item.name}}


</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

type Gourp = {
  name: string
  img: string
  description?: string
}

@Component
export default class LineUp extends Vue {
  groups: Gourp[] = [
    {
      name: '夏風アザミ',
      img: 'logo.png'
    },
    {
      name: '妄想機巧少女',
      img: 'logo.png'
    },
    {
      name: 'パレットフルカラーズ',
      img: 'logo.png'
    },
    {
      name: '12bite',
      img: 'logo.png'
    },
    {
      name: '喜雨かなで',
      img: 'logo.png'
    }
  ]
}
</script>

<style lang="sass" scoped>
.groups-item
  margin-top: 30px
  list-style: none

.group-img
  width: 100%

.group-name
  text-align: right
</style>
