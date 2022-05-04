import React from 'react';
import Fade from 'react-reveal/Fade';
import { useMediaQuery } from 'react-responsive';

const Background = ({ delay }) => {
    const isFullHD = useMediaQuery({ minWidth: 1408 });
    const isWidescreen = useMediaQuery({ minWidth: 1216, maxWidth: 1407 });
    const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1215 });
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1023 });
    const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 768 });
    const isMobileOrTablet = isMobile || isTablet;

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
                        <Fade delay={delay}>
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
                                            Thank you for scrolling and reading this part 😊. So,
                                            yeah, I'm a{' '}
                                            <span className="is-accent-white">
                                                Full-stack JavaScript Developer
                                            </span>{' '}
                                            based in the Philippines. I have a{' '}
                                            <span className="is-accent-white">BS</span> degree in IT
                                            and an <span className="is-accent-white"> MSc </span>
                                            degree in Computing and Information Systems.
                                        </p>
                                        <br />
                                        <p className="is-size-6 has-text-left is-body-text-2">
                                            In a nutshell, I work on the backend and frontend
                                            aspects of a project or web application. Most of the
                                            projects I've worked on were using React, Node, GraphQL,
                                            and Apollo to name a few. Recently, I also started
                                            delving in to Blockchain technology and was able to work
                                            for a company as a dApp developer. Moreover, I love to
                                            create new things through technology, especially things
                                            that are really helpful to people. But, as much as I
                                            can, I do not reinvent the wheel, I utilize existing
                                            technology and tools in order to produce high-quality
                                            applications.
                                        </p>
                                        <br />
                                        <p className="is-size-6 has-text-left is-body-text-2">
                                            <span className="is-accent-white">
                                                When I'm not in front of a computer screen,
                                            </span>{' '}
                                            I'm probably playing table tennis or frisbee. Out with
                                            my wife and daughter, or most probably I am writing,
                                            recording, or editing songs; since I am also a{' '}
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
