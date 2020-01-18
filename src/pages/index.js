import React from 'react';
import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import AppLayout from '../../components/AppLayout';

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
                                    className="button is-primary is-small has-tooltip-info has-tooltip-bottom sm-start"
                                    data-tooltip="Email"
                                >
                                    <FontAwesomeIcon
                                        icon="envelope"
                                        color="#87CD84"
                                        className="iconn"
                                    />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    className="button is-primary is-small has-tooltip-info has-tooltip-bottom"
                                    data-tooltip="LinkedIn Account"
                                >
                                    <FontAwesomeIcon
                                        icon={['fab', 'linkedin']}
                                        color="#87CD84"
                                        className="iconn"
                                    />
                                </a>
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    className="button is-primary is-small has-tooltip-info has-tooltip-bottom"
                                    data-tooltip="GitHub Account"
                                >
                                    <FontAwesomeIcon
                                        icon={['fab', 'github']}
                                        color="#87CD84"
                                        className="iconn"
                                    />
                                </a>
                                <a
                                    href="https://facebook.com"
                                    target="_blank"
                                    className="button is-primary is-small has-tooltip-info has-tooltip-bottom"
                                    data-tooltip="Medium Account"
                                >
                                    <FontAwesomeIcon
                                        icon={['fab', 'medium']}
                                        color="#87CD84"
                                        className="iconn"
                                    />
                                </a>
                            </div>
                            {/*<span className="aka is-size-6">*/}
                            {/*    &lt;a.k.a&gt; Melodic Crypter &lt;/a.k.a&gt;*/}
                            {/*</span>*/}
                            <h2 className="subtitle">
                                Hi! 👋 I'm a{' '}
                                <span className="field has-text-weight-medium">
                                    Full-stack JavaScript Developer
                                </span>{' '}
                                based in Philippines 🇵🇭.{' '}
                                <br className="is-hidden-mobile is-hidden-tablet-only is-hidden-desktop-only" />{' '}
                                I build high-quality websites and applications (
                                <span className="is-italic">sometimes Command-Line Interfaces</span>
                                ). Currently, I'm delving into learning new technologies.
                            </h2>
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
