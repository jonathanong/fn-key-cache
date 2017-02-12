
module.exports = function (fn) {
  if (typeof fn !== 'function') throw new TypeError('Argument must be a function!')

  const map = Object.create(null)

  return function (_key) {
    const key = '__' + _key
    if (map[key]) return map[key]

    map[key] = fn(_key)
    return map[key]
  }
}
