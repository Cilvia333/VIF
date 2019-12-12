/* eslint max-classes-per-file: "off" */
/* eslint import/prefer-default-export: "off" */
import { createStore, Module } from 'vuex-smart-module'
import { menu } from './modules/menu'
import { idols } from './modules/idols'

const root = new Module({
  modules: {
    menu,
    idols
  }
})

export const store = createStore(root, {
  strict: process.env.NODE_ENV !== 'production'
})
