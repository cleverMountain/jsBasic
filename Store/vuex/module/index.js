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