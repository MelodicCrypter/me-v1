import React from 'react';

// <HomePage /> Component
const DefaultMeta = props => {
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
            <meta property="og:url" content="http://www.hughcaluscusin.com" />
            <meta property="og:image" content="/image/og-hughcaluscusin.png" />
        </>
    );
};

export default DefaultMeta;
