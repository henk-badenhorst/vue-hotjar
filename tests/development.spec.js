import Vue from 'vue'
import Hotjar from '../src'

global.console = {
  log: jest.fn()
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

  it('Should add $hj as Vue Prototype', () => {
    expect(Vue.prototype.$hj).toBeDefined()
  })

  it('Vue Prototype $hj should return false', () => {
    expect(Vue.prototype.$hj).toEqual(false)
  })

  it('Console should output info', () => {
    const message = global.console.log.mock.calls[0][0]
    expect(message).toEqual(expect.stringContaining('HotJar Tracking Disabled'))
  })
})
