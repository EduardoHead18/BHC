import React from 'react'
import styles from '../modulos_css/Nosotros.module.css';
import ft1 from '../assets/images/fts/Juan.png';
import ft2 from '../assets/images/fts/Eduardo.png';
import ft3 from '../assets/images/fts/Nelson.png';
import ft4 from '../assets/images/fts/Julian.png';
import ft5 from '../assets/images/fts/Victor.png';
import ft6 from '../assets/images/fts/Nestor.png';

export const NosotrosComponent = () => {
    return (
        <>
            <div className="container">
                <hr />
                <div className={styles.developer1}>
                    <h1>Juan Antonio Guzmán Hernández</h1>
                    <p>Estudiante de Ingeniería en Desarrollo y Gestión de Software en la Universidad Tecnológica de la Selva.<br /><br />

                        Me gusta ver películas, escuchar música y practicar deportes. Soy una persona activa cuyo interés es salír de la rutina.<br /><br />

                        Mis metas en la vida son terminar la carrera y graduarme de Ingeniería en Desarrollo y Gestión de Software, al igual que aplicar las TI en el ámbito de ganadería.</p>
                    <img src={ft1} alt="" />
                </div>

                <hr />

                <div className={styles.developer2}>
                    <h1>Carlos Eduardo Hernández Morales</h1>
                    <p>Estudiante de Ingeniería en Desarrollo y Gestión de Software en la Universidad Tecnológica de la Selva.<br /><br />

                        Mis  pasatiempos favoritos son ver películas, series y dibujar. Soy una persona autodidacta y totalmente autónoma.<br /><br />

                        Mis metas en la vida son terminar y graduarme de la Ingeniería en Desarrollo y Gestión de Software y ejercer su profesión en una empresa extranjera.</p>
                    <img src={ft2} alt="" />


                </div>

                <hr />

                <div className={styles.developer3}>
                    <h1>Nelson Mayo Méndez</h1>
                    <p>Estudiante de Ingeniería en Desarrollo y Gestión de Software en la universidad tecnológica de la selva.<br /><br />

                        Me gusta practicar deportes, hacer ejercicio, y realizar grafittis.<br /><br />

                        Mis metas en la vida son estudiar una maestría en sistemas computacionales y ejercer su profesíon.</p>
                    <img src={ft3} alt="" />
                </div>

                <hr />

                <div className={styles.developer4}>
                    <h1>Julián Peñaloza Zárate</h1>
                    <p>Estudiante de la carrera Ingeniería en Desarrollo y Gestión de Software en la Universidad Tecnológica de la Selva.<br /><br />

                        Me gusta Leer, ver series y escribir cuentos cortos e historias. Soy una persona positiva que sin importar las circunstancias opto por ver lo bueno y omito lo malo.<br /><br />


                        Mis metas en la vida son terminar y graduarme de la Ingeniería en Desarrollo y Gestión de Software , realizar una maestría en seguridad informática y volverme informático forense.</p>
                    <img src={ft4} alt="" />
                </div>

                <hr />

                <div className={styles.developer5}>
                    <h1>Víctor Manuel González López</h1>
                    <p>Estudiante de la Ingeniería en Desarrollo y Gestión de Software en la Universidad Tecnológica de la Selva.<br /><br />

                        Me gusta ver películas, realizar deportes y jugar videojuegos. Soy una persona autónoma y segura de si mismo.<br /><br />

                        Mis metas en la vida son titularme de la Ingeniería en Desarrollo y Gestión de Software y viajar a Italia.</p>
                    <img src={ft5} alt="" />
                </div>

                <hr />

                <div className={styles.developer6}>
                    <h1>Néstor Adrián Martínez Jiménez </h1>
                    <p>Estudiante de la ingeniería en desarrollo y gestión de software en la Universidad Tecnológica de la Selva.<br /><br />

                        Me gusta viajar, realizar cabalgatas a caballo y la catación de café. Soy una persona positiva con un gran interés en aprender cosas nuevas. <br /><br />

                        Mi meta en la vida es desarrollar una finca cafetera haciendo uso eficiente de las TI en la gestión, producción y comercialización de los productos y servicios, al igual que usar las TI para la investigación e innovación en el área de la caficultura.
                    </p>
                    <img src={ft6} alt="" />
                </div>
            </div>
        </>
    );
}
