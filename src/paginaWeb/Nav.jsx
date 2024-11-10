import React from 'react';
import { IoIosHome, IoIosContact } from "react-icons/io"; 
import { FaBook } from "react-icons/fa"; 
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

function Nav() {
  return (
    <div className="container mt-3">
      <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-lg rounded">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/">
                <IoIosHome className="me-2" />
                Inicio
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/contacto">
                <IoIosContact className="me-2" />
                Contacto
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link text-dark fw-bold" to="/servicios">
                <FaBook className="me-2" />
                Servicios
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Nav;












