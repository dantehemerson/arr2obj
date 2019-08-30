import { arrayToObject } from '../src/index'

describe('With basic tests (with argument without errors)', () => {
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

  it('Should return new Key with key function', () => {
    expect(arrayToObject([1, 2, 3], { key: item => `pre-${item}-post` })).toEqual({
      'pre-1-post': 1,
      'pre-2-post': 2,
      'pre-3-post': 3
    })
  })
})
