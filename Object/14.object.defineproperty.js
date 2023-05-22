function defineObj(obj) {
  // 需要一个对象来代理
  let _obj = {}
  for(let k in obj ) {
    // console.log(obj[k])
    const value = obj[k]
    if (typeof value === 'object' && value !== null) {
      _obj[k] = defineObj(value)
    } else {
      Object.defineProperty(_obj, k, {
        get () {
          console.log('get')
          return obj[k]
        },
        set(newVal) {
          console.log('set')
          obj[k] = newVal
        }
      })
    }
  }

  return _obj
}


let obj = {
  a: 1,
  b: 2,
  c: {
    d: {
      f: 1
    }
  }
}

let arr = [1,2]
let obj1 = defineObj(obj)
console.log(obj1)
delete obj1.a
// 缺点：1.单独增加或删除某个属性时，无法实现对该属性的监听
//       2. 无法实现对数组的监听(数组是一个对象类型，是可以得到劫持后的数据，类似一个类数组，以0，1.。。为下标，但是无法使用push所有无法监听到) 



const _obj = new Proxy(arr, {
  get (target, prop, receive) {
    console.log('proxyGet')
    return target[prop]
  },
  set (target, prop, value, receive) {
    console.log('proxySet')
    return target[prop] = value
  }
})

// _obj.a = 10
// _obj.e = 11 // 单独添加某个属性特可以监听到

console.log(_obj)
setTimeout(() => {
  _obj.push(3)
}, 3000)
// // 代理数组
// function defineArr (arr) {
 
 
//   function setDefin () {
//     let _arr = JSON.parse(JSON.stringify(arr))
    
//     for(let k in arr) {
//       Object.defineProperty(arr, k, {
//         get() {
//           console.log('get arr')
//           return _arr[k]
//         },
//         set(newVal) {
//           console.log('set arr')
//           _arr[k] = newVal
//           debugger
//           setDefin(arr)
//         }
//       })
//     }
//   }
//   setDefin()
//   return arr
// }

// let arr = [1, 2]
// let arr1 = defineArr(arr)
// console.log(arr1)
// // arr1[0] = 10
// arr1['2'] = 20