// apply用于拦截数据的调用

// let fun = Array.prototype.forEach
// const handler = {
//   apply: function (target, thisArg, argumentsList) {

//     target.call([1, 2], ...argumentsList)
//     // Reflect.apply(target, [1, 2], argumentsList)
//   }
// };

// const proxy1 = new Proxy(fun, handler);

// proxy1([1,2,3], (item) => {
//   console.log(item)
// })



// 相当于apply, target目标函数  this指向 参数对象 
Reflect.apply(Array.prototype.forEach, [1, 2, 3], [(item) => {
  console.log(item)
}])



// 原生apply
// let obj = {
//   name: '1',
//   getName(...argus) {
//     console.log(this.name, argus)
//   }
// }
// obj.getName.apply({name: 3}, [1, 2])


function sum(a, b) {
 
  return a + b;
}

const handler = {
  apply: function(target, thisArg, argumentsList) {
   
    console.log(`Calculate sum: ${argumentsList}`);
    // Expected output: "Calculate sum: 1,2"

    return target(argumentsList[0], argumentsList[1]) * 10;
  }
};

const proxy1 = new Proxy(sum, handler);

console.log(sum(1, 2));
// Expected output: 3
console.log(proxy1(1, 2));
// Expected output: 30

var p = new Proxy(function() { console.log(this)}, {
  apply: function(target, thisArg, argumentsList) {
    debugger
    console.log('called: ' + argumentsList.join(', '));
    return argumentsList[0] + argumentsList[1] + argumentsList[2];
  }
});

console.log(p([1, 2, 3])); // "called: 1, 2, 3"
                         // 6