import Vue from 'vue'
import Hotjar from '../src'

global.console = {
  warn: jest.fn()
}

beforeEach(() => {
  Vue.config.productionTip = false
  Vue.use(Hotjar, {
    id: '111111',
    isProduction: false
  })
  return new Vue()
})

describe('Hotjar Development Mode', () => {
  it('Should not add Hotjar to window object', () => {
    expect(window.hj).not.toBeDefined()
  })

  it('Console should output warning', () => {
    expect(global.console.warn).toHaveBeenCalledWith(
      'HotJar Disabled'
    )
  })
})
