import React from 'react';

import HeroHeader from './HeroHeader';

const HeroLayout = props => {
    return (
        <section id="HeroLayout" className="hero is-info is-fullheight">
            <HeroHeader />

            {/* Hero Body */}
            {props.children}

            {/*  Hero Footer  */}
        </section>
    );
};

export default HeroLayout;
