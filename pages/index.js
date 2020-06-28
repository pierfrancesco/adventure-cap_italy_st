/* REACT */
import Head from 'next/head'
import React, { useEffect, useState } from 'react';

/* CONTROLLERS */
import {
  getMoney,
  initPlayer,
  updateBusinessLevel,
  updateBusinessManager,
  updateMoney,
  updateOnGoingTransaction
} from '../controllers/PlayerManager';

import { getBoughtBusinessesList, getAvailableBusinessList, buyBusinesses } from '../controllers/BusinessManager';

/* COMPONENTS */
import OuterContainer from '../components/OuterContainer';
import Navbar from '../components/Navbar';
import BusinessesList from '../components/BusinessesList/';

/* ELEMENTS */
import OwnedBusiness from '../elements/OwnedBusiness';
import WannabeBusiness from '../elements/WannabeBusiness';

/**
 * React Home component
 * @returns {*}
 * @constructor
 */
const Home = () => {

  // quick state app, TODO: use reducer or redux
  const [player, setPlayer] = useState(null);
  const [money, setMoney] = useState();
  const [ownBusinesses, setOwnBusinesses] = useState(null);
  const [wannabeBusiness, setWannabeBusiness] = useState(null);

  // helper to update react state
  const updatePlayerInfoInsideReactState = () => {
    setMoney(getMoney());
    setOwnBusinesses(getBoughtBusinessesList());
    setWannabeBusiness(getAvailableBusinessList());
  };

  // helpers to bind action from UI to controller
  const actionBuyBusiness = (business) => {
    const result = buyBusinesses(business);
    if (result) updatePlayerInfoInsideReactState();
  }

  const actionCollectMoney = (newMoney, businessId) => {
    updateMoney(newMoney, businessId);
    updatePlayerInfoInsideReactState();
  }

  const actionBuyUpgrade = (businessId) => {
    updateBusinessLevel(businessId);
    updatePlayerInfoInsideReactState();
  }

  const actionBuyManager = (businessId) => {
    let result = updateBusinessManager(businessId)
    updatePlayerInfoInsideReactState();
    return result;
  }

  // execute this once app is mounted and window. is available
  useEffect(() => {
    setPlayer(initPlayer());
    updatePlayerInfoInsideReactState();
  }, []);

  return <div className="container">
    <Head>
      <title>Adventure Cap-Italy-St</title>
      <link rel="icon" href="/favicon.ico"/>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"/>
    </Head>


    <OuterContainer>
      <Navbar name={player && player.name} profilePic={"/static/images/profile/profile.png"} money={money}/>
      <BusinessesList>
        {ownBusinesses && ownBusinesses.map(elem => {
          // TODO: refactor this
          return <OwnedBusiness
            id={elem.ID}
            name={elem.SCREEN_NAME}
            level={elem.CURRENT_LEVEL}
            hasManager={elem.HAS_MANAGER}
            revenue={elem.SINGLE_ITEM_PRICE * elem.CURRENT_LEVEL}
            collectMoney={() => actionCollectMoney(elem.SINGLE_ITEM_PRICE * elem.CURRENT_LEVEL, elem.ID)}
            secondsForGoodGeneration={elem.SECONDS_TO_DELIVER_GOOD}
            managerCost={elem.MANAGER_COST}
            upgradeCost={(elem.CURRENT_LEVEL + 1) * elem.INITIAL_COST}
            upgradeBusiness={() => actionBuyUpgrade(elem.ID)}
            buyManager={() => actionBuyManager(elem.ID)}
            updateOnGoingTransaction={() => updateOnGoingTransaction(elem.ID)}
            img={`/static/images/businesses/${elem.ID}/main.png`}
          />
        })}

        {wannabeBusiness && wannabeBusiness.map(elem => {
          return <WannabeBusiness business={elem} img={`/static/images/businesses/${elem.ID}/main.png`}
                                  buyBusinessAction={() => actionBuyBusiness(elem)}/>
        })}
      </BusinessesList>


    </OuterContainer>
    <style jsx global>{`
        body {
          margin: 0;
          font-family: 'Dancing Script', cursive;
        }
      `}</style>
  </div>
}
export default Home
