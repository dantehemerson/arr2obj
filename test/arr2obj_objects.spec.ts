import { arr2obj } from '../src/index'

const simpleObjectArray = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  }
]

const multipleTypeArray = [
  1,
  'string',
  {
    a: {
      b: 'i'
    },
    p: 212
  },
  0,
  null
]

describe('With object array.', () => {
  describe('No provide any options: ', () => {
    it('Should return key as "[object Object]" and value as the last item of array.', () => {
      expect(arr2obj(simpleObjectArray)).toEqual({
        // exists only one item because key is always the same,and
        // the last because iterate through items
        '[object Object]': simpleObjectArray[simpleObjectArray.length - 1]
      })
    })
  })

  describe('Provide key function and value function.', () => {
    it('Should return key as "[object Object]" and value as the last item of array.', () => {
      expect(arr2obj(multipleTypeArray)).toEqual({
        1: 1,
        0: 0,
        string: 'string',
        '[object Object]': multipleTypeArray[2]
      })
    })
  })
})
