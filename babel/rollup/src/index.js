import { parse } from './parse/index'

const babel = Object.create(null)
// 定义parse
Object.defineProperty(babel, 'parse', {
  get() {
    return parse
  }
})

export default babel

