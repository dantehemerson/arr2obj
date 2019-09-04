# arr2obj

[![Build Status](https://travis-ci.org/dantehemerson/devicons-server.svg?branch=master)](https://travis-ci.org/dantehemerson/arr2obj)
[![Licence](https://img.shields.io/badge/license-MIT-green)](https://github.com/dantehemerson/arr2obj/blob/master/LICENSE)
[![npm](https://img.shields.io/npm/dw/@dantehemerson/arr2obj)](https://www.npmjs.com/package/@dantehemerson/arr2obj)

Converts an array to object, with custom key and value.

## Install

```
npm i @dantehemerson/arr2obj
```

or with yarn:

```
yarn add @dantehemerson/arr2obj
```

## Usage

You can import as follows:

```js
const { arr2obj } = require('@dantehemerson/arr2obj')
```

The function is:

### `arr2obj(array, [options])`

#### Arguments

**`array`**: The array to transform.

**`options`**: The options sould be a object with two optional keys: `key` and `value`, functions that receive the item as argument and return a value.

- `key`: Function that must return the value that will be taken as the key.

- `value`: Function that must return the value that will be taken as value.

for example:

```js
{
  key: item => `pre-${item}`,
  value: item => item
}
```

If you use Typescript, the interface of `options` is:

```typescript
interface Options {
  key?: (item: any) => object | number | string | boolean
  value?: (item: any) => object | number | string | boolean
}
```

#### Returns

**`Object`** tranformed.

## Examples

#### Array of basic types:

```js
const result = arr2obj(['a', 'b', 'c'])
// result:
// { a: 'a', b: 'b', c: 'c' }
```

#### Array of objects

```js
const arr = [
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

const result = arr2obj(arr, {
  key: item => `pre-${item}-post`,
  value: item => Math.pow(item, 2)
})

/**
  result:
  {
    1: {
      id: 1
    },
    2: {
      id: 2
    },
    3: {
      id: 3
    }
  }
**/
```

## Author

[Dante Calderon](https://dantecalderon.dev) - [@dantehemerson](https://github.com/dantehemerson)

## Licence

[MIT](./LICENSE)
