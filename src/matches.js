/* jshint esversion: 6 */

const isFunction = (obj) => typeof obj === 'function';

/**
 * Tests whether an element matches a given CSS selector
 * 
 * @name matches
 * @param {String} selector
 * @param {Object} element
 * @returns {Boolean}
 */
const matches = curry((selector, element) => {

  if (isFunction(element.matches)) {
    return element.matches(selector);
  } else {
    const elementList = document.querySelectorAll(selector);
    let i = 0;

    while (elementList[i] && elementList[i] !== element) {
      i++;
    }

    return (elementList[i] ? true : false);
  }
});
