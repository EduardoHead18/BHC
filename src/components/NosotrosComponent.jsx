import React from 'react'
import styles from '../modulos_css/Nosotros.module.css';
import nosotrosData from '../nosotrosData.json';

export const NosotrosComponent = () => {
    return (
        <>
            {nosotrosData.map(data =>
                <div className="container" key={data.id}>
                    <hr />
                    <div className={styles.developer1}>
                        <h1>{data.nombre}</h1>
                        <div className={styles.text}>{data.contenido}</div>
                        
                        {console.log(data.foto)}
                        <img className={styles.img1} src={require(`../assets/fts/${data.foto}`)} alt={data.nombre} />
                    </div>
                </div>
            )}
        </>
    );
}
