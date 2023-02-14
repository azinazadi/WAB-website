import Head from 'next/head'
import Image from 'next/image';
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import React from "react";
import MediaText from "components/media_text";
import refs from "@/public/images/referenzen.png";
import refsmob from "@/public/images/referenzenmob.png";

export default function Home() {
    return (
        <>
            <header className="c80 spring">
                <Link href="/" aria-label="Home" className="reveal" style={{"--counter": "1"} as React.CSSProperties}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="403" height="42" fill="none" viewBox="0 0 403 42">
                        <path fill="#000"
                              d="m39.3 1.8-5.7 17.3-5.9-17.3h-5.8L16 19 10.4 1.8h-9l-.5.7L12.5 33h5.8l6.5-17 6.6 17H37L48.8 2.5l-.5-.7h-9ZM72 23l.2-2.2a12 12 0 0 0-3.4-9 12.7 12.7 0 0 0-9.2-3.4c-4 0-7 1.2-9.5 3.5a12 12 0 0 0-3.7 9.1c0 3.7 1.2 6.7 3.8 9 2.5 2.4 5.7 3.6 9.7 3.6 4.8 0 8.4-1.4 11-4.3v-.6l-4-3.9h-.6a8 8 0 0 1-5.8 2.2c-2.8 0-4.8-1.4-5-4H72Zm-12.7-8.3c1.1 0 2 .4 2.7 1.1.6.6 1 1.4 1.1 2.3h-7.7c.4-2.3 1.7-3.4 3.9-3.4ZM90.2 8.4c-1.9 0-3.7.5-5.5 1.4V.7L84 .3l-8.7.9V33H83v-2.3a10 10 0 0 0 7.2 2.9c3.4 0 6.3-1.2 8.5-3.6 2.3-2.5 3.4-5.5 3.4-9 0-3.6-1-6.6-3.4-9a11.2 11.2 0 0 0-8.5-3.6Zm-4.7 16c-.8-1-1.2-2-1.2-3.4 0-1.3.4-2.5 1.2-3.4a4 4 0 0 1 3.1-1.3 4 4 0 0 1 3.1 1.3c.8 1 1.2 2 1.2 3.4 0 1.3-.4 2.5-1.2 3.3a4 4 0 0 1-3 1.4 4 4 0 0 1-3.2-1.4ZM115.7 8.4c-1.7 0-3.4.3-5.3.8-1.8.5-3.4 1.2-4.8 2.2v.7l2.9 4.5h.6a8.5 8.5 0 0 1 5.1-1.6c1.3 0 2.5.3 3.4.8 1 .6 1.4 1.3 1.4 2.2v.7c-1.9-.6-3.6-1-5-1-3.2 0-5.7.8-7.6 2.4a7.3 7.3 0 0 0-2.8 6c0 2.2.8 4 2.6 5.4 1.7 1.4 4 2 6.9 2 2.7 0 5.1-.8 7.2-2.4V33h7.4V18.7c0-3.8-1.5-6.6-3.9-8.2-2.3-1.5-5-2-8-2Zm-.1 19.7c-2 0-3.3-1-3.3-2.6 0-1.5 1.3-2.6 3.3-2.6 1.2 0 2.4.3 3.6.9v1.1a3 3 0 0 1-1 2.2c-.6.6-1.5 1-2.6 1ZM149 10.9a11.4 11.4 0 0 0-7.2-2.5c-3.2 0-5.9 1-8 3.2a10.9 10.9 0 0 0-3.2 8A10.9 10.9 0 0 0 141.8 31c2.1 0 4.1-.6 6-1.7v1.4c0 1.2-.6 2.2-1.6 2.8a7 7 0 0 1-3.8 1 10 10 0 0 1-4-.8 9.9 9.9 0 0 1-3.3-2.2h-.6l-3.5 4.8v.6a15 15 0 0 0 11.3 4.3c4.2 0 7.6-1 10.1-3.2 2.6-2.2 3.9-5.2 3.9-9.2V9h-7.4v1.9Zm-8 12c-.8-.8-1.2-2-1.2-3.2 0-1.3.4-2.4 1.2-3.3a4 4 0 0 1 3.1-1.3 4 4 0 0 1 3.1 1.3c.8.9 1.2 2 1.2 3.3 0 1.3-.4 2.4-1.2 3.2a4 4 0 0 1-3 1.3A4 4 0 0 1 141 23ZM185 23l.2-2.2a12 12 0 0 0-3.4-9 12.7 12.7 0 0 0-9.2-3.4c-4 0-7 1.2-9.5 3.5a12 12 0 0 0-3.7 9.1c0 3.7 1.2 6.7 3.8 9 2.5 2.4 5.7 3.6 9.7 3.6 4.8 0 8.4-1.4 11-4.3v-.6l-4-3.9h-.6a8 8 0 0 1-5.8 2.2c-2.8 0-4.8-1.4-5.1-4H185Zm-12.7-8.3c1 0 2 .4 2.7 1.1.6.6 1 1.4 1.1 2.3h-7.7c.4-2.3 1.7-3.4 3.9-3.4ZM203.4 8.4A9 9 0 0 0 196 12V9h-7.7v24h9.4V19.7c0-2 1.2-3.4 3.1-3.4 2 0 3.2 1.4 3.2 3.4V33h9.4V19c0-3.1-1-5.7-2.8-7.6-1.9-2-4.3-3-7.2-3ZM233.4 24.9c-.7.5-1.4.8-2.2.8-1.6 0-2.4-1-2.4-2.9v-7h6.9V9h-6.9V1.6l-.7-.5-8.6 1V9h-4.2v6.7h4.2V24c0 3.2 1 5.6 3 7.2 1.9 1.7 4.2 2.5 7 2.5a11 11 0 0 0 6.7-2l.3-.8-2.5-5.6-.6-.3ZM253.8 22.4c0 2-1.1 3.3-2.9 3.3-1.8 0-2.9-1.4-2.9-3.3V9h-9.4v14c0 3.2 1 5.8 2.8 7.7 1.9 2 4.3 2.9 7.2 2.9 2.9 0 5.2-1 7-3.2V33h7.6V9h-9.4v13.4ZM286.6 9.3c-1.3-.6-2.8-.9-4.4-.9-2.7 0-5 1.3-6.8 3.8V9h-7.6v24h9.4V20.5c0-2.5 1.8-4.2 4.5-4.2 1.2 0 2.2.2 3 .6l.6-.4 1.8-6.5-.5-.7ZM307.5 20.8c1.4.4 2.5 1.2 3.3 2.2.8 1 1.2 2.2 1.2 3.6 0 1.9-.7 3.4-2.2 4.6A8.8 8.8 0 0 1 304 33h-8.5V9.6h8c2.5 0 4.3.5 5.6 1.6 1.3 1 2 2.5 2 4.5 0 1.1-.4 2.2-1 3-.6 1-1.5 1.6-2.6 2.1Zm-3.7-9.6h-6.5v9h6.7c1.6 0 2.9-.5 3.8-1.2a4 4 0 0 0 1.4-3.3c0-1.5-.5-2.6-1.4-3.3-1-.8-2.3-1.2-4-1.2Zm-6.5 20.2h6.8c1.9 0 3.4-.4 4.4-1.3 1-.9 1.6-2 1.6-3.6 0-1.5-.5-2.6-1.6-3.5-1-.9-2.5-1.3-4.2-1.3h-7v9.7ZM332 9.6v1.6h-13.3v9.2h10.6V22h-10.6v9.4H332V33h-15.1V9.6H332ZM353 16.2c0 1.7-.4 3.1-1.3 4.2a6.8 6.8 0 0 1-4.1 2.2l5.3 10.2-.1.2H351l-5.3-10.2h-7.3V33h-1.8V9.6h8.7c2.4 0 4.3.6 5.7 1.8a6 6 0 0 1 2 4.8Zm-14.6-5v10h7.3c1.7 0 3-.4 4-1.4 1-1 1.5-2.1 1.5-3.6s-.5-2.7-1.5-3.6c-1-1-2.3-1.4-4-1.4h-7.3ZM359.8 31.4h12V33H358V9.6h1.8v21.8ZM375.3 33V9.6h1.9V33h-1.9ZM400.2 29.8V9.6h1.8v23.8h-1l-15.5-20.2V33h-1.8V9.6h1l15.5 20.2Z"/>
                    </svg>
                </Link>
                <nav>
                    <ul>
                        <li>
                            <a href="#projekte" className="btn reveal" style={{"--counter": "1"} as React.CSSProperties}>Projekte</a>
                        </li>
                        <li>
                            <a href="#leistungen" className="btn reveal" style={{"--counter": "1.7"} as React.CSSProperties}>Leistungen</a>
                        </li>
                        <li>
                            <a href="#überuns" className="btn reveal" style={{"--counter": "2.3"} as React.CSSProperties}>Über uns</a>
                        </li>
                        <li>
                            <a href="#kontakt" className="btn primary kontakt reveal" style={{"--counter": "1"} as React.CSSProperties}>Kontakt</a>
                        </li>
                    </ul>
                </nav>

            </header>

            <main id="main">
                <div className="c40 hero mt-xxlg">
                    <svg className="hallo mb-md" style={{height: "var(--spc-xxlg)"}} xmlns="http://www.w3.org/2000/svg"
                         fill="none" viewBox="0 0 233 74">
                        <path fill="#000"
                              d="M54.9 7v66H44.1V7h10.8ZM11.5 7v66H.8V7h10.7Zm38 28v9.2H6.2V35h43.3Zm50.3 5.9c0-3.3-.9-5.9-2.8-7.7a10 10 0 0 0-7.5-2.8c-3 0-5.5.7-7.7 2.1a12.2 12.2 0 0 0-4.7 6.8l-9-3.8a18 18 0 0 1 7.4-9.8C79.3 23.2 84.1 22 90 22c4 0 7.6.7 10.6 2 3.1 1.3 5.5 3.2 7.2 5.8 1.8 2.6 2.7 6 2.7 10v22.3c0 2.5 1.3 3.7 3.7 3.7 1.2 0 2.4-.2 3.5-.5l-.6 7.4c-1.5.7-3.4 1.1-5.8 1.1-2 0-4-.4-5.8-1.1-1.6-.8-3-2-4-3.5-.9-1.6-1.4-3.6-1.4-5.9v-.7l2.2-.1c-.6 2.6-1.8 4.8-3.7 6.5-1.8 1.7-4 3-6.5 3.8a24.2 24.2 0 0 1-16-.3c-2.4-1-4.4-2.5-5.9-4.5-1.4-2-2-4.6-2-7.6 0-3.7 1.1-6.8 3.5-9.2 2.5-2.4 6-4 10.4-4.9l19.4-3.8V50l-14.2 2.9c-2.8.5-4.9 1.3-6.3 2.3a5 5 0 0 0-2 4.4c0 1.9.6 3.4 2 4.5 1.5 1 3.4 1.6 5.8 1.6a19 19 0 0 0 4.8-.6c1.6-.4 3-1 4.3-1.9 1.3-1 2.3-2.1 3-3.5.7-1.5 1-3.2 1-5.2V40.9Zm37-40.4V59c0 2.5.5 4.2 1.4 5.1.8 1 2.3 1.4 4.3 1.4 1.2 0 2.2 0 3-.2.8-.2 2-.5 3.2-1l-1.2 8c-1.2.5-2.5 1-4 1.2-1.4.3-2.9.5-4.3.5-4.5 0-7.8-1.1-10-3.4-2-2.3-3-5.9-3-10.7V.5h10.7Zm29.7 0V59c0 2.5.5 4.2 1.3 5.1.9 1 2.3 1.4 4.3 1.4 1.2 0 2.2 0 3-.2.9-.2 2-.5 3.2-1l-1.2 8c-1.1.5-2.4 1-3.9 1.2-1.4.3-3 .5-4.4.5-4.4 0-7.7-1.1-9.9-3.4-2-2.3-3-5.9-3-10.7V.5h10.6Zm41 21.5c4.8 0 9.1 1 12.9 3.1 3.7 2 6.6 5 8.7 9 2.1 3.9 3.2 8.5 3.2 13.9s-1 10-3.2 14c-2 3.9-5 6.8-8.7 8.9-3.8 2-8 3.1-13 3.1-4.8 0-9-1-12.8-3.1-3.8-2-6.7-5-8.8-8.9a29 29 0 0 1-3.2-14c0-5.4 1-10 3.2-13.9 2.1-4 5-7 8.8-9 3.7-2 8-3.1 12.9-3.1Zm0 8.4c-3 0-5.6.7-7.7 2.1a13 13 0 0 0-4.8 5.9 24 24 0 0 0-1.7 9.6c0 3.7.5 7 1.7 9.6 1.1 2.6 2.7 4.6 4.8 6 2.1 1.3 4.7 2 7.7 2s5.5-.7 7.6-2c2-1.4 3.6-3.4 4.8-6 1.1-2.7 1.7-5.9 1.7-9.6 0-3.8-.6-7-1.7-9.6a13 13 0 0 0-4.8-5.9c-2-1.4-4.6-2.1-7.6-2.1Z"/>
                    </svg>
                    <h1>
                        Wir sind Webagentur Berlin. Wir helfen Ihnen, die Chancen des digitalen Wandels zu nutzen und
                        einen bedeutungsvollen Unterschied im Leben von ihrem Publikum zu machen.
                    </h1>
                </div>

                <div className="c80 gapped-sections">
                    <MediaText
                        img="/images/cases/house of resources berlin.png"
                        header="House of resources Berlin"
                        text="Verein Webseite"
                    />
                    <MediaText
                        img="/images/cases/Seebrücke.png"
                        header="Seebrücke"
                        text="politische Bewegung"
                    />
                    <MediaText
                        img="/images/cases/neue deutsche organisationen.png"
                        header="neue deutsche organisationen"
                        text="Verein Webseite"
                    />
                </div>
                <div style={{background: "var(--bg10)"}} className="gapped-sections">
                    <div className="c40">
                        <h2>Über uns</h2>
                        <p className="big">
                            Wir entwickeln Brands und Websites für gute Organisationen. Aber in Wirklichkeit sorgen wir
                            dafür, dass Ihre Publikum Sie für was sie stehen halten.
                        </p>
                    </div>
                    <div className="c40">
                        <h2>LEISTUNGEN</h2>
                        <p className="big">
                            Wir entwickeln Brands und Websites für gute Organisationen. Aber in Wirklichkeit sorgen wir
                            dafür, dass Ihre Publikum Sie für was sie stehen halten.
                        </p>
                    </div>
                    <div>
                        <h2 className="c40">REFERENZEN</h2>
                        <p className="big c80">
                            <Image className="show-on desktop wide-desktop"
                                   src={refs}
                                   alt={"Referenzen"}
                            />
                            <Image className="show-on mobile"
                                   src={refsmob}
                                   alt={"Referenzen"}
                            />
                        </p>
                    </div>
                </div>
                <div className="t10 c40">
                    <h2>KONTAKT</h2>
                    <p className="big">
                        Wir freuen uns über jede Anfrage, jedes Lob, jede Anregung und jede konstruktive Kritik.
                    </p>

                    <p className="big">
                        <span className="line">
                            <span className="lbl">TEL:</span>
                            <a href="tel:01788039712" className="colored"> 0178 803 97 12</a>
                        </span>

                        <span className="line">
                            <span className="lbl">MAIL:</span>
                            <a href="mailto:kontakt@webagentur.berlin"
                               className="colored"> kontakt@webagentur.berlin</a>
                        </span>
                    </p>
                </div>

                <footer className="c80 spring grey">
                    <p className="show-on wide-desktop">
                        © WEBAGENTURberlin, alle Rechte vorbehalten
                    </p>

                    <p><a href="/impressum">IMPRESSUM</a> | <a href="#">DATENSCHUTZ</a></p>
                </footer>
            </main>
        </>
    )
}
