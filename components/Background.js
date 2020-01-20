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
                                    <div className="">
                                        {/*<p className="title is-5">Flexible column</p>*/}
                                        <p className="is-size-6 has-text-left">
                                            This column will take up the remaining space available.
                                            This column will take up the remaining space available.
                                            This column will take up the remaining space available.{' '}
                                        </p>
                                        <br />
                                        <p className="is-size-6 has-text-left">
                                            This column will take up the remaining space available.
                                            This column will take up the remaining space available.
                                            This column will take up the remaining space available.{' '}
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
