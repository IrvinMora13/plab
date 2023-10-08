import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../views/Home/Home";
import Events from "../views/Events/Events";
import Carrers from "../views/Careers/Carrers";
import Contact from "../views/Contact/Contact";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Eventos" element={<Events />} />
            <Route path="/Carreras" element={<Carrers />} />
            <Route path="/Contactos" element={<Contact />} />
            {/* Otras rutas aquí */}
        </Routes>
    );
}

export default AppRoutes;
