interface Options<T> {
  key?: (item: T) => object | number | string | boolean
  value?: (item: T) => object | number | string | boolean
}

/**
 * Validate an option key.
 * @param optionKey should be one key of Option(ejm: key, value)
 */
function getOptionFunction<T>(option: Options<T>, key: string): Function {
  const optionFunc = isValidObject(option) ? option[key] : undefined
  if (optionFunc && typeof optionFunc === 'function') {
    return optionFunc
  }
  return undefined
}

export const arr2obj = <T = any>(array: Array<any>, options?: Options<T>): Object => {
  if (!isValidArray(array)) {
    return {}
  }

  const keyFunc = getOptionFunction(options, 'key')
  const valueFunc = getOptionFunction(options, 'value')

  return array.reduce((obj, item) => {
    const key = keyFunc ? keyFunc(item) : item
    const value = valueFunc ? valueFunc(item) : item
    if (key || typeof key === 'number') {
      obj[key] = value
    }
    return obj
  }, {})
}

function isValidArray(array: Array<any>): Boolean {
  return Array.isArray(array) && array.length !== 0
}

function isValidObject(object: any): Boolean {
  return object && typeof object === 'object'
}

export default arr2obj
