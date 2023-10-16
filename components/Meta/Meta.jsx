import React from 'react';
import Head from 'next/head';

const Meta = ({ meta }) => {
    if (meta) {
        return (
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/branding/solidprinciples.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/branding/solidprinciples.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/branding/solidprinciples.png" />
                <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#111111" />
                <meta name="msapplication-TileColor" content="#111111" />
                <meta name="theme-color" content="#111111" />

                {meta.pageTitle ? <title>{meta.pageTitle}</title> : null}

                {meta.description ? <meta name="description" content={meta.description} key="description" /> : null}

                {meta.keywords ? <meta name="keywords" content={meta.keywords} key="keywords" /> : null}

                {meta.author ? <meta name="author" content={meta.author} key="author" /> : null}

                <meta property="og:type" content="website" key="property" />

                {meta.og_title ? <meta name="og:title" property="og:title" content={meta.og_title} key="og_title" /> : null}

                {meta.og_description ? <meta name="og:description" property="og:description" content={meta.og_description} key="og_description" /> : null}

                {meta.og_image ? <meta name="og:image" property="og:image" content={meta.og_image} key="og_image" /> : null}

                {meta.og_url ? <meta name="og:url" property="og:url" content={meta.og_url} key="og_url" /> : null}

                <meta name="twitter:card" content="summary" key="twitter_card" />

                {meta.twitter_title ? <meta name="twitter:title" content={meta.twitter_title} key="twitter_title" /> : null}

                {meta.twitter_description ? <meta name="twitter:description" content={meta.twitter_description} key="twitter_description" /> : null}

                {meta.canonical ? <link rel="canonical" href={meta.canonical} /> : null}
            </Head>
        );
    }
    return null;
};

Meta.defaultProps = {
    meta: {
        pageTitle: '',
        og_title: '',
        twitter_title: '',
        keywords: '',
        author: '',
        description: '',
        og_description: '',
        twitter_description: '',
        og_image: '', 
        og_url: '',
        canonical: '',
    },
};



export default Meta;
