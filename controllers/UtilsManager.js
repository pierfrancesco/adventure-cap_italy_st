/**
 *
 * @returns {boolean}
 */
const checkIfLocalStorageIsEnabled = () => {
  const test = 'TEST';
  try {
    window.localStorage.setItem(test, test);
    window.localStorage.removeItem(test);
    return true;
  } catch (e) {
    return false;
  }
}

export {
  checkIfLocalStorageIsEnabled
}
