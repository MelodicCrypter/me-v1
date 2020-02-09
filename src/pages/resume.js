import React from 'react';
import Head from 'next/head';
import { AiOutlinePrinter } from 'react-icons/ai';
import { IoMdCodeDownload } from 'react-icons/io';
import {
    TiHomeOutline,
    TiPhoneOutline,
    TiMail,
    TiCodeOutline,
    TiSpannerOutline,
    TiWaves,
    TiDivideOutline,
    TiWeatherCloudy,
    TiZoomOutline,
    TiStarHalfOutline,
    TiLocationOutline,
} from 'react-icons/ti';
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
                                <div className="column left-part">
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

                                <div className="column right-part has-text-right">
                                    <a
                                        download="Hugh Caluscusin - Fullstack JavaScript Developer"
                                        className="button is-white is-outlined is-sm"
                                        href="/data/Hugh_Caluscusin-Fullstack_JavaScript_Developer.pdf"
                                    >
                                        <span className="icon">
                                            <IoMdCodeDownload size={22} />
                                        </span>
                                        <span>Download</span>
                                    </a>

                                    <a
                                        className="button is-white is-outlined is-sm"
                                        href="/data/Hugh_Caluscusin-Fullstack_JavaScript_Developer.pdf"
                                        target="_blank"
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
                                        <img
                                            className="is-rounded"
                                            src="/image/me-new.jpg"
                                            alt="Hugh Caluscusin"
                                        />
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
                                        <h6 className="title is-r-t-7">
                                            <TiHomeOutline color="grey" size={12} /> Address
                                        </h6>
                                        <h6 className="subtitle is-r-7">
                                            Zone 6, Bascon St., Graceville Homes, Brgy Dumlog,
                                            Talisay Cebu, 6045, Philippines
                                        </h6>
                                    </span>

                                    <br />

                                    <span>
                                        <h6 className="title is-r-t-7">
                                            <TiPhoneOutline color="grey" size={13} /> Phone
                                        </h6>
                                        <h6 className="subtitle is-r-7">+639559328520</h6>
                                    </span>

                                    <br />

                                    <span>
                                        <h6 className="title is-r-t-7">
                                            <TiMail size={14} color="grey" /> Email
                                        </h6>
                                        <h6 className="subtitle is-r-7">
                                            hughcaluscusin@gmail.com
                                        </h6>
                                    </span>

                                    <br />

                                    <span>
                                        <h6 className="title is-r-t-7">
                                            <TiCodeOutline color="grey" size={14} /> Portfolio
                                        </h6>
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
                                        <h6 className="title is-r-t-7">
                                            <TiDivideOutline color="grey" size={12} /> Languages
                                        </h6>
                                        <h6 className="subtitle is-r-7">
                                            JavaScript (ES6+), PHP7+, GraphQL, CSS3/Sass, HTML5{' '}
                                        </h6>
                                    </span>

                                    <br />

                                    <span>
                                        <h6 className="title is-r-t-7">
                                            <TiWaves color="grey" size={12} /> Frameworks
                                        </h6>
                                        <h6 className="subtitle is-r-7">
                                            React, NextJS, CRA, Node/Express, WordPress, WorkBox,
                                            Apollo, GraphQL-Yoga, Prisma, Redux
                                        </h6>
                                    </span>

                                    <br />

                                    <span>
                                        <h6 className="title is-r-t-7">
                                            <TiSpannerOutline color="grey" size={12} /> Tools
                                        </h6>
                                        <h6 className="subtitle is-r-7">
                                            Git/GitHub, Webpack, CLI, Ngrok, Postman,
                                            ESLint/Prettier, LogRocket
                                        </h6>
                                    </span>

                                    <br />

                                    <span>
                                        <h6 className="title is-r-t-7">
                                            <TiWeatherCloudy color="grey" size={12} /> Platforms
                                        </h6>
                                        <h6 className="subtitle is-r-7">
                                            Heroku, AWS EC2, Zeit/Now, Netlify, cPanel/Apache
                                        </h6>
                                    </span>

                                    <br />

                                    <span>
                                        <h6 className="title is-r-t-7">
                                            <TiStarHalfOutline color="grey" size={12} /> Design &
                                            Other
                                        </h6>
                                        <h6 className="subtitle is-r-7">
                                            Photoshop, Adobe XD, Wireframing, Jest, Enzyme, MongoDB,
                                            MySQL, PostgreSQL, Firebase, Travis CI
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
                                <br className="is-hidden-touch" />

                                <div className="body-profession">
                                    <p className="is-size-4 has-text-weight-medium has-text-blue">
                                        Profile
                                    </p>

                                    <br />

                                    <span>
                                        <p className="is-r-7">
                                            Dedicated freelance programmer, shifted from being a PHP
                                            developer to become a fullstack JavaScript developer.
                                            More than 3 years of PHP experience and about 2 years of
                                            fullstack JavaScript experience. Skilled in ES6+ and
                                            Node and React (NextJS), eager to join your team to
                                            provide both frontend and backend solutions to your
                                            clients. Able to work in a team or as solo. In freelance
                                            world, proper handling of clients and delivering their
                                            products on time are the main keys, gradually learned
                                            those through the years.
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
                                        <p className="has-text-weight-medium is-size-6 is-r-b-t1-7">
                                            Web/App Developer, Freelancing
                                        </p>
                                        <h6 className="title is-r-b-t2-7">
                                            Jan 2015 - Present &nbsp; &nbsp;{' '}
                                            <span className="is-7">
                                                <TiLocationOutline color="grey" size={12} /> Cebu
                                                Philippines
                                            </span>
                                        </h6>
                                        <h6 className="subtitle is-r-b-s-7">
                                            Build simple to custom web applications with
                                            conventional workflows and technologies.
                                        </h6>
                                    </span>

                                    <br />

                                    <span>
                                        <p className="has-text-weight-medium is-size-6 is-r-b-t1-7">
                                            Web Developer, Rose Institute
                                        </p>
                                        <h6 className="title is-r-b-t2-7">
                                            Dec 2012 - Dec 2013 &nbsp;{' '}
                                            <span className="is-7">
                                                <TiLocationOutline color="grey" size={12} /> Cebu
                                                Philippines
                                            </span>
                                        </h6>
                                        <h6 className="subtitle is-r-b-s-7">
                                            Designed and developed their business website from the
                                            ground up.
                                        </h6>
                                    </span>
                                </div>

                                <br />
                                <br />

                                <div className="body-profession">
                                    <p className="is-size-4 has-text-weight-medium has-text-blue">
                                        Education
                                    </p>

                                    <br />

                                    <span>
                                        <p className="has-text-weight-medium is-size-6 is-r-b-t1-7">
                                            University of South Wales, MSc, Computing & Information
                                            Systems
                                        </p>
                                        <h6 className="title is-r-b-t2-7">
                                            Sep 2016 - Jan 2018 &nbsp;{' '}
                                            <span className="is-7">
                                                <TiLocationOutline color="grey" size={12} />{' '}
                                                Llantwit Road, Treforest, UK
                                            </span>
                                        </h6>
                                    </span>

                                    <br />

                                    <span>
                                        <p className="has-text-weight-medium is-size-6 is-r-b-t1-7">
                                            Informatics Computer Institute, BS, Information
                                            Technology
                                        </p>
                                        <h6 className="title is-r-b-t2-7">
                                            Jan 2009 - Apr 2012 &nbsp;{' '}
                                            <span className="is-7">
                                                <TiLocationOutline color="grey" size={12} /> Cebu,
                                                Philippines
                                            </span>
                                        </h6>
                                    </span>

                                    <br />

                                    <span>
                                        <p className="has-text-weight-medium is-size-6 is-r-b-t1-7">
                                            Systems Technology Institute, AD, Computer & Electronics
                                            Technology
                                        </p>
                                        <h6 className="title is-r-b-t2-7">
                                            Jun 2004 - Mar 2006 &nbsp;{' '}
                                            <span className="is-7">
                                                <TiLocationOutline color="grey" size={12} />{' '}
                                                Dumaguete, Philippines
                                            </span>
                                        </h6>
                                    </span>
                                </div>

                                <br />
                                <br />

                                <div className="body-profession">
                                    <p className="is-size-4 has-text-weight-medium has-text-blue">
                                        References
                                    </p>

                                    <br />

                                    <span>
                                        <h6 className="subtitle is-r-b-s-7">
                                            References avialable upon request.
                                        </h6>
                                    </span>
                                </div>

                                <br />
                                <br />

                                <div className="body-profession">
                                    <p className="is-size-4 has-text-weight-medium has-text-blue">
                                        Interests
                                    </p>

                                    <br />

                                    <span>
                                        <h6 className="subtitle is-r-b-s-7">
                                            Songwriting, Music Production, Table Tennis, Frisbee,
                                            Outdoors, Learning new stuff
                                        </h6>
                                    </span>
                                </div>

                                <br />
                                <br />
                                <br />
                                <br />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Resume;
