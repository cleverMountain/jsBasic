


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
