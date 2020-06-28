import React, { useState, useEffect } from 'react';
import styles from './OwnedBusiness.module.css';

/* ELEMENTS */
import Button from '../Button';

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
 * @returns {*}
 * @constructor
 */
const OwnedBusiness = ({
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
                         img

                       }) => {

  const [isDisabled, setIsDisabled] = useState(hasManager);
  const [manager, setManager] = useState(hasManager);
  const [progress, setProgress] = useState(0);

  const collectHelper = () => {
    collectMoney();
    setIsDisabled(true);
    let currentProgress = 0;
    const intervalToProgress = setInterval(() => {
      currentProgress += 1;
      setProgress((currentProgress / secondsForGoodGeneration) * 100)
      updateOnGoingTransaction();
    }, 1000);

    setTimeout(() => {
      setIsDisabled(false);
      clearInterval(intervalToProgress);
      setProgress(0)
    }, secondsForGoodGeneration * 1000)
  }

  const managerHelper = () => {
    if (buyManager()) {
      setManager(true);
    }
  }

  useEffect(() => {
    let loopManager;
    let updateOnGoingTransactionTimer;
    let currentProgress = 0;
    if (manager) {
      updateOnGoingTransactionTimer = setInterval(() => {
        currentProgress += 0.1;
        updateOnGoingTransaction();
        setProgress((currentProgress / secondsForGoodGeneration) * 1000)
      }, 100)

      loopManager = setInterval(() => {
        currentProgress = 100;
        collectMoney();
        currentProgress = 0;
      }, secondsForGoodGeneration * 1000)
    }
    return () => {
      clearInterval(updateOnGoingTransactionTimer);
      clearInterval(loopManager);
    }
  }, [manager])

  return <div key={"elem-bought-" + id} className={styles.businessCard}>
    <div className={styles.businessCardHead}>
      <div>
        <img src={img} alt={`Img for: ${id}`}/>
      </div>
      <div>
        <p>{name} | Level {level} / 200 </p>
      </div>
    </div>
    <div className={styles.businessCardBody}>
      <progress className={styles.progress} max="1000" value={progress}/>
      <div>
        {hasManager ? null : <Button disabled={isDisabled} onClick={collectHelper}>Collect (+${revenue})</Button>}
        <Button onClick={upgradeBusiness}>Upgrade ({upgradeCost}$)</Button>
        {hasManager ? null : <Button onClick={managerHelper}>Buy Manager ({managerCost}$)</Button>}
      </div>
    </div>
  </div>
};

export default OwnedBusiness;