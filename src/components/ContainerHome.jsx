import React from 'react'
import '../modulos_css/CardsHome.module.css';
import styles from '../modulos_css/CardsHome.module.css';
import imgHome1 from '../assets/img/1-Home.png';
import imgHome2 from '../assets/img/2-Home.jpg';
import imgHome3 from '../assets/img/3-Home.png';
import { Outlet, Link } from "react-router-dom";

export const ContainerHome = () => {
  return (
    <>
      <div className={styles.containerGlobal}>
        <div className={styles.container1}>
          <img src={imgHome1} alt="" />
          <div className={styles.text1}>
            <h1>Frase del dia!</h1>
            <p>La vida es demasiado corta </p>
            <p>para tomar cafés malos.</p>
            <h2>La vida es demasiado corta para para tomar</h2>
            <h2>cafés malos</h2>
          </div>

        </div>

        <div className={styles.container2}>
          <img src={imgHome2} id='img' alt="" width="20%" height="20%" />
          <div className={styles.Texto}>
            <p>Un buen desayuno mejora el resto del día y mejora la productividad. </p>
            <div className={styles.ver_mas_container}>
              <button className={styles.btn34}>
                <Link className={styles.link} to='/menu'>
                  <span>Ver más</span>
                </Link>
              </button>
            </div>

          </div>
        </div>

        <div className={styles.container3}>

          <h1>Visítanos</h1>

          <button className={styles.btn35}>
            <Link className={styles.link} to='/menu'>
              <span>Ubicación</span>
            </Link>
          </button>
          <img src={imgHome3} alt="" />
        </div>
        <Outlet></Outlet>
      </div>
    </>
  )
}
