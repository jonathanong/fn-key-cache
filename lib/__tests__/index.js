
/* eslint-env jest */

const assert = require('assert')

const Cache = require('..')

it('should cache the function', () => {
  const fn = key => key

  const cache = Cache(fn)

  assert.equal('asdf', cache('asdf'))
  assert.equal(cache('asdf'), cache('asdf'))
})
