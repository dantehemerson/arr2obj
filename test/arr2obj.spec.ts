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

  it('Should return new Value with value function', () => {
    expect(arrayToObject([1, 2, 3], { value: item => `pre-${item}-post` })).toEqual({
      1: 'pre-1-post',
      2: 'pre-2-post',
      3: 'pre-3-post'
    })
  })

  it('Should return new Key and Value with custom key and value function', () => {
    const res = arrayToObject([1, 2, 3], {
      key: item => `pre-${item}-post`,
      value: item => Math.pow(item, 2)
    })
    expect(res).toEqual({
      'pre-1-post': 1,
      'pre-2-post': 4,
      'pre-3-post': 9
    })
  })
})
