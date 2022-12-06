import React from 'react'
import { Link } from "react-router-dom";

export const FooterComponent = () => {
    return (
        <>
            <footer className="text-center text-lg-start bg-light text-muted">

                <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
                    <div>
                        <a href="·" className="me-4 text-reset">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="as" className="me-4 text-reset">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="as" className="me-4 text-reset">
                            <i className="fab fa-google"></i>
                        </a>
                        <a href="as" className="me-4 text-reset">
                            <i className="fab fa-instagram"></i>
                        </a>
                        <a href="as" className="me-4 text-reset">
                            <i className="fab fa-linkedin"></i>
                        </a>
                        <a href="as" className="me-4 text-reset">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>
                </section>

                <section className="">
                    <div className="container text-center text-md-start mt-5">
                        <div className="row mt-3">
                            <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    <i className="fas fa-gem me-3"></i>Black Honey Café
                                </h6>
                                <p className='text-secondary text-justify fs-6'>
                                    Black Honey Café es una cafetería que se encuentra ubicado en Guadalajara Jalisco, México.
                                </p>

                                <p className='text-secondary text-justify fs-6'>
                                    Av. Plutarco Elias Calles 99, Guadalajara, Jalisco, 44810
                                </p>
                            </div>

                            <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">
                                    Productos
                                </h6>
                                <p className=" text-secondary"><Link className="text-secondary text-decoration-none fs-6" to="/">Inicio</Link></p>
                                <p className=" text-secondary"><Link className="text-secondary text-decoration-none fs-6" to="/menu">Menu</Link></p>
                                <p className=" text-secondary"><Link className="text-secondary text-decoration-none fs-6" to="/acerca">Nosotros</Link></p>
                                

                            </div>

                            <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                                <h6 className="text-uppercase fw-bold mb-4">Contacto</h6>

                                {/** enlaces */}

                                <a href="https://instagram.com/blackhoney_cafe?igshid=NTdlMDg3MTY=" className="text-decoration-none text-secondary" target="_blank">
                                <i class="bi bi-instagram"></i>
                                  Instagram
                                </a>

                                <br /><br />

                                <a href="https://www.facebook.com/CafeBlackHoney?mibextid=ZbWKwL" className="text-decoration-none text-secondary" target="_blank">
                                <i class="bi bi-facebook"></i>
                                  Facebook
                                </a>

                            </div>
                        </div>
                    </div>
                </section>

                <div className="text-center p-4" >
                    © 2021 Copyright: Black Honey Café
                </div>
            </footer>
        </>
    );
}
