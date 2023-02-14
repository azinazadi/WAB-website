import localFont from '@next/font/local'
import '@/styles/globals.scss'
import type {AppProps} from 'next/app'
import {useEffect} from "react";
import Head from "next/head";

// Font files can be colocated inside of `pages`
const isi = localFont({
    src: [
        {
            path: '../fonts/r.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: '../fonts/sb.woff2',
            weight: '600',
            style: 'normal',
        }
    ]
});

export default function App({Component, pageProps}: AppProps) {
    useEffect(() => {
        function handleScroll() {
            document.body.classList.toggle("scrolled", document.body.scrollTop > 20 || document.documentElement.scrollTop > 20);
            document.body.classList.remove("initial");
        }

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    return (
        <>
            <Head>
                <title>Webagentur Berlin</title>
                <meta name="description" content="Webagentur Berlin"/>
                <meta name="viewport" content="width=device-width, initial-scale=1"/>

                <link rel="manifest" href="/site.webmanifest"/>
                <link rel="apple-touch-icon" href="/apple-touch-icon.png"/>

                <link rel="icon" href="/favicon.ico"/>

                <meta name="theme-color" media="(prefers-color-scheme: light)" content="#FDCEDE"/>
                <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#EB477E"/>

                <meta property="og:title" content=""/>
                <meta property="og:type" content=""/>
                <meta property="og:url" content=""/>
                <meta property="og:image" content=""/>

            </Head>

            <div className={isi.className}>
                <Component {...pageProps} />
            </div>
        </>)
}
