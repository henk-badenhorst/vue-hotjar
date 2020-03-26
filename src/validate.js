export class Validate {
  static options (options) {
    // Validate Tracking Id parameter
    const id = new Promise((resolve, reject) => {
      // Expression checkes if the Hotjar Traking Id contains only numbers and no white spaces
      const idExpression = new RegExp(/^([0-9])*\d$/g)
      if (!options.id) {
        reject(Error('Hotjar Tracking ID is not defined'))
      } else if (idExpression.test(options.id) === false) {
        reject(Error('Invalid Hotjar Tracking ID'))
      } else if (typeof options.id !== 'string') {
        reject(Error('Hotjar Tracking ID expects a string'))
      } else {
        resolve(true)
      }
    })

    // Validate isProduction parameter
    const isProduction = new Promise((resolve, reject) => {
      typeof options.isProduction !== 'boolean' && options.isProduction ? reject(Error('isProduction expects a boolean')) : resolve(true)
    })

    // Validate isProduction parameter
    const snippetVersion = new Promise((resolve, reject) => {
      typeof options.snippetVersion !== 'number' && options.snippetVersion ? reject(Error('snippetVersion expects a number')) : resolve(true)
    })

    return Promise.all([id, isProduction, snippetVersion])
  }
}
