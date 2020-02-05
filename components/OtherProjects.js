import React from 'react';
import Fade from 'react-reveal/Fade';
import { useMediaQuery } from 'react-responsive';

import ProjectHeader from './ProjectHeader';

const OtherProjects = ({ delay, data }) => {
    const isFullHD = useMediaQuery({ minWidth: 1408 });
    const isWidescreen = useMediaQuery({ minWidth: 1216, maxWidth: 1407 });
    const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1215 });
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1023 });
    const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 768 });
    const isMobileOrTablet = isMobile || isTablet;
    const isDesktopUp = isDesktop || isWidescreen || isFullHD;

    return (
        <section id="OtherProjectsComponent" className="section">
            <div className="container">
                <div className="columns is-centered">
                    <div className="column"> </div>

                    <div
                        className={`column ${
                            isMobileOrTablet ? 'is-four-fifths' : 'is-three-quarters'
                        }`}
                    >
                        <Fade delay={delay}>
                            <div className="custom-heading">
                                <p className="button is-linkish is-greenish title has-text-left is-6 has-text-weight-semibold">
                                    OTHER CRAFT
                                </p>
                            </div>

                            {/* Map all other projects here */}
                            {data.map(proj => {
                                return (
                                    <div key={proj.title} className="columns">
                                        <div className="column is-narrow">
                                            <div className="headings"></div>
                                        </div>

                                        <div className="column">
                                            <div className="columns is-mobile is-multiline">
                                                <div className="column">
                                                    <ProjectHeader
                                                        title={proj.title}
                                                        link={proj.link}
                                                        priv={proj.priv}
                                                        github={proj.github}
                                                        visibility="null"
                                                        toggler={() => {}}
                                                    />

                                                    <p className="is-7 has-text-left is-body-text-2">
                                                        {proj.details}
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

export default OtherProjects;
