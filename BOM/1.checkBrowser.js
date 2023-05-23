// 获取浏览器型号

function checkBrowser() {
  const userAgent = navigator.userAgent
  if (userAgent.indexOf('Opera') > -1) {
    return 'Opera'
  }
  if (userAgent.indexOf('Firefox') > -1) {
    return 'Firefox'
  }
  if (userAgent.indexOf('Chrome') > -1) {
    return 'Chrome' // 内核webkit
  }
  if (userAgent.indexOf('Safari') > -1) {
    return 'Safari'
  }
  if (userAgent.indexOf('compatible') > -1 && userAgent.indexOf('MSIE') > -1 && userAgent.indexOf('Opera') === -1) {
    return 'IE'
  }
}


// 网络型号
function getNetWorkType() {
  const type = navigator.connection.effectiveType
  switch (type) {
    case 'slow-2g':
      return '2G-'
    case '2g':
      return '2G'
    case '3g':
      return '3G'
    case '4g':
      return '4G'
    case '5g':
      return '5G'
    default:
      return 'unkown networt'
  }
}