import React from 'react'
import style from '../modulos_css/GridHome.module.css';
import imgHome1 from '../assets/img/1-Home.png';
import imgHome2 from '../assets/img/2-Home.jpg';
import imgHome3 from '../assets/img/3-Home.png';
import { Outlet, Link } from "react-router-dom";

export const GridHomeComponent = () => {
    return (
        <>
            <div className={style.container}>
                <div className={style.box1}>
                    <h1>Frase del dia!</h1>
                    <p>La vida es demasiado corta para tomar cafés malo</p>
                </div>


                <div className={style.box2}>
                    <img src={imgHome1} alt="" />
                </div>

                <div className={style.box3}>
                    <img src={imgHome2} alt=""/>
                </div>

                <div className={style.box4}>
                    <p>Un buen desayuno mejora el resto del día y mejora la productividad. </p>
                    <Link to='/menu'><button type="button">Ver más</button></Link>  

                </div>

                <div className={style.box5}>
                    <h1>Visítanos</h1>
                    <a href="https://goo.gl/maps/QpVmQUaFrpjM5nFa8" target="_blank"><button type="button">Ubicación</button></a>
                    
                </div>

                <div className={style.box6}>
                    <img src={imgHome3} alt="" />
                </div>

            </div>
        </>
    )
}
