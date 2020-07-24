export class Validate {
  static options (options) {
    // Validate Tracking Id parameter
    const id = () => {
      // Expression checkes if the Hotjar Traking Id contains only numbers and no white spaces
      const idExpression = new RegExp(/^([0-9])*\d$/g)
      if (!options.id) {
        throw new Error('Hotjar Tracking ID is not defined')
      } else if (idExpression.test(options.id) === false) {
        throw new Error('Invalid Hotjar Tracking ID')
      } else if (typeof options.id !== 'string') {
        throw new Error('Hotjar Tracking ID expects a string')
      } else {
        return true
      }
    }

    // Validate isProduction parameter
    const isProduction = () => {
      if (typeof options.isProduction !== 'boolean' && options.isProduction) {
        throw new Error('isProduction expects a boolean')
      } else {
        return true
      }
    }

    // Validate isProduction parameter
    const snippetVersion = () => {
      if (typeof options.snippetVersion !== 'number' && options.snippetVersion) {
        throw new Error('snippetVersion expects a number')
      } else {
        return true
      }
    }

    // Return true if all parameter are validated
    if (id() && isProduction() && snippetVersion()) {
      return true
    }
  }
}
