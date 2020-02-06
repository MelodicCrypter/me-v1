import React from 'react';
import Head from 'next/head';
import { AiOutlinePrinter } from 'react-icons/ai';
import { IoMdCodeDownload } from 'react-icons/io';
import Link from 'next/link';

import DefaultMeta from '../../components/DefaultMeta';

// <HomePage /> Component
const Resume = props => {
    return (
        <>
            <Head>
                <DefaultMeta />
                <meta name="robots" content="noindex, nofollow" />
                <title>Hugh Caluscusin | Fullstack JavaScript Developer | Resume</title>
            </Head>

            <section id="resume" className="hero is-fullheight">
                <div className="hero-head">
                    <div className="columns is-12">
                        <div className="column"></div>

                        <div
                            id="resumeMenu"
                            className="column is-8-widescreen is-9-desktop is-11-tablet is-12-mobile"
                        >
                            <div className="columns is-mobile">
                                <div className="column">
                                    <Link href="/">
                                        <a className="">
                                            <div className="logo-bg">
                                                <img
                                                    src="/image/hc_logo.png"
                                                    alt="Hugh Caluscusin Logo"
                                                />
                                            </div>
                                        </a>
                                    </Link>
                                </div>

                                <div className="column has-text-right">
                                    <a
                                        className="button is-white is-outlined is-sm"
                                        href="mailto:hughcaluscusin@gmail.com"
                                    >
                                        <span className="icon">
                                            <IoMdCodeDownload size={22} />
                                        </span>
                                        <span>Download</span>
                                    </a>

                                    <a
                                        className="button is-white is-outlined is-sm"
                                        href="mailto:hughcaluscusin@gmail.com"
                                    >
                                        <span className="icon">
                                            <AiOutlinePrinter size={19} />
                                        </span>
                                        <span>Print</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="column"></div>
                    </div>
                </div>

                <div className="hero-body">
                    <div className="container resume">
                        <div className="columns is-mobile">
                            <div className="column r-side is-3 is-narrow">
                                <div className="side-image">
                                    <figure className="image is-84x84">
                                        <img className="is-rounded" src="/image/me.jpg" />
                                    </figure>
                                </div>

                                <br />
                                <br />

                                <div className="side-info">
                                    <p className="is-size-4 has-text-weight-medium has-text-blue">
                                        Info
                                    </p>

                                    <br />

                                    <span>
                                        <h6 className="title is-r-t-7">Address</h6>
                                        <h6 className="subtitle is-r-7">
                                            Zone 6, Bascon St., Graceville Homes, Brgy Dumlog, Cebu,
                                            6045, Philippines
                                        </h6>
                                    </span>

                                    <br />

                                    <span>
                                        <h6 className="title is-r-t-7">Phone</h6>
                                        <h6 className="subtitle is-r-7">+639559328520</h6>
                                    </span>

                                    <br />

                                    <span>
                                        <h6 className="title is-r-t-7">Email</h6>
                                        <h6 className="subtitle is-r-7">
                                            hughcaluscusin@gmail.com
                                        </h6>
                                    </span>

                                    <br />

                                    <span>
                                        <h6 className="title is-r-t-7">Portfolio</h6>
                                        <Link href="/">
                                            <a>
                                                <h6 className="subtitle is-r-7">
                                                    www.hughcaluscusin.com
                                                </h6>
                                            </a>
                                        </Link>
                                    </span>
                                </div>

                                <br />
                                <br />

                                <div className="side-skills">
                                    <p className="is-size-4 has-text-weight-medium has-text-blue">
                                        Skills
                                    </p>

                                    <br />

                                    <span>
                                        <h6 className="title is-r-t-7">Languages</h6>
                                        <h6 className="subtitle is-r-7">
                                            JavaScript (ES6+), PHP7+, GraphQL, CSS3/Sass, HTML5,{' '}
                                        </h6>
                                    </span>

                                    <br />

                                    <span>
                                        <h6 className="title is-r-t-7">Frameworks</h6>
                                        <h6 className="subtitle is-r-7">
                                            React, NextJS, CRA, Node/Express, WordPress, WorkBox,
                                            Apollo, GraphQL-Yoga, Prisma, Redux
                                        </h6>
                                    </span>

                                    <br />

                                    <span>
                                        <h6 className="title is-r-t-7">Tools</h6>
                                        <h6 className="subtitle is-r-7">
                                            Git/GitHub, Webpack, CLI, Ngrok, Postman,
                                            ESLint/Prettier, LogRocket
                                        </h6>
                                    </span>
                                </div>
                            </div>

                            <div className="column r-body">
                                <div className="body-name">
                                    <p className="title">Hugh Caluscusin</p>
                                    <p className="subtitle is-size-6">
                                        Full-stack Javascript Developer
                                    </p>
                                </div>

                                <br />
                                <br />
                                <br />

                                <div className="body-profession">
                                    <p className="is-size-4 has-text-weight-medium has-text-blue">
                                        Profile
                                    </p>

                                    <br />

                                    <span>
                                        <p className="is-r-7">
                                            Passionate simply dummy text of the printing and
                                            typesetting industry. Lorem Ipsum has been the
                                            industry's standard dummy text ever since the 1500s,
                                            when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book. It has
                                            survived not only five centuries, but also the leap into
                                            electronic typesetting, remaining essentially unchanged.
                                        </p>
                                    </span>
                                </div>

                                <br />
                                <br />

                                <div className="body-profession">
                                    <p className="is-size-4 has-text-weight-medium has-text-blue">
                                        Employment History
                                    </p>

                                    <br />

                                    <span>
                                        <p className="has-text-weight-medium is-size-5">
                                            Web/App Developer, Freelancing
                                        </p>
                                        <h6 className="title is-r-t-7 is-spaced">
                                            Jan 2015 - Present &nbsp; &nbsp;{' '}
                                            <span className="is-8"> Cebu</span>
                                        </h6>
                                        <h6 className="subtitle is-r-7">
                                            Developed web application for real clients from the
                                            ground up with technologies.
                                        </h6>
                                    </span>
                                </div>

                                <br />
                                <br />

                                <div className="body-profession">
                                    <p className="is-size-4 has-text-weight-medium has-text-blue">
                                        Education
                                    </p>
                                </div>

                                <br />
                                <br />

                                <div className="body-profession">
                                    <p className="is-size-4 has-text-weight-medium has-text-blue">
                                        Interests
                                    </p>
                                </div>

                                <br />
                                <br />

                                <div className="body-profession">
                                    <p className="is-size-4 has-text-weight-medium has-text-blue">
                                        References
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Resume;
