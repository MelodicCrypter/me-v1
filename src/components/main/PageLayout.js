import React from 'react';
import Head from 'next/head';

function PageLayout({ children }) {
    return (
        <>
            <Head>
                <title> </title>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {children}
        </>
    );
}

export default PageLayout;
