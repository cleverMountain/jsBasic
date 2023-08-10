// @ts-nocheck
import ModuleCollection from "./module/index"
import installModule from "./installModule"

class Store {
  constructor(options) {
    this._modules = new ModuleCollection(options)
    this._mutations = Object.create(null)
    this._actions = Object.create(null)
    this._getters = Object.create(null)
    const state = this._modules.root.state
    installModule(this, state, [], this._modules.root)

  }
  commit(method, paload) {
    // console.log(this._mutations, method)
    // debugger
    this._mutations[method].forEach(cb => {
      console.log(this)
      cb(this.state, paload)
    })
  }
  dispatch() {

  }
}

export default Store