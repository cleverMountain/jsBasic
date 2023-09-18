// Object.defineProperties() 方法直接在一个对象上定义新的属性或修改现有属性，并返回该对象。
// Object.defineProperties(obj, props) obj:在其上定义或修改属性的对象  props: 要定义其可枚举属性或修改的属性描述符的对象

let c = Object.defineProperties({}, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  }
});
console.log(c)

Object.prototype.myDefineProperties = function (obj, props) {
  let myObj = obj
  for (let k in props) {
    if (props.hasOwnProperty(k)) {
      Object.defineProperty(obj, k, props[k])
    }
  }
  return myObj
}
console.log(Object.myDefineProperties({}, {
  'property1': {
    value: true,
    writable: true
  },
  'property2': {
    value: 'Hello',
    writable: false
  },
  'bar': {
    configurable: false,
    get: function () {
      console.log('get')
      return 10
    },
    set: function (value) {
      console.log('Setting `o.bar` to', value);
    }
  }
}))