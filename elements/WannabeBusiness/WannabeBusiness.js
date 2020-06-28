import React from 'react';
import styles from './WannabeBusiness.module.css';

/* ELEMENTS */
import Button from '../Button';

/**
 *
 * @param business
 * @param img
 * @param buyBusinessAction
 * @returns {*}
 * @constructor
 */
const WannabeBusiness = ({business, img,  buyBusinessAction}) => {

  return <div key={"elem-bought-" + business.ID} className={styles.businessCard}>
    <div className={styles.businessCardHead}>
      <div>
        <img src={img} alt={`Img for: ${business.ID}`}/>
      </div>
      <div>
        <p>{business.SCREEN_NAME}</p>
      </div>
    </div>
    <div className={styles.businessCardBody}>
      <div>
        <Button onClick={buyBusinessAction}>Buy ({business.INITIAL_COST}$)</Button>
      </div>
    </div>
  </div>
};

export default WannabeBusiness;
