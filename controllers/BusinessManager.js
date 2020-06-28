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

export {
  getBoughtBusinessesList,
  getAvailableBusinessList,
  buyBusinesses
}
