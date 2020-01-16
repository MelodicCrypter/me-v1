import React from 'react';
import Head from 'next/head';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faRocket } from '@fortawesome/free-solid-svg-icons';

import '../public/sass/main.scss';

library.add(fab, faRocket);

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
