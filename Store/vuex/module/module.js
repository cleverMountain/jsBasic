class Module {
  constructor(options) {
    this._raw = options
    this._children = {}
    this.state = options.state
  }
}

export default Module