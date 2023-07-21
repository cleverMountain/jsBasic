import History from "./base";

export default class HTML5History extends History {
  constructor (router) {
   
    super(router)
    this.init()
  }
  init() {
    window.addEventListener('popstate', (e) => {
      // console.log(e.state.path)
      this.transitioTo(e.state.path)
    })
  }
  changeUrl(path) {
    history.pushState({ path }, null, path);
    this.transitioTo(path)
  }
}

