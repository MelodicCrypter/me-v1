import React from 'react';
import Fade from 'react-reveal/Fade';
import { useMediaQuery } from 'react-responsive';

import ProjectHeader from './ProjectHeader';

// Current year
const now = new Date();
const year = now.getFullYear();

const Projects = ({ delay, data }) => {
    const isFullHD = useMediaQuery({ minWidth: 1408 });
    const isWidescreen = useMediaQuery({ minWidth: 1216, maxWidth: 1407 });
    const isDesktop = useMediaQuery({ minWidth: 1024, maxWidth: 1215 });
    const isTablet = useMediaQuery({ minWidth: 769, maxWidth: 1023 });
    const isMobile = useMediaQuery({ minWidth: 0, maxWidth: 768 });
    const isMobileOrTablet = isMobile || isTablet;
    const isDesktopUp = isDesktop || isWidescreen || isFullHD;

    const toggleModal = (e) => {
        e.preventDefault();
        document.querySelector('.modal').classList.toggle('is-active');
        document.querySelector('html').classList.toggle('is-clipped');
    };

    const closeModal = (e) => {
        document.querySelector('.modal').classList.remove('is-active');
        document.querySelector('html').classList.remove('is-clipped');
    };

    return (
        <>
            <section id="ProjectsComponent" className="section">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column" />

                        <div
                            className={`column ${
                                isMobileOrTablet ? 'is-four-fifths' : 'is-four-fifths'
                            }`}
                        >
                            <Fade delay={delay}>
                                <div className="custom-heading">
                                    <p className="button is-linkish is-greenish title has-text-left is-6 has-text-weight-semibold">
                                        SOME THINGS I'VE BUILT
                                    </p>
                                </div>

                                {/* Map all projects here */}
                                {data.map((proj) => {
                                    return (
                                        <div key={proj.title} className="columns">
                                            <div className="column is-narrow">
                                                <div className="headings" />
                                            </div>

                                            <div className="column">
                                                <div className="columns is-mobile is-multiline">
                                                    <div className="column is-full-mobile is-full-tablet is-three-fifths-desktop">
                                                        <br className="is-hidden-desktop" />

                                                        <ProjectHeader
                                                            title={proj.title}
                                                            link={proj.link}
                                                            priv={proj.priv}
                                                            github={proj.github}
                                                            visibility="mt"
                                                            toggler={(e) => toggleModal(e)}
                                                        />

                                                        <br className="is-hidden-desktop" />

                                                        <img src={proj.image} alt="" />

                                                        <div className="buttons">
                                                            {proj.techs.map((techName) => {
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
                                                        <ProjectHeader
                                                            title={proj.title}
                                                            link={proj.link}
                                                            priv={proj.priv}
                                                            github={proj.github}
                                                            visibility="dwf"
                                                            toggler={(e) => toggleModal(e)}
                                                        />

                                                        <br className="is-hidden-touch" />

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

                        <div className="column" />
                    </div>
                </div>
            </section>

            <div className="modal">
                <div className="modal-background" onClick={closeModal} />
                <div className="modal-content">
                    <div className="modal-content">
                        <div className="box">
                            <article className="media">
                                <div className="media-left" />
                                <div className="media-content">
                                    <div className="content">
                                        <p className="has-text-grey-dark">
                                            <strong>Hugh Caluscusin </strong>
                                            <small>@MelodicCrypter </small>
                                            <small> {year}</small>
                                            <br />
                                            <br />
                                            Private Repo/Project, but available upon request. Thank
                                            you. 😊
                                        </p>
                                    </div>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
                <button className="modal-close is-large" aria-label="close" onClick={closeModal} />
            </div>
        </>
    );
};

export default Projects;
