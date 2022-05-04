import React from 'react';

import HeroHeader from './HeroHeader';

const HeroLayout = ({ children }) => {
    return (
        <section id="HeroLayout" className="hero is-info is-fullheight">
            <HeroHeader />

            {/* Hero Body */}
            {children}

            {/*  Hero Footer  */}
        </section>
    );
};

export default HeroLayout;
