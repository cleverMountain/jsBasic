// @ts-nocheck
import Store from "./vuex/index"
import Dep from "./observe//index"
import Watcher from "./observe/watcher"

let store = new Store({
  state: {
    age: 1,
    age2: 2
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
    },
    add2(state, payload) {

      state.age2 += payload
    }
  },
  actions: {
    add1({ commit }, payload) {
      console.log(this)
      setTimeout(() => {

        commit('add2', payload)
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

        add1({ commit }, payload) {
      
          let that = this
          console.log(this)
          setTimeout(() => {
            commit.call(that, 'add', payload)
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
    this.innerEle = document.getElementById('inner')
    this.dep = new Dep()
    this.init()
  }
  init() {
    this.addState()
    this.proxy(this.store.$state, this.store.state)
    this.compiler()
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

    this.store.dispatch('add1', 2)
  }
  addState() {
    this.store.$state = JSON.parse(JSON.stringify(this.store.state))
    this.store.state = {}
  }
  proxy(originObj, proxyObj) {
    let that = this
    Object.keys(originObj).forEach(key => {
      if (typeof originObj[key] === 'object') {
        this.proxy(originObj[key], proxyObj[key] = {})
      } else {
        Object.defineProperty(proxyObj, key, {
          get() {
            // 收集依赖
            that.dep.depend(key)
            // debugger
            return originObj[key]
          },
          set(newVal) {
            // 更新视图
            originObj[key] = newVal
            that.dep.notify()
          }
        })
      }

    })
  }
  findKeyWord(text) {
    const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
    let res = defaultTagRE.exec(text)
    return res ? res[1] : false
  }

  compiler() {
    new Watcher(this.innerEle, this.store.state)
    this.store.state.age
    this.store.state.age2
    this.dep.notify()
  }
}

console.log(new Event(store))
