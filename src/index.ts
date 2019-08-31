interface Options {
  key?: (item: any) => object | number | string | boolean
  value?: (item: any) => object | number | string | boolean
}

/**
 * Validate an option key.
 * @param optionKey should be one key of Option(ejm: key, value)
 */
function getOptionFunction(option: Options, key: string): Function {
  const optionFunc = isValidObject(option) ? option[key] : undefined
  if (optionFunc && typeof optionFunc === 'function') {
    return optionFunc
  }
  return undefined
}

export const arr2obj = (array: Array<any>, options?: Options) => {
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

function isValidArray(array: Array<any>) {
  return Array.isArray(array) && array.length
}

function isValidObject(object: any): Boolean {
  return object && typeof object === 'object'
}

export default arr2obj
