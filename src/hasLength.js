/* jshint esversion: 6 */

/**
 * @name hasLength
 * @param {Number} len The length to test against
 * @param {Object|Array} obj The object to test
 * @returns {Boolean} Does the given object have a length >= to the given len?
 */
const hasLength = curry((len, obj) => {
  return (obj.length >= len);
});
