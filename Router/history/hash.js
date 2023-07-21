import History from "./base";
export default class HashHistory extends History {
  constructor(router) {
    super(router)
    this.init()
  }
  init() {
    this.ensureUrl()
    window.addEventListener('hashchange', () => {
      console.log(window.location.href)
      let path = window.location.href.split('#')[1]
      this.transitioTo(path)
    })
  }
  changeUrl(path) {
    location.hash = path
    this.transitioTo(path)
  }
  ensureUrl() {
    if (location.hash.includes('#')) {
      location.hash = '#/'
    }
  }
}