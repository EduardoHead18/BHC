import '../App.css';
import '../styles/navbar.css';
import lg2 from '../assets/images/lg2.png';
import { Outlet, Link } from "react-router-dom";

export function Navbar() {
    return (
        <main>
            <nav className="navbar navbar-expand-lg navbar-light  bg-light container">

                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <Link className="navbar-brand mt-2 mt-lg-0" to="/">
                        <img src={lg2} height="50" alt="MDB Logo" loading="lazy" />
                    </Link>
                    <div className="navbar-nav">
                        <Link className="nav-item nav-link" to="/">Home</Link>
                        <Link className="nav-item nav-link" to="/menu">Menu</Link>
                        <Link className="nav-item nav-link" to="/acerca">Nosotros</Link>
                        <Link className="nav-item nav-link" to="/mockups">Mockups</Link>
                    </div>
                </div>
            </nav>

            <section>
                <Outlet></Outlet>
            </section>
        </main>

    );
}