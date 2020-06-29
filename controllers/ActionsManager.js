/* MODELS */
import Events from '../models/Events';
import Texts from '../models/Texts';

/* CONTROLLERS */
import { updateMoney } from './PlayerManager';
import {
  buyBusinesses,
  updateBusinessLevel,
  updateBusinessManager,
  updateOnGoingTransaction
} from './BusinessManager'

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
    // TODO: improve response
    window.dispatchEvent(new CustomEvent(Events.OPEN_MODAL, {detail: Texts.en.NO_MONEY}));
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
 * @returns {boolean}
 */
const actionBuyUpgrade = (businessId) => {
  const result = updateBusinessLevel(businessId);
  if (result) {
    window.dispatchEvent(new CustomEvent(Events.UPDATE_REACT_STATE));
    return true
  } else {
    // TODO: improve response
    window.dispatchEvent(new CustomEvent(Events.OPEN_MODAL, {detail: Texts.en.NO_MONEY}));
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
    // TODO: improve response
    window.dispatchEvent(new CustomEvent(Events.OPEN_MODAL, {detail: Texts.en.NO_MONEY}));
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
  return true;
}

export {
  actionBuyBusiness,
  actionCollectMoney,
  actionBuyUpgrade,
  actionBuyManager,
  actionUpdateOnGoingTransaction
}
