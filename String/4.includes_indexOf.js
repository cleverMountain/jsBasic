// 判断字符串以什么结尾

String.prototype.includes = function (str, num) {
  num = num || 0
  let res = true
  let newStr = this
  let pos = []
  for (let i = 0; i < str.length; i++) {
    for (let k = 0; k < newStr.length; k++) {
      if (str[i] === newStr[k]) {
        pos.push(k)
        // 找到后退出此次循环
        break
      }
    }
  }
  console.log(pos)
  for(let i = 0; i < pos.length; i++) {
    if (pos[i] && pos[i+1]) {
      if (pos[i+1] - pos[i] === 1) {
        res = true
        break
      } else {
        res = false
        break
      }
    }
  }
  return res
}


console.log('3112123412'.includes('1234'))