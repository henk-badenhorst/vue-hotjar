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
    return expect(Validate.options({
      isProduction: false
    })).rejects.toEqual(new Error('Hotjar Tracking ID is not defined'))
  })

  it('Hotjar ID should be valid', () => {
    return expect(Validate.options({
      id: '111111'
    })).resolves.toStrictEqual([true, true, true])
  })

  it('Hotjar ID should not be valid', () => {
    return expect(Validate.options({
      id: '111XXX'
    })).rejects.toEqual(new Error('Invalid Hotjar Tracking ID'))
  })

  it('Hotjar ID should be a string', () => {
    return expect(Validate.options({
      id: 111111
    })).rejects.toEqual(new Error('Hotjar Tracking ID expects a string'))
  })

  it('isProduction Parameter is a boolean', () => {
    return expect(Validate.options({
      id: '111111',
      isProduction: 'false'
    })).rejects.toEqual(new Error('isProduction expects a boolean'))
  })

  it('snippetVersion Parameter is a boolean', () => {
    return expect(Validate.options({
      id: '111111',
      isProduction: false,
      snippetVersion: '6'
    })).rejects.toEqual(new Error('snippetVersion expects a number'))
  })
})
