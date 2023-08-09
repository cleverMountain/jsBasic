const installModule = (store, rootState, path, newModule) => {
  debugger
  if (newModule._raw.mutations) {
    Object.keys(newModule._raw.mutations).forEach(key => {
      if (store._mutations[key]) {
        store._mutations[key].push(newModule._raw.mutations[key])
      } else {
        store._mutations[key] = [newModule._raw.mutations[key]]
      }

    })
  }
  if (newModule._children) {
    Object.keys(newModule._children).forEach(key => {
      installModule(store, rootState, path.concat(key), newModule._children[key])
    })

  }
}

export default installModule