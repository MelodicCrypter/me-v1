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
                            <div className="custom-heading">
                                <p className="button is-linkish is-greenish title has-text-left is-6 has-text-weight-semibold">
                                    SOME THINGS I'VE BUILT
                                </p>
                            </div>

                            {/* Map all projects here */}
                            {data.map(proj => {
                                return (
                                    <div key={proj.title} className="columns">
                                        <div className="column is-narrow">
                                            <div className="headings"></div>
                                        </div>

                                        <div className="column">
                                            <div className="columns is-mobile is-multiline">
                                                <div className="column is-full-mobile is-full-tablet is-three-fifths-desktop">
                                                    <img src={proj.image} alt="" />
                                                    <div className="buttons">
                                                        {proj.techs.map(techName => {
                                                            return (
                                                                <span
                                                                    key={techName}
                                                                    className="button is-link is-inverted is-outlined is-small"
                                                                >
                                                                    {techName}
                                                                </span>
                                                            );
                                                        })}
                                                    </div>
                                                </div>
                                                <div className="column">
                                                    <p className="is-6 has-text-weight-semibold has-text-left">
                                                        {proj.title} &nbsp;{' '}
                                                        <span style={{ color: 'grey' }}>|</span>{' '}
                                                        &nbsp; &nbsp; <span>test</span> &nbsp;{' '}
                                                        <span>test</span>
                                                    </p>
                                                    <br />
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

export default Projects;
