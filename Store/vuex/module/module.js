function forEachObj(obj, cb) {
  Object.keys(obj).forEach(key => cb(key, obj[key]))
}

class Module {
  constructor(options) {
    this._raw = options
    this._children = {}
    this.state = options.state
  }
  forEachmutations(cb) {
    if (this._raw.mutations) {
      forEachObj(this._raw.mutations, cb)
    }
  }
  forEachActions(cb) {
    if (this._raw.actions) {
      forEachObj(this._raw.actions, cb)
    }
  }
}

export { forEachObj }
export default Module