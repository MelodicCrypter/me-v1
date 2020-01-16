import React from 'react';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';

const AppLayout = props => {
    return (
        <section id="app" className="hero is-info is-fullheight">
            <AppHeader />
            <main id="mainWrap">{props.children}</main>
            <AppFooter />
        </section>
    );
};

export default AppLayout;
