import React, { useRef, useState } from 'react';
import Head from 'next/head';
import scrollToComponent from 'react-scroll-to-component';
import Fade from 'react-reveal/Fade';
import { Waypoint } from 'react-waypoint';

// <HomePage /> Component
const DefaultMeta = props => {
    return (
        <>
            <meta name="title" content="Hugh Caluscusin | Fullstack Javascript Developer" />
            <meta
                name="description"
                content="Official portfolio site of Hugh Caluscusin, a Fullstack Javascript Developer based in the Philippines. He builds high-quality Websites and Applications"
            />
            <meta
                name="keywords"
                content="hugh caluscusin, caluscusin, fullstack javascript developer, web developer philippines, melodic crypter, melodiccrypter"
            />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="author" content="Hugh Caluscusin" />
        </>
    );
};

export default DefaultMeta;
