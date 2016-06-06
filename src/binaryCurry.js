/**
 * @name binaryCurry
 * @param {Function} fn A binary function to curry
 * @returns {Function} A curried version of the supplied function
 */
function binaryCurry(fn) {
  return function(a) {
    return function(b) {
      return fn(a, b);
    };
  };
}
