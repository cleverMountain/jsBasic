function defineObj(obj) {
  // 需要一个对象来代理
  let _obj = JSON.parse(JSON.stringify(obj))
  for(let k in obj ) {
    Object.defineProperty(obj, k, {
      get () {
        console.log('get')
        return _obj[k]
      },
      set(newVal) {
        console.log('set')
        _obj[k] = newVal
      }
    })
  }

  return obj
}


let obj = {
  a: 1,
  b: 2
}

let obj1 = defineObj(obj)
console.log(obj1)
obj1.a = 3
obj1.c = 10



// 代理数组
function defineArr (arr) {
 
 
  function setDefin () {
    let _arr = JSON.parse(JSON.stringify(arr))
    
    for(let k in arr) {
      Object.defineProperty(arr, k, {
        get() {
          console.log('get arr')
          return _arr[k]
        },
        set(newVal) {
          console.log('set arr')
          _arr[k] = newVal
          debugger
          setDefin(arr)
        }
      })
    }
  }
  setDefin()
  return arr
}

let arr = [1, 2]
let arr1 = defineArr(arr)
console.log(arr1)
// arr1[0] = 10
arr1['2'] = 20