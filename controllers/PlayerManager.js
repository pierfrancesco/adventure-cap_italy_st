/* CONFIGS */
import appConfig from '../appConfig.json';

/* CLASSES */
import Player from '../classes/Player';

/* MODELS */
import Errors from '../models/Errors';

/* CONTROLLERS */
import { checkIfLocalStorageIsEnabled } from './UtilsManager';

/* GLOBALS */
const MAX_FREQUENCY_SECONDS_DELTA_FOR_LS_SAVING = 3;
let CURRENT_PLAYER = {};
let isLsEnabled;
let savingRequestLock = false;

/* METHODS */

/**
 *
 * @returns {string}
 */
const createID = () =>
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

/**
 *
 * @param name
 * @returns {Player}
 */
const createNewPlayer = (name) => {

  // create vars to assign
  const ID = createID();
  const initialAmountOfMoney = appConfig.PLAYER_CONFIG.INITIAL_AMOUNT_OF_MONEY;
  const initialBusinesess = [];
  const lastAccessed = Date.now();

  // create new player
  CURRENT_PLAYER = new Player(ID, name, initialAmountOfMoney, initialBusinesess, lastAccessed);

  // save player instance in the localStorage
  savePlayerToLocalStorage();

  return CURRENT_PLAYER;
}

/**
 *
 * @param sendWelcomeMessage
 * @returns {Player}
 */
const initPlayer = (sendWelcomeMessage) => {

  try {
    CURRENT_PLAYER = retrievePlayerFromLocalStorage();
  } catch (e) {
    const defaultName = 'JohnDoe_' + Date.now();
    CURRENT_PLAYER = createNewPlayer(defaultName)
  }

  // calculate money while you where away
  calculateRevenueWhileAway(sendWelcomeMessage);

  return CURRENT_PLAYER;

}

/**
 *
 * @param sendWelcomeMessage
 */
const calculateRevenueWhileAway = (sendWelcomeMessage) => {

  let moneyToAssign = 0;

  // 1. take all business with manager
  CURRENT_PLAYER.businesses.forEach(elem => {

    if (elem.HAS_MANAGER && elem.LAST_TRANSACTION_TIMESTAMP !== 0) {
      // 2. take last transaction
      const secondsAfterLastTransaction = Date.now() - elem.LAST_TRANSACTION_TIMESTAMP;
      elem.LAST_TRANSACTION_TIMESTAMP = Date.now();
      const minTimeToDeliverGood = elem.SECONDS_TO_DELIVER_GOOD;
      const pricingModel = elem.SINGLE_ITEM_PRICE * elem.CURRENT_LEVEL;

      // if last transaction for this shop has been gt than seconds to deliver assign it
      if (secondsAfterLastTransaction >= minTimeToDeliverGood) {
        const itemsCollectedWhileAway = parseInt((secondsAfterLastTransaction / minTimeToDeliverGood) / 1000);
        moneyToAssign += itemsCollectedWhileAway * (pricingModel);
      }
    }
  });

  if (moneyToAssign > 0) {
    CURRENT_PLAYER.money += moneyToAssign;
    savePlayerToLocalStorage();
    if (typeof sendWelcomeMessage === "function") sendWelcomeMessage(`While away you collect:${moneyToAssign} $`);
  }
}

/**
 *
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
    // TODO: check if data structure is the one for the player --> no data tampering happened
    CURRENT_PLAYER = new Player(id, name, money, businesses, Date.now());
    return CURRENT_PLAYER;

  } catch (e) {
    throw Errors.GENERIC_ERROR_WHILE_RETRIVING_PLAYER_FROM_LOCAL_STORAGE;
  }
}

/**
 *
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
      window.localStorage.setItem(appConfig.LOCAL_STORAGE_KEYS.PLAYER, btoa(CURRENT_PLAYER.export()));
      savingRequestLock = false;
    }, MAX_FREQUENCY_SECONDS_DELTA_FOR_LS_SAVING * 1000)
  }

  return {
    success: true
  };
}

/**
 *
 * @param newMoney
 * @param businessId
 */
const updateMoney = (newMoney, businessId) => {
  //  TODO: check if they are int and businessId is defined
  CURRENT_PLAYER.money += newMoney;
  CURRENT_PLAYER.businesses.map(elem => {
    if (elem.ID === businessId) {
      elem.LAST_TRANSACTION_TIMESTAMP = Date.now();
      elem.LAST_ONGOING_SECONDS_TRANSACTION = 0;
    }
  });
  savePlayerToLocalStorage();
}

/**
 *
 * @returns {*}
 */
const getMoney = () => CURRENT_PLAYER.money;

export {
  createNewPlayer,
  savePlayerToLocalStorage,
  initPlayer,
  updateMoney,
  getMoney,
  CURRENT_PLAYER
}



