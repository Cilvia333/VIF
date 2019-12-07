/* eslint max-classes-per-file: "off" */
/* eslint import/prefer-default-export: "off" */
import { createStore, Module } from 'vuex-smart-module'
import { menu } from './modules/menu'

const root = new Module({
  modules: {
    menu
  }
})

export const store = createStore(root, {
  strict: process.env.NODE_ENV !== 'production'
})
