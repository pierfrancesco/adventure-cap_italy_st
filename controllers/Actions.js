// helpers to bind action from UI to controller
import { updateMoney } from './PlayerManager';
import { buyBusinesses, updateBusinessLevel, updateBusinessManager, updateOnGoingTransaction } from './BusinessManager'
import Events from '../models/Events';
import Texts from '../models/Texts';

const NO_MONEY = Texts.en.NO_MONEY;

/**
 *
 * @param business
 */
const actionBuyBusiness = (business) => {
  const result = buyBusinesses(business);
  if (result) {
    window.dispatchEvent(new CustomEvent(Events.UPDATE_REACT_STATE));
    return true
  } else {
    window.dispatchEvent(new CustomEvent(Events.OPEN_MODAL, {detail: NO_MONEY}));
    return false
  }
}

/**
 *
 * @param newMoney
 * @param businessId
 */
const actionCollectMoney = (newMoney, businessId) => {
  updateMoney(newMoney, businessId);
  updateOnGoingTransaction(businessId, 0);
  window.dispatchEvent(new CustomEvent(Events.UPDATE_REACT_STATE));
  return true
}

/**
 *
 * @param businessId
 * @param updatePlayerInfoInsideReactState
 * @param setModalMessage
 */
const actionBuyUpgrade = (businessId, updatePlayerInfoInsideReactState, setModalMessage) => {
  const result = updateBusinessLevel(businessId);
  if (result) {
    window.dispatchEvent(new CustomEvent(Events.UPDATE_REACT_STATE));
    return true
  } else {
    window.dispatchEvent(new CustomEvent(Events.OPEN_MODAL, {detail: NO_MONEY}));
    return false
  }
}

/**
 *
 * @param businessId
 * @returns {boolean}
 */
const actionBuyManager = (businessId) => {
  const result = updateBusinessManager(businessId)
  if (result) {
    window.dispatchEvent(new CustomEvent(Events.UPDATE_REACT_STATE));
    return true
  } else {
    window.dispatchEvent(new CustomEvent(Events.OPEN_MODAL, {detail: NO_MONEY}));
    return false
  }
};

/**
 *
 * @param businessId
 * @param currentSeconds
 */
const actionUpdateOnGoingTransaction = (businessId, currentSeconds) => {
  updateOnGoingTransaction(businessId, currentSeconds);
  window.dispatchEvent(new CustomEvent(Events.UPDATE_REACT_STATE));
}

export { actionBuyBusiness, actionCollectMoney, actionBuyUpgrade, actionBuyManager, actionUpdateOnGoingTransaction }
