import React, { useState, useEffect } from 'react';
import styles from './OwnedBusiness.module.css';

/* MODELS */
import Texts from '../../models/Texts';

/* ELEMENTS */
import Button from '../Button';
import PropTypes from 'prop-types'
import { allFirstCharsCapital } from '../../controllers/UtilsManager'

/**
 *
 * @param id
 * @param name
 * @param level
 * @param hasManager
 * @param secondsForGoodGeneration
 * @param revenue
 * @param collectMoney
 * @param upgradeCost
 * @param upgradeBusiness
 * @param managerCost
 * @param buyManager
 * @param updateOnGoingTransaction
 * @param img
 * @param oldSecondsToElapse
 * @returns {*}
 * @constructor
 */
const OwnedBusiness =
  ({
     id,
     name,
     level,
     hasManager,
     secondsForGoodGeneration,
     revenue,
     collectMoney,
     upgradeCost,
     upgradeBusiness,
     managerCost,
     buyManager,
     updateOnGoingTransaction,
     img,
     oldSecondsToElapse
   }) => {

    const [isDisabled, setIsDisabled] = useState(hasManager);
    const [manager, setManager] = useState(hasManager);
    const [progress, setProgress] = useState(((oldSecondsToElapse / secondsForGoodGeneration) / 2) * 100);

    const collectHelper = () => {

      // collect money and disable button for secondsForGoodGeneration
      collectMoney();
      setIsDisabled(true);

      // prepare business to collect another one meanwhile fill the progress bar
      let currentProgress = progress;
      const intervalToProgress = setInterval(() => {
        currentProgress += (0.5 / secondsForGoodGeneration) * 100;
        setProgress(currentProgress)
        updateOnGoingTransaction(id, (currentProgress / 100) * secondsForGoodGeneration * 2);

        if (currentProgress > 100) {
          clearInterval(intervalToProgress);
          setIsDisabled(false);
          setProgress(0);
          updateOnGoingTransaction(id, 0);
        }
      }, 500);
    }

    const managerHelper = () => {
      if (buyManager()) {
        setManager(true);
      }
    }

    // once the business is render

    useEffect(() => {
      let updateOnGoingTransactionTimer;

      if (manager) {
        let currentProgress = progress;
        updateOnGoingTransactionTimer = setInterval(() => {
          currentProgress += (0.5 / secondsForGoodGeneration) * 100;
          updateOnGoingTransaction(id, (currentProgress / 100) * secondsForGoodGeneration * 2);
          setProgress(currentProgress);
          if (currentProgress > 100) {
            collectMoney();
            updateOnGoingTransaction(id, 0);
            currentProgress = 0;
            setProgress(currentProgress);
          }
        }, 500)
      } else {
        if (progress !== 0) collectHelper()
      }

      return () => {
        clearInterval(updateOnGoingTransactionTimer);
      }
    }, [manager])

    return <div key={"elem-bought-" + id} className={styles.businessCard}>
      {/*Business Head*/}
      <div className={styles.businessCardHead}>
        <div>
          {/*Profile Pic*/}
          <img src={img} alt={`Img for: ${id}`}/>
        </div>
        <div>
          {/*Biz Name & Level*/}
          <p>{name} <br/> {allFirstCharsCapital(Texts.en.LEVEL)} {level} / 200 </p>
        </div>
      </div>
      {/*Business Body*/}
      <div className={styles.businessCardBody}>
        {/*Progress Bar*/}
        <progress className={styles.progress} max="100" value={progress}/>
        {/*Button Container*/}
        <div>
          {/*Collect Button*/}
          {hasManager ? null :
            <Button disabled={isDisabled} onClick={collectHelper}>{allFirstCharsCapital(Texts.en.COLLECT)}
              <br/> +${revenue}</Button>}
          {/*Upgrade Button*/}
          <Button onClick={upgradeBusiness}>{allFirstCharsCapital(Texts.en.UPGRADE)} <br/> {upgradeCost}$</Button>
          {/*Buy Manager Button*/}
          {hasManager ? null :
            <Button onClick={managerHelper}>{allFirstCharsCapital(Texts.en.BUY_MANAGER)} <br/> {managerCost}$</Button>}
        </div>
      </div>
    </div>
  };

OwnedBusiness.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  level: PropTypes.number.isRequired,
  hasManager: PropTypes.bool.isRequired,
  secondsForGoodGeneration: PropTypes.number.isRequired,
  revenue: PropTypes.number.isRequired,
  collectMoney: PropTypes.func.isRequired,
  upgradeCost: PropTypes.func.isRequired,
  upgradeBusines: PropTypes.func.isRequired,
  managerCost: PropTypes.number.isRequired,
  buyManager: PropTypes.func.isRequired,
  updateOnGoingTransaction: PropTypes.func.isRequired,
  img: PropTypes.string.isRequired,
  oldSecondsToElapse: PropTypes.number,
}

export default OwnedBusiness;
