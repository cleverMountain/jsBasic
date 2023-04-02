/**
 * String.prototype.valueOf() 其实是替换了 Object.prototype.toString()
 */

console.log('a'.toString())
/**
 * 该过程经历了一个包装的过程，原始类型的数据没有原型链是没有方法的
 * 1. 'a' => String('a')
 * 2. 'a'.toString() => String('a').toString()
 */


String.prototype.toString = function () {
  let str = ''
  for (let i = 0; i< this.length; i++) {
    str += this[i]
  }
  return str
}


'a'.toString()



/**
 * valueOf与toString相似
 */
console.log('a'.valueOf())