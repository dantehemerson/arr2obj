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

  describe('Provide function without return value(js return undefined by default)', () => {
    it('Should return empty object for key without return value.', () => {
      expect(
        arr2obj(simpleObjectArray, {
          key: item => {
            return undefined
          }
        })
      ).toEqual({})
    })

    it('Should return empty object for value without return value.', () => {
      /**
       * But Why?
       *
       * If fields of objects are undefined, these not exists.
       * For example for check if element of object exists, we have:
       * if(object['key'])
       * but if object is: {
       *  key: undefined
       * }
       * object['key'] is undefined; the condition is Falsy 🤖.
       */
      expect(
        arr2obj(simpleObjectArray, {
          key: item => item.id,
          value: item => {
            return undefined
          }
        })
      ).toEqual({})
    })
  })
})
