import React from 'react';
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import { bounce } from 'react-animations';
import { FaEnvelope, FaLinkedin, FaGithub, FaMedium } from 'react-icons/fa';
import { MdKeyboardArrowDown } from 'react-icons/md';

import AppLayout from '../../components/AppLayout';

// Bounce Animation
const Bounce = styled.div`
    animation: 3s ${keyframes`${bounce}`} infinite;
`;

const HomePage = props => {
    return (
        <>
            <Head>
                <title>Hugh Caluscusin - Fullstack JavaScript Developer</title>
            </Head>

            <AppLayout>
                <div className="hero-body">
                    <div className="container has-text-centered">
                        <div className="column is-6 is-offset-3">
                            <div className="me image">
                                <img
                                    className="is-rounded"
                                    src="/image/me.jpg?nf_resize=smartcrop&w=400&h=400"
                                />
                            </div>

                            <h1 className="title">Hugh Caluscusin</h1>

                            <div className="social-media">
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    className="has-tooltip-info has-tooltip-bottom sm-start"
                                    data-tooltip="Email"
                                >
                                    <FaEnvelope />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    className="has-tooltip-info has-tooltip-bottom"
                                    data-tooltip="LinkedIn Account"
                                >
                                    <FaLinkedin />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    className="has-tooltip-info has-tooltip-bottom"
                                    data-tooltip="GitHub Account"
                                >
                                    <FaGithub />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    className="has-tooltip-info has-tooltip-bottom"
                                    data-tooltip="Medium Account"
                                >
                                    <FaMedium />
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

                            <div id="arrow-down">
                                <Bounce>
                                    <MdKeyboardArrowDown size={50} />
                                </Bounce>
                            </div>

                            {/*<div className="box">*/}
                            {/*    <div className="field is-grouped">*/}
                            {/*        <p className="control is-expanded">*/}
                            {/*            <input*/}
                            {/*                className="input"*/}
                            {/*                type="text"*/}
                            {/*                placeholder="Enter your email"*/}
                            {/*            />*/}
                            {/*        </p>*/}
                            {/*        <p className="control">*/}
                            {/*            <a className="button is-info">Notify Me</a>*/}
                            {/*        </p>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                </div>
            </AppLayout>
        </>
    );
};

export default HomePage;
