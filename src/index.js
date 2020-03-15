import { Hotjar } from './hotjar.js'

// Default & Latest Hotjar Snippet Version
const latestSnippetVersion = 6

export default {
  install (Vue, options) {
    const { id, snippetVersion = latestSnippetVersion, isProduction = true } = options
    if (isProduction) {
      return new Hotjar(id, snippetVersion)
    } else {
      console.log('HotJar Disabled')
    }
  }
}
