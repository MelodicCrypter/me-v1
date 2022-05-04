import React, { useState, useEffect } from 'react';
import App from 'next/app';

// Components
import PageLayout from '../components/main/PageLayout';

// Styles
import '../../styles/main.scss';

function MyApp({ Component, pageProps }) {
    const [showChild, setShowChild] = useState(false);

    useEffect(() => {
        setShowChild(true);
    }, []);

    if (!showChild) return null;

    if (typeof window === 'undefined') return <span> </span>;

    return (
        <PageLayout>
            <Component {...pageProps} />
        </PageLayout>
    );
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);

    return { ...appProps };
};

export default MyApp;
