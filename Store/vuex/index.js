// @ts-nocheck
import ModuleCollection from "./module/index"
import installModule from "./installModule"

class Store {
  constructor(options) {
    this._modules = new ModuleCollection(options)
    this._mutations = Object.create(null)
    this._actions = Object.create(null)
    this._wrappedGetters = Object.create(null)
    const state = this._modules.root.state
    installModule(this, state, [], this._modules.root)
    console.log(this)
  }
}

export default Store