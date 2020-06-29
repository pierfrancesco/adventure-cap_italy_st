import { CURRENT_PLAYER, savePlayerToLocalStorage } from './PlayerManager';
import BusinessesCatalog from '../models/BusinessesCatalog';

/**
 *
 * @returns {*}
 */
const getBoughtBusinessesList = () => CURRENT_PLAYER.businesses;

/**
 *
 * @returns {[]}
 */
const getAvailableBusinessList = () => {

  // create a support object to avoid n*n loop
  const tempObjectForCheckIfBusinessAlreadyBought = {};
  CURRENT_PLAYER.businesses.forEach(elem => tempObjectForCheckIfBusinessAlreadyBought[elem.ID] = 1);

  // check if player has already bought one of the available business
  return BusinessesCatalog.filter(elem => tempObjectForCheckIfBusinessAlreadyBought[elem.ID] !== 1);
}

/**
 * TODO: this could be done like an automatic check and not proactive by user
 */
const buyBusinesses = (business) => {

  // check if there are enough money
  if (CURRENT_PLAYER.money < business.INITIAL_COST) return false;

  // buy adding it to player business array
  CURRENT_PLAYER.businesses.push(business);

  // decrease player money
  CURRENT_PLAYER.money -= business.INITIAL_COST;

  // save player to LS
  savePlayerToLocalStorage();

  // return true and update then react state
  return true;

}

/**
 *
 * @param businessId
 */
const updateBusinessLevel = (businessId) => {

  // TODO: add error if business not found
  let currentBusinessToUpdate = CURRENT_PLAYER.businesses.filter(elem => elem.ID === businessId)[0];
  if (currentBusinessToUpdate === undefined) return false;

  // check if you reached max level
  if (currentBusinessToUpdate.CURRENT_LEVEL >= 200) return false

  // TODO: process this numbers
  const priceForTheUpdate = (currentBusinessToUpdate.CURRENT_LEVEL + 1) * currentBusinessToUpdate.INITIAL_COST;

  // check if you have enough money
  if (CURRENT_PLAYER.money < priceForTheUpdate) return false

  CURRENT_PLAYER.businesses.map(elem => {
    if (elem.ID === businessId) {
      elem.CURRENT_LEVEL += 1;
    }
  });

  CURRENT_PLAYER.money -= priceForTheUpdate;
  savePlayerToLocalStorage();

  return true;
}

/**
 *
 * @param businessId
 * @returns {string}
 */
const updateBusinessManager = (businessId) => {
  // TODO: add error if business not found
  let currentBusinessToUpdate = CURRENT_PLAYER.businesses.filter(elem => elem.ID === businessId)[0];
  if (currentBusinessToUpdate === undefined) return false;

  // check if you reached max level
  if (currentBusinessToUpdate.HAS_MANAGER) return false;

  // check if you have enough money
  if (CURRENT_PLAYER.money < currentBusinessToUpdate.MANAGER_COST) return false;

  CURRENT_PLAYER.businesses.map(elem => {
    if (elem.ID === businessId) elem.HAS_MANAGER = true;
  });

  CURRENT_PLAYER.money -= currentBusinessToUpdate.MANAGER_COST;
  savePlayerToLocalStorage();
  return true;
}


/**
 *
 * @param businessId
 * @param currentSeconds
 */
const updateOnGoingTransaction = (businessId, currentSeconds) => {
  CURRENT_PLAYER.businesses.map(elem => {
    if (elem.ID === businessId) {
      elem.LAST_ONGOING_SECONDS_TRANSACTION = parseInt(currentSeconds);
    }
  });

  savePlayerToLocalStorage();
}

export {
  getBoughtBusinessesList,
  getAvailableBusinessList,
  buyBusinesses,
  updateBusinessLevel,
  updateBusinessManager,
  updateOnGoingTransaction
}
