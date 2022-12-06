import React from "react";

import { useState, useEffect } from 'react';
import food from '../food.json';
import styles from '../modulos_css/CardsProducts.module.css';
import { DesayunosComponent } from "./DesayunosComponent";


export const Frappes = () => {

    var frappes = Array.from(food['frappes']);
    console.log(frappes.map(data => console.log(data.name)));

    

    /* 
        //api
    const [data, setData] = useState([]);
    const url = 'https://pokeapi.co/api/v2/ability/?limit=5';
    useEffect(()=>{
        fetch(url)
        .then((response)=>response.json())
        .then(data=>{
            var res = (data['results'].name);
            console.log(data['results'][1].name)
            console.log('ok')
            console.log('prueba')
            setData(data);
        });
    },[])
    
    */
    return (
        <>
            <div className="container">
                <br /><br />
                <div className={styles.title}>Frappes
                </div>
                <br />
                <div className="row">
                    {
                        frappes.map(frappes =>
                            <>
                                <div className="col-sm-4" key={food.id}>
                                    <div className="card shadow p-3 mb-5 bg-white rounded border-0">
                                        <div className="card-body">
                                            <div className={styles.imagenes}> <img className="img-fluid rounded" src={require(`../assets/frappes/${frappes.img}`)} width="" alt={food.name} /></div>
                                            <br /><br />
                                            <h5 className="card-title">{frappes.name}</h5>
                                            <h5 className="card-title text-secondary">{`precio: ${frappes.price} mx`}</h5>
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

