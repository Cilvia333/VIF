/* eslint max-classes-per-file: "off" */
/* eslint import/prefer-default-export: "off" */

import { Getters, Mutations, Actions, Module } from 'vuex-smart-module'

// State
class MenuState {
  hamburgerState: Boolean = false
}

// Getters
// Extend 'Getters' class with 'FooState' type
class MenuGetters extends Getters<MenuState> {
  // You can declare both getter properties or methods
  get isActiveHamburger() {
    return this.state.hamburgerState
  }
}

// Mutations
// Extend 'Mutations' class with 'FooState' type
class MenuMutations extends Mutations<MenuState> {
  setHamburgerState(data: Boolean) {
    this.state.hamburgerState = data
  }
}

// Actions
// Extend 'Actions' class with other module asset types
// Note that you need to specify self action type (FooActions) as a type parameter explicitly
class MenuActions extends Actions<
  MenuState,
  MenuGetters,
  MenuMutations,
  MenuActions
> {
  resetMenu() {
    this.commit('setHamburgerState', false)
  }

  changeHamburgerState(data: Boolean) {
    this.commit('setHamburgerState', data)
  }
}

// Create a module with module asset classes
export const menu = new Module({
  state: MenuState,
  getters: MenuGetters,
  mutations: MenuMutations,
  actions: MenuActions
})
