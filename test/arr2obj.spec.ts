import { arrayToObject } from '../src/index'

describe('arr2Obj', () => {
  it('Empty array should return empty object', () => {
    expect(arrayToObject([])).toEqual({})
  })

  it('Should convert array with basic types(string, boolean, etc).', () => {
    expect(arrayToObject(['a', 'b', 'c', 'd'])).toEqual({
      a: 'a',
      b: 'b',
      c: 'c',
      d: 'd'
    })

    expect(arrayToObject([1, 2, 0, -2])).toEqual({
      1: 1,
      2: 2,
      0: 0,
      '-2': -2
    })
  })

  it('Should return empty object if all elements of array are null', () => {
    expect(arrayToObject([null])).toEqual({})
  })
})
