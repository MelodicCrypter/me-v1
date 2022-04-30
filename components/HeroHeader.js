import React from 'react';
import { FaEnvelope, FaRocket } from 'react-icons/fa';
import Link from 'next/link';

const HeroHeader = props => {
    const toggleMenu = e => {
        document.querySelector('#burger').classList.toggle('is-active');
        document.querySelector('#navbarMenu').classList.toggle('is-active');
    };

    return (
        <header className="hero-head">
            <nav className="navbar" role="navigation" aria-label="main navigation">
                <div className="container">
                    <div className="navbar-brand">
                        <a className="navbar-item" href="/">
                            <div className="logo-wrap">
                                <img src="/image/hc_logo-latest.png" alt="Hugh Caluscusin Logo" />
                            </div>
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
                            <span className="burger-span-1" aria-hidden="true"></span>
                            <span className="burger-span-2" aria-hidden="true"></span>
                            <span className="burger-span-3" aria-hidden="true"></span>
                        </span>
                    </div>
                    <div id="navbarMenu" className="navbar-menu">
                        <div className="navbar-end">
                            <span className="navbar-item">
                                <Link href="/resume">
                                    <a className="button is-white is-outlined">
                                        <span className="icon">
                                            <FaRocket />
                                        </span>
                                        <span>Resume</span>
                                    </a>
                                </Link>
                            </span>
                            <span className="navbar-item">
                                <a
                                    className="button is-white is-outlined"
                                    href="mailto:hughcaluscusin@gmail.com"
                                >
                                    <span className="icon">
                                        <FaEnvelope />
                                    </span>
                                    <span>Contact</span>
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default HeroHeader;
