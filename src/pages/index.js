import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import scrollToComponent from 'react-scroll-to-component';
import styled, { keyframes } from 'styled-components';
import Fade from 'react-reveal/Fade';
import { Waypoint } from 'react-waypoint';
import { bounce } from 'react-animations';
import { FaEnvelope, FaLinkedin, FaGithub, FaMedium, FaNpm } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { AiOutlineVerticalAlignTop } from 'react-icons/ai';

import DefaultMeta from '../../components/DefaultMeta';
import HeroLayout from '../../components/HeroLayout';
import Background from '../../components/Background';
import Skills from '../../components/Skills';
import Experience from '../../components/Experience';
import Projects from '../../components/Projects';
import OtherProjects from '../../components/OtherProjects';
import AppFooter from '../../components/AppFooter';
import { works, projects, otherProjects, skills } from '../../public/data/mine';

// Bounce Animation
const Bounce = styled.div`
    animation: 3s ${keyframes`${bounce}`} infinite;
`;

// Social Media icons size
const smSize = 16;

// <HomePage /> Component
const HomePage = props => {
    // State if to show auto scroll-to-top or not
    const [range, setRange] = useState('');
    // For clicking the arrow down/top
    const backgroundRef = useRef();
    const heroRef = useRef();

    // Hanlde clicks
    const handleArrowClick = target => {
        if (target === 'arrow-down') {
            scrollToComponent(backgroundRef.current, {
                offset: 0,
                align: 'top',
                duration: 800,
                ease: 'inCirc',
            });
        } else {
            scrollToComponent(heroRef.current, {
                offset: -200,
                align: 'top',
                duration: 500,
                ease: 'inCirc',
            });
        }
    };

    return (
        <>
            <Head>
                <DefaultMeta />
                <meta name="robots" content="index, follow" />
                <title>Hugh Caluscusin | Fullstack JavaScript Developer</title>
            </Head>

            <HeroLayout>
                <div className="hero-body" ref={heroRef}>
                    <div className="container has-text-centered">
                        <div className="column is-6 is-offset-3">
                            <div className="me image">
                                <img
                                    className="is-rounded"
                                    src="/image/me-new.jpg?nf_resize=smartcrop&w=400&h=400"
                                    alt="Hugh Caluscusin"
                                />
                            </div>

                            <Fade ssrFadeout left cascade>
                                <h1 className="title">Hugh Caluscusin</h1>
                            </Fade>

                            <div className="social-media">
                                <a
                                    href="mailto:hughcaluscusin@gmail.com"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="has-tooltip-info has-tooltip-bottom sm-start"
                                    data-tooltip="Email"
                                >
                                    <FaEnvelope size={smSize} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/hughcaluscusin/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="has-tooltip-info has-tooltip-bottom"
                                    data-tooltip="LinkedIn Account"
                                >
                                    <FaLinkedin size={smSize} />
                                </a>
                                <a
                                    href="https://github.com/MelodicCrypter"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="has-tooltip-info has-tooltip-bottom"
                                    data-tooltip="GitHub Account"
                                >
                                    <FaGithub size={smSize} />
                                </a>
                                <a
                                    href="https://medium.com/@hughcaluscusin"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="has-tooltip-info has-tooltip-bottom"
                                    data-tooltip="Medium Account"
                                >
                                    <FaMedium size={smSize} />
                                </a>
                                <a
                                    href="https://www.npmjs.com/~melodic_crypter"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="has-tooltip-info has-tooltip-bottom"
                                    data-tooltip="NPM Account"
                                >
                                    <FaNpm size={smSize} />
                                </a>
                            </div>

                            <h2 className="subtitle">
                                Hi! 👋 I'm a{' '}
                                <span className="field has-text-weight-medium">
                                    Full-stack JavaScript Developer
                                </span>{' '}
                                based in the Philippines 🇵🇭.{' '}
                                <br
                                    className="is-hidden-mobile is-hidden-tablet-only
                                    is-hidden-desktop-only"
                                />
                                I build high-quality websites and applications (sometimes
                                Command-Line Interfaces). Currently, I'm delving into learning new
                                technologies.
                            </h2>

                            <div id="arrow-down" onClick={e => handleArrowClick('arrow-down')}>
                                <Bounce>
                                    <MdKeyboardArrowDown size={50} />
                                </Bounce>
                            </div>
                        </div>
                    </div>
                </div>
            </HeroLayout>

            <section ref={backgroundRef}>
                <Background delay={580} />
            </section>

            <section>
                <Skills delay={360} data={skills} />
            </section>

            <Waypoint
                onEnter={({ previousPosition, currentPosition }) => {
                    // do something useful!
                    currentPosition === 'inside' ? setRange('inside') : '';
                }}
                onLeave={({ previousPosition, currentPosition }) => {
                    currentPosition === 'below' ? setRange('below') : '';
                }}
            />

            <section>
                <Experience delay={360} data={works} />
            </section>

            <Fade delay={360}>
                <Link href="/resume">
                    <a>
                        <div className="is-divider" data-content=" VIEW RESUME 🏹"></div>
                    </a>
                </Link>
            </Fade>

            <section>
                <Projects delay={360} data={projects} />
            </section>

            <section>
                <OtherProjects delay={360} data={otherProjects} />
            </section>

            {range === 'inside' ? (
                <div id="scrollToTop" onClick={e => handleArrowClick('arrow-top')}>
                    <span>
                        <AiOutlineVerticalAlignTop size={20} />
                    </span>
                </div>
            ) : (
                <div></div>
            )}

            <AppFooter />
        </>
    );
};

export default HomePage;
