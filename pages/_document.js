/* eslint-disable react/no-danger */
import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import { GA_TRACKING_ID } from '../lib/gtag';

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const sheet = new ServerStyleSheet();
        const originalRenderPage = ctx.renderPage;

        try {
            ctx.renderPage = () =>
                originalRenderPage({
                    enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
                });

            const initialProps = await Document.getInitialProps(ctx);
            return {
                ...initialProps,
                styles: (
                    <>
                        {initialProps.styles}
                        {sheet.getStyleElement()}
                    </>
                ),
            };
        } finally {
            sheet.seal();
        }
    }

    render() {
        return (
            <Html>
                <Head>
                    {/* Global Site Tag (gtag.js) - Google Analytics */}
                    <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`} />
                    <script
                        dangerouslySetInnerHTML={{
                            __html: `
                                window.dataLayer = window.dataLayer || [];
                                function gtag(){dataLayer.push(arguments);}
                                gtag('js', new Date());
                                gtag('config', '${GA_TRACKING_ID}', {
                                page_path: window.location.pathname,
                                });
                            `,
                        }}
                    />
                    <script
                        async
                        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9384385373624840"
                        crossOrigin="anonymous"
                    ></script>
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Overpass:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap"
                        rel="stylesheet"
                    />
                    <meta name="description" content="Helping you craft the lifestyle of your dreams" />
                    <meta property="og:site_name" content="Eat Live Wander" />
                    <meta name="title" property="og:title" content="Eat Live Wander" />
                    <meta property="og:title" content="Eat Live Wander" />
                    <meta property="og:type" content="website" />
                    <meta property="og:description" content="Helping you craft the lifestyle of your dreams" />
                    <meta
                        name="description"
                        property="og:description"
                        content="Helping you craft the lifestyle of your dreams"
                    />
                    <meta
                        property="og:image"
                        content="https://wndr.click/wp-content/uploads/2021/05/eat-live-wander-square-logo-800x800-1.jpg"
                    />
                    <meta property="og:image:alt" content="Eat Live Wander" />
                    <meta property="og:url" content="https://EatLiveWander.com" />
                    <meta name="twitter:site" content="@eatlivewander" />
                    <meta name="twitter:title" content="Eat Live Wander" />
                    <meta name="twitter:description" content="Helping you craft the lifestyle of your dreams" />
                    <meta
                        name="twitter:image"
                        content="https://wndr.click/wp-content/uploads/2021/05/eat-live-wander-square-logo-800x800-1.jpg"
                    />
                    <meta name="twitter:card" content="summary_large_image" />
                    <meta name="twitter:site" content="https://EatLiveWander.com" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}
