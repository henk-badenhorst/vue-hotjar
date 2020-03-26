import { Hotjar } from './hotjar'
import { Validate } from './validate'

export default {
  install (Vue, options) {
    const { id, snippetVersion = 6, isProduction = true } = options
    Validate.options(options).then(() => {
      if (isProduction) {
        return new Hotjar(id, snippetVersion)
      } else {
        console.warn('HotJar tracking disabled')
      }
    }).catch(error => console.error(error))
  }
}
