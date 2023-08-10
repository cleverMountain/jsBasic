// @ts-nocheck
import Module from "./module"


class ModuleCollection {
  constructor(options) {
    this.root = null
    this.register([], options)
  }
  // 注册模块
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
        // 栈结构确认父子关系
        this.register(path.concat(key), obj[key])
      })
    }
  }
}


export default ModuleCollection