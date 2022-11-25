import React from 'react'
import '../modulos_css/CardsHome.module.css';
import styles from '../modulos_css/CardsHome.module.css';
import imgHome1 from '../assets/images/img/1-Home.png';
import imgHome2 from '../assets/images/img/2-Home.jpg';
import imgHome3 from '../assets/images/img/3-Home.png';
import { Outlet, Link } from "react-router-dom";
import { FooterComponent } from './FooterComponent';

export const ContainerHome = () => {
  return (
    <>
      <div className={styles.containerGlobal}>
        <div className={styles.container1}>
          <div className={styles.Texto}>
            <h1>Frase del dia!</h1>
            <p>La vida es demasiado corta </p>
            <p>para tomar cafés malos.</p>
          </div>
          <img src={imgHome1} alt="" />
        </div>

        <div className={styles.container2}>
          <img src={imgHome2} id='img' alt="" width="20%" height="20%" />
          <div className={styles.Texto}>
            <p>Un buen desayuno mejora el resto del día y </p>
            <p>mejora la productividad.</p>
              <button className={styles.btn34}>
                <Link className={styles.link} to='/menu'>
                  <span>Ver más</span>
                </Link>
              </button>

          </div>
        </div>

        <div className={styles.container3}>
        <div className={styles.Texto}>
          <h1>Visítanos</h1>
        </div>
            <button className={styles.btn35}>
              <Link className={styles.link} to='/menu'>
                <span>Ubicación</span>
              </Link>
            </button>
          <img src={imgHome3} alt="" />
        </div>
        <FooterComponent></FooterComponent>
        <Outlet></Outlet>
      </div>
    </>
  )
}
