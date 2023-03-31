// 填充字符串
let str = 'aaacccac'

String.prototype.replace = function (origin, target) {
  const len = origin.length
  let startIndex, endIndex
  for (let i = 0; i < this.length; i++) {
    let newStr = ''
    for (let j = i; j < i + len; j++) {
      newStr += this[j]
    }
    console.log(newStr)
    if (newStr === origin) {
      startIndex = i
      endIndex = startIndex + len
      break
    }
  }
  console.log(startIndex, endIndex)
  return this.slice(0, startIndex) + target + this.slice(endIndex)
}

console.log(str.replace('ac', '1'))

let str1 = 'aaacccac'

String.prototype.replaceAll = function (origin, target) {
  // let str = this
  // const len = origin.length
  // let stack = []
  // for (let i = 0; i < this.length; i++) {
  //   let newStr = ''
  //   for (let j = i; j < i + len; j++) {
  //     newStr += this[j]
  //   }

  //   if (newStr === origin) {
  //     stack.push(i)
  //   }
  // }
  // console.log(stack)
  // for (let i = 0; i < stack.length; i++) {
  //   // 长度相同
  //   if (len == target.length) {
  //     str = str.slice(0, stack[i]) + target + str.slice(stack[i] + len)
  //   }
  //   if (len > target.length) {
  //     // aa1cc.ac
  //     str = str.slice(0, stack[i]) + target + str.slice(stack[i] - (len - target.length) + len)
  //   }
  // }
  // return str
  let str = this
  let i = str.indexOf(origin)
  while(i !== -1) {
    str = str.slice(0, i) + target + str.slice(i + origin.length)
    i = str.indexOf(origin)
  }
  return str
}
console.log(str.replaceAll('ac', '1'))