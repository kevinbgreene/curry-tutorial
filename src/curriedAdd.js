/**
 * @name curriedAdd
 * @param {Number} a Augend
 * @param {Number} b Addend
 * @returns {Number} The sum of a and b
 */
function curriedAdd(a) {
  return function(b) {
    return a + b;
  };
}
