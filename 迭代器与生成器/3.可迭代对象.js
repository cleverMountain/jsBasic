// 必须带Symbol.iterator的key
// 字符串也是
// 可迭代对象 
// 自定义可迭代对象
var myIterable = {
  *[Symbol.iterator]() {
    yield 1;
    yield 2;
    yield 3;
  }
}

for (let value of myIterable) {
    console.log(value);
}


let iterate = {
  0: 42,
  1: 52,
  2: 63,
  length: 3,
  [Symbol.iterator]: Array.prototype[Symbol.iterator]
};

for (let value of iterate) {
  console.log(value);
}