import Link from "next/link";
import React from "react";

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
            </header>

            <main id="main">
                <div className="c40 mt-lg" dangerouslySetInnerHTML={{ __html: `


<style>
table {
padding: 1rem;
background-color: aliceblue;
}
</style>
                <h1 class="adsimple-312410493">Datenschutzerkl??rung</h1>
<h3 class="mt-xlg" id="einleitung-ueberblick" class="adsimple-312410493">Einleitung und ??berblick</h3>
<p>Wir haben diese Datenschutzerkl??rung (Fassung 14.02.2023-312410493) verfasst, um Ihnen gem???? der Vorgaben der <a class="adsimple-312410493" href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=312410493#d1e2269-1-1" target="_blank" rel="noopener">Datenschutz-Grundverordnung (EU) 2016/679</a> und anwendbaren nationalen Gesetzen zu erkl??ren, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche &#8211; und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) &#8211; verarbeiten, zuk??nftig verarbeiten werden und welche rechtm????igen M??glichkeiten Sie haben. Die verwendeten Begriffe sind geschlechtsneutral zu verstehen.<br />
<strong class="adsimple-312410493">Kurz gesagt:</strong> Wir informieren Sie umfassend ??ber Daten, die wir ??ber Sie verarbeiten.</p>
<p>Datenschutzerkl??rungen klingen f??r gew??hnlich sehr technisch und verwenden juristische Fachbegriffe. Diese Datenschutzerkl??rung soll Ihnen hingegen die wichtigsten Dinge so einfach und transparent wie m??glich beschreiben. Soweit es der Transparenz f??rderlich ist, werden technische <strong class="adsimple-312410493">Begriffe leserfreundlich erkl??rt</strong>, Links zu weiterf??hrenden Informationen geboten und <strong class="adsimple-312410493">Grafiken</strong> zum Einsatz gebracht. Wir informieren damit in klarer und einfacher Sprache, dass wir im Rahmen unserer Gesch??ftst??tigkeiten nur dann personenbezogene Daten verarbeiten, wenn eine entsprechende gesetzliche Grundlage gegeben ist. Das ist sicher nicht m??glich, wenn man m??glichst knappe, unklare und juristisch-technische Erkl??rungen abgibt, so wie sie im Internet oft Standard sind, wenn es um Datenschutz geht. Ich hoffe, Sie finden die folgenden Erl??uterungen interessant und informativ und vielleicht ist die eine oder andere Information dabei, die Sie noch nicht kannten.<br />
Wenn trotzdem Fragen bleiben, m??chten wir Sie bitten, sich an die unten bzw. im Impressum genannte verantwortliche Stelle zu wenden, den vorhandenen Links zu folgen und sich weitere Informationen auf Drittseiten anzusehen. Unsere Kontaktdaten finden Sie selbstverst??ndlich auch im Impressum.</p>
<h3 class="mt-xlg" id="anwendungsbereich" class="adsimple-312410493">Anwendungsbereich</h3>
<p>Diese Datenschutzerkl??rung gilt f??r alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und f??r alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische Anschrift einer Person. Die Verarbeitung personenbezogener Daten sorgt daf??r, dass wir unsere Dienstleistungen und Produkte anbieten und abrechnen k??nnen, sei es online oder offline. Der Anwendungsbereich dieser Datenschutzerkl??rung umfasst:</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">alle Onlineauftritte (Websites, Onlineshops), die wir betreiben</li>
<li class="adsimple-312410493">Social Media Auftritte und E-Mail-Kommunikation</li>
<li class="adsimple-312410493">mobile Apps f??r Smartphones und andere Ger??te</li>
</ul>
<p>
<strong class="adsimple-312410493">Kurz gesagt:</strong> Die Datenschutzerkl??rung gilt f??r alle Bereiche, in denen personenbezogene Daten im Unternehmen ??ber die genannten Kan??le strukturiert verarbeitet werden. Sollten wir au??erhalb dieser Kan??le mit Ihnen in Rechtsbeziehungen eintreten, werden wir Sie gegebenenfalls gesondert informieren.</p>
<h3 class="mt-xlg" id="rechtsgrundlagen" class="adsimple-312410493">Rechtsgrundlagen</h3>
<p>In der folgenden Datenschutzerkl??rung geben wir Ihnen transparente Informationen zu den rechtlichen Grunds??tzen und Vorschriften, also den Rechtsgrundlagen der Datenschutz-Grundverordnung, die uns erm??glichen, personenbezogene Daten zu verarbeiten.<br />
Was das EU-Recht betrifft, beziehen wir uns auf die VERORDNUNG (EU) 2016/679 DES EUROP??ISCHEN PARLAMENTS UND DES RATES vom 27. April 2016. Diese Datenschutz-Grundverordnung der EU k??nnen Sie selbstverst??ndlich online auf EUR-Lex, dem Zugang zum EU-Recht, unter <a class="adsimple-312410493" href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679">https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679</a> nachlesen.</p>
<p>Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:</p>
<ol>
<li class="adsimple-312410493">
<strong class="adsimple-312410493">Einwilligung</strong> (Artikel 6 Absatz 1 lit. a DSGVO): Sie haben uns Ihre Einwilligung gegeben, Daten zu einem bestimmten Zweck zu verarbeiten. Ein Beispiel w??re die Speicherung Ihrer eingegebenen Daten eines Kontaktformulars.</li>
<li class="adsimple-312410493">
<strong class="adsimple-312410493">Vertrag</strong> (Artikel 6 Absatz 1 lit. b DSGVO): Um einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen zu erf??llen, verarbeiten wir Ihre Daten. Wenn wir zum Beispiel einen Kaufvertrag mit Ihnen abschlie??en, ben??tigen wir vorab personenbezogene Informationen.</li>
<li class="adsimple-312410493">
<strong class="adsimple-312410493">Rechtliche Verpflichtung</strong> (Artikel 6 Absatz 1 lit. c DSGVO): Wenn wir einer rechtlichen Verpflichtung unterliegen, verarbeiten wir Ihre Daten. Zum Beispiel sind wir gesetzlich verpflichtet Rechnungen f??r die Buchhaltung aufzuheben. Diese enthalten in der Regel personenbezogene Daten.</li>
<li class="adsimple-312410493">
<strong class="adsimple-312410493">Berechtigte Interessen</strong> (Artikel 6 Absatz 1 lit. f DSGVO): Im Falle berechtigter Interessen, die Ihre Grundrechte nicht einschr??nken, behalten wir uns die Verarbeitung personenbezogener Daten vor. Wir m??ssen zum Beispiel gewisse Daten verarbeiten, um unsere Website sicher und wirtschaftlich effizient betreiben zu k??nnen. Diese Verarbeitung ist somit ein berechtigtes Interesse.</li>
</ol>
<p>Weitere Bedingungen wie die Wahrnehmung von Aufnahmen im ??ffentlichen Interesse und Aus??bung ??ffentlicher Gewalt sowie dem Schutz lebenswichtiger Interessen treten bei uns in der Regel nicht auf. Soweit eine solche Rechtsgrundlage doch einschl??gig sein sollte, wird diese an der entsprechenden Stelle ausgewiesen.</p>
<p>Zus??tzlich zu der EU-Verordnung gelten auch noch nationale Gesetze:</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">In <strong class="adsimple-312410493">??sterreich</strong> ist dies das Bundesgesetz zum Schutz nat??rlicher Personen bei der Verarbeitung personenbezogener Daten (<strong class="adsimple-312410493">Datenschutzgesetz</strong>), kurz <strong class="adsimple-312410493">DSG</strong>.</li>
<li class="adsimple-312410493">In <strong class="adsimple-312410493">Deutschland</strong> gilt das <strong class="adsimple-312410493">Bundesdatenschutzgesetz</strong>, kurz<strong class="adsimple-312410493"> BDSG</strong>.</li>
</ul>
<p>Sofern weitere regionale oder nationale Gesetze zur Anwendung kommen, informieren wir Sie in den folgenden Abschnitten dar??ber.</p>
<h3 class="mt-xlg" id="kontaktdaten-verantwortliche" class="adsimple-312410493">Kontaktdaten des Verantwortlichen</h3>
<p>Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten haben, finden Sie nachfolgend die Kontaktdaten der verantwortlichen Person bzw. Stelle:<br />
<span class="adsimple-312410493" style="font-weight: 400">Musterfirma GbR<br />
Max Mustermann<br />
Musterstra??e 47, 12312 Musterstadt, Deutschland</span>
</p>
<p>E-Mail: <a href="mailto:kontakt@webagenturberlin.com">kontakt@webagenturberlin.com</a>
</p>
<p>Impressum: <a href="/impressum">/impressum</a>
</p>
<h3 class="mt-xlg" id="speicherdauer" class="adsimple-312410493">Speicherdauer</h3>
<p>Dass wir personenbezogene Daten nur so lange speichern, wie es f??r die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist, gilt als generelles Kriterium bei uns. Das bedeutet, dass wir personenbezogene Daten l??schen, sobald der Grund f??r die Datenverarbeitung nicht mehr vorhanden ist. In einigen F??llen sind wir gesetzlich dazu verpflichtet, bestimmte Daten auch nach Wegfall des urspr??ngliches Zwecks zu speichern, zum Beispiel zu Zwecken der Buchf??hrung.</p>
<p>Sollten Sie die L??schung Ihrer Daten w??nschen oder die Einwilligung zur Datenverarbeitung widerrufen, werden die Daten so rasch wie m??glich und soweit keine Pflicht zur Speicherung besteht, gel??scht.</p>
<p>??ber die konkrete Dauer der jeweiligen Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu haben.</p>
<h3 class="mt-xlg" id="rechte-dsgvo" class="adsimple-312410493">Rechte laut Datenschutz-Grundverordnung</h3>
<p>Gem???? Artikel 13, 14 DSGVO informieren wir Sie ??ber die folgenden Rechte, die Ihnen zustehen, damit es zu einer fairen und transparenten Verarbeitung von Daten kommt:</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht dar??ber, ob wir Daten von Ihnen verarbeiten. Sollte das zutreffen, haben Sie Recht darauf eine Kopie der Daten zu erhalten und die folgenden Informationen zu erfahren:
<ul class="adsimple-312410493">
<li class="adsimple-312410493">zu welchem Zweck wir die Verarbeitung durchf??hren;</li>
<li class="adsimple-312410493">die Kategorien, also die Arten von Daten, die verarbeitet werden;</li>
<li class="adsimple-312410493">wer diese Daten erh??lt und wenn die Daten an Drittl??nder ??bermittelt werden, wie die Sicherheit garantiert werden kann;</li>
<li class="adsimple-312410493">wie lange die Daten gespeichert werden;</li>
<li class="adsimple-312410493">das Bestehen des Rechts auf Berichtigung, L??schung oder Einschr??nkung der Verarbeitung und dem Widerspruchsrecht gegen die Verarbeitung;</li>
<li class="adsimple-312410493">dass Sie sich bei einer Aufsichtsbeh??rde beschweren k??nnen (Links zu diesen Beh??rden finden Sie weiter unten);</li>
<li class="adsimple-312410493">die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben haben;</li>
<li class="adsimple-312410493">ob Profiling durchgef??hrt wird, ob also Daten automatisch ausgewertet werden, um zu einem pers??nlichen Profil von Ihnen zu gelangen.</li>
</ul>
</li>
<li class="adsimple-312410493">Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der Daten, was bedeutet, dass wir Daten richtig stellen m??ssen, falls Sie Fehler finden.</li>
<li class="adsimple-312410493">Sie haben laut Artikel 17 DSGVO das Recht auf L??schung (???Recht auf Vergessenwerden???), was konkret bedeutet, dass Sie die L??schung Ihrer Daten verlangen d??rfen.</li>
<li class="adsimple-312410493">Sie haben laut Artikel 18 DSGVO das Recht auf Einschr??nkung der Verarbeitung, was bedeutet, dass wir die Daten nur mehr speichern d??rfen aber nicht weiter verwenden.</li>
<li class="adsimple-312410493">Sie haben laut Artikel 20 DSGVO das Recht auf Daten??bertragbarkeit, was bedeutet, dass wir Ihnen auf Anfrage Ihre Daten in einem g??ngigen Format zur Verf??gung stellen.</li>
<li class="adsimple-312410493">Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches nach Durchsetzung eine ??nderung der Verarbeitung mit sich bringt.
<ul class="adsimple-312410493">
<li class="adsimple-312410493">Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e (??ffentliches Interesse, Aus??bung ??ffentlicher Gewalt) oder Artikel 6 Abs. 1 lit. f (berechtigtes Interesse) basiert, k??nnen Sie gegen die Verarbeitung Widerspruch einlegen. Wir pr??fen danach so rasch wie m??glich, ob wir diesem Widerspruch rechtlich nachkommen k??nnen.</li>
<li class="adsimple-312410493">Werden Daten verwendet, um Direktwerbung zu betreiben, k??nnen Sie jederzeit gegen diese Art der Datenverarbeitung widersprechen. Wir d??rfen Ihre Daten danach nicht mehr f??r Direktmarketing verwenden.</li>
<li class="adsimple-312410493">Werden Daten verwendet, um Profiling zu betreiben, k??nnen Sie jederzeit gegen diese Art der Datenverarbeitung widersprechen. Wir d??rfen Ihre Daten danach nicht mehr f??r Profiling verwenden.</li>
</ul>
</li>
<li class="adsimple-312410493">Sie haben laut Artikel 22 DSGVO unter Umst??nden das Recht, nicht einer ausschlie??lich auf einer automatisierten Verarbeitung (zum Beispiel Profiling) beruhenden Entscheidung unterworfen zu werden.</li>
<li class="adsimple-312410493">Sie haben laut Artikel 77 DSGVO das Recht auf Beschwerde. Das hei??t, Sie k??nnen sich jederzeit bei der Datenschutzbeh??rde beschweren, wenn Sie der Meinung sind, dass die Datenverarbeitung von personenbezogenen Daten gegen die DSGVO verst????t.</li>
</ul>
<p>
<strong class="adsimple-312410493">Kurz gesagt:</strong> Sie haben Rechte &#8211; z??gern Sie nicht, die oben gelistete verantwortliche Stelle bei uns zu kontaktieren!</p>
<p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verst????t oder Ihre datenschutzrechtlichen Anspr??che in sonst einer Weise verletzt worden sind, k??nnen Sie sich bei der Aufsichtsbeh??rde beschweren. Diese ist f??r ??sterreich die Datenschutzbeh??rde, deren Website Sie unter <a class="adsimple-312410493" href="https://www.dsb.gv.at/?tid=312410493" target="_blank" rel="noopener">https://www.dsb.gv.at/</a> finden. In Deutschland gibt es f??r jedes Bundesland einen Datenschutzbeauftragten. F??r n??here Informationen k??nnen Sie sich an die <a class="adsimple-312410493" href="https://www.bfdi.bund.de/DE/Home/home_node.html" target="_blank" rel="noopener">Bundesbeauftragte f??r den Datenschutz und die Informationsfreiheit (BfDI)</a> wenden. F??r unser Unternehmen ist die folgende lokale Datenschutzbeh??rde zust??ndig:</p>
<h3 class="mt-xlg" id="berlin-datenschutzbehoerde" class="adsimple-312410493">Berlin Datenschutzbeh??rde</h3>
<p>
<strong class="adsimple-312410493">Landesbeauftragte f??r Datenschutz:</strong> Maja Smoltczyk<br />
<strong class="adsimple-312410493">Adresse: </strong>Friedrichstra??e 219, 10969 Berlin<br />
<strong class="adsimple-312410493">Telefonnr.:</strong> 030/138 89-0<br />
<strong class="adsimple-312410493">E-Mail-Adresse:</strong> mailbox@datenschutz-berlin.de<br />
<strong class="adsimple-312410493">Website: </strong>
<a class="adsimple-312410493" href="https://www.datenschutz-berlin.de/?tid=312410493" target="_blank" rel="noopener">https://www.datenschutz-berlin.de/</a>
</p>
<h3 class="mt-xlg" id="kommunikation" class="adsimple-312410493">Kommunikation</h3>
<table  cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-312410493">Kommunikation Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Alle, die mit uns per Telefon, E-Mail oder Online-Formular kommunizieren<br />
&#x1f4d3; Verarbeitete Daten: z. B. Telefonnummer, Name, E-Mail-Adresse, eingegebene Formulardaten. Mehr Details dazu finden Sie bei der jeweils eingesetzten Kontaktart<br />
&#x1f91d; Zweck: Abwicklung der Kommunikation mit Kunden, Gesch??ftspartnern usw.<br />
&#x1f4c5; Speicherdauer: Dauer des Gesch??ftsfalls und der gesetzlichen Vorschriften<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO (Vertrag), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<p>Wenn Sie mit uns Kontakt aufnehmen und per Telefon, E-Mail oder Online-Formular kommunizieren, kann es zur Verarbeitung personenbezogener Daten kommen.</p>
<p>Die Daten werden f??r die Abwicklung und Bearbeitung Ihrer Frage und des damit zusammenh??ngenden Gesch??ftsvorgangs verarbeitet. Die Daten w??hrend eben solange gespeichert bzw. solange es das Gesetz vorschreibt.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Betroffene Personen</h3>
<p>Von den genannten Vorg??ngen sind alle betroffen, die ??ber die von uns bereit gestellten Kommunikationswege den Kontakt zu uns suchen.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Telefon</h3>
<p>Wenn Sie uns anrufen, werden die Anrufdaten auf dem jeweiligen Endger??t und beim eingesetzten Telekommunikationsanbieter pseudonymisiert gespeichert. Au??erdem k??nnen Daten wie Name und Telefonnummer im Anschluss per E-Mail versendet und zur Anfragebeantwortung gespeichert werden. Die Daten werden gel??scht, sobald der Gesch??ftsfall beendet wurde und es gesetzliche Vorgaben erlauben.</p>
<h3 class="mt-xlg" class="adsimple-312410493">E-Mail</h3>
<p>Wenn Sie mit uns per E-Mail kommunizieren, werden Daten gegebenenfalls auf dem jeweiligen Endger??t (Computer, Laptop, Smartphone,&#8230;) gespeichert und es kommt zur Speicherung von Daten auf dem E-Mail-Server. Die Daten werden gel??scht, sobald der Gesch??ftsfall beendet wurde und es gesetzliche Vorgaben erlauben.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Online Formulare</h3>
<p>Wenn Sie mit uns mittels Online-Formular kommunizieren, werden Daten auf unserem Webserver gespeichert und gegebenenfalls an eine E-Mail-Adresse von uns weitergeleitet. Die Daten werden gel??scht, sobald der Gesch??ftsfall beendet wurde und es gesetzliche Vorgaben erlauben.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Rechtsgrundlagen</h3>
<p>Die Verarbeitung der Daten basiert auf den folgenden Rechtsgrundlagen:</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">Art. 6 Abs. 1 lit. a DSGVO (Einwilligung): Sie geben uns die Einwilligung Ihre Daten zu speichern und weiter f??r den Gesch??ftsfall betreffende Zwecke zu verwenden;</li>
<li class="adsimple-312410493">Art. 6 Abs. 1 lit. b DSGVO (Vertrag): Es besteht die Notwendigkeit f??r die Erf??llung eines Vertrags mit Ihnen oder einem Auftragsverarbeiter wie z. B. dem Telefonanbieter oder wir m??ssen die Daten f??r vorvertragliche T??tigkeiten, wie z. B. die Vorbereitung eines Angebots, verarbeiten;</li>
<li class="adsimple-312410493">Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen): Wir wollen Kundenanfragen und gesch??ftliche Kommunikation in einem professionellen Rahmen betreiben. Dazu sind gewisse technische Einrichtungen wie z. B. E-Mail-Programme, Exchange-Server und Mobilfunkbetreiber notwendig, um die Kommunikation effizient betreiben zu k??nnen.</li>
</ul>
<h3 class="mt-xlg" id="cookies" class="adsimple-312410493">Cookies</h3>
<table  cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-312410493">Cookies Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: abh??ngig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter unten bzw. beim Hersteller der Software, der das Cookie setzt.<br />
&#x1f4d3; Verarbeitete Daten: Abh??ngig vom jeweils eingesetzten Cookie. Mehr Details dazu finden Sie weiter unten bzw. beim Hersteller der Software, der das Cookie setzt.<br />
&#x1f4c5; Speicherdauer: abh??ngig vom jeweiligen Cookie, kann von Stunden bis hin zu Jahren variieren<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit.f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="mt-xlg" class="adsimple-312410493">Was sind Cookies?</h3>
<p>Unsere Website verwendet HTTP-Cookies, um nutzerspezifische Daten zu speichern.<br />
Im Folgenden erkl??ren wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende Datenschutzerkl??rung besser verstehen.</p>
<p>Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Websites speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.</p>
<p>Eines ist nicht von der Hand zu weisen: Cookies sind echt n??tzliche Helferlein. Fast alle Websites verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies f??r andere Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von unserer Website auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem &#8220;Hirn&#8221; Ihres Browsers, untergebracht. Ein Cookie besteht aus einem Namen und einem Wert. Bei der Definition eines Cookies m??ssen zus??tzlich ein oder mehrere Attribute angegeben werden.</p>
<p>Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder pers??nliche Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, ??bermittelt Ihr Browser die ???userbezogenen??? Informationen an unsere Seite zur??ck. Dank der Cookies wei?? unsere Website, wer Sie sind und bietet Ihnen die Einstellung, die Sie gewohnt sind. In einigen Browsern hat jedes Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in einer einzigen Datei gespeichert.</p>
<p>Die folgende Grafik zeigt eine m??gliche Interaktion zwischen einem Webbrowser wie z. B. Chrome und dem Webserver. Dabei fordert der Webbrowser eine Website an und erh??lt vom Server ein Cookie zur??ck, welches der Browser erneut verwendet, sobald eine andere Seite angefordert wird.</p>
<p>
<img role="img" src="https://www.adsimple.at/wp-content/uploads/2018/03/http-cookie-interaction.svg" alt="HTTP Cookie Interaktion zwischen Browser und Webserver" width="100%" />
</p>
<p>Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Websites (z.B. Google Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner oder andere ???Sch??dlinge???. Cookies k??nnen auch nicht auf Informationen Ihres PCs zugreifen.</p>
<p>So k??nnen zum Beispiel Cookie-Daten aussehen:</p>
<p>
<strong class="adsimple-312410493">Name:</strong> _ga<br />
<strong class="adsimple-312410493">Wert:</strong>??GA1.2.1326744211.152312410493-9<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Unterscheidung der Websitebesucher<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong>??nach 2 Jahren</p>
<p>Diese Mindestgr????en sollte ein Browser unterst??tzen k??nnen:</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">Mindestens 4096 Bytes pro Cookie</li>
<li class="adsimple-312410493">Mindestens 50 Cookies pro Domain</li>
<li class="adsimple-312410493">Mindestens 3000 Cookies insgesamt</li>
</ul>
<h3 class="mt-xlg" class="adsimple-312410493">Welche Arten von Cookies gibt es?</h3>
<p>Die Frage welche Cookies wir im Speziellen verwenden, h??ngt von den verwendeten Diensten ab und wird in den folgenden Abschnitten der Datenschutzerkl??rung gekl??rt. An dieser Stelle m??chten wir kurz auf die verschiedenen Arten von HTTP-Cookies eingehen.</p>
<p>Man kann 4 Arten von Cookies unterscheiden:</p>
<p>
<strong class="adsimple-312410493">Unerl??ssliche Cookies<br />
</strong>Diese Cookies sind n??tig, um grundlegende Funktionen der Website sicherzustellen. Zum Beispiel braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft und sp??ter erst zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht gel??scht, selbst wenn der User sein Browserfenster schlie??t.</p>
<p>
<strong class="adsimple-312410493">Zweckm????ige Cookies<br />
</strong>Diese Cookies sammeln Infos ??ber das Userverhalten und ob der User etwaige Fehlermeldungen bekommt. Zudem werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Website bei verschiedenen Browsern gemessen.</p>
<p>
<strong class="adsimple-312410493">Zielorientierte Cookies<br />
</strong>Diese Cookies sorgen f??r eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene Standorte, Schriftgr????en oder Formulardaten gespeichert.</p>
<p>
<strong class="adsimple-312410493">Werbe-Cookies<br />
</strong>Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.</p>
<p>??blicherweise werden Sie beim erstmaligen Besuch einer Website gefragt, welche dieser Cookiearten Sie zulassen m??chten. Und nat??rlich wird diese Entscheidung auch in einem Cookie gespeichert.</p>
<p>Wenn Sie mehr ??ber Cookies wissen m??chten und technische Dokumentationen nicht scheuen, empfehlen wir <a class="adsimple-312410493" href="https://datatracker.ietf.org/doc/html/rfc6265">https://datatracker.ietf.org/doc/html/rfc6265</a>,??dem Request for Comments der Internet Engineering Task Force (IETF) namens &#8220;HTTP State Management Mechanism&#8221;.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Zweck der Verarbeitung ??ber Cookies</h3>
<p>Der Zweck ist letztendlich abh??ngig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter unten bzw. beim Hersteller der Software, die das Cookie setzt.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Welche Daten werden verarbeitet?</h3>
<p>Cookies sind kleine Gehilfen f??r eine viele verschiedene Aufgaben. Welche Daten in Cookies gespeichert werden, kann man leider nicht verallgemeinern, aber wir werden Sie im Rahmen der folgenden Datenschutzerkl??rung ??ber die verarbeiteten bzw. gespeicherten Daten informieren.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Speicherdauer von Cookies</h3>
<p>Die Speicherdauer h??ngt vom jeweiligen Cookie ab und wird weiter unter pr??zisiert. Manche Cookies werden nach weniger als einer Stunde gel??scht, andere k??nnen mehrere Jahre auf einem Computer gespeichert bleiben.</p>
<p>Sie haben au??erdem selbst Einfluss auf die Speicherdauer. Sie k??nnen ??ber ihren Browser s??mtliche Cookies jederzeit manuell l??schen (siehe auch unten &#8220;Widerspruchsrecht&#8221;). Ferner werden Cookies, die auf einer Einwilligung beruhen, sp??testens nach Widerruf Ihrer Einwilligung gel??scht, wobei die Rechtm????igkeit der Speicherung bis dahin unber??hrt bleibt.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Widerspruchsrecht &#8211; wie kann ich Cookies l??schen?</h3>
<p>Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabh??ngig von welchem Service oder welcher Website die Cookies stammen, haben Sie immer die M??glichkeit Cookies zu l??schen, zu deaktivieren oder nur teilweise zuzulassen. Zum Beispiel k??nnen Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies zulassen.</p>
<p>Wenn Sie feststellen m??chten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie Cookie-Einstellungen ??ndern oder l??schen wollen, k??nnen Sie dies in Ihren Browser-Einstellungen finden:</p>
<p>
<a class="adsimple-312410493" href="https://support.google.com/chrome/answer/95647?tid=312410493" target="_blank" rel="noopener noreferrer">Chrome: Cookies in Chrome l??schen, aktivieren und verwalten</a>
</p>
<p>
<a class="adsimple-312410493" href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=312410493" target="_blank" rel="noopener noreferrer">Safari: Verwalten von Cookies und Websitedaten mit Safari</a>
</p>
<p>
<a class="adsimple-312410493" href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=312410493" target="_blank" rel="noopener noreferrer">Firefox: Cookies l??schen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a>
</p>
<p>
<a class="adsimple-312410493" href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d?tid=312410493">Internet Explorer: L??schen und Verwalten von Cookies</a>
</p>
<p>
<a class="adsimple-312410493" href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-l%C3%B6schen-63947406-40ac-c3b8-57b9-2a946a29ae09?tid=312410493">Microsoft Edge: L??schen und Verwalten von Cookies</a>
</p>
<p>Falls Sie grunds??tzlich keine Cookies haben wollen, k??nnen Sie Ihren Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So k??nnen Sie bei jedem einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden. Am besten Sie suchen die Anleitung in Google mit dem Suchbegriff ???Cookies l??schen Chrome??? oder &#8220;Cookies deaktivieren Chrome&#8221; im Falle eines Chrome Browsers.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Rechtsgrundlage</h3>
<p>Seit 2009 gibt es die sogenannten ???Cookie-Richtlinien???. Darin ist festgehalten, dass das Speichern von Cookies eine <strong class="adsimple-312410493">Einwilligung</strong> (Artikel 6 Abs. 1 lit. a DSGVO) von Ihnen verlangt. Innerhalb der EU-L??nder gibt es allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In ??sterreich erfolgte aber die Umsetzung dieser Richtlinie in ?? 96 Abs. 3 des Telekommunikationsgesetzes (TKG). In Deutschland wurden die Cookie-Richtlinien nicht als nationales Recht umgesetzt. Stattdessen erfolgte die Umsetzung dieser Richtlinie weitgehend in ?? 15 Abs.3 des Telemediengesetzes (TMG).</p>
<p>F??r unbedingt notwendige Cookies, auch soweit keine Einwilligung vorliegt, bestehen <strong class="adsimple-312410493">berechtigte Interessen</strong> (Artikel 6 Abs. 1 lit. f DSGVO), die in den meisten F??llen wirtschaftlicher Natur sind. Wir m??chten den Besuchern der Website eine angenehme Benutzererfahrung bescheren und daf??r sind bestimmte Cookies oft unbedingt notwendig.</p>
<p>Soweit nicht unbedingt erforderliche Cookies zum Einsatz kommen, geschieht dies nur im Falle Ihrer Einwilligung. Rechtsgrundlage ist insoweit Art. 6 Abs. 1 lit. a DSGVO.</p>
<p>In den folgenden Abschnitten werden Sie genauer ??ber den Einsatz von Cookies informiert, sofern eingesetzte Software Cookies verwendet.</p>
<h3 class="mt-xlg" id="kundendaten" class="adsimple-312410493">Kundendaten</h3>
<table  cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-312410493">Kundendaten Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Kunden bzw. Gesch??fts- und Vertragspartner<br />
&#x1f91d; Zweck: Erbringung der vertraglich oder vorvertraglich vereinbarten Leistungen einschlie??lich zugeh??rige Kommunikation<br />
&#x1f4d3; Verarbeitete Daten: Name, Adresse, Kontaktdaten, E-Mail-Adresse, Telefonnummer, Zahlungsinformationen (wie z. B. Rechnungen und Bankdaten), Vertragsdaten (wie z. B. Laufzeit und Gegenstand des Vertrags), IP-Adresse, Bestelldaten<br />
&#x1f4c5; Speicherdauer: die Daten werden gel??scht, sobald sie zur Erbringung unserer gesch??ftlichen Zwecke nicht mehr erforderlich sind und es keine gesetzliche Aufbewahrungspflicht gibt.<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO), Vertrag (Art. 6 Abs 1 lit. b DSGVO)</td>
</tr>
</tbody>
</table>
<h3 class="mt-xlg" class="adsimple-312410493">Was sind Kundendaten?</h3>
<p>Damit wir unser Service bzw. unsere vertraglichen Leistungen anbieten k??nnen, verarbeiten wir auch Daten unserer Kunden und Gesch??ftspartner. Unter diesen Daten befinden sich immer auch personenbezogene Daten. Unter Kundendaten versteht man alle Informationen, die auf Basis einer vertraglichen oder vorvertraglichen Zusammenarbeit verarbeitet werden, um die angebotenen Leistungen erbringen zu k??nnen. Kundendaten sind also alle gesammelten Informationen, die wir ??ber unsere Kunden erheben und verarbeiten.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Warum verarbeiten wir Kundendaten?</h3>
<p>Es gibt viele Gr??nde, warum wir Kundendaten sammeln und verarbeiten. Der wichtigste ist, dass wir zur Bereitstellung unserer Services einfach verschiedene Daten ben??tigen. Manchmal reicht hier schon Ihre E-Mail-Adresse, doch wenn Sie etwa ein Produkt oder eine Dienstleistung erwerben, ben??tigen wir auch Daten wie beispielsweise Name, Adresse, Bankdaten oder Vertragsdaten. Wir nutzen die Daten in weiterer Folge auch f??r Marketing- und Vertriebsoptimierungen, damit wir insgesamt unser Service f??r unsere Kunden verbessern k??nnen. Ein weiterer wichtiger Punkt ist auch unser Kundenservice, der uns stets sehr am Herzen liegt. Wir wollen, dass Sie mit Frage zu unseren Angeboten jederzeit zu uns kommen k??nnen und daf??r brauchen wir zumindest Ihre E-Mail-Adresse.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Welche Daten werden verarbeitet?</h3>
<p>Welche Daten genau gespeichert werden, kann an dieser Stelle nur anhand Kategorien wiedergegeben werden. Dies h??ngt n??mlich stets davon ab, welche Leistungen Sie von uns beziehen. In manchen F??llen geben Sie uns lediglich Ihre E-Mail-Adresse, damit wir beispielsweise mit Ihnen in Kontakt treten k??nnen oder wir Ihre Fragen beantworten k??nnen. In anderen F??llen erwerben Sie ein Produkt oder eine Dienstleistung bei uns und daf??r ben??tigen wir deutlich mehr Informationen, wie etwa Ihre Kontaktdaten, Zahlungsdaten und Vertragsdaten.</p>
<p>Hier eine Liste m??glicher Daten, die wir von Ihnen erhalten und verarbeiten:</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">Name</li>
<li class="adsimple-312410493">Kontaktadresse</li>
<li class="adsimple-312410493">E-Mail-Adresse</li>
<li class="adsimple-312410493">Telefonnummer</li>
<li class="adsimple-312410493">Geburtsdatum</li>
<li class="adsimple-312410493">Zahlungsdaten (Rechnungen, Bankdaten, Zahlungshistorie etc.)</li>
<li class="adsimple-312410493">Vertragsdaten ( Laufzeit, Inhalt)</li>
<li class="adsimple-312410493">Nutzungsdaten (besuchte Websites, Zugriffsdaten ect.)</li>
<li class="adsimple-312410493">Metadaten (IP-Adresse, Ger??te-Informationen)</li>
</ul>
<h3 class="mt-xlg" class="adsimple-312410493">Wie lange werden die Daten gespeichert?</h3>
<p>Sobald wir die Kundendaten zur Erf??llung unserer vertraglichen Pflichten und unserer Zwecke nicht mehr ben??tigen und die Daten auch nicht f??r m??gliche Gew??hrleistungs- und Haftungspflichten n??tig sind, l??schen wir die entsprechenden Kundendaten. Das ist zum Beispiel der Fall, wenn ein gesch??ftlicher Vertrag endet. Danach betr??gt die Verj??hrungsfrist in der Regel 3 Jahre, wobei l??ngere Fristen im Einzelfall m??glich sind. Wir halten uns nat??rlich auch an die gesetzlichen Aufbewahrungspflichten. Ihre Kundendaten werden ganz sicher nicht an Dritte weitergegeben, wenn Sie dazu nicht explizit eine Einwilligung erteilt haben.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Rechtsgrundlage</h3>
<p>Rechtsgrundlagen f??r die Verarbeitung Ihrer Daten sind Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs 1 lit. b DSGVO (Vertrag bzw. vorvertragliche Ma??nahmen), Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)?? und in speziellen F??llen (z. B. bei medizinischen Leistungen) Art. 9 Abs. 2 lit. a. DSGVO (Verarbeitung besonderer Kategorien).</p>
<p>F??r den Fall des Schutzes lebenswichtiger Interessen erfolgt die Datenverarbeitung gem???? Art. 9 Abs. 2 lit. c. DSGVO. F??r Zwecke der Gesundheitsversorgung, der Arbeitsmedizin, f??r die medizinische Diagnostik, f??r die Versorgung oder Behandlung im Gesundheits- oder Sozialbereich oder f??r die Verwaltung von Systemen und Diensten im Gesundheits- oder Sozialbereich erfolgt die Verarbeitung personenbezogener Daten gem???? Art. 9 Abs. 2 lit. h. DSGVO. Wenn Sie freiwillig Daten der besonderen Kategorien mitteilen, erfolgt die Verarbeitung auf Grundlage von Art. 9 Abs. 2 lit. a. DSGVO.</p>
<h3 class="mt-xlg" id="webhosting-einleitung" class="adsimple-312410493">Webhosting Einleitung</h3>
<table  cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-312410493">Webhosting Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: professionelles Hosting der Website und Absicherung des Betriebs<br />
&#x1f4d3; Verarbeitete Daten: IP-Adresse, Zeitpunkt des Websitebesuchs, verwendeter Browser und weitere Daten. Mehr Details dazu finden Sie weiter unten bzw. beim jeweils eingesetzten Webhosting Provider.<br />
&#x1f4c5; Speicherdauer: abh??ngig vom jeweiligen Provider, aber in der Regel 2 Wochen<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit.f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="mt-xlg" class="adsimple-312410493">Was ist Webhosting?</h3>
<p>Wenn Sie heutzutage Websites besuchen, werden gewisse Informationen &#8211; auch personenbezogene Daten &#8211; automatisch erstellt und gespeichert, so auch auf dieser Website. Diese Daten sollten m??glichst sparsam und nur mit Begr??ndung verarbeitet werden. Mit Website meinen wir ??brigens die Gesamtheit aller Webseiten auf einer Domain, d.h. alles von der Startseite (Homepage) bis hin zur aller letzten Unterseite (wie dieser hier). Mit Domain meinen wir zum Beispiel beispiel.de oder musterbeispiel.com.</p>
<p>Wenn Sie eine Website auf einem Computer, Tablet oder Smartphone ansehen m??chten, verwenden Sie daf??r ein Programm, das sich Webbrowser nennt. Sie kennen vermutlich einige Webbrowser beim Namen: Google Chrome, Microsoft Edge, Mozilla Firefox und Apple Safari. Wir sagen kurz Browser oder Webbrowser dazu.</p>
<p>Um die Website anzuzeigen, muss sich der Browser zu einem anderen Computer verbinden, wo der Code der Website gespeichert ist: dem Webserver. Der Betrieb eines Webservers ist eine komplizierte und aufwendige Aufgabe, weswegen dies in der Regel von professionellen Anbietern, den Providern, ??bernommen wird. Diese bieten Webhosting an und sorgen damit f??r eine verl??ssliche und fehlerfreie Speicherung der Daten von Websites. Eine ganze Menge Fachbegriffe, aber bitte bleiben Sie dran, es wird noch besser!</p>
<p>Bei der Verbindungsaufnahme des Browsers auf Ihrem Computer (Desktop, Laptop, Tablet oder Smartphone) und w??hrend der Daten??bertragung zu und vom Webserver kann es zu einer Verarbeitung personenbezogener Daten kommen. Einerseits speichert Ihr Computer Daten, andererseits muss auch der Webserver Daten eine Zeit lang speichern, um einen ordentlichen Betrieb zu gew??hrleisten.</p>
<p>Ein Bild sagt mehr als tausend Worte, daher zeigt folgende Grafik zur Veranschaulichung das Zusammenspiel zwischen Browser, dem Internet und dem Hosting-Provider.</p>
<p>
<img role="img" src="https://www.adsimple.at/wp-content/uploads/2018/03/browser-und-webserver.svg" alt="Browser und Webserver" width="100%" />
</p>
<h3 class="mt-xlg" class="adsimple-312410493">Warum verarbeiten wir personenbezogene Daten?</h3>
<p>Die Zwecke der Datenverarbeitung sind:</p>
<ol>
<li class="adsimple-312410493">Professionelles Hosting der Website und Absicherung des Betriebs</li>
<li class="adsimple-312410493">zur Aufrechterhaltung der Betriebs- und IT-Sicherheit</li>
<li class="adsimple-312410493">Anonyme Auswertung des Zugriffsverhaltens zur Verbesserung unseres Angebots und ggf. zur Strafverfolgung bzw. Verfolgung von Anspr??chen</li>
</ol>
<h3 class="mt-xlg" class="adsimple-312410493">Welche Daten werden verarbeitet?</h3>
<p>Auch w??hrend Sie unsere Website jetzt gerade besuchen, speichert unser Webserver, das ist der Computer auf dem diese Webseite gespeichert ist, in der Regel automatisch Daten wie</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">die komplette Internetadresse (URL) der aufgerufenen Webseite</li>
<li class="adsimple-312410493">Browser und Browserversion (z. B. Chrome 87)</li>
<li class="adsimple-312410493">das verwendete Betriebssystem (z. B. Windows 10)</li>
<li class="adsimple-312410493">die Adresse (URL) der zuvor besuchten Seite (Referrer URL) (z. B. <a class="adsimple-312410493" href="https://www.beispielquellsite.de/vondabinichgekommen/" target="_blank" rel="follow noopener">https://www.beispielquellsite.de/vondabinichgekommen/</a>)</li>
<li class="adsimple-312410493">den Hostnamen und die IP-Adresse des Ger??ts von welchem aus zugegriffen wird (z. B. COMPUTERNAME und 194.23.43.121)</li>
<li class="adsimple-312410493">Datum und Uhrzeit</li>
<li class="adsimple-312410493">in Dateien, den sogenannten Webserver-Logfiles</li>
</ul>
<h3 class="mt-xlg" class="adsimple-312410493">Wie lange werden Daten gespeichert?</h3>
<p>In der Regel werden die oben genannten Daten zwei Wochen gespeichert und danach automatisch gel??scht. Wir geben diese Daten nicht weiter, k??nnen jedoch nicht ausschlie??en, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten von Beh??rden eingesehen werden.</p>
<p>
<strong class="adsimple-312410493">Kurz gesagt:</strong> Ihr Besuch wird durch unseren Provider (Firma, die unsere Website auf speziellen Computern (Servern) laufen l??sst), protokolliert, aber wir geben Ihre Daten nicht ohne Zustimmung weiter!</p>
<h3 class="mt-xlg" class="adsimple-312410493">Rechtsgrundlage</h3>
<p>Die Rechtm????igkeit der Verarbeitung personenbezogener Daten im Rahmen des Webhosting ergibt sich aus Art. 6 Abs. 1 lit. f DSGVO (Wahrung der berechtigten Interessen), denn die Nutzung von professionellem Hosting bei einem Provider ist notwendig, um das Unternehmen im Internet sicher und nutzerfreundlich pr??sentieren und Angriffe und Forderungen hieraus gegebenenfalls verfolgen zu k??nnen.</p>
<p>Zwischen uns und dem Hosting-Provider besteht in der Regel ein Vertrag ??ber die Auftragsverarbeitung gem???? Art. 28 f. DSGVO, der die Einhaltung von Datenschutz gew??hrleistet und Datensicherheit garantiert.</p>
<h3 class="mt-xlg" id="netlify-datenschutzerklaerung" class="adsimple-312410493">Netlify Datenschutzerkl??rung</h3>
<p>Wir verwenden f??r unsere Website den Webhosting-Anbieter Netlify. Dienstanbieter ist das amerikanische Unternehmen Netlify Inc., 2325 3rd Street, Suite 29, San Francisco, CA 94104, USA.</p>
<p>Netlify verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen darauf hin, dass nach Meinung des Europ??ischen Gerichtshofs derzeit kein angemessenes Schutzniveau f??r den Datentransfer in die USA besteht. Dies kann mit verschiedenen Risiken f??r die Rechtm????igkeit und Sicherheit der Datenverarbeitung einhergehen.</p>
<p>Als Grundlage der Datenverarbeitung bei Empf??ngern mit Sitz in Drittstaaten (au??erhalb der Europ??ischen Union, Island, Liechtenstein, Norwegen, also insbesondere in den USA) oder einer Datenweitergabe dorthin verwendet Netlify sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard Contractual Clauses ??? SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen sicherstellen, dass Ihre Daten auch dann den europ??ischen Datenschutzstandards entsprechen, wenn diese in Drittl??nder (wie beispielsweise in die USA) ??berliefert und dort gespeichert werden. Durch diese Klauseln verpflichtet sich Netlify, bei der Verarbeitung Ihrer relevanten Daten, das europ??ische Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren auf einem Durchf??hrungsbeschluss der EU-Kommission. Sie finden den Beschluss und die entsprechenden Standardvertragsklauseln u.a. hier: <a class="adsimple-312410493" href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de">https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de</a>
</p>
<p>Netlify h??lt einen Vertrag ??ber die Auftragsverarbeitung gem???? Art. 28 DSGVO bereit, der als datenschutzrechtliche Grundlage f??r unsere Kundenbeziehung zu Netlify fungiert. Dieser verweist inhaltlich auf die EU-Standardvertragsklauseln. Sie finden ihn hier: <a class="adsimple-312410493" href="https://www.netlify.com/pdf/netlify-dpa.pdf" target="_blank" rel="follow noopener">https://www.netlify.com/pdf/netlify-dpa.pdf</a>
</p>
<p>Mehr ??ber die Daten, die durch die Verwendung von Netlify verarbeitet werden, erfahren Sie in der Privacy Policy auf <a class="adsimple-312410493" href="https://www.netlify.com/privacy/?tid=312410493">https://www.netlify.com/privacy/</a>.</p>
<h3 class="mt-xlg" id="web-analytics-einleitung" class="adsimple-312410493">Web Analytics Einleitung</h3>
<table  cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-312410493">Web Analytics Datenschutzerkl??rung Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: Auswertung der Besucherinformationen zur Optimierung des Webangebots.<br />
&#x1f4d3; Verarbeitete Daten: Zugriffsstatistiken, die Daten wie Standorte der Zugriffe, Ger??tedaten, Zugriffsdauer und Zeitpunkt, Navigationsverhalten, Klickverhalten und IP-Adressen enthalten. Mehr Details dazu finden Sie beim jeweils eingesetzten Web Analytics Tool.<br />
&#x1f4c5; Speicherdauer: abh??ngig vom eingesetzten Web-Analytics-Tool<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="mt-xlg" class="adsimple-312410493">Was ist Web Analytics?</h3>
<p>Wir verwenden auf unserer Website Software zur Auswertung des Verhaltens der Website-Besucher, kurz Web Analytics oder Web-Analyse genannt. Dabei werden Daten gesammelt, die der jeweilige Analytic-Tool-Anbieter (auch Trackingtool genannt) speichert, verwaltet und verarbeitet. Mit Hilfe der Daten werden Analysen ??ber das Nutzerverhalten auf unserer Website erstellt und uns als Websitebetreiber zur Verf??gung gestellt. Zus??tzlich bieten die meisten Tools verschiedene Testm??glichkeiten an. So k??nnen wir etwa testen, welche Angebote oder Inhalte bei unseren Besuchern am besten ankommen. Daf??r zeigen wir Ihnen f??r einen begrenzten Zeitabschnitt zwei verschiedene Angebote. Nach dem Test (sogenannter A/B-Test) wissen wir, welches Produkt bzw. welcher Inhalt unsere Websitebesucher interessanter finden. F??r solche Testverfahren, wie auch f??r andere Analytics-Verfahren, k??nnen auch Userprofile erstellt werden und die Daten in Cookies gespeichert werden.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Warum betreiben wir Web Analytics?</h3>
<p>Mit unserer Website haben wir ein klares Ziel vor Augen: wir wollen f??r unsere Branche das beste Webangebot auf dem Markt liefern. Um dieses Ziel zu erreichen, wollen wir einerseits das beste und interessanteste Angebot bieten und andererseits darauf achten, dass Sie sich auf unserer Website rundum wohlf??hlen. Mit Hilfe von Webanalyse-Tools k??nnen wir das Verhalten unserer Websitebesucher genauer unter die Lupe nehmen und dann entsprechend unser Webangebot f??r Sie und uns verbessern. So k??nnen wir beispielsweise erkennen wie alt unsere Besucher durchschnittlich sind, woher sie kommen, wann unsere Website am meisten besucht wird oder welche Inhalte oder Produkte besonders beliebt sind. All diese Informationen helfen uns die Website zu optimieren und somit bestens an Ihre Bed??rfnisse, Interessen und W??nsche anzupassen.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Welche Daten werden verarbeitet?</h3>
<p>Welche Daten genau gespeichert werden, h??ngt nat??rlich von den verwendeten Analyse-Tools ab. Doch in der Regel wird zum Beispiel gespeichert, welche Inhalte Sie auf unserer Website ansehen, auf welche Buttons oder Links Sie klicken, wann Sie eine Seite aufrufen, welchen Browser sie verwenden, mit welchem Ger??t (PC, Tablet, Smartphone usw.) Sie die Website besuchen oder welches Computersystem Sie verwenden. Wenn Sie damit einverstanden waren, dass auch Standortdaten erhoben werden d??rfen, k??nnen auch diese durch den Webanalyse-Tool-Anbieter verarbeitet werden.</p>
<p>Zudem wird auch Ihre IP-Adresse gespeichert. Gem???? der Datenschutz-Grundverordnung (DSGVO) sind IP-Adressen personenbezogene Daten. Ihre IP-Adresse wird allerdings in der Regel pseudonymisiert (also in unkenntlicher und gek??rzter Form) gespeichert. F??r den Zweck der Tests, der Webanalyse und der Weboptimierung werden grunds??tzlich keine direkten Daten, wie etwa Ihr Name, Ihr Alter, Ihre Adresse oder Ihre E-Mail-Adresse gespeichert. All diese Daten werden, sofern sie erhoben werden, pseudonymisiert gespeichert. So k??nnen Sie als Person nicht identifiziert werden.</p>
<p>Das folgende Beispiel zeigt schematisch die Funktionsweise von Google Analytics als Beispiel f??r client-basiertes Webtracking mit Java-Script-Code.</p>
<p>
<img role="img" src="https://www.adsimple.at/wp-content/uploads/2021/04/google-analytics-dataflow.svg" alt="Schematischer Datenfluss bei Google Analytics" width="100%" />
</p>
<p>Wie lange die jeweiligen Daten gespeichert werden, h??ngt immer vom Anbieter ab. Manche Cookies speichern Daten nur f??r ein paar Minuten bzw. bis Sie die Website wieder verlassen, andere Cookies k??nnen Daten ??ber mehrere Jahre speichern.</p>
<h3 class="mt-xlg" class="adsimple-312410493">
<span class="adsimple-312410493" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Wo und wie lange werden Daten gespeichert?&quot;}" data-sheets-userformat="{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}">Dauer der Datenverarbeitung</span>
</h3>
<p>??ber die Dauer der Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu haben. Generell verarbeiten wir personenbezogene Daten nur so lange wie es f??r die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist. Wenn es, wie zum Beispiel im Fall von Buchhaltung, gesetzlich vorgeschrieben ist, kann diese Speicherdauer auch ??berschritten werden.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Widerspruchsrecht</h3>
<p>Sie haben auch jederzeit das Recht und die M??glichkeit Ihre Einwilligung zur Verwendung von Cookies bzw. Drittanbietern zu widerrufen. Das funktioniert entweder ??ber unser Cookie-Management-Tool oder ??ber andere Opt-Out-Funktionen. Zum Beispiel k??nnen Sie auch die Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die Cookies verwalten, deaktivieren oder l??schen.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Rechtsgrundlage</h3>
<p>Der Einsatz von Web-Analytics setzt Ihre Einwilligung voraus, welche wir mit unserem Cookie Popup eingeholt haben. Diese Einwilligung stellt laut<strong class="adsimple-312410493"> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</strong> die Rechtsgrundlage f??r die Verarbeitung personenbezogener Daten, wie sie bei der Erfassung durch Web-Analytics Tools vorkommen kann, dar.</p>
<p>Zus??tzlich zur Einwilligung besteht von unserer Seite ein berechtigtes Interesse daran, das Verhalten der Websitebesucher zu analysieren und so unser Angebot technisch und wirtschaftlich zu verbessern. Mit Hilfe von Web-Analytics erkennen wir Fehler der Website, k??nnen Attacken identifizieren und die Wirtschaftlichkeit verbessern. Die Rechtsgrundlage daf??r ist <strong class="adsimple-312410493">Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</strong>. Wir setzen die Tools gleichwohl nur ein, soweit sie eine Einwilligung erteilt haben.</p>
<p>Da bei Web-Analytics-Tools Cookies zum Einsatz kommen, empfehlen wir Ihnen auch das Lesen unserer allgemeinen Datenschutzerkl??rung zu Cookies. Um zu erfahren, welche Daten von Ihnen genau gespeichert und verarbeitet werden, sollten Sie die Datenschutzerkl??rungen der jeweiligen Tools durchlesen.</p>
<p>Informationen zu speziellen Web-Analytics-Tools, erhalten Sie &#8211; sofern vorhanden &#8211; in den folgenden Abschnitten.</p>
<h3 class="mt-xlg" id="google-analytics-datenschutzerklaerung" class="adsimple-312410493">Google Analytics Datenschutzerkl??rung</h3>
<table  cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-312410493">Google Analytics Datenschutzerkl??rung Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: Auswertung der Besucherinformationen zur Optimierung des Webangebots.<br />
&#x1f4d3; Verarbeitete Daten: Zugriffsstatistiken, die Daten wie Standorte der Zugriffe, Ger??tedaten, Zugriffsdauer und Zeitpunkt, Navigationsverhalten, Klickverhalten und IP-Adressen enthalten. Mehr Details dazu finden Sie weiter unten in dieser Datenschutzerkl??rung.<br />
&#x1f4c5; Speicherdauer: abh??ngig von den verwendeten Properties<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="mt-xlg" class="adsimple-312410493">Was ist Google Analytics?</h3>
<p>Wir verwenden auf unserer Website das Analyse-Tracking Tool Google Analytics (GA) des amerikanischen Unternehmens Google Inc. F??r den europ??ischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) f??r alle Google-Dienste verantwortlich. Google Analytics sammelt Daten ??ber Ihre Handlungen auf unserer Website. Wenn Sie beispielsweise einen Link anklicken, wird diese Aktion in einem Cookie gespeichert und an Google Analytics versandt. Mithilfe der Berichte, die wir von Google Analytics erhalten, k??nnen wir unsere Website und unser Service besser an Ihre W??nsche anpassen. Im Folgenden gehen wir n??her auf das Tracking-Tool ein und informieren Sie vor allem dar??ber, welche Daten gespeichert werden und wie Sie das verhindern k??nnen.</p>
<p>Google Analytics ist ein Trackingtool, das der Datenverkehrsanalyse unserer Website dient. Damit Google Analytics funktioniert, wird ein Tracking-Code in den Code unserer Website eingebaut. Wenn Sie unsere Website besuchen, zeichnet dieser Code verschiedene Handlungen auf, die Sie auf unserer Website ausf??hren. Sobald Sie unsere Website verlassen, werden diese Daten an die Google-Analytics-Server gesendet und dort gespeichert.</p>
<p>Google verarbeitet die Daten und wir bekommen Berichte ??ber Ihr Userverhalten. Dabei kann es sich unter anderem um folgende Berichte handeln:</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">Zielgruppenberichte: ??ber Zielgruppenberichte lernen wir unsere User besser kennen und wissen genauer, wer sich f??r unser Service interessiert.</li>
<li class="adsimple-312410493">Anzeigeberichte: Durch Anzeigeberichte k??nnen wir unsere Onlinewerbung leichter analysieren und verbessern.</li>
<li class="adsimple-312410493">Akquisitionsberichte: Akquisitionsberichte geben uns hilfreiche Informationen dar??ber, wie wir mehr Menschen f??r unser Service begeistern k??nnen.</li>
<li class="adsimple-312410493">Verhaltensberichte: Hier erfahren wir, wie Sie mit unserer Website interagieren. Wir k??nnen nachvollziehen welchen Weg Sie auf unserer Seite zur??cklegen und welche Links Sie anklicken.</li>
<li class="adsimple-312410493">Conversionsberichte: Conversion nennt man einen Vorgang, bei dem Sie aufgrund einer Marketing-Botschaft eine gew??nschte Handlung ausf??hren. Zum Beispiel, wenn Sie von einem reinen Websitebesucher zu einem K??ufer oder Newsletter-Abonnent werden. Mithilfe dieser Berichte erfahren wir mehr dar??ber, wie unsere Marketing-Ma??nahmen bei Ihnen ankommen. So wollen wir unsere Conversionrate steigern.</li>
<li class="adsimple-312410493">Echtzeitberichte: Hier erfahren wir immer sofort, was gerade auf unserer Website passiert. Zum Beispiel sehen wir wie viele User gerade diesen Text lesen.</li>
</ul>
<h3 class="mt-xlg" class="adsimple-312410493">Warum verwenden wir Google Analytics auf unserer Website?</h3>
<p>Unser Ziel mit dieser Website ist klar: Wir wollen Ihnen das bestm??gliche Service bieten. Die Statistiken und Daten von Google Analytics helfen uns dieses Ziel zu erreichen.</p>
<p>Die statistisch ausgewerteten Daten zeigen uns ein klares Bild von den St??rken und Schw??chen unserer Website. Einerseits k??nnen wir unsere Seite so optimieren, dass sie von interessierten Menschen auf Google leichter gefunden wird. Andererseits helfen uns die Daten, Sie als Besucher besser zu verstehen. Wir wissen somit sehr genau, was wir an unserer Website verbessern m??ssen, um Ihnen das bestm??gliche Service zu bieten. Die Daten dienen uns auch, unsere Werbe- und Marketing-Ma??nahmen individueller und kosteng??nstiger durchzuf??hren. Schlie??lich macht es nur Sinn, unsere Produkte und Dienstleistungen Menschen zu zeigen, die sich daf??r interessieren.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Welche Daten werden von Google Analytics gespeichert?</h3>
<p>Google Analytics erstellt mithilfe eines Tracking-Codes eine zuf??llige, eindeutige ID, die mit Ihrem Browser-Cookie verbunden ist. So erkennt Sie Google Analytics als neuen User. Wenn Sie das n??chste Mal unsere Seite besuchen, werden Sie als ???wiederkehrender??? User erkannt. Alle gesammelten Daten werden gemeinsam mit dieser User-ID gespeichert. So ist es ??berhaupt erst m??glich pseudonyme Userprofile auszuwerten.</p>
<p>Um mit Google Analytics unsere Website analysieren zu k??nnen, muss eine Property-ID in den Tracking-Code eingef??gt werden. Die Daten werden dann in der entsprechenden Property gespeichert. F??r jede neu angelegte Property ist die Google Analytics 4-Property standardm????ig. Alternativ kann man aber auch noch die Universal Analytics Property erstellen. Je nach verwendeter Property werden Daten unterschiedlich lange gespeichert.</p>
<p>Durch Kennzeichnungen wie Cookies und App-Instanz-IDs werden Ihre Interaktionen auf unserer Website gemessen. Interaktionen sind alle Arten von Handlungen, die Sie auf unserer Website ausf??hren. Wenn Sie auch andere Google-Systeme (wie z.B. ein Google-Konto) n??tzen, k??nnen ??ber Google Analytics generierte Daten mit Drittanbieter-Cookies verkn??pft werden. Google gibt keine Google Analytics-Daten weiter, au??er wir als Websitebetreiber genehmigen das. Zu Ausnahmen kann es kommen, wenn es gesetzlich erforderlich ist.</p>
<p>Folgende Cookies werden von Google Analytics verwendet:</p>
<p>
<strong class="adsimple-312410493">Name:</strong> _ga<br />
<strong class="adsimple-312410493">Wert: </strong>2.1326744211.152312410493-5<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Standardm????ig verwendet analytics.js das Cookie _ga, um die User-ID zu speichern. Grunds??tzlich dient es zur Unterscheidung der Webseitenbesucher.<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong> nach 2 Jahren</p>
<p>
<strong class="adsimple-312410493">Name:</strong> _gid<br />
<strong class="adsimple-312410493">Wert: </strong>2.1687193234.152312410493-1<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong>??Das Cookie dient auch zur Unterscheidung der Webseitenbesucher<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong>??nach 24 Stunden</p>
<p>
<strong class="adsimple-312410493">Name:</strong> _gat_gtag_UA_&lt;property-id&gt;<br />
<strong class="adsimple-312410493">Wert:</strong> 1<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Wird zum Senken der Anforderungsrate verwendet. Wenn Google Analytics ??ber den Google Tag Manager bereitgestellt wird, erh??lt dieser Cookie den Namen _dc_gtm_ &lt;property-id&gt;.<br />
<strong class="adsimple-312410493">Ablaufdatum: </strong>nach 1 Minute</p>
<p>
<strong class="adsimple-312410493">Name:</strong> AMP_TOKEN<br />
<strong class="adsimple-312410493">Wert:</strong> keine Angaben<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Das Cookie hat einen Token, mit dem eine User ID vom AMP-Client-ID-Dienst abgerufen werden kann. Andere m??gliche Werte weisen auf eine Abmeldung, eine Anfrage oder einen Fehler hin.<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong>??nach 30 Sekunden bis zu einem Jahr</p>
<p>
<strong class="adsimple-312410493">Name:</strong> __utma<br />
<strong class="adsimple-312410493">Wert: </strong>1564498958.1564498958.1564498958.1<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Mit diesem Cookie kann man Ihr Verhalten auf der Website verfolgen und die Leistung messen. Das Cookie wird jedes Mal aktualisiert, wenn Informationen an Google Analytics gesendet werden.<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong> nach 2 Jahren</p>
<p>
<strong class="adsimple-312410493">Name:</strong> __utmt<br />
<strong class="adsimple-312410493">Wert:</strong> 1<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Das Cookie wird wie _gat_gtag_UA_&lt;property-id&gt; zum Drosseln der Anforderungsrate verwendet.<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong>??nach 10 Minuten</p>
<p>
<strong class="adsimple-312410493">Name:</strong> __utmb<br />
<strong class="adsimple-312410493">Wert: </strong>3.10.1564498958<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Dieses Cookie wird verwendet, um neue Sitzungen zu bestimmen. Es wird jedes Mal aktualisiert, wenn neue Daten bzw. Infos an Google Analytics gesendet werden.<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong>??nach 30 Minuten</p>
<p>
<strong class="adsimple-312410493">Name:</strong> __utmc<br />
<strong class="adsimple-312410493">Wert:</strong> 167421564<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Dieses Cookie wird verwendet, um neue Sitzungen f??r wiederkehrende Besucher festzulegen. Dabei handelt es sich um ein Session-Cookie und wird nur solange gespeichert, bis Sie den Browser wieder schlie??en.<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong> Nach Schlie??ung des Browsers</p>
<p>
<strong class="adsimple-312410493">Name:</strong> __utmz<br />
<strong class="adsimple-312410493">Wert:</strong> m|utmccn=(referral)|utmcmd=referral|utmcct=/<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Das Cookie wird verwendet, um die Quelle des Besucheraufkommens auf unserer Website zu identifizieren. Das hei??t, das Cookie speichert, von wo Sie auf unsere Website gekommen sind. Das kann eine andere Seite bzw. eine Werbeschaltung gewesen sein.<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong> nach 6 Monaten</p>
<p>
<strong class="adsimple-312410493">Name:</strong> __utmv<br />
<strong class="adsimple-312410493">Wert:</strong> keine Angabe<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Das Cookie wird verwendet, um benutzerdefinierte Userdaten zu speichern. Es wird immer aktualisiert, wenn Informationen an Google Analytics gesendet werden.<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong> nach 2 Jahren</p>
<p>
<strong class="adsimple-312410493">Anmerkung:</strong>??Diese Aufz??hlung kann keinen Anspruch auf Vollst??ndigkeit erheben, da Google die Wahl ihrer Cookies immer wieder auch ver??ndert.</p>
<p>Hier zeigen wir Ihnen einen ??berblick ??ber die wichtigsten Daten, die mit Google Analytics erhoben werden:</p>
<p>
<strong class="adsimple-312410493">Heatmaps:</strong> Google legt sogenannte Heatmaps an. ??ber Heatmaps sieht man genau jene Bereiche, die Sie anklicken. So bekommen wir Informationen, wo Sie auf unserer Seite ???unterwegs??? sind.</p>
<p>
<strong class="adsimple-312410493">Sitzungsdauer:</strong> Als Sitzungsdauer bezeichnet Google die Zeit, die Sie auf unserer Seite verbringen, ohne die Seite zu verlassen. Wenn Sie 20 Minuten inaktiv waren, endet die Sitzung automatisch.</p>
<p>
<strong class="adsimple-312410493">Absprungrate</strong> (engl. Bouncerate): Von einem Absprung ist die Rede, wenn Sie auf unserer Website nur eine Seite ansehen und dann unsere Website wieder verlassen.</p>
<p>
<strong class="adsimple-312410493">Kontoerstellung:</strong> Wenn Sie auf unserer Website ein Konto erstellen bzw. eine Bestellung machen, erhebt Google Analytics diese Daten.</p>
<p>
<strong class="adsimple-312410493">IP-Adresse:</strong> Die IP-Adresse wird nur in gek??rzter Form dargestellt, damit keine eindeutige Zuordnung m??glich ist.</p>
<p>
<strong class="adsimple-312410493">Standort:</strong> ??ber die IP-Adresse kann das Land und Ihr ungef??hrer Standort bestimmt werden. Diesen Vorgang bezeichnet man auch als IP- Standortbestimmung.</p>
<p>
<strong class="adsimple-312410493">Technische Informationen:</strong> Zu den technischen Informationen z??hlen unter anderem Ihr Browsertyp, Ihr Internetanbieter oder Ihre Bildschirmaufl??sung.</p>
<p>
<strong class="adsimple-312410493">Herkunftsquelle:</strong> Google Analytics beziehungsweise uns interessiert nat??rlich auch ??ber welche Website oder welche Werbung Sie auf unsere Seite gekommen sind.</p>
<p>Weitere Daten sind Kontaktdaten, etwaige Bewertungen, das Abspielen von Medien (z. B. wenn Sie ein Video ??ber unsere Seite abspielen), das Teilen von Inhalten ??ber Social Media oder das Hinzuf??gen zu Ihren Favoriten. Die Aufz??hlung hat keinen Vollst??ndigkeitsanspruch und dient nur zu einer allgemeinen Orientierung der Datenspeicherung durch Google Analytics.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Wie lange und wo werden die Daten gespeichert?</h3>
<p>Google hat ihre Server auf der ganzen Welt verteilt. Die meisten Server befinden sich in Amerika und folglich werden Ihre Daten meist auf amerikanischen Servern gespeichert. Hier k??nnen Sie genau nachlesen wo sich die Google-Rechenzentren befinden: <a class="adsimple-312410493" href="https://www.google.com/about/datacenters/locations/?hl=de" target="_blank" rel="follow noopener">https://www.google.com/about/datacenters/locations/?hl=de</a>
</p>
<p>Ihre Daten werden auf verschiedenen physischen Datentr??gern verteilt. Das hat den Vorteil, dass die Daten schneller abrufbar sind und vor Manipulation besser gesch??tzt sind. In jedem Google-Rechenzentrum gibt es entsprechende Notfallprogramme f??r Ihre Daten. Wenn beispielsweise die Hardware bei Google ausf??llt oder Naturkatastrophen Server lahmlegen, bleibt das Risiko einer Dienstunterbrechung bei Google dennoch gering.</p>
<p>Die Aufbewahrungsdauer der Daten h??ngt von den verwendeten Properties ab. Bei der Verwendung der neueren Google Analytics 4-Properties ist die Aufbewahrungsdauer Ihrer Userdaten auf 14 Monate fix eingestellt. F??r andere sogenannte Ereignisdaten haben wir die M??glichkeit eine Aufbewahrungsdauer von 2 Monaten oder 14 Monaten zu w??hlen.</p>
<p>Bei Universal Analytics-Properties ist bei Google Analytics eine Aufbewahrungsdauer Ihrer Userdaten von 26 Monaten standardisiert eingestellt. Dann werden Ihre Userdaten gel??scht. Allerdings haben wir die M??glichkeit, die Aufbewahrungsdauer von Nutzdaten selbst zu w??hlen. Daf??r stehen uns f??nf Varianten zur Verf??gung:</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">L??schung nach 14 Monaten</li>
<li class="adsimple-312410493">L??schung nach 26 Monaten</li>
<li class="adsimple-312410493">L??schung nach 38 Monaten</li>
<li class="adsimple-312410493">L??schung nach 50 Monaten</li>
<li class="adsimple-312410493">Keine automatische L??schung</li>
</ul>
<p>Zus??tzlich gibt es auch die Option, dass Daten erst dann gel??scht werden, wenn Sie innerhalb des von uns gew??hlten Zeitraums nicht mehr unsere Website besuchen. In diesem Fall wird die Aufbewahrungsdauer jedes Mal zur??ckgesetzt, wenn Sie unsere Website innerhalb des festgelegten Zeitraums wieder besuchen.</p>
<p>Wenn der festgelegte Zeitraum abgelaufen ist, werden einmal im Monat die Daten gel??scht. Diese Aufbewahrungsdauer gilt f??r Ihre Daten, die mit Cookies, Usererkennung und Werbe-IDs (z.B. Cookies der DoubleClick-Domain) verkn??pft sind. Berichtergebnisse basieren auf aggregierten Daten und werden unabh??ngig von Nutzerdaten gespeichert. Aggregierte Daten sind eine Zusammenschmelzung von Einzeldaten zu einer gr????eren Einheit.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Wie kann ich meine Daten l??schen bzw. die Datenspeicherung verhindern?</h3>
<p>Nach dem Datenschutzrecht der Europ??ischen Union haben Sie das Recht, Auskunft ??ber Ihre Daten zu erhalten, sie zu aktualisieren, zu l??schen oder einzuschr??nken. Mithilfe des Browser-Add-ons zur Deaktivierung von Google Analytics-JavaScript (ga.js, analytics.js, dc.js) verhindern Sie, dass Google Analytics Ihre Daten verwendet. Das Browser-Add-on k??nnen Sie unter <a class="adsimple-312410493" href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a> runterladen und installieren. Beachten Sie bitte, dass durch dieses Add-on nur die Datenerhebung durch Google Analytics deaktiviert wird.</p>
<p>Falls Sie grunds??tzlich Cookies deaktivieren, l??schen oder verwalten wollen, finden Sie unter dem Abschnitt ???Cookies??? die entsprechenden Links zu den jeweiligen Anleitungen der bekanntesten Browser.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Rechtsgrundlage</h3>
<p>Der Einsatz von Google Analytics setzt Ihre Einwilligung voraus, welche wir mit unserem Cookie Popup eingeholt haben. Diese Einwilligung stellt laut<strong class="adsimple-312410493"> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</strong> die Rechtsgrundlage f??r die Verarbeitung personenbezogener Daten, wie sie bei der Erfassung durch Web-Analytics Tools vorkommen kann, dar.</p>
<p>Zus??tzlich zur Einwilligung besteht von unserer Seite ein berechtigtes Interesse daran, dass Verhalten der Websitebesucher zu analysieren und so unser Angebot technisch und wirtschaftlich zu verbessern. Mit Hilfe von Google Analytics erkennen wir Fehler der Website, k??nnen Attacken identifizieren und die Wirtschaftlichkeit verbessern. Die Rechtsgrundlage daf??r ist <strong class="adsimple-312410493">Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</strong>. Wir setzen Google Analytics gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben.</p>
<p>Google verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen darauf hin, dass nach Meinung des Europ??ischen Gerichtshofs derzeit kein angemessenes Schutzniveau f??r den Datentransfer in die USA besteht. Dies kann mit verschiedenen Risiken f??r die Rechtm????igkeit und Sicherheit der Datenverarbeitung einhergehen.</p>
<p>Als Grundlage der Datenverarbeitung bei Empf??ngern mit Sitz in Drittstaaten (au??erhalb der Europ??ischen Union, Island, Liechtenstein, Norwegen, also insbesondere in den USA) oder einer Datenweitergabe dorthin verwendet Google sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard Contractual Clauses ??? SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen sicherstellen, dass Ihre Daten auch dann den europ??ischen Datenschutzstandards entsprechen, wenn diese in Drittl??nder (wie beispielsweise in die USA) ??berliefert und dort gespeichert werden. Durch diese Klauseln verpflichtet sich Google, bei der Verarbeitung Ihrer relevanten Daten, das europ??ische Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren auf einem Durchf??hrungsbeschluss der EU-Kommission. Sie finden den Beschluss und die entsprechenden Standardvertragsklauseln u.a. hier: <a class="adsimple-312410493" href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de" target="_blank" rel="noopener">https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de</a>
</p>
<p>Die Google Ads Datenverarbeitungsbedingungen (Google Ads Data Processing Terms), welche auf die Standardvertragsklauseln verweisen, finden Sie unter <a class="adsimple-312410493" href="https://business.safety.google/intl/de/adsprocessorterms/" target="_blank" rel="follow noopener">https://business.safety.google/intl/de/adsprocessorterms/</a>.</p>
<p>Wir hoffen, wir konnten Ihnen die wichtigsten Informationen rund um die Datenverarbeitung von Google Analytics n??herbringen. Wenn Sie mehr ??ber den Tracking-Dienst erfahren wollen, empfehlen wir diese beiden Links: <a class="adsimple-312410493" href="https://marketingplatform.google.com/about/analytics/terms/de/">https://marketingplatform.google.com/about/analytics/terms/de/</a> und <a class="adsimple-312410493" href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/6004245?hl=de</a>.</p>
<p>Alle Texte sind urheberrechtlich gesch??tzt.</p>
<p style="margin-top:15px">Quelle: Erstellt mit dem <a href="https://www.adsimple.de/datenschutz-generator/" title="Datenschutz Generator von AdSimple f??r Deutschland">Datenschutz Generator</a> von AdSimple</p>

                `}}>


                </div>
            </main>
        </>
    )
}
