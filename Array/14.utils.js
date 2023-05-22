// 单一去重数组
let arr = [
  {
    id: 1,
    name: 'li1'
  },
  {
    id: 2,
    name: 'li2'
  },
  {
    id: 3,
    name: 'li3'
  },
  // {
  //   id: 3,
  //   name: 'li3'
  // }
]
let arr2 = [
  {
    id: 1,
    name: 'li1'
  },
  {
    id: 2,
    name: 'li3'
  },
  // {
  //   id: 3,
  //   name: 'li3'
  // },
  // {
  //   id: 3,
  //   name: 'li3'
  // }
]

/**
 * 
 * @param {Array} arr 
 * @param {String} prop 
 * @returns 
 */
// 删除自身的重复值
function removeSelfDuplicate(arr, prop) {
  return arr.reduce((pre, item) => {
    if (pre.every(ite => ite[prop] !== item[prop])) {
      pre.push(item)
    }
    return pre
  }, [])
}

console.log(removeSelfDuplicate(arr, 'name'))


/**
 * 
 * @param {Array} source  
 * @param {Array} target  
 * @param {String} prop   
 * @param {Boolean} isDuplicate
 * @returns 
 */
function getOtherDuplicate(source, target, prop, isDuplicate) {
  return source.filter(s => {
    let status = target.find(t => t[prop] == s[prop])
    return isDuplicate ? status : !status
  })
}
console.log(getOtherDuplicate(arr, arr2, 'id', true))