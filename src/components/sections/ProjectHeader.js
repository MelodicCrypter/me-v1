import React from 'react';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

// Social Media icons size
const smSize = 20;

const ProjectHeader = ({ title, link, priv, github, visibility, toggler }) => {
    return (
        <p
            className={`is-6 has-text-weight-semibold has-text-left 
                ${visibility === 'mt' ? 'is-hidden-desktop' : ''}
                ${visibility === 'dwf' ? 'is-hidden-touch' : ''}
                ${visibility === 'null' ? '' : ''}
                `}
        >
            {title} &nbsp; <span style={{ color: 'grey' }}>|</span> &nbsp; &nbsp;{' '}
            <span className="crafts-icon">
                <a href={link} rel="noopener noreferrer" target="_blank" className="sm-start">
                    <FaExternalLinkAlt className="is-white" size={smSize} />
                </a>
            </span>{' '}
            &nbsp;{' '}
            <span className="crafts-icon">
                <a
                    href={priv ? '#' : github}
                    rel="noopener noreferrer"
                    target="_blank"
                    className="sm-start"
                    onClick={priv ? toggler : () => {}}
                >
                    <FaGithub size={smSize} />
                </a>
            </span>
        </p>
    );
};

export default ProjectHeader;
