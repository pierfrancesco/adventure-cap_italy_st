/* CONFIGS */
import appConfig from '../appConfig.json';

/* CLASSES */
import Player from '../classes/Player';

/* MODELS */
import Errors from '../models/Errors';

/* CONTROLLERS */
import { checkIfLocalStorageIsEnabled } from './UtilsManager';

/* GLOBALS */
let CURRENT_PLAYER = {};
let isLsEnabled;

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

/*

 */
const initPlayer = () => {

  try {
    CURRENT_PLAYER = retrievePlayerFromLocalStorage();
  } catch (e) {
    const defaultName = 'JohnDoe_' + Date.now();
    CURRENT_PLAYER = createNewPlayer(defaultName)
  }

  // calculate money while you where away
  calculateRevenueWhileAway();

  return CURRENT_PLAYER;

}

/**
 *
 */
const calculateRevenueWhileAway = () => {

  let moneyToAssign = 0;

  // 1. take all business with manager
  CURRENT_PLAYER.businesses.forEach(elem => {

    if (elem.HAS_MANAGER) {
      // 2. take last transaction
      const secondsAfterLastTransaction = Date.now() - elem.LAST_TRANSACTION_TIMESTAMP;
      // TODO: calculate ongoing
      const minTimeToDeliverGood = elem.SECONDS_TO_DELIVER_GOOD;

      if (secondsAfterLastTransaction >= minTimeToDeliverGood) {
        const itemsCollectedWhileAway = parseInt((secondsAfterLastTransaction / minTimeToDeliverGood) / 1000);
        moneyToAssign += itemsCollectedWhileAway * (elem.SINGLE_ITEM_PRICE * elem.CURRENT_LEVEL);
      }
    }
  });

  CURRENT_PLAYER.money += moneyToAssign;
  savePlayerToLocalStorage();

  console.log(`While away you collect:${moneyToAssign} $`)
}

/**
 *
 */
const retrievePlayerFromLocalStorage = () => {

  // is localstorage enabled? if false throw an error
  if (!checkIfLocalStorageIsEnabled()) throw Errors.LOCAL_STORAGE_NOT_SUPPORTED

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
  if (!checkIfLocalStorageIsEnabled() && isLsEnabled !== undefined) throw Errors.LOCAL_STORAGE_NOT_SUPPORTED
  isLsEnabled = true;

  // save the player object inside the localStorage
  window.localStorage.setItem(appConfig.LOCAL_STORAGE_KEYS.PLAYER, btoa(CURRENT_PLAYER.export()));

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
  //  TODO: check if they are int
  CURRENT_PLAYER.money += newMoney;
  CURRENT_PLAYER.businesses.map(elem => {
    if (elem.ID === businessId) {
      elem.LAST_TRANSACTION_TIMESTAMP = Date.now();
      elem.LAST_ON_GOING_TRANSACTION_TIMESTAMP = Date.now();
    }
  });
  savePlayerToLocalStorage();
}

/**
 *
 * @param businessId
 */
const updateOnGoingTransaction = (businessId) => {
  CURRENT_PLAYER.businesses.map(elem => {
    if (elem.ID === businessId) {
      elem.LAST_ON_GOING_TRANSACTION_TIMESTAMP = Date.now();
    }
  });
  savePlayerToLocalStorage();
}

/**
 *
 * @param businessId
 */
const updateBusinessLevel = (businessId) => {

  // TODO: add error if business not found
  let currentBusinessToUpdate = CURRENT_PLAYER.businesses.filter(elem => elem.ID === businessId)[0];
  if (currentBusinessToUpdate === undefined) return 'Something wrong';

  // check if you reached max level
  if (currentBusinessToUpdate.CURRENT_LEVEL >= 200)
    return 'Level max already';

  // TODO: process this numbers
  const priceForTheUpdate = (currentBusinessToUpdate.CURRENT_LEVEL + 1) * currentBusinessToUpdate.INITIAL_COST;

  // check if you have enough money
  if (CURRENT_PLAYER.money < priceForTheUpdate)
    return 'You don\'t have enough money';

  CURRENT_PLAYER.businesses.map(elem => {
    if (elem.ID === businessId) {
      elem.CURRENT_LEVEL += 1;
    }
  });

  CURRENT_PLAYER.money -= priceForTheUpdate;
  savePlayerToLocalStorage();
}

/**
 *
 * @param businessId
 * @returns {string}
 */
const updateBusinessManager = (businessId) => {
  // TODO: add error if business not found
  let currentBusinessToUpdate = CURRENT_PLAYER.businesses.filter(elem => elem.ID === businessId)[0];
  if (currentBusinessToUpdate === undefined) return 'Something wrong';

  // check if you reached max level
  if (currentBusinessToUpdate.HAS_MANAGER)
    return 'Manager already bought';

  // check if you have enough money
  if (CURRENT_PLAYER.money < currentBusinessToUpdate.MANAGER_COST)
    return 'You don\'t have enough money to buy manager';

  CURRENT_PLAYER.businesses.map(elem => {
    if (elem.ID === businessId) {
      elem.HAS_MANAGER = true;
    }
  });

  CURRENT_PLAYER.money -= currentBusinessToUpdate.MANAGER_COST;
  savePlayerToLocalStorage();

  return true;
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
  updateBusinessLevel,
  updateBusinessManager,
  updateOnGoingTransaction,
  CURRENT_PLAYER
}



