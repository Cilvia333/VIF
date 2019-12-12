<template lang="pug">
section#attention
  .background
    .top
  .container
    h1.section-title attention
    ul.attentions
      li.attention-item 
        p 再入場は禁止とさせて頂きます。
      li.attention-item
        p 入場者全員のご本人確認をさせていただきます。チケットに記載されたお名前が確認できる証明書をご持参下さい。チケットに印字される氏名は、お申込み時の登録情報です。印字された方以外はご入場できません。ご家族間、ご友人間であっても譲渡は固くお断りいたします。
          | いかなる理由があろうとも、ご変更は受付いたしません。
          | 本人確認が出来ない場合、入場をお断りさせていただきます。予めご了承ください。
          | ご入場いただけなかった場合でも、チケット代金等の返金は一切行いませんので、ご注意ください。
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class Attention extends Vue {
  message: string = 'This is a message'
}
</script>

<style lang="sass" scoped>
#attention
  position: relative
  margin-top: 50px

.background
  position: absolute
  top: -50px
  left: 0
  width: 100vw
  height: 500px
  overflow-x: hidden
.top
  position: absolute
  width: 120vw
  height: 100px
  top: 30px
  left: -10px
  background-color: $black-gray
  transform: rotate(6deg)

.attentions
  text-align: left
  list-style: none

.attention-item
  margin-top: 10px
</style>
