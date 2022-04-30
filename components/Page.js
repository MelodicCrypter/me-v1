import React from 'react';
import Head from 'next/head';

import '../public/sass/main.scss';

const Page = props => {
    return (
        <>
            <Head>
                <title> </title>
                <meta charSet="utf-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
            </Head>

            {props.children}
        </>
    );
};

export default Page;
