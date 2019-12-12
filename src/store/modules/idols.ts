/* eslint max-classes-per-file: "off" */
/* eslint import/prefer-default-export: "off" */

import { Getters, Mutations, Actions, Module } from 'vuex-smart-module'

export type Group = {
  name: string
  img: string
  description: string
  color: string
  time0: string
  time1: string
}

// State
class IdolsState {
  groups: Group[] = [
    {
      name: '夏風アザミ',
      img: 'azami.svg',
      description:
        '情に棹させば流される。智に働けば角が立つ。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。とかくに人の世は住み情に棹させば流される。智に働けば角が立つ。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。とかくに人の世。',
      color: 'linear-gradient(#55c8ff, #e14a95)',
      time0: '16:00',
      time1: '16:30'
    },
    {
      name: '妄想機巧少女',
      img: 'mousou.svg',
      description:
        '情に棹させば流される。智に働けば角が立つ。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。とかくに人の世は住み情に棹させば流される。智に働けば角が立つ。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。とかくに人の世。',
      color: '#C30D23',
      time0: '16:00',
      time1: '16:30'
    },
    {
      name: 'パレットフルカラーズ',
      img: 'pallet.svg',
      description:
        '情に棹させば流される。智に働けば角が立つ。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。とかくに人の世は住み情に棹させば流される。智に働けば角が立つ。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。とかくに人の世。',
      color: '#FFFFFF',
      time0: '16:00',
      time1: '16:30'
    },
    {
      name: '12bite',
      img: '12bite.svg',
      description:
        '情に棹させば流される。智に働けば角が立つ。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。とかくに人の世は住み情に棹させば流される。智に働けば角が立つ。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。とかくに人の世。',
      color: '#FFFFFF',
      time0: '16:00',
      time1: '16:30'
    },
    {
      name: '喜雨かなで',
      img: 'kanade.svg',
      description:
        '情に棹させば流される。智に働けば角が立つ。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。とかくに人の世は住み情に棹させば流される。智に働けば角が立つ。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。とかくに人の世。',
      color: '#00A2E1',
      time0: '16:00',
      time1: '16:30'
    },
    {
      name: 'ESTOF',
      img: 'estof.svg',
      description:
        '情に棹させば流される。智に働けば角が立つ。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。とかくに人の世は住み情に棹させば流される。智に働けば角が立つ。どこへ越しても住みにくいと悟った時、詩が生れて、画が出来る。とかくに人の世。',
      color: '#999055',
      time0: '16:00',
      time1: '16:30'
    }
  ]
}

// Getters
// Extend 'Getters' class with 'FooState' type
class IdolsGetters extends Getters<IdolsState> {
  // You can declare both getter properties or methods
  get getIdols() {
    return this.state.groups
  }
}

// Create a module with module asset classes
export const idols = new Module({
  state: IdolsState,
  getters: IdolsGetters
})
