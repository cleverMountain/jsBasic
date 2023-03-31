// 重点：原始字符串每个字符累加与需要查找字符串长度相同的字符然后与目标字符串对比
String.prototype.includes = function (search, begin) {
  begin = begin || 0
  if (begin > this.length) {
    return false
  }
  for (let i = begin; i < this.length; i++) {
    let myStr = ''
    for (let k = i; k < i + search.length; k++) {
      myStr += this[k]
    }

    if (myStr == search) {
      return true
    }
  }
  return false
}

console.log('1213412123'.includes('123'))



let str = 'tsdasddadsa'
// 匹配a出现的次数
let index = 0
while (str) {
  // 匹配一次截断一次，
  let i = str.indexOf('a')
  if (i === -1) {
    str = ''
  } else {
    str = str.slice(i + 1)
    index++
  }

}
console.log(index)



String.prototype.indexOf = function (search, begin) {
  begin = begin || 0
  if (begin > this.length) {
    return -1
  }
  // let str = this.slice(begin)
  for (let i = begin; i < this.length; i++) {
    let myStr = ''
    for (let k = i; k < i + search.length; k++) {
      myStr += this[k]
    }

    if (myStr == search) {
      return i
    }
  }
  return -1
}
let str1 = '3adadad21312'
console.log(str1.indexOf('213'))


String.prototype.lastIndexOf = function (search, begin) {
  begin = begin || 0
  let res = -1
  if (begin > this.length) {
    return res
  }
  // let str = this.slice(begin)
  for (let i = begin; i < this.length; i++) {
    let myStr = ''
    for (let k = i; k < i + search.length; k++) {
      myStr += this[k]
    }
    if (myStr == search) {
      res = i
      continue
    }
  }
  return res
}
let str2 = '213adadad21312'
console.log(str2.lastIndexOf('213'))