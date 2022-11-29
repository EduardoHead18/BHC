import React from "react";

import { useState, useEffect } from 'react';
import food from '../food.json';
import styles from '../modulos_css/CardsProducts.module.css';


export const CardProducts = () => {

    var allData = Array.from(food['frappes']);
    console.log(allData.map(data => console.log(data.title)));



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
                <div className={styles.title}>Frappes</div>
                <br />
                <div className="row">
                    {
                        allData.map(food =>
                            <>
                                <div className="col-sm-4">
                                    <div className="card shadow p-3 mb-5 bg-white rounded border-0">
                                        <div className="card-body">
                                            <img className="img-fluid rounded" src={require(`../assets/frappes/${food.img}`)} width="" alt={food.name} />
                                            <br /><br />
                                            <h5 className="card-title">{food.name}</h5>
                                            <h5 className="card-title">{`precio: ${food.price} mx`}</h5>
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

