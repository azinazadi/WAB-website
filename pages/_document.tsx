import {Html, Head, Main, NextScript} from "next/document";
import {readFileSync} from "fs";
import {join} from "path";
import React, {useEffect} from "react";

class InlineStylesHead extends Head {
    getCssLinks: Head["getCssLinks"] = ({allFiles}) => {
        const {assetPrefix} = this.context;
        if (!allFiles || allFiles.length === 0) return null;
        return allFiles
            .filter((file: any) => /\.css$/.test(file))
            .map((file: any) => (
                <style
                    key={file}
                    nonce={this.props.nonce}
                    data-href={`${assetPrefix}/_next/${file}`}
                    dangerouslySetInnerHTML={{
                        __html: readFileSync(join(process.cwd(), ".next", file), "utf-8"),
                    }}
                />
            ));
    };
}

export default function Document() {
    return (
        <Html lang="de">
            <InlineStylesHead>
                <meta charSet="utf-8"/>
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(lb)}}/>
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(servicesSchema)}}/>
                <script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(product)}}/>
                {/*<script type="application/ld+json" dangerouslySetInnerHTML={{__html: JSON.stringify(businessSchema)}}/>*/}

            </InlineStylesHead>
            <body>
            <a href="#main" id="skipToMain">Skip To main content</a>

            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}

// const businessSchema = {
//     "@context": "https://schema.org",
//     "@type": "LocalBusiness",
//     "url": "https://www.webagenturberlin.com",
//     "logo": "https://www.webagenturberlin.com/logo.svg",
//     "address": {
//         "@type": "PostalAddress",
//         "addressLocality": "Berlin",
//         "streetAddress": "Elsenstr. 12059"
//     },
//     "description": "Webagentur Berlin",
//     "name": "Webagentur Berlin",
// }


const orga = {
    "@type": ["LocalBusiness", "Organization"],
    "@id": "https://webagenturberlin.com/#organization",
    "name": "Webagentur Berlin",
    "url": "https://webagenturberlin.com",
    "email": "kontakt@webagenturberlin.com",
    "priceRange": "1000€ - 10000€",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Elsenstr.",
        "addressLocality": "Berlin",
        "addressRegion": "Berlin",
        "postalCode": "12059",
        "addressCountry": "Deutschland"
    },
    "logo": {
        "@type": "ImageObject",
        "@id": "https://webagenturberlin.com/#logo",
        "url": "https://www.webagenturberlin.com/logo.svg",
        "contentUrl": "https://www.webagenturberlin.com/logo.svg",
        "caption": "Webagentur Berlin",
        "inLanguage": "de-DE",
        "width": "261",
        "height": "261"
    },
    "image": {
        "@type": "ImageObject",
        "@id": "https://webagenturberlin.com/#logo",
        "url": "https://www.webagenturberlin.com/logo.svg",
        "contentUrl": "https://www.webagenturberlin.com/logo.svg",
        "caption": "Webagentur Berlin",
        "inLanguage": "de-DE",
        "width": "261",
        "height": "261"
    },
    "openingHours": ["Monday,Tuesday,Wednesday,Thursday,Friday,Saturday,Sunday 09:00-17:00"],
    "location": {"@id": "https://webagenturberlin.com/#place"},
    // "telephone": "+49 30 36 40 95 40"
};

const lb = {
    "@context":
        "https://schema.org", "@graph":
        [{
            "@type": "Place",
            "@id": "https://webagenturberlin.com/#place",
            "address": {
                "@type": "PostalAddress",
                "streetAddress": "Elsenstr.",
                "addressLocality": "Berlin",
                "addressRegion": "Berlin",
                "postalCode": "12059",
                "addressCountry": "Deutschland"
            }
        }, {
            "@type": "WebSite",
            "@id": "https://webagenturberlin.com/#website",
            "url": "https://webagenturberlin.com",
            "name": "Webagentur Berlin",
            "publisher": {"@id": "https://webagenturberlin.com/#organization"},
            "inLanguage": "de-DE",
        }, {
            "@type": "ImageObject",
            "@id": "https://www.webagenturberlin.com/logo.svg",
            "url": "https://www.webagenturberlin.com/logo.svg",
            "width": "261",
            "height": "261",
            "caption": "Webagentur Berlin - logo",
            "inLanguage": "de-DE"
        }, {
            "@type": "WebPage",
            "@id": "https://webagenturberlin.com/#webpage",
            "url": "https://webagenturberlin.com/",
            "name": "Webagentur Berlin",
            "datePublished": "2023-01-23T12:03:22+01:00",
            "dateModified": "2023-01-25T10:21:35+02:00",
            "about": {"@id": "https://webagenturberlin.com/#organization"},
            "isPartOf": {"@id": "https://webagenturberlin.com/#website"},
            "primaryImageOfPage": {"@id": "https://www.webagenturberlin.com/logo.svg"},
            "inLanguage": "de-DE"
        },
            orga]
}

const servicesSchema = {
    "@context": "https://schema.org/",
    "@type": "Service",
    "serviceType": "Webdesign",
    "provider": orga,
    "areaServed": {
        "@type": "State",
        "name": "Berlin"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Webagentur",
        "itemListElement": [
            {
                "@type": "OfferCatalog",
                "name": "Branding",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Corporate Design"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "UI & UX Design"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Webdesign"
                        }
                    }

                ]
            },


            {
                "@type": "OfferCatalog",
                "name": "Webdevelopment",
                "itemListElement": [
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Web Development"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Suchmaschinenoptimierung"
                        }
                    },
                    {
                        "@type": "Offer",
                        "itemOffered": {
                            "@type": "Service",
                            "name": "Barrierefreiheit"
                        }
                    }

                ]
            },
        ]
    }
}

const product = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "Webdesign",
    "image": "http://webagenturberlin.com/logo.svg",
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "worstRating": "1",
        "ratingCount": "20"
    },
    "offers": {
        "@type": "AggregateOffer",
        "url": "",
        "priceCurrency": "EUR",
        "lowPrice": "1000",
        "highPrice": "20000"
    },
    "reviews": [
        {
            "@type": "Review",
            "reviewBody": "2lekjrwker",
            "author": {
                "@type": "Person",
                "name": "rejl"
            },
            "name": "wwelj",
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": "4"
            }
        }
    ]
}
