import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { AiOutlinePrinter } from 'react-icons/ai';
import { IoMdCodeDownload } from 'react-icons/io';
import { InfinitySpin } from 'react-loader-spinner';

// Components
import DefaultMeta from '../components/sections/DefaultMeta';

function Resume() {
    const [frameLoaded, setFrameLoaded] = useState(false);

    const onIframeLoadHandler = (e) => {
        setFrameLoaded(true);
    };

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
                        <div className="column" />

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
                                                    src="/image/hc_logo-latest.png"
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
                                        href="/data/HughCaluscusin-Resume-Latest.pdf"
                                    >
                                        <span className="icon">
                                            <IoMdCodeDownload size={22} />
                                        </span>
                                        <span>Download</span>
                                    </a>

                                    <a
                                        className="button is-white is-outlined is-sm"
                                        href="/data/HughCaluscusin-Resume-Latest.pdf"
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

                        <div className="column" />
                    </div>
                </div>

                <div id="ResumeWrap">
                    {!frameLoaded && (
                        <div id="Loader">
                            <InfinitySpin color="grey" />
                        </div>
                    )}
                    <div className={`main-body ${!frameLoaded ? 'not-loaded' : ''}`}>
                        <iframe
                            loading="lazy"
                            onLoad={(e) => onIframeLoadHandler(e)}
                            style={{
                                position: 'absolute',
                                width: '100%',
                                height: '100%',
                                top: 0,
                                left: 0,
                                border: 'none',
                                padding: 0,
                                margin: 0,
                            }}
                            src="https://www.canva.com/design/DAE_L6rW5MY/view?embed"
                            allowFullScreen="allowfullscreen"
                            allow="fullscreen"
                        />
                    </div>
                    <div id="ResumeOverlay" />
                </div>
            </section>
        </>
    );
}

export default Resume;
