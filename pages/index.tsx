import Image from 'next/image';
// import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import React from "react";
import MediaText from "components/media_text";
import refs from "@/public/images/referenzen.png";
import refsmob from "@/public/images/referenzenmob.png";
import Nav from "@/components/navi";
import hor from "@/public/images/house of resources berlin.png";
import sb from "@/public/images/Seebrücke.png";
import ndo from "@/public/images/neue deutsche organisationen.png"

export default function Home() {
    return (
        <>
            <Nav></Nav>
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
                        img={hor}
                        header="House of resources Berlin"
                        text="Verein Webseite"
                    />
                    <MediaText
                        img={sb}
                        header="Seebrücke"
                        text="politische Bewegung"
                    />
                    <MediaText
                        img={ndo}
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

                    <p><Link href="/impressum">IMPRESSUM</Link> | <Link href="#">DATENSCHUTZ</Link></p>
                </footer>
            </main>
        </>
    )
}
