import React from 'react';
import { FaHeart } from 'react-icons/fa';

const AppFooter = props => {
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
                                    <a href="/">Hugh Calucusin</a> &nbsp;
                                    <span className="has-text-weight-bold">
                                        {new Date()
                                            .getFullYear()
                                            .toString()
                                            .trim()}
                                    </span>
                                </p>
                            </div>
                        </div>

                        <div className="level-right">
                            <p className="level-item">
                                <ul className="is-flex is-6 has-text-weight-medium">
                                    <li>Media</li>
                                    <li>Links</li>
                                    <li>Placeholder</li>
                                </ul>
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
