import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import img1 from '../assets/frappes/frappe.png';

import '../styles/ContainerProducts.module.css'
import styles from '../styles/ContainerProducts.module.css'
import { useState, useEffect } from 'react';

export const CardProducts = () => {
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
         <div className="container" >

                                <Row>
                                <div className="post-card shadow-none p-3 mb-5 bg-light rounded"></div>
                                <div className={styles.title}><h1 className="text-3xl font-bold underline">ok</h1></div>
                                <Col xs={12} md={12} lg={4}>
                                    <Card style={{ width: '18rem '  }}>
                                        <Card.Img variant="top" src={img1} />
                                        <Card.Body>
                                            <Card.Title>lol</Card.Title>
                                            <Card.Title>  ok</Card.Title>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>

            </div>
           
        </>
    );
}

