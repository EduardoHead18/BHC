import React from 'react'
import '../modulos_css/CardsHome.module.css';
import styles from '../modulos_css/CardsHome.module.css';
import imgCoffee from '../assets/images/coffee.jpg';
import lg1 from '../assets/images/lg1.png';

export const CardsHome = () => {
  return (
    <>
      <div className={styles.containerCard}>
        <div className={styles.container1}>
          <div className={styles.containerImage}>
            <img src={imgCoffee} alt="" />
          </div>
        </div>

        <div className={styles.container2}>
          <div className={styles.containerImage2}>
            <img src={imgCoffee} id='img' alt="" />
          </div>
        </div>
      </div>
    </>
  )
}
