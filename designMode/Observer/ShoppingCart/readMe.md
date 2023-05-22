app.js 统一管理页面所有模块功能

ShoppingCart
  index.js
    course
      index.js
      Render.js
      Event.js
      Handle.js
    cart
      index.js
      Render.js
      Event.js
      Handle.js

Observer.js
  observers = [fn, fn, fn]
  add() -> fn -> observers
  notify () -> forEach -> observers -> item()



观察者
  oberver -> 函数
  触发事件  -> 执行一个函数完成一个程序 -> notify
  observer -> notify -> 通知
