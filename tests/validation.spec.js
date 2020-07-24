import Vue from 'vue'
import Hotjar from '../src'
import { Validate } from '../src/validate'

describe('Validation integration test', () => {
  global.console = {
    error: jest.fn()
  }

  beforeEach(() => {
    Vue.config.productionTip = false
    Vue.use(Hotjar, {
      id: '111XXX',
      isProduction: false,
      snippetVersion: 6
    })
    return new Vue()
  })

  it('Check validation error hanler', () => {
    expect(global.console.error).toHaveBeenCalledWith(new Error('Invalid Hotjar Tracking ID'))
  })
})

describe('Validating of input Parameter', () => {
  it('Hotjar ID should exist', () => {
    expect(() => {
      Validate.options({ isProduction: false })
    }).toThrowError('Hotjar Tracking ID is not defined')
  })

  it('Hotjar validation should pass and return true', () => {
    expect(
      Validate.options({ id: '111111' })
    ).toEqual(true)
  })

  it('Hotjar ID should not be valid', () => {
    expect(() => {
      Validate.options({ id: '111XXX' })
    }).toThrowError('Invalid Hotjar Tracking ID')
  })

  it('Hotjar ID should be a string', () => {
    expect(() => {
      Validate.options({ id: 111111 })
    }).toThrowError('Hotjar Tracking ID expects a string')
  })

  it('isProduction Parameter is a boolean', () => {
    expect(() => {
      Validate.options({ id: '111111', isProduction: 'false' })
    }).toThrowError('isProduction expects a boolean')
  })

  it('snippetVersion Parameter is a boolean', () => {
    expect(() => {
      Validate.options({ id: '111111', isProduction: false, snippetVersion: '6' })
    }).toThrowError('snippetVersion expects a number')
  })
})
