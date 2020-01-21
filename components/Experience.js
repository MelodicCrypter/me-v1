import React, { useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { useMediaQuery } from 'react-responsive';

const Experience = ({ delay, data }) => {
    const isFullHD = useMediaQuery({ minWidth: 1408 });
    const isWidescreen = useMediaQuery({ minWidth: 1216, maxWidth: 1407 });
    const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1215 });
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1023 });
    const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 768 });
    const isMobileOrTablet = isMobile || isTablet;
    const isDesktopUp = isDesktop || isWidescreen || isFullHD;

    return (
        <section id="ExperienceComponent" className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column"> </div>

                    <div
                        className={`column ${
                            isMobileOrTablet ? 'is-four-fifths' : 'is-two-thirds'
                        }`}
                    >
                        <Fade delay={delay}>
                            <div className="custom-heading">
                                <p className="button is-linkish is-greenish title has-text-left is-6 has-text-weight-semibold">
                                    EXPERIENCE
                                </p>
                            </div>

                            {/* Map all past employment or experiences here */}
                            {data.map(work => {
                                return (
                                    <div key={work.company} className="columns">
                                        <div className="column is-narrow">
                                            <div className="headings"></div>
                                        </div>
                                        <div className="column">
                                            <div className="columns is-mobile">
                                                <div className="column is-half-mobile is-three-fifths-tablet is-two-thirds-desktop">
                                                    <p
                                                        className={`
                                                    has-text-left has-text-weight-semibold 
                                                    ${isMobileOrTablet ? 'is-8' : 'is-7'}
                                                `}
                                                    >
                                                        {work.company}
                                                    </p>

                                                    <p
                                                        className={`
                                                    is-7 has-text-left is-body-text 
                                                    ${isMobileOrTablet ? 'is-8' : 'is-7'}
                                                `}
                                                    >
                                                        {work.role}
                                                    </p>
                                                </div>

                                                {!isMobileOrTablet && (
                                                    <div className="column"></div>
                                                )}

                                                <div className="column is-half-mobile is-half-tablet">
                                                    <p
                                                        className={`
                                                    is-7 has-text-left 
                                                    ${isMobileOrTablet ? 'is-8' : 'is-7'}
                                                `}
                                                    >
                                                        {work.duration}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </Fade>
                    </div>

                    <div className="column"> </div>
                </div>
            </div>
        </section>
    );
};

export default Experience;
