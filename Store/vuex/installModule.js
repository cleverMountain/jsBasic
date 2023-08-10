// @ts-nocheck
import { forEachObj } from "./module/module"

const installModule = (store, rootState, path, newModule) => {
  if (path.length === 0) {
    store.state = rootState
  } else {
    // 确定父子关系
    let key = path[path.length - 1]
    let parent = path.slice(0, -1).reduce((pre, cur) => {
      pre = pre[cur]
      return pre
    }, store.state)

    parent[key] = rootState

  }

  let frontPath = path.length > 0 ? path.join('/') + '/' : ''
  // if (newModule._raw.mutations) {
  //   Object.keys(newModule._raw.mutations).forEach(key => {
  //     if (store._mutations[frontPath + key]) {
  //       store._mutations[frontPath + key].push(newModule._raw.mutations[key])
  //     } else {
  //       store._mutations[frontPath + key] = [newModule._raw.mutations[key]]
  //     }
  //   })
  // }
  // 安装mutation模块
  newModule.forEachmutations((key, value) => {
    // if (store._mutations[frontPath + key]) {
    //   store._mutations[frontPath + key].push(value)
    // } else {
    //   store._mutations[frontPath + key] = [value]
    // }
    store._mutations[frontPath + key] = store._mutations[frontPath + key] || []
    store._mutations[frontPath + key].push(value)
  })
  // 安装actions模块
  newModule.forEachActions((key, value) => {
    // if (store._actions[frontPath + key]) {
    //   store._actions[frontPath + key].push(value)
    // } else {
    //   store._actions[frontPath + key] = [value]
    // }
    store._actions[frontPath + key] = store._actions[frontPath + key] || []
    store._actions[frontPath + key].push(value)
  })
  if (newModule._children) {
    // Object.keys(newModule._children).forEach(key => {
    //   installModule(store, rootState, path.concat(key), newModule._children[key])
    // })
    forEachObj(newModule._children, (key, value) => {
      installModule(store, value.state, path.concat(key), value)
    })
  }
}

export default installModule