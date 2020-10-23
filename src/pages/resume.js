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
                                        href="/data/Hugh_Caluscusin_Fullstack_JavaScript_Developer_new.pdf"
                                    >
                                        <span className="icon">
                                            <IoMdCodeDownload size={22} />
                                        </span>
                                        <span>Download</span>
                                    </a>

                                    <a
                                        className="button is-white is-outlined is-sm"
                                        href="/data/Hugh_Caluscusin_Fullstack_JavaScript_Developer_new.pdf"
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
                                            Zone 6.., Download or Print the resume in order to view
                                            the whole information
                                        </h6>
                                    </span>

                                    <br />

                                    <span>
                                        <h6 className="title is-r-t-7">
                                            <TiPhoneOutline color="grey" size={13} /> Phone
                                        </h6>
                                        <h6 className="subtitle is-r-7">Download to view</h6>
                                    </span>

                                    <br />

                                    <span>
                                        <h6 className="title is-r-t-7">
                                            <TiMail size={14} color="grey" /> Email
                                        </h6>
                                        <h6 className="subtitle is-r-7">Download to view</h6>
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

                                <br />
                                <br />

                                <div className="side-info">
                                    <p className="is-size-4 has-text-weight-medium has-text-blue">
                                        Interests
                                    </p>

                                    <br />

                                    <span>
                                        {/*<h6 className="title is-r-t-7">*/}
                                        {/*    <TiHomeOutline color="grey" size={12} /> Address*/}
                                        {/*</h6>*/}
                                        <h6 className="subtitle is-r-7">
                                            Songwriting, Music Prod., Table Tennis, Fisbee
                                        </h6>
                                    </span>

                                    <br />
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
                                            Passionate and dedicated Full-Stack JavaScript
                                            developer. Skilled in ES6+, NodeJS and ReactJS (NextJS
                                            and Gatsby), eager to join your team to provide both
                                            frontend and backend solutions to your projects and
                                            products.
                                        </p>
                                    </span>
                                </div>

                                <br />
                                <br />

                                <div className="body-profession employment">
                                    <p className="is-size-4 has-text-weight-medium has-text-blue">
                                        Employment History
                                    </p>

                                    <br />

                                    <span>
                                        <p className="has-text-weight-medium is-size-6 is-r-b-t1-7">
                                            Full Stack Engineer, GlobalSignin, Pte Ltd
                                        </p>
                                        <h6 className="title is-r-b-t2-7">
                                            May 2020 - Aug 2020 &nbsp; &nbsp;{' '}
                                            <span className="is-7">
                                                <TiLocationOutline color="grey" size={12} />{' '}
                                                Singapore, (Homebased Philippines)
                                            </span>
                                        </h6>
                                        <span className="employment-mini-list">
                                            <h6 className="subtitle is-r-b-s-7">
                                                - Helped in building the admin part of the whole
                                                application
                                            </h6>
                                            <h6 className="subtitle is-r-b-s-7">
                                                - Improved code base by implementing linting and
                                                structure
                                            </h6>
                                            <h6 className="subtitle is-r-b-s-7">
                                                - Created a complex Component inside the admin
                                            </h6>
                                            <h6 className="subtitle is-r-b-s-7">
                                                - Implemented customized HandsOnTable-based
                                                component
                                            </h6>
                                            <h6 className="subtitle is-r-b-s-7">
                                                - Provided support during live online events
                                            </h6>
                                        </span>
                                    </span>

                                    <br />
                                    <p className="custom-break-10"> </p>

                                    <span>
                                        <p className="has-text-weight-medium is-size-6 is-r-b-t1-7">
                                            Web/App Developer, Freelancing
                                        </p>
                                        <h6 className="title is-r-b-t2-7">
                                            Jan 2015 - Present &nbsp; &nbsp;{' '}
                                            <span className="is-7">
                                                <TiLocationOutline color="grey" size={12} /> UK and
                                                Cebu, Philipines
                                            </span>
                                        </h6>
                                        <span className="employment-mini-list-title">
                                            Project: WordLocker
                                        </span>
                                        <span className="employment-mini-list">
                                            <h6 className="subtitle is-r-b-s-7">
                                                - Created a PWA (Progressive Web App) from scratch
                                            </h6>
                                            <h6 className="subtitle is-r-b-s-7">
                                                - Implemented using Firebase API for the
                                                authentication and data
                                            </h6>
                                        </span>

                                        <p className="custom-break-30"> </p>

                                        <span className="employment-mini-list-title">
                                            Project: LezDressUp
                                        </span>
                                        <span className="employment-mini-list">
                                            <h6 className="subtitle is-r-b-s-7">
                                                - Built a custom WordPress e-commerce site for a
                                                fashion blogger from UK
                                            </h6>
                                            <h6 className="subtitle is-r-b-s-7">
                                                - Customized front page with the client's
                                                color-specific requests
                                            </h6>
                                            <h6 className="subtitle is-r-b-s-7">
                                                - Integrated and configured WooCommerce for the
                                                e-commerce aspect
                                            </h6>
                                            <h6 className="subtitle is-r-b-s-7">
                                                - Created more than 10 pages with multiple custom
                                                blog post types
                                            </h6>
                                        </span>
                                    </span>

                                    <br />
                                    <p className="custom-break-10"> </p>

                                    <span>
                                        <p className="has-text-weight-medium is-size-6 is-r-b-t1-7">
                                            Web Developer, Rose Institute
                                        </p>
                                        <h6 className="title is-r-b-t2-7">
                                            Dec 2012 - Dec 2013 &nbsp; &nbsp;{' '}
                                            <span className="is-7">
                                                <TiLocationOutline color="grey" size={12} /> Cebu,
                                                Philippines
                                            </span>
                                        </h6>
                                        <span className="employment-mini-list">
                                            <h6 className="subtitle is-r-b-s-7">
                                                - Designed and developed their company website from
                                                scratch
                                            </h6>
                                            <h6 className="subtitle is-r-b-s-7">
                                                - Maintained the website with updates fro the
                                                contents
                                            </h6>
                                            <h6 className="subtitle is-r-b-s-7">
                                                - Set up email redirects to the manager when
                                                customers send inquiries
                                            </h6>
                                        </span>
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
