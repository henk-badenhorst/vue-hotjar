import { Hotjar } from './hotjar'
import { Validate } from './validate'

function init (options) {
  try {
    const { id, snippetVersion = 6, isProduction = true } = options
    if (Validate.options(options) && isProduction) {
      // eslint-disable-next-line no-new
      new Hotjar(id, snippetVersion)
      return window.hj
    } else {
      console.log('%c 🔥 HotJar Tracking Disabled 🔥', 'color: #fff; background: #35495d; font-size: 14px; border-radius: 5px; padding: 10px 5px; margin: 20px 0;')
      return false
    }
  } catch (error) {
    console.error(error)
    return false
  }
}

export default {
  install (Vue, options) {
    // Determin Vue major version
    if (Vue.prototype) {
      // Vue version 2.x.x
      Vue.prototype.$hj = init(options)
      Vue.prototype.$hjOptions = options
    } else {
      // Falling back to just initialize Hotjar.
      // This prevents the plugin breaking for vue 3.x.x users.
      init(options)
    }
  }
}
