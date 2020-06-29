/* REACT */
import Head from 'next/head'
import React, { useEffect, useState } from 'react';

/* CONTROLLERS */
import {
  getMoney,
  initPlayer,
} from '../controllers/PlayerManager';

import { getBoughtBusinessesList, getAvailableBusinessList, buyBusinesses } from '../controllers/BusinessManager';

/* COMPONENTS */
import OuterContainer from '../components/OuterContainer';
import Navbar from '../components/Navbar';
import BusinessesList from '../components/BusinessesList/';

/* ELEMENTS */
import Modal from '../elements/Modal'
import Events from '../models/Events'

/**
 * React Home component
 * @returns {*}
 * @constructor
 */
const Home = () => {

  // quick state app
  const [player, setPlayer] = useState(null);
  const [money, setMoney] = useState();
  const [ownBusinesses, setOwnBusinesses] = useState(null);
  const [wannabeBusiness, setWannabeBusiness] = useState(null);
  const [modalMessage, setModalMessage] = useState(null);

  // helper to update react state
  const updatePlayerInfoInsideReactState = () => {
    setMoney(getMoney());
    setOwnBusinesses(getBoughtBusinessesList());
    setWannabeBusiness(getAvailableBusinessList());
  };

  // execute this once app is mounted and window. is available
  useEffect(() => {
    setPlayer(initPlayer(setModalMessage));
    updatePlayerInfoInsideReactState();

    // define listeners for update react state
    window.addEventListener(Events.UPDATE_REACT_STATE, updatePlayerInfoInsideReactState);
    window.addEventListener(Events.OPEN_MODAL, (e) => setModalMessage(e.detail));

    // remove all listeners
    return () => {
      window.removeEventListener(Events.UPDATE_REACT_STATE, updatePlayerInfoInsideReactState);
      window.addEventListener(Events.OPEN_MODAL, (e) => setModalMessage(e.detail));
    }

  }, []);

  return <div className="container">
    <Head>
      <title>Adventure Cap-Italy-St</title>
      <link rel="icon" href="/favicon.ico"/>
      <meta name="viewport"
            content="width=device-width, initial-scale=1, maximum-scale=5, viewport-fit=cover"/>
      <link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet"/>
    </Head>

    {modalMessage ? <Modal message={modalMessage} closeModal={() => setModalMessage(null)}/> : null}

    <OuterContainer>

      <Navbar
        name={player && player.name}
        profilePic={"/static/images/profile/profile.png"}
        money={money}
      />

      <BusinessesList
        ownBusinesses={ownBusinesses}
        wannabeBusiness={wannabeBusiness}
      />


    </OuterContainer>
    <style jsx global>{`
        body {
          margin: 0;
          font-family: 'Dancing Script', cursive;
        }
        progress {
           -webkit-appearance: none;
        }
        progress::-webkit-progress-bar-value {
          -webkit-appearance: none;
          background: orangered;
        }
      `}</style>
  </div>
}
export default Home
