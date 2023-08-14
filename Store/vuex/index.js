// @ts-nocheck
import ModuleCollection from "./module/index"
import installModule from "./installModule"

let that
class Store {
  constructor(options) {
    this.replacdState(options)
    this._modules = new ModuleCollection(options)
    this._mutations = Object.create(null)
    this._actions = Object.create(null)
    this._getters = Object.create(null)
    this.cbs = []
    const state = this._modules.root.state
    installModule(this, state, [], this._modules.root)
    this.registerPlugin(options)

    that = this
  }
  commit(method, paload) {
    let old = that.$state
    console.log(that.$state)
    that._mutations[method].forEach(cb => {
      cb.call(this, that.state, paload)
      // debugger
      console.log(that.$state)
      // this.subscrib(null, method, this.state)
      that.publish(that.$state, old, method)
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
    installModule(this, this.state, path, module.newModule)
  }
  registerPlugin(options) {
    if (!options.plugins) return
    options.plugins.forEach(plugin => {
      plugin.call(this, this)
    })
  }
  // 发布
  publish(newState, oldState, method) {

    that.cbs.forEach(cb => cb(newState, oldState, method))
  }
  subscrib(cb) {
    this.cbs.push(cb)
  }
  replacdState(options) {
    let newState = localStorage.getItem('vuex')
    if (newState) {
      options.state = JSON.parse(newState)
    }
  }
  mapState() {
    let obj = {}
    for(let k in this.$state) {
      obj[k] = computed(() => this.$state[k])
    }
    return obj
  }
  mapMutations() {
    let obj = {}
    for(let k in this.mutations) {
      obj[k] = this.mutations[k]
    }
    return obj
  }
  mapActions() {
    let obj = {}
    for(let k in this.actions) {
      obj[k] = this.mutations[k]
    }
    return obj
  }
  
}

export default Store