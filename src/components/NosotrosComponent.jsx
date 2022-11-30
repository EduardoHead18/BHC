import React from 'react'
import styles from '../modulos_css/Nosotros.module.css';
import nosotrosData from '../nosotrosData.json';

export const NosotrosComponent = () => {
    return (
        <>
            {nosotrosData.map(data =>
                <div className="container" key={data.id}>
                    <hr />
                    <div className={styles.contendor}>
                        <br />
                        <div className={styles.name}>
                            <h1>{data.nombre}</h1>
                        </div>
                        <div className={styles.image}>
                            <img className={styles.img1} src={require(`../assets/fts/${data.foto}`)} alt={data.nombre} />
                        </div>
                        <br />
                        <div className={styles.contenido}>
                            <p>{data.contenido}</p>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
