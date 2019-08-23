export const arrayToObject = (array: Array<any>, keyField?: string) => {
  if (!Array.isArray(array) || !array.length) {
    return {}
  }

  if (keyField) {
    return array.reduce((obj, item) => {
      obj[item[keyField]] = item
      return obj
    }, {})
  } else {
    return array.reduce((obj, item) => {
      if (item || typeof item === 'number') {
        obj[item] = item
      }
      return obj
    }, {})
  }
}
