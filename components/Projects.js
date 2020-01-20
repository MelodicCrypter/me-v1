import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { useMediaQuery } from 'react-responsive';

const Projects = ({ delay, data }) => {
    const isFullHD = useMediaQuery({ minWidth: 1408 });
    const isWidescreen = useMediaQuery({ minWidth: 1216, maxWidth: 1407 });
    const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1215 });
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1023 });
    const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 768 });
    const isMobileOrTablet = isMobile || isTablet;
    const isDesktopUp = isDesktop || isWidescreen || isFullHD;

    return (
        <section id="ProjectsComponent" className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column"> </div>

                    <div
                        className={`column ${
                            isMobileOrTablet ? 'is-four-fifths' : 'is-three-quarters'
                        }`}
                    >
                        <Fade delay={delay}>
                            <div className="columns">
                                <div className="column is-narrow">
                                    <div className="headings">
                                        <p className="button is-linkish is-greenish title has-text-left is-6 has-text-weight-semibold">
                                            SOME THINGS I'VE BUILT
                                        </p>
                                    </div>
                                </div>

                                <div className="column">
                                    <div className="columns is-mobile is-multiline">
                                        <div className="column is-full-mobile is-full-tablet is-three-fifths-desktop">
                                            <img src="/image/blistabloc.png" alt="" />
                                            <div className="buttons">
                                                <span className="button is-link is-inverted is-outlined is-greenish is-small">
                                                    Nodeå
                                                </span>
                                                <span className="button is-link is-inverted is-outlined is-small">
                                                    Express
                                                </span>
                                                <span className="button is-link is-inverted is-outlined is-small">
                                                    NextJS
                                                </span>
                                                <span className="button is-link is-inverted is-outlined is-small">
                                                    React
                                                </span>
                                            </div>
                                        </div>
                                        <div className="column">
                                            <p className="is-6 has-text-weight-semibold has-text-left">
                                                Remindah
                                            </p>
                                            <br />
                                            <p className="is-7 has-text-left">
                                                A sample project for testing the site locally. This
                                                was created using some of latest technology anyonce
                                                can find in the planet earth.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Fade>
                    </div>

                    <div className="column"> </div>
                </div>
            </div>
        </section>
    );
};

export default Projects;
