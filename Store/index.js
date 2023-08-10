// @ts-nocheck
import Store from "./vuex/index"

let store =  new Store({
  state: {
    age: 1
  },
  getters: {
    age(state) {
      return state.age + 2
    }
  },
  // 唯一修改状态的地方
  mutations: {
    add(state, payload) {

      state.age += payload
    }
  },
  actions: {
    add({ commit }, payload) {

      setTimeout(() => {
        commit.call(this, 'add', payload)
      }, 1000)
    }
  },
  modules: {
    a: {
      namespaced: true,
      state: {
        age: 11
      },
      // getters: {
      //   age(state) {
      //     return state.age + 1
      //   }
      // },
      // 唯一修改状态的地方
      mutations: {
        add(state, payload) {

          state.age += payload
        }
      },
      actions: {
        add({ commit }, payload) {
          setTimeout(() => {
            commit('add', payload)
          }, 1000)
        }
      },
      modules: {
        b: {
          namespaced: true,
          state: {
            age: 12
          },
          // getters: {
          //   age(state) {
          //     return state.age + 1
          //   }
          // },
          // 唯一修改状态的地方
          mutations: {
            add(state, payload) {

              state.age += payload
            }
          },
          actions: {
            add({ commit }, payload) {
              setTimeout(() => {
                commit('add', payload)
              }, 1000)
            }
          }
        }
      }
    }
  }
})





class Event {
  constructor(store) {
    this.store = store
    this.commitEle = document.getElementById('commit')
    this.dispatchEle = document.getElementById('dispatch')
    this.init()
  }
  init() {
    this.bindEvent()
  }
  bindEvent() {
    this.commitEle.addEventListener('click', this.handleCommit.bind(this), false)
    this.dispatchEle.addEventListener('click', this.handleDispatch.bind(this), false)
  }
  handleCommit() {
    console.log(this)
    this.store.commit('add', 1)
  }
  handleDispatch() {
    this.store.dispatch('add', 2)
  }
}

console.log(new Event(store))
