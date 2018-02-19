
# fn-key-cache

[![NPM version][npm-image]][npm-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][codecov-image]][codecov-url]
[![Dependency Status][david-image]][david-url]
[![Greenkeeper badge](https://badges.greenkeeper.io/jonathanong/fn-key-cache.svg)](https://greenkeeper.io/)
[![License][license-image]][license-url]
[![Downloads][downloads-image]][downloads-url]

Little utility to cache functions based on keys.
Useful for creating handlers in React:

```js
import React, { Component } from 'react'

import KeyCache from 'fn-key-cache'

export default class Thing extends Component {
  state = {
    tab: 1
  }

  onClickButton = KeyCache(tab => e => {
    e.preventDefault()

    this.setState({
      tab
    })
  })

  render () {
    const { tab } = this.state

    return (
      <div className='container'>
        <button type='button' className={tab === 1 ? 'active' : ''} onClick={this.onClickButton(1)}>1</button>
        <button type='button' className={tab === 2 ? 'active' : ''} onClick={this.onClickButton(2)}>2</button>
        <button type='button' className={tab === 3 ? 'active' : ''} onClick={this.onClickButton(3)}>3</button>
      </div>
    )
  }
}
```

Without this utility, new functions would be created on every `render()`.
This is better than doing something like `onClick={e => this.setState({ tab: 1 })}`,
but not better than just creating a new component.

[npm-image]: https://img.shields.io/npm/v/fn-key-cache.svg?style=flat-square
[npm-url]: https://npmjs.org/package/fn-key-cache
[travis-image]: https://img.shields.io/travis/jonathanong/fn-key-cache/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/jonathanong/fn-key-cache
[codecov-image]: https://img.shields.io/codecov/c/github/jonathanong/fn-key-cache/master.svg?style=flat-square
[codecov-url]: https://codecov.io/github/jonathanong/fn-key-cache
[david-image]: http://img.shields.io/david/jonathanong/fn-key-cache.svg?style=flat-square
[david-url]: https://david-dm.org/jonathanong/fn-key-cache
[license-image]: http://img.shields.io/npm/l/fn-key-cache.svg?style=flat-square
[license-url]: LICENSE
[downloads-image]: http://img.shields.io/npm/dm/fn-key-cache.svg?style=flat-square
[downloads-url]: https://npmjs.org/package/fn-key-cache
