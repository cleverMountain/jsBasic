// 持久化存储
function persistedState (store) {
  store.subscrib((state) => {
    localStorage.setItem('vuex', JSON.stringify(state))
  })
}


export default persistedState