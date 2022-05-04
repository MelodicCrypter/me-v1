import React from 'react';

// <HomePage /> Component
const DefaultMeta = (props) => {
    return (
        <>
            <meta name="title" content="Hugh Caluscusin | Fullstack JavaScript Developer" />
            <meta
                name="description"
                content="Official portfolio site of Hugh Caluscusin, a Fullstack JavaScript Developer based in the Philippines. He builds high-quality Websites and Applications."
            />
            <meta
                name="keywords"
                content="hugh caluscusin, caluscusin, fullstack javascript developer, web developer philippines, melodic crypter, melodiccrypter"
            />
            <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
            <meta name="language" content="English" />
            <meta name="author" content="Hugh Caluscusin" />

            <meta property="og:image:width" content="1200" />
            <meta property="og:image:height" content="630" />
            <meta property="og:title" content="Hugh Caluscusin | Fullstack JavaScript Developer" />
            <meta
                property="og:description"
                content="Official portfolio site of Hugh Caluscusin, a Fullstack JavaScript Developer based in the Philippines. He builds high-quality Websites and Applications."
            />
            <meta property="og:url" content="https://www.hughcaluscusin.com" />
            <meta property="og:image" content="/image/og-hughcaluscusin.png" />

            <link rel="apple-touch-icon" sizes="180x180" href="/public/apple-touch-icon.png" />
            <link rel="icon" type="image/png" sizes="32x32" href="/public/favicon-32x32.png" />
            <link rel="icon" type="image/png" sizes="16x16" href="/public/favicon-16x16.png" />
            <link rel="manifest" href="/public/site.webmanifest" />
            <link rel="mask-icon" href="/public/safari-pinned-tab.svg" color="#222b70" />
            <meta name="msapplication-TileColor" content="#050a30" />
            <meta name="theme-color" content="#050a30" />
        </>
    );
};

export default DefaultMeta;
