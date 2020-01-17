import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AppHeader = props => {
    const toggleMenu = e => {
        document.querySelector('#burger').classList.toggle('is-active');
        document.querySelector('#navbarMenu').classList.toggle('is-active');
    };

    return (
        <header className="hero-head">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="../">
                            <img src="/image/hc_logo.png" alt="Logo" />
                        </a>
                        <span
                            id="burger"
                            className="navbar-burger burger"
                            role="button"
                            aria-label="menu"
                            aria-expanded="false"
                            data-target="navbarMenu"
                            onClick={toggleMenu}
                        >
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                            <span aria-hidden="true"></span>
                        </span>
                    </div>
                    <div id="navbarMenu" className="navbar-menu">
                        <div className="navbar-end">
                            <span className="navbar-item">
                                <a className="button is-white is-outlined" href="#">
                                    <span className="icon">
                                        <FontAwesomeIcon icon="envelope" color="#0a8bea" />
                                    </span>
                                    <span>Contact</span>
                                </a>
                            </span>
                            <span className="navbar-item">
                                <a className="button is-white is-outlined" href="#">
                                    <span className="icon">
                                        <FontAwesomeIcon icon="rocket" color="#0a8bea" />
                                    </span>
                                    <span>Resume</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default AppHeader;
