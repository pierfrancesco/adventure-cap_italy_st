/* REACT */
import React from 'react';
import PropTypes from 'prop-types'
import styles from './BusinessList.module.css';

/* ELEMENTS */
import OwnedBusiness from '../../elements/OwnedBusiness'
import WannabeBusiness from '../../elements/WannabeBusiness';

/* CONTROLLERS */
import {
  actionBuyBusiness,
  actionBuyUpgrade,
  actionCollectMoney,
  actionBuyManager,
  actionUpdateOnGoingTransaction
} from '../../controllers/ActionsManager'

/**
 * This component contains both owned and wannabe businesses
 * @param ownBusinesses
 * @param wannabeBusiness
 * @returns {*}
 * @constructor
 */
const BusinessesList = ({ownBusinesses, wannabeBusiness}) => {
  return <div className={styles.BusinessList}>

    {/* GENERATE OWNED BUSINESSES*/}
    {ownBusinesses && ownBusinesses.sort((a, b) => a.INITIAL_COST > b.INITIAL_COST ? 1 : -1).map(elem => {

      const revenueForThisBizAndLevel = elem.SINGLE_ITEM_PRICE * elem.CURRENT_LEVEL;

      return <OwnedBusiness
        key={"OwnedBusiness" + elem.ID}
        id={elem.ID}
        name={elem.SCREEN_NAME}
        level={elem.CURRENT_LEVEL}
        hasManager={elem.HAS_MANAGER}
        revenue={revenueForThisBizAndLevel}
        collectMoney={() => actionCollectMoney(revenueForThisBizAndLevel, elem.ID)}
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

    {/* GENERATE WANNABE BUSINESSES*/}
    {wannabeBusiness && wannabeBusiness.map(elem => {
      return <WannabeBusiness
        key={"WannabeBusiness" + elem.ID}
        business={elem} img={`/static/images/businesses/${elem.ID}/main.png`}
        buyBusinessAction={() => actionBuyBusiness(elem)}
      />
    })}
  </div>
};

BusinessesList.propTypes = {
  ownBusinesses: PropTypes.array.isRequired,
  wannabeBusiness: PropTypes.array.isRequired,
};

export default BusinessesList;
