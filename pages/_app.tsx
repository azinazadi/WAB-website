import localFont from '@next/font/local'
import '@/styles/globals.scss'
import type {AppProps} from 'next/app'

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
    return (
        <div className={isi.className}>
            <Component {...pageProps} />
        </div>)
}
