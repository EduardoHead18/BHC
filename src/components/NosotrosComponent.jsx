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
                        <p>{data.contenido}</p>
                        {console.log(data.foto)}
                        <img src={require(`../assets/fts/${data.foto}`)} alt={data.nombre} />
                    </div>
                </div>
            )}
        </>
    );
}
