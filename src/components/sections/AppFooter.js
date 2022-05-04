import React from 'react';
import { FaHeart, FaEnvelope, FaLinkedin, FaGithub, FaMedium, FaNpm } from 'react-icons/fa';

// Social Media icons size
const smSize = 16;

const AppFooter = (props) => {
    return (
        <footer className="footer">
            <div className="footer-divider"> </div>

            <div className="columns ">
                <div className="column"> </div>

                <div className="column is-two-thirds">
                    <div className="level">
                        <div className="level-left">
                            <div className="level-item">
                                <p className="is-6 has-text-weight-medium">
                                    Crafted with <FaHeart color="red" /> by{' '}
                                    <a href="/Users/hughcaluscusin/TeamCaluscusin Dropbox/Hugh Caluscusin/My Mac (hughs-mbp)/Documents/MC Web Development/MC Dev React/NextJS/me-v1/me-v1/public">
                                        Hugh Calucusin
                                    </a>{' '}
                                    &nbsp;
                                    <span className="has-text-weight-bold">
                                        {new Date().getFullYear().toString().trim()}
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="level-right">
                            <p className="level-item">
                                <div className="social-media">
                                    <a
                                        href="mailto:hughcaluscusin@gmail.com"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                        className="sm-start"
                                    >
                                        <FaEnvelope size={smSize} />
                                    </a>
                                    <a
                                        href="src/components/sections/AppFooter"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <FaLinkedin size={smSize} />
                                    </a>
                                    <a
                                        href="https://github.com/MelodicCrypter"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <FaGithub size={smSize} />
                                    </a>
                                    <a
                                        href="https://medium.com/@hughcaluscusin"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <FaMedium size={smSize} />
                                    </a>
                                    <a
                                        href="https://www.npmjs.com/~melodic_crypter"
                                        rel="noopener noreferrer"
                                        target="_blank"
                                    >
                                        <FaNpm size={smSize} />
                                    </a>
                                </div>
                            </p>
                        </div>
                    </div>
                </div>

                <div className="column"> </div>
            </div>
        </footer>
    );
};

export default AppFooter;
