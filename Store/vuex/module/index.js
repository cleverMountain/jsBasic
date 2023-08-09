// @ts-nocheck
import Module from "./module"


class ModuleCollection {
  constructor(options) {
    this.root = null
    this.register([], options)
  }
  register(path, rootModule) {
    let newModule = new Module(rootModule)
    if (!this.root) {
      this.root = newModule
    } else {
      // 父亲
      let parent = path.slice(0, -1).reduce((pre, item) => {
        pre = pre._children[item]
        return pre
      }, this.root)
      let key = path[path.length - 1]
      parent._children[key] = newModule
    }
    let obj = newModule._raw.modules
    if (obj) {
      Object.keys(obj).forEach(key => {
        this.register(path.concat(key), obj[key])
      })
    }
  }
}


export default ModuleCollection