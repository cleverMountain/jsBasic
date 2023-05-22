function getStyles(elem, prop) {
  if (window.getComputedStyle) {
    if (prop) {
      return parseInt(window.getComputedStyle(elem, null)[prop])
    } else {
      return parseInt(window.getComputedStyle(elem, null))
    }
  } else {
    if (prop) {
      return parseInt(elem.currentStyle[prop])
    } else {
      return parseInt(elem.currentStyle)
    }
  }
}
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
function pagePos(e) {
  const { left, top } = getScrollOffset()
  const cLeft = document.documentElement.clientLeft || 0
  const cTop = document.documentElement.clientTop || 0
  return {
    pageX: e.clientX + left - cLeft,
    pageY: e.clientY + top - cTop
  }
}
function drag(target) {
  target.addEventListener('mousedown', function mouseDown(e) {
    e = e || window.event
    // 获取最初的left与top
    let originLeft = getStyles(target, 'left'),
      originTop = getStyles(target, 'top'),
      targetWidth = getStyles(target, 'width'),
      targetHeight = getStyles(target, 'height'),
      { pageX, pageY } = pagePos(e)
    let xDistance = pageX - originLeft,
      yDistance = pageY - originTop

    document.addEventListener('mousemove', function mouseMove(e) {
      e = e || window.event
      let { pageX, pageY } = pagePos(e)
      let { viewWidth, viewHeight } = getViewPortSize()
      let finaX = pageX - xDistance
      let _w = viewWidth - targetWidth
      let _h = viewHeight - targetHeight
      let finaY = pageY - yDistance
      /**
       * 边界判断
       */
      finaX = Math.min(Math.max(0, finaX), _w)
      finaY = Math.min(Math.max(0, finaY), _h)
      target.style.left = finaX + 'px'
      target.style.top = finaY + 'px'


      // 移除
      document.addEventListener('mouseup', function () {
        document.removeEventListener('mousemove', mouseMove)
        // target.removeEventListener('mousedown', mouseDown)
      }, false)
    }, false)

  }, false)
}
