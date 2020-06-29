/* CONFIGS */
import appConfig from '../appConfig.json';
/* CONTROLLERS */
import { getCurrentPlayerInstance } from './PlayerManager';
import { savePlayerToLocalStorage } from './StorageManager';
/* MODELS */
import BusinessesCatalog from '../models/BusinessesCatalog';

/**
 * This function returns all the available current player businesses
 * @returns {*}
 */
const getBoughtBusinessesList = () => getCurrentPlayerInstance().businesses;

/**
 * This function returns all the available businesses to buy
 * @returns {[]}
 */
const getAvailableBusinessList = () => {

  // create a support object to avoid n*n loop
  const tempObjectForCheckIfBusinessAlreadyBought = {};
  getCurrentPlayerInstance()
    .businesses
    .forEach(elem => tempObjectForCheckIfBusinessAlreadyBought[elem.ID] = 1);

  // check if player has already bought one of the available business
  return BusinessesCatalog
    .filter(elem => tempObjectForCheckIfBusinessAlreadyBought[elem.ID] !== 1);
}

/**
 * This function allows to buy a business
 * @param business
 * @returns {boolean}
 */
const buyBusinesses = (business) => {

  // TODO: improve negative response

  // check if there are enough money
  if (getCurrentPlayerInstance().money < business.INITIAL_COST) return false;

  // buy adding it to player business array
  getCurrentPlayerInstance().businesses.push(business);

  // decrease player money
  getCurrentPlayerInstance().money -= business.INITIAL_COST;

  // save player to LS
  savePlayerToLocalStorage();

  return true;

}

/**
 * This function allows to update a business level
 * @param businessId
 * @returns {boolean}
 */
const updateBusinessLevel = (businessId) => {

  // TODO: improve negative response
  let currentBusinessToUpdate = getCurrentPlayerInstance().businesses.filter(elem => elem.ID === businessId)[0];
  if (currentBusinessToUpdate === undefined) return false;

  // check if you reached max level
  if (currentBusinessToUpdate.CURRENT_LEVEL >= appConfig.BUSINESSES_CONFIG.MAX_LEVEL_AMOUNT) return false

  // set the price for next upgrade
  const priceForTheUpdate = (currentBusinessToUpdate.CURRENT_LEVEL + 1) * currentBusinessToUpdate.INITIAL_COST;

  // check if you have enough money
  if (getCurrentPlayerInstance().money < priceForTheUpdate) return false

  // update the selected business
  getCurrentPlayerInstance().businesses.map(elem => {
    if (elem.ID === businessId) {
      elem.CURRENT_LEVEL += 1;
    }
  });

  // decrease current money
  getCurrentPlayerInstance().money -= priceForTheUpdate;

  // flush to localStorage
  savePlayerToLocalStorage();

  return true;
}

/**
 * This functions allows to buy a manager for a specific business
 * @param businessId
 * @returns {string}
 */
const updateBusinessManager = (businessId) => {
  // TODO: improve negative response

  // retrieve the current business
  let currentBusinessToUpdate = getCurrentPlayerInstance().businesses.filter(elem => elem.ID === businessId)[0];
  if (currentBusinessToUpdate === undefined) return false;

  // check if you reached max level
  if (currentBusinessToUpdate.HAS_MANAGER) return false;

  // check if you have enough money
  if (getCurrentPlayerInstance().money < currentBusinessToUpdate.MANAGER_COST) return false;

  // update the current business with manager = true
  getCurrentPlayerInstance().businesses.map(elem => {
    if (elem.ID === businessId) elem.HAS_MANAGER = true;
  });

  // update current money
  getCurrentPlayerInstance().money -= currentBusinessToUpdate.MANAGER_COST;

  // flush to localStorage
  savePlayerToLocalStorage();

  return true;
}

/**
 * This functions update the last progress for each businesses whether or not has manager
 * @param businessId
 * @param currentSeconds
 * @returns {boolean}
 */
const updateOnGoingTransaction = (businessId, currentSeconds) => {
  // TODO: improve negative response

  // retrieve current business and update last progress seconds
  getCurrentPlayerInstance().businesses.map(elem => {
    if (elem.ID === businessId) {
      elem.LAST_ONGOING_SECONDS_TRANSACTION = parseInt(currentSeconds);
    }
  });

  // flush to localStorage
  savePlayerToLocalStorage();

  return true;
}

export {
  getBoughtBusinessesList,
  getAvailableBusinessList,
  buyBusinesses,
  updateBusinessLevel,
  updateBusinessManager,
  updateOnGoingTransaction
}
