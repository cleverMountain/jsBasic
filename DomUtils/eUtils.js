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