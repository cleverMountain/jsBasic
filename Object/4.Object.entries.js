    // Object.entries()方法返回一个给定对象自身可枚举属性的键值对数组
    // Object.entries(obj)
    console.log(Object.entries({ a: 1, b: 2 })) // [['a', 1], ['b', 2]]

    Object.prototype.myEntries = function (obj) {
      let arr = []
      // for in 会枚举原型链中的属性
      for (let k in obj) {
        if (obj.hasOwnProperty(k)) {
          arr.push([k, obj[k]])
        }
      }
      return arr
    }
    let d = Object.myEntries({ a: 1, b: 2 })

    let map = new Map(d);
    console.log(map)