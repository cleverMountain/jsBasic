// apply用于拦截数据的调用

let fun = Array.prototype.forEach
const handler = {
  apply: function (target, thisArg, argumentsList) {

    // target.call([1, 2], ...argumentsList)
    Reflect.apply(target, [1, 2], argumentsList)
  }
};

const proxy1 = new Proxy(fun, handler);

proxy1((item) => {
  console.log(item)
})



// 相当于apply, target目标函数  this指向 参数对象 
Reflect.apply(Array.prototype.forEach, [1, 2, 3], [(item) => {
  console.log(item)
}])



// 原生apply
let obj = {
  name: '1',
  getName(...argus) {
    console.log(this.name, argus)
  }
}
obj.getName.apply({name: 3}, [1, 2])