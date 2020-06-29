/* CONFIGS */
import appConfig from '../appConfig.json';
/* CLASSES */
import Player from '../classes/Player';
/* CONTROLLERS */
import { retrievePlayerFromLocalStorage, savePlayerToLocalStorage } from './StorageManager';

/* GLOBALS */
let CURRENT_PLAYER = {};

/**
 *
 * @returns {string}
 */
const createID = () =>
  Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);

/**
 *
 * @returns {{}}
 */
const getCurrentPlayerInstance = () => CURRENT_PLAYER;

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
  initPlayer,
  updateMoney,
  getMoney,
  getCurrentPlayerInstance,
  CURRENT_PLAYER
}



