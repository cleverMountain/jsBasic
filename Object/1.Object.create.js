// Object.create() 方法用于创建一个新对象，使用现有的对象来作为新创建对象的原型（prototype）
// Object.create(proto, propertiesObject),第一个参数是原型链，第二个参数是属性描述
let obj = Object.create({ a: 1 }, {
  foo: {
    writable: true,
    configurable: true,
    value: 'hello'
  },
  bar: {
    configurable: false,
    get: function () { return 10; },
    set: function (value) {
      console.log('Setting `o.bar` to', value);
    }
  }
})



Object.prototype.myCreate = function (proto, propertiesObject) {
  let obj = {}
  obj.__proto__ = proto
  if (propertiesObject) {
    for (let key in propertiesObject) {
      if (propertiesObject.hasOwnProperty(key)) {
        Object.defineProperty(obj, key, propertiesObject[key])
      }
    }
  }
  return obj
}
// console.log(Object.myCreate({a: 1}))
let obj1 = Object.myCreate({ a: 1 }, {
  foo: {
    writable: true,
    configurable: true,
    value: 'hello'
  },
  bar: {
    configurable: false,
    get: function () {
      console.log('get')
      return 10
    },
    set: function (value) {
      console.log('Setting `o.bar` to', value);
    }
  }
})
console.log(obj1)