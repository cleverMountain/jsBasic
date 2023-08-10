// @ts-nocheck
import Store from "./vuex/index"
import Dep from "./observe//index"

let store = new Store({
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
      console.log(this)
      setTimeout(() => {

        commit('add', payload)
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
          debugger
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

    this.store.dispatch('add', 2)
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
            that.dep.depend(key)
            return originObj[key]
          },
          set(newVal) {
            // 更新视图
            that.notify()
            originObj[key] = newVal
          }
        })
      }

    })
  }
  notify() {
    this.changePage()
  }
  changePage() {
    let res = this.findKeyWord(this.innerEle.innerHTML)
  
    let newInner = this.store.state[res]
  
    this.innerEle.innerHTML = newInner
  }
  findKeyWord(text) {
    const defaultTagRE = /\{\{((?:.|\r?\n)+?)\}\}/g;
    let res = defaultTagRE.exec(text)
    return res ? res[1] : false
  }

  compiler() {
    this.changePage()
  }
}

console.log(new Event(store))
