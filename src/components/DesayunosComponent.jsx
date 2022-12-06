import React from "react";

import food from '../food.json';
import styles from '../modulos_css/CardsProducts.module.css';


export const DesayunosComponent = () => {

    var desayunos = Array.from(food['desayunos']);
    console.log(desayunos.map(data => console.log(data.name)));

    return (
        <>
            <div className="container">
                <br /><br />
                <div className={styles.title2}>Desayunos</div>
                <br />
                <div className="row">
                    {
                        desayunos.map(desayunos =>
                            <>
                                <div className="col-sm-4" key={food.id}>
                                    <div className="card shadow p-3 mb-5 bg-white rounded border-0">
                                        <div className="card-body">
                                            <div className={styles.imagenes}><img className="img-fluid rounded" height={"20px"} width={"100%"} src={require(`../assets/desayunos/${desayunos.img}`)} alt={food.name} /></div>
                                            <br /><br />
                                            <h5 className="card-title">{desayunos.name}</h5>
                                            <h5 className="card-title text-secondary">{`precio: ${desayunos.price} mx`}</h5>
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    }

                </div>
            </div>

            
        </>
    );
}

