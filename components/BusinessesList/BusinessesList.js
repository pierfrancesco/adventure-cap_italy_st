/* REACT */
import React from 'react';

/* STYLES */
import styles from './BusinessList.module.css';

/* ELEMENTS */
import OwnedBusiness from '../../elements/OwnedBusiness'
import WannabeBusiness from '../../elements/WannabeBusiness';

/* CONTROLLERS */
import { updateOnGoingTransaction } from '../../controllers/PlayerManager'
import {
  actionBuyBusiness,
  actionBuyUpgrade,
  actionCollectMoney,
  actionBuyManager,
  actionUpdateOnGoingTransaction
} from '../../controllers/Actions'

/**
 *
 * @param ownBusinesses
 * @param wannabeBusiness
 * @returns {*}
 * @constructor
 */
const BusinessesList = ({ownBusinesses, wannabeBusiness}) => {
  return <div className={styles.BusinessList}>
    {ownBusinesses && ownBusinesses.sort((a, b) => a.INITIAL_COST > b.INITIAL_COST ? 1 : -1).map(elem => {

      const pricingModel = elem.SINGLE_ITEM_PRICE * elem.CURRENT_LEVEL;
      // TODO: refactor this
      return <OwnedBusiness
        key={"OwnedBusiness" + elem.ID}
        id={elem.ID}
        name={elem.SCREEN_NAME}
        level={elem.CURRENT_LEVEL}
        hasManager={elem.HAS_MANAGER}
        revenue={elem.SINGLE_ITEM_PRICE * elem.CURRENT_LEVEL}
        collectMoney={() => actionCollectMoney(pricingModel, elem.ID)}
        secondsForGoodGeneration={elem.SECONDS_TO_DELIVER_GOOD}
        managerCost={elem.MANAGER_COST}
        upgradeCost={(elem.CURRENT_LEVEL + 1) * elem.INITIAL_COST}
        upgradeBusiness={() => actionBuyUpgrade(elem.ID)}
        buyManager={() => actionBuyManager(elem.ID)}
        updateOnGoingTransaction={actionUpdateOnGoingTransaction}
        img={`/static/images/businesses/${elem.ID}/main.png`}
        oldSecondsToElapse={elem.LAST_ONGOING_SECONDS_TRANSACTION}
      />
    })}

    {wannabeBusiness && wannabeBusiness.map(elem => {
      return <WannabeBusiness
        key={"WannabeBusiness" + elem.ID}
        business={elem} img={`/static/images/businesses/${elem.ID}/main.png`}
        buyBusinessAction={() => actionBuyBusiness(elem)}
      />
    })}
  </div>
};

export default BusinessesList;
