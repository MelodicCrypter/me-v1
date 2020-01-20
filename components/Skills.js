import React from 'react';
import Fade from 'react-reveal/Fade';
import { useMediaQuery } from 'react-responsive';

const Skills = props => {
    const isFullHD = useMediaQuery({ minWidth: 1408 });
    const isWidescreen = useMediaQuery({ minWidth: 1216, maxWidth: 1407 });
    const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1215 });
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1023 });
    const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 768 });
    const isMobileOrTablet = isMobile || isTablet;
    const isDesktopUp = isDesktop || isWidescreen || isFullHD;

    return (
        <section id="SkillsComponent" className="section">
            <div className="container">
                <div className="columns">
                    <div className="column"> </div>

                    <div
                        className={`column ${
                            isMobileOrTablet ? 'is-four-fifths' : 'is-two-thirds'
                        }`}
                    >
                        <Fade delay={props.delay}>
                            <div className="columns">
                                <div className="column is-narrow">
                                    <div className="button is-linkish headings">
                                        <p className="title has-text-left is-greenish is-6 has-text-weight-semibold">
                                            SKILLS
                                        </p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="columns is-mobile is-multiline">
                                        <div className="column is-half-mobile is-half-tablet is-one-quarter-desktop">
                                            <p className="is-8 has-text-left has-text-weight-bold">
                                                LANGUAGES
                                            </p>
                                            <div className="content has-text-left">
                                                <ul className="is-7">
                                                    <li>Coffee</li>
                                                    <li>Tea</li>
                                                    <li>Milk</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="column is-half-mobile is-half-tablet is-one-quarter-desktop">
                                            <p className="is-8 has-text-left has-text-weight-bold">
                                                FRAMEWORKS
                                            </p>
                                            <div className="content has-text-left">
                                                <ul className="is-7">
                                                    <li>Coffee</li>
                                                    <li>Tea</li>
                                                    <li>Milk</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="column is-half-mobile is-half-tablet is-one-quarter-desktop">
                                            <p className="is-8 has-text-left has-text-weight-bold">
                                                TOOLS
                                            </p>
                                            <div className="content has-text-left">
                                                <ul className="is-7">
                                                    <li>Coffee</li>
                                                    <li>Milk</li>
                                                    <li>Tea</li>
                                                    <li>Milk</li>
                                                    <li>Milk</li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="column is-half-mobile is-half-tablet is-one-quarter-desktop">
                                            <p className="is-8 has-text-left has-text-weight-bold">
                                                DESIGN
                                            </p>
                                            <div className="content has-text-left">
                                                <ul className="is-7">
                                                    <li>Coffee</li>
                                                    <li>Milk</li>
                                                    <li>Tea</li>
                                                    <li>Milk</li>
                                                </ul>
                                            </div>
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

export default Skills;
