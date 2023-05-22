/**
 * 1.存在<!DOCTYPE html>，w3c标准模式
 * 2.不存在 怪异模式
 * 3.执行 document.compatMode(compat)兼容
 *   CSS1Compat: w3c标准模式 
 *   BackCompat: 怪异模式(向后兼容，一般兼容5个版本)
*/
/**
 * 1.视口
 * 常规：window.innerWidth/innerHeight
 * IE9/IE8及以下：
 * 标准：document.documentElement.clientWidth/clientHeight
 * 怪异：document.body.clientWidth/clientHeight
*/
// 获取视口宽度 innerWidth clienttWidth
function getViewPortSize() {
  if (window.innerWidth) {
    return {
      viewWidth: window.innerWidth,
      viewHeight: window.innerHeight
    }
  } else {
    if (document.compatMode === 'BackCompat') {
      return {
        viewWidth: document.body.clientWidth,
        viewHeight: document.body.clientHeight
      }
    } else {
      return {
        viewWidth: document.documentElement.clientWidth,
        viewHeight: document.documentElement.clientHeight
      }
    }
  }
}


// 获取滚动距离 document.body.scrollWidth(页面) scrollLeft(偏移)
// scrollWidth = window.innerWidth + window.sorollLeft
function getScrollOffset() {
  if (window.pageXOffset) {
    return {
      x: window.pageXOffset,
      y: window.pageYOffset
    }
  } else {
    return {
      x: document.body.scrollLeft + document.documentElement.scrollLeft, // document.body.scrollLeft/scrollTop与document.documentElement.scrollLeft/scrollTop只有一个存在
      y: document.body.scrollTop + document.documentElement.scrollTop
    }
  }
}



/**
 * document.body.scrollWidth = window.innerWidth + window.sorollLeft
 * 视口加上滚动条，所有宽度
 * 1.document.body.scrollWidth
 * 2.document.documentElement.scrollWidth
*/
function getScrollSize() {
  if (document.body.scrollWidth) {
    return {
      width: document.body.scrollWidth,
      height: document.body.scrollHeight
    }
  } else {
    return {
      width: document.documentElement.scrollWidth,
      height: document.documentElement.scrollHeight
    }
  }
}



// 获取到视口的坐标
function getOffsetSize(el) {
  let offsetLeft = el.offsetLeft,
    offsetTop = el.offsetTop
  parent = el.offsetParent
  while (parent) {
    offsetLeft += parent.offsetLeft
    offsetTop += parent.offsetTop
    parent = parent.offsetParent
  }
  return {
    width: offsetLeft,
    height: offsetTop
  }
}




// 获取元素的属性(准确)
function getStyles (elem, prop) {
  if (window.getComputedStyle) {
    if (prop) {
      return window.getComputedStyle(elem, null)[prop]
    } else {
      return window.getComputedStyle(elem, null)
    }
  } else {
    if (prop) {
      return elem.currentStyle[prop]
    } else {
      return elem.currentStyle
    }
  }
}



// 获取偏移量距离祖先元素
function getOffsetSize(el) {
  let offsetLeft = el.offsetLeft,
      offsetTop = el.offsetTop
      parent = el.offsetParent
  while (parent) {
    offsetLeft += parent.offsetLeft
    offsetTop += parent.offsetTop
    parent  = parent.offsetParent
  }
  return {
    width: offsetLeft,
    height: offsetTop
  }
}