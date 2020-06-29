/* CONFIGS */
import appConfig from '../appConfig.json'
/* CLASSES */
import Player from '../classes/Player'
/* MODELS */
import Errors from '../models/Errors'
/* CONTROLLERS */
import { getCurrentPlayerInstance } from './PlayerManager';

/* GLOBALS */
let isLsEnabled;
let savingRequestLock;

/**
 * Check if localStorage is Enabled
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
};

/**
 * Save player progress inside localstorage
 * @returns {Promise<boolean>}
 */
const savePlayerToLocalStorage = () => {

  // is localstorage enabled? if false throw an error
  if (isLsEnabled !== true && !checkIfLocalStorageIsEnabled()) throw Errors.LOCAL_STORAGE_NOT_SUPPORTED;
  isLsEnabled = true;

  // save the player object inside the localStorage
  if (!savingRequestLock) {
    savingRequestLock = true;
    setTimeout(() => {
      let currentPlayerInstance = getCurrentPlayerInstance();
      window.localStorage.setItem(appConfig.LOCAL_STORAGE_KEYS.PLAYER, btoa(currentPlayerInstance.export()));
      savingRequestLock = false;
    }, appConfig.PLAYER_CONFIG.MAX_FREQUENCY_SECONDS_DELTA_FOR_LS_SAVING * 1000)
  }

  return {
    success: true
  };
}

/**
 * Retrieve player from localStorage
 * @returns {Player}
 */
const retrievePlayerFromLocalStorage = () => {

  // is localstorage enabled? if false throw an error
  if (isLsEnabled !== true && !checkIfLocalStorageIsEnabled()) throw Errors.LOCAL_STORAGE_NOT_SUPPORTED

  // save the player object inside the localStorage
  const playerRawDataFromLS = window.localStorage.getItem(appConfig.LOCAL_STORAGE_KEYS.PLAYER);
  if (playerRawDataFromLS === null) throw Errors.PLAYER_NOT_FOUND_IN_LOCAL_STORAGE;

  // check if player retrieved has a valid object structure
  try {
    const {id, name, money, businesses} = JSON.parse(atob(playerRawDataFromLS));

    if (typeof id !== "string") throw Errors.GENERIC_ERROR_WHILE_RETRIVING_PLAYER_FROM_LOCAL_STORAGE;
    if (typeof name !== "string") throw Errors.GENERIC_ERROR_WHILE_RETRIVING_PLAYER_FROM_LOCAL_STORAGE;
    if (typeof money !== "number") throw Errors.GENERIC_ERROR_WHILE_RETRIVING_PLAYER_FROM_LOCAL_STORAGE;
    if (typeof businesses !== "object") throw Errors.GENERIC_ERROR_WHILE_RETRIVING_PLAYER_FROM_LOCAL_STORAGE;

    return new Player(id, name, money, businesses, Date.now());

  } catch (e) {
    throw Errors.GENERIC_ERROR_WHILE_RETRIVING_PLAYER_FROM_LOCAL_STORAGE;
  }
}

export {
  checkIfLocalStorageIsEnabled,
  savePlayerToLocalStorage,
  retrievePlayerFromLocalStorage
}
