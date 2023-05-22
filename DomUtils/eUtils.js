function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      left: window.pageXOffset,
      top: window.pageYOffset
    }
  } else {
    return {
      left: document.body.scrollLeft + document.documentElement.scrollLeft, // document.body.scrollLeft/scrollTop与document.documentElement.scrollLeft/scrollTop只有一个存在
      top: document.body.scrollTop + document.documentElement.scrollTop
    }
  }
}

// 获取pageX，pageY
function pagePos(e) {
  const { left, top } = getScrollOffset()
  const cLeft = document.documentElement.clientLeft || 0
  const cTop = document.documentElement.clientTop || 0
  return {
    x: e.clientX + left - cLeft,
    y: e.clientY + top - cTop
  }
}



// 绑定事件函数的兼容写法
function addEvent(el, type, fn) {
  if (el.addEventListener) {
    el.addEventListener(type, fn, false)
  } else if (el.attachEvent) {
    // ie8及以下
    el.attachEvent('on' + type, function () {
      // attachEvent this指向window
      fn.call(el)
    })
  } else {
    // 更低
    el['on' + type] = fn
  }
}


// 阻止冒泡的兼容写法
function cancelBubble(e) {
  e = e || window.event
  if (e.stopPropagation) {
    e.stopPropagation()
  } else {
    e.cancelBubble = true
  }
}