import { createLocalVue } from '@vue/test-utils'
import Hotjar from '../src'

// Vue Versions
const versions = {
  vue3: '3.0.7',
  vue2: '2.6.11'
}


describe('VueJs version compatibility (version: 2.x.x)', () => {
  const localVue = createLocalVue()

  // Mock Vue version
  localVue.version = versions.vue2
  localVue.config.productionTip = false
  localVue.use(Hotjar, {
    id: '111111',
    isProduction: true
  })

  it(`Version should be mocked to Vue version ${versions.vue2}`, () => {
    expect(localVue.version).toBe(versions.vue2)
  })

  it('Should add $hj to Vue Prototype', () => {
    expect(localVue.prototype.$hj).toBeDefined()
  })

  it('Should add $hjOptions to Vue Prototype', () => {
    expect(localVue.prototype.$hjOptions).toBeDefined()
  })

  it('Should add Hotjar to window object', () => {
    expect(window.hj).toBeDefined()
  })

})

describe('Vue Next version compatibility (version: 3.x.x)', () => {
  const localVue = createLocalVue()

  // Mock Vue version
  localVue.version = versions.vue3
  localVue.config.productionTip = false
  localVue.use(Hotjar, {
    id: '111111',
    isProduction: true
  })

  it(`Version should be mocked to Vue version ${versions.vue3}`, () => {
    expect(localVue.version).toBe(versions.vue3)
  })

  it('Should not add $hj to Vue Prototype', () => {
    expect(localVue.prototype.$hj).not.toBeDefined()
  })

  it('Should not add $hjOptions to Vue Prototype', () => {
    expect(localVue.prototype.$hjOptions).not.toBeDefined()
  })

  it('Should add Hotjar to window object', () => {
    expect(window.hj).toBeDefined()
  })

})
