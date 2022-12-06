import React from "react";

import food from '../food.json';
import styles from '../modulos_css/CardsProducts.module.css';


export const PostresComponent = () => {

    var postres = Array.from(food['postres']);
    console.log(postres.map(data => console.log(data.name)));

    return (
        <>
            <div className="container">
                <br /><br />
                <div className={styles.title3}>Postres</div>
                <br />
                <div className="row">
                    {
                        postres.map(postres =>
                            <>
                                <div className="col-sm-4" key={food.id}>
                                    <div className="card shadow p-3 mb-5 bg-white rounded border-0">
                                        <div className="card-body">
                                            <div className={styles.imagenes}>  <img className="img-fluid rounded" src={require(`../assets/postres/${postres.img}`)} width="" alt={food.name} /></div>
                                            <br /><br />
                                            <h5 className="card-title">{postres.name}</h5>
                                            <h5 className="card-title text-secondary">{`precio: ${postres.price} mx`}</h5>
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

