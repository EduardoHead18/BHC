//import '../App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Nosotros } from "./pages/Nosotros";
import { Home } from "./pages/Home";
import { Menu } from "./pages/Menu";
import { Mockups } from "./pages/Mockups";


export function App() {
    return (
        <>
   
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navbar></Navbar>}>
                    <Route index element={<Home/>}></Route>
                    <Route path='/menu' element={<Menu/>}></Route>
                    <Route path='/acerca' element={<Nosotros></Nosotros>}></Route>
                    <Route path='/mockups' element={<Mockups/>}></Route>
                    <Route path="*" element={<div>Error 404</div>}></Route>
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}