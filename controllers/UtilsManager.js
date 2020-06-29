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

/**
 *
 * @param eventName
 * @returns {Event}
 * @constructor
 */
const customEvent = (eventName) => {
  let event;
  if (typeof (Event) === 'function') {
    event = new Event(eventName);
  } else {
    event = document.createEvent('Event');
    event.initEvent(eventName, true, true);
  }
  return event;
}

/**
 *
 * @param text
 * @param safeWord
 * @returns {string|null}
 */
const allFirstCharsCapital = (text, safeWord = '') => {
  if (typeof text === 'string') {
    let _tempArrayOfWords = text.split(' ');
    let outputString = '';
    _tempArrayOfWords.forEach(word => {
      if (safeWord && safeWord.toLowerCase() === word.toLowerCase()) {
        outputString += safeWord + ' ';
        return;
      }
      outputString += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase() + ' ';
    });
    return outputString.trim();
  }
  return null;
}

export {
  checkIfLocalStorageIsEnabled,
  customEvent,
  allFirstCharsCapital
}
