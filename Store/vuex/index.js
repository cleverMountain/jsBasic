// @ts-nocheck
import ModuleCollection from "./module/index"
import installModule from "./installModule"

let that
class Store {
  constructor(options) {
    this._modules = new ModuleCollection(options)
    this._mutations = Object.create(null)
    this._actions = Object.create(null)
    this._getters = Object.create(null)
    const state = this._modules.root.state
    installModule(this, state, [], this._modules.root)
    that = this
  }
  commit(method, paload) {

    that._mutations[method].forEach(cb => {
      cb.call(this, that.state, paload)
    })
  }
  dispatch(method, paload) {
    this._actions[method].forEach(cb => {
      cb.call(this, this, paload)
    })
  }
  // [a, my] a/my
  registerModule(path, module) {
    this._modules.register(path, module)
    console.log(module.newModule)
    installModule(this, this.state, path, module.newModule)
  }
}

export default Store