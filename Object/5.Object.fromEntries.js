    // Object.fromEntries() 方法把键值对列表转换为一个对象。
    const arr = [['0', 'a'], ['1', 'b'], ['2', 'c']];
    let map = new Map(arr)
    console.log(Object.fromEntries(map))
    const obj = Object.fromEntries(arr);
    console.log(obj); // { 0: "a", 1: "b", 2: "c" }


    Object.prototype.myFromEntries = function (arr) {
      let obj = {}
      arr.forEach(item => {
        const [key, value] = item
        obj[key] = value
      })
      return obj
    }
    console.log(Object.myFromEntries(arr))