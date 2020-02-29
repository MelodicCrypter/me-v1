import React from 'react';
import Fade from 'react-reveal/Fade';
import { useMediaQuery } from 'react-responsive';

const Background = props => {
    const isFullHD = useMediaQuery({ minWidth: 1408 });
    const isWidescreen = useMediaQuery({ minWidth: 1216, maxWidth: 1407 });
    const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1215 });
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1023 });
    const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 768 });
    const isMobileOrTablet = isMobile || isTablet;
    const isDesktopUp = isDesktop || isWidescreen || isFullHD;

    return (
        <section id="BackgroundComponent" className="section">
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
                                    <div className="button is-linkish headings has-text-left">
                                        <p className="title has-text-left is-greenish is-6 has-text-weight-semibold">
                                            BACKGROUND
                                        </p>
                                    </div>
                                </div>
                                <div className="column">
                                    <div className="is-body-text">
                                        <p className="is-size-6 has-text-left is-body-text-2">
                                            Hello! I'm Hugh, a{' '}
                                            <span className="is-accent-white">PHP-dev</span> turned
                                            <span className="is-accent-white">
                                                &nbsp; Full-stack JavaScript Developer
                                            </span>{' '}
                                            based in the Philippines. I have a{' '}
                                            <span className="is-accent-white">BS</span> degree in IT
                                            and a <span className="is-accent-white"> MSc </span>
                                            degree in Computing and Information Systems.
                                        </p>
                                        <br />
                                        <p className="is-size-6 has-text-left is-body-text-2">
                                            Right now, I am working as a Freelance Web App
                                            Developer.{' '}
                                            <span className="is-accent-white">
                                                Being a freelancer,
                                            </span>{' '}
                                            it has taught me lot of things especially in handling
                                            clients and how to be responsible in managing time and
                                            projects. Regarding technology and tools, I do not
                                            reinvent the wheel but I utilize them in order to
                                            produce high-quality applications. For an instance,
                                            instead of building this site using plain Vanilla JS,
                                            HTML & CSS from scratch, I used NextJS for components
                                            and routing stuff, and Bulma for class-based styling.
                                        </p>
                                        <br />
                                        <p className="is-size-6 has-text-left is-body-text-2">
                                            <span className="is-accent-white">
                                                When I'm not in front of a computer screen,
                                            </span>{' '}
                                            I'm probably playing table tennis or frisbee. Out with
                                            my wife and daughter, or most probably I am writing and
                                            editing songs - I am also a{' '}
                                            <span className="is-accent-white">music producer.</span>
                                        </p>
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

export default Background;
