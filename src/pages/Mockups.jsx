import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import style from '../modulos_css/Mockups.module.css'


/*import imagenes */
import i1 from '../assets/mockups/1.png';
import i2 from '../assets/mockups/2.png';
import i3 from '../assets/mockups/3.png';
import i4 from '../assets/mockups/4.png';
import w1 from '../assets/mockups/w1.png';
import w2 from '../assets/mockups/w2.png';
import w3 from '../assets/mockups/w3.png';
import w4 from '../assets/mockups/w4.png';
import i6 from '../assets/mockups/i6.png';
import i7 from '../assets/mockups/i7.png';
import i8 from '../assets/mockups/i8.png';
import i9 from '../assets/mockups/i9.png';
import w6 from '../assets/mockups/w6.png';
import w7 from '../assets/mockups/w7.png';
import w8 from '../assets/mockups/w8.png';
import w9 from '../assets/mockups/w9.png';


export const Mockups = () => {
    return (
        <>
            <div className="container">
                <div className={style.container_img}>
                    <Carousel>
                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={i1}
                                alt="vista - Inicio"
                            />

                            <Carousel.Caption>

                                <h3>vista - Inicio</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={i2}
                                alt="Vista - Menu"
                            />

                            <Carousel.Caption>
                                <h3>Vista - Menu</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={i3}
                                alt="Third slide"
                            />

                            <Carousel.Caption>
                                <h3>Vista - Acerca de</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={i4}
                                alt="Vista - Footer"
                            />

                            <Carousel.Caption>
                                <h3>Vista - Footer</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={w1}
                                alt="Vista - Footer"
                            />

                            <Carousel.Caption>
                                <h3>Wireframe - Inicio</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={w2}
                                alt="Vista - Footer"
                            />

                            <Carousel.Caption>
                                <h3>Wireframe - Menu</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={w3}
                                alt="Vista - Footer"
                            />

                            <Carousel.Caption>
                                <h3>Wireframe - Acerca de</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={w4}
                                alt="Vista - Footer"
                            />
                            <Carousel.Caption>
                                <h3>Wireframe - Footer</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={i6}
                                alt="Vista - Footer"
                            />
                            <Carousel.Caption>
                                <h3>Vista - Inicio (Celulares))</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={i7}
                                alt="Vista - Footer"
                            />
                            <Carousel.Caption>
                                <h3>Vista - Menu (Celulares))</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={i8}
                                alt="Vista - Footer"
                            />
                            <Carousel.Caption>
                                <h3>Vista - Acerca de (Celulares)</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={i9}
                                alt="Vista - Footer"
                            />
                            <Carousel.Caption>
                                <h3>Vista - Footer (Celulares)</h3>
                            </Carousel.Caption>
                        </Carousel.Item>


                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={w6}
                                alt="Wireframe - Footer"
                            />
                            <Carousel.Caption>
                                <h3>Wireframe - Inicio (Celulares))</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={w7}
                                alt="Vista - Footer"
                            />
                            <Carousel.Caption>
                                <h3>Wireframe - Menu (Celulares))</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={w8}
                                alt="Vista - Footer"
                            />
                            <Carousel.Caption>
                                <h3>Wireframe - Acerca de (Celulares)</h3>
                            </Carousel.Caption>
                        </Carousel.Item>

                        <Carousel.Item>
                            <img
                                className="d-block w-100"
                                src={w9}
                                alt="Vista - Footer"
                            />
                            <Carousel.Caption>
                                <h3>Wireframe - Footer (Celulares)</h3>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>

            </div>
        </>
    )
}
