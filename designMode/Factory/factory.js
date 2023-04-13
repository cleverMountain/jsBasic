/**
 * 有一些公共的方法 属性 静态工具
 * Modal 父类
 * 
 * 对每种状态内部属性加工，或者每种状态的功能扩展
 * Sucess类 Warn类 Error类 -> Modal
 * 
 */
const ModalTypes = {
  SUCCESS: 'S',
  WARN: 'W',
  ERROR: 'E'
}


// 所有类共有的属性
class Modal {
  constructor(status) {
    this.status = status
  }
  get className() {
    let classStr = 'header '
    switch (this.status) {
      case ModalTypes.SUCCESS:
        classStr += 'success'
        break
      case ModalTypes.WARN:
        classStr += 'warn'
        break
      case ModalTypes.ERROR:
        classStr += 'error'
        break
      default:
        break
    }
    return classStr
  }
  // 公共方法
  static checkTypsIsExit (type) {
    for (let key in ModalTypes) {
      if (ModalTypes[key] === type) {
        return true
      }
     
    }
    return false
  }
  static outPutLog (title) {
    console.log(title)
  }
}

// 类独有的属性
class SuccessModal extends Modal {
  constructor(title) {
    super(ModalTypes.SUCCESS)
    this.title = '成功' + title
  }
  // 只有成功才跳转
  goWhere (url) {
    window.location.href = url
  }
}
class WarnModal extends Modal {
  constructor(title) {
    super(ModalTypes.WARN)
    this.title = '报警' + title
  }
}
class ErrorModal extends Modal {
  constructor(title) {
    super(ModalTypes.ERROR)
    this.title = '失败' + title
  }

}


// 创建类的工厂
class ModalFactory {
  constructor(dom) {
    this.dom = dom
  }
  create(title, status) {
    const isExitStaus = Modal.checkTypsIsExit(status)
    if (!isExitStaus) {
      throw new Error('状态不存在')
    }
    const dom = this.dom
    let modal = null
    switch (status) {
      case ModalTypes.SUCCESS:
        modal = new SuccessModal(title)
        break
      case ModalTypes.WARN:
        modal = new WarnModal(title)
        break
      case ModalTypes.ERROR:
        modal = new ErrorModal(title)
        break
      default:
        break
    }
    console.log(modal)
    dom.innerHTML = modal.title
    dom.className = modal.className
    return {
      log: Modal.outPutLog,
      go: modal.goWhere // 成功时跳转页面
    }
  }

}

export default ModalFactory