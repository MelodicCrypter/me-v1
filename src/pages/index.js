import React, { useRef } from 'react';
import Head from 'next/head';
import scrollToComponent from 'react-scroll-to-component';
import styled, { keyframes } from 'styled-components';
import Fade from 'react-reveal/Fade';
import { bounce } from 'react-animations';
import { FaEnvelope, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

import HeroLayout from '../../components/HeroLayout';
import Background from '../../components/Background';
import AppFooter from '../../components/AppFooter';

// Bounce Animation
const Bounce = styled.div`
    animation: 3s ${keyframes`${bounce}`} infinite;
`;

// Social Media icons size
const smSize = 16;

const HomePage = props => {
    const arrowRef = useRef();

    // Hanlde clicks
    const handleArrowClick = e => {
        scrollToComponent(arrowRef.current, {
            offset: 0,
            align: 'top',
            duration: 600,
            ease: 'inCirc',
        });
    };

    return (
        <>
            <Head>
                <title>Hugh Caluscusin - Fullstack JavaScript Developer</title>
            </Head>

            <HeroLayout>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-6 is-offset-3">
                            <div className="me image">
                                <img
                                    className="is-rounded"
                                    src="/image/me.jpg?nf_resize=smartcrop&w=400&h=400"
                                />
                            </div>

                            <Fade ssrFadeout left cascade>
                                <h1 className="title">Hugh Caluscusin</h1>
                            </Fade>

                            <div className="social-media">
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    className="has-tooltip-info has-tooltip-bottom sm-start"
                                    data-tooltip="Email"
                                >
                                    <FaEnvelope size={smSize} />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    className="has-tooltip-info has-tooltip-bottom"
                                    data-tooltip="LinkedIn Account"
                                >
                                    <FaLinkedin size={smSize} />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    className="has-tooltip-info has-tooltip-bottom"
                                    data-tooltip="GitHub Account"
                                >
                                    <FaGithub size={smSize} />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    className="has-tooltip-info has-tooltip-bottom"
                                    data-tooltip="Medium Account"
                                >
                                    <FaMedium size={smSize} />
                                </a>
                            </div>

                            <h2 className="subtitle">
                                Hi! 👋 I'm a{' '}
                                <span className="field has-text-weight-medium">
                                    Full-stack JavaScript Developer
                                </span>{' '}
                                based in Philippines 🇵🇭.{' '}
                                <br className="is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only" />{' '}
                                I build high-quality websites and applications ( sometimes
                                Command-Line Interfaces ). Currently, I'm delving into learning new
                                technologies.
                            </h2>

                            <div id="arrow-down" onClick={handleArrowClick}>
                                <Bounce>
                                    <MdKeyboardArrowDown size={50} />
                                </Bounce>
                            </div>
                        </div>
                    </div>
                </div>
            </HeroLayout>

            <span ref={arrowRef}>
                <Background />
            </span>

            <AppFooter />
        </>
    );
};

export default HomePage;
