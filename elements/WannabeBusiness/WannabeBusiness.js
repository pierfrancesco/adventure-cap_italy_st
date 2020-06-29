import React from 'react';
import styles from './WannabeBusiness.module.css';
import PropTypes from 'prop-types'

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
const WannabeBusiness = ({business, img, buyBusinessAction}) => {

  return <div key={"elem-wannabe-" + business.ID} className={styles.businessCard}>
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
        <Button onClick={buyBusinessAction}>Buy <br/> {business.INITIAL_COST}$</Button>
      </div>
    </div>
  </div>
};

WannabeBusiness.propTypes = {
  business: PropTypes.array.isRequired,
  img: PropTypes.string.isRequired,
  buyBusinessAction: PropTypes.func.isRequired
};

export default WannabeBusiness;
