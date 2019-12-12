<template lang="pug">
section.contact
  .container
    h1.section-title contact
    ul.contacts
      li.contacts-item(v-for="(item,index) in contacts" :key="`contact_${index}`")
        h4.contact-title {{item.title}}
        p.contact-address {{item.address}}

</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

type ContactData = {
  title: string
  address: string
}

@Component
export default class Contact extends Vue {
  contacts: ContactData[] = [
    {
      title: '開催実行委員 email',
      address: 'hoge@gmail.com'
    },
    {
      title: '開催実行委員 電話',
      address: '03-0x00-0200'
    }
  ]
}
</script>

<style lang="sass" scoped>
.contacts
  margin-top: 30px

.contacts-item
  list-style: none
  text-align: left
  margin-top: 20px

.contact-title
  font-size: 1rem

.contact-address
  font-size: 1.8rem
  font-weight: bold
</style>
