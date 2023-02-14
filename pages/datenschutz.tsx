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
                <h1 class="adsimple-312410493">Datenschutzerklärung</h1>
<h3 class="mt-xlg" id="einleitung-ueberblick" class="adsimple-312410493">Einleitung und Überblick</h3>
<p>Wir haben diese Datenschutzerklärung (Fassung 14.02.2023-312410493) verfasst, um Ihnen gemäß der Vorgaben der <a class="adsimple-312410493" href="https://eur-lex.europa.eu/legal-content/DE/TXT/HTML/?uri=CELEX:32016R0679&amp;from=DE&amp;tid=312410493#d1e2269-1-1" target="_blank" rel="noopener">Datenschutz-Grundverordnung (EU) 2016/679</a> und anwendbaren nationalen Gesetzen zu erklären, welche personenbezogenen Daten (kurz Daten) wir als Verantwortliche &#8211; und die von uns beauftragten Auftragsverarbeiter (z. B. Provider) &#8211; verarbeiten, zukünftig verarbeiten werden und welche rechtmäßigen Möglichkeiten Sie haben. Die verwendeten Begriffe sind geschlechtsneutral zu verstehen.<br />
<strong class="adsimple-312410493">Kurz gesagt:</strong> Wir informieren Sie umfassend über Daten, die wir über Sie verarbeiten.</p>
<p>Datenschutzerklärungen klingen für gewöhnlich sehr technisch und verwenden juristische Fachbegriffe. Diese Datenschutzerklärung soll Ihnen hingegen die wichtigsten Dinge so einfach und transparent wie möglich beschreiben. Soweit es der Transparenz förderlich ist, werden technische <strong class="adsimple-312410493">Begriffe leserfreundlich erklärt</strong>, Links zu weiterführenden Informationen geboten und <strong class="adsimple-312410493">Grafiken</strong> zum Einsatz gebracht. Wir informieren damit in klarer und einfacher Sprache, dass wir im Rahmen unserer Geschäftstätigkeiten nur dann personenbezogene Daten verarbeiten, wenn eine entsprechende gesetzliche Grundlage gegeben ist. Das ist sicher nicht möglich, wenn man möglichst knappe, unklare und juristisch-technische Erklärungen abgibt, so wie sie im Internet oft Standard sind, wenn es um Datenschutz geht. Ich hoffe, Sie finden die folgenden Erläuterungen interessant und informativ und vielleicht ist die eine oder andere Information dabei, die Sie noch nicht kannten.<br />
Wenn trotzdem Fragen bleiben, möchten wir Sie bitten, sich an die unten bzw. im Impressum genannte verantwortliche Stelle zu wenden, den vorhandenen Links zu folgen und sich weitere Informationen auf Drittseiten anzusehen. Unsere Kontaktdaten finden Sie selbstverständlich auch im Impressum.</p>
<h3 class="mt-xlg" id="anwendungsbereich" class="adsimple-312410493">Anwendungsbereich</h3>
<p>Diese Datenschutzerklärung gilt für alle von uns im Unternehmen verarbeiteten personenbezogenen Daten und für alle personenbezogenen Daten, die von uns beauftragte Firmen (Auftragsverarbeiter) verarbeiten. Mit personenbezogenen Daten meinen wir Informationen im Sinne des Art. 4 Nr. 1 DSGVO wie zum Beispiel Name, E-Mail-Adresse und postalische Anschrift einer Person. Die Verarbeitung personenbezogener Daten sorgt dafür, dass wir unsere Dienstleistungen und Produkte anbieten und abrechnen können, sei es online oder offline. Der Anwendungsbereich dieser Datenschutzerklärung umfasst:</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">alle Onlineauftritte (Websites, Onlineshops), die wir betreiben</li>
<li class="adsimple-312410493">Social Media Auftritte und E-Mail-Kommunikation</li>
<li class="adsimple-312410493">mobile Apps für Smartphones und andere Geräte</li>
</ul>
<p>
<strong class="adsimple-312410493">Kurz gesagt:</strong> Die Datenschutzerklärung gilt für alle Bereiche, in denen personenbezogene Daten im Unternehmen über die genannten Kanäle strukturiert verarbeitet werden. Sollten wir außerhalb dieser Kanäle mit Ihnen in Rechtsbeziehungen eintreten, werden wir Sie gegebenenfalls gesondert informieren.</p>
<h3 class="mt-xlg" id="rechtsgrundlagen" class="adsimple-312410493">Rechtsgrundlagen</h3>
<p>In der folgenden Datenschutzerklärung geben wir Ihnen transparente Informationen zu den rechtlichen Grundsätzen und Vorschriften, also den Rechtsgrundlagen der Datenschutz-Grundverordnung, die uns ermöglichen, personenbezogene Daten zu verarbeiten.<br />
Was das EU-Recht betrifft, beziehen wir uns auf die VERORDNUNG (EU) 2016/679 DES EUROPÄISCHEN PARLAMENTS UND DES RATES vom 27. April 2016. Diese Datenschutz-Grundverordnung der EU können Sie selbstverständlich online auf EUR-Lex, dem Zugang zum EU-Recht, unter <a class="adsimple-312410493" href="https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679">https://eur-lex.europa.eu/legal-content/DE/ALL/?uri=celex%3A32016R0679</a> nachlesen.</p>
<p>Wir verarbeiten Ihre Daten nur, wenn mindestens eine der folgenden Bedingungen zutrifft:</p>
<ol>
<li class="adsimple-312410493">
<strong class="adsimple-312410493">Einwilligung</strong> (Artikel 6 Absatz 1 lit. a DSGVO): Sie haben uns Ihre Einwilligung gegeben, Daten zu einem bestimmten Zweck zu verarbeiten. Ein Beispiel wäre die Speicherung Ihrer eingegebenen Daten eines Kontaktformulars.</li>
<li class="adsimple-312410493">
<strong class="adsimple-312410493">Vertrag</strong> (Artikel 6 Absatz 1 lit. b DSGVO): Um einen Vertrag oder vorvertragliche Verpflichtungen mit Ihnen zu erfüllen, verarbeiten wir Ihre Daten. Wenn wir zum Beispiel einen Kaufvertrag mit Ihnen abschließen, benötigen wir vorab personenbezogene Informationen.</li>
<li class="adsimple-312410493">
<strong class="adsimple-312410493">Rechtliche Verpflichtung</strong> (Artikel 6 Absatz 1 lit. c DSGVO): Wenn wir einer rechtlichen Verpflichtung unterliegen, verarbeiten wir Ihre Daten. Zum Beispiel sind wir gesetzlich verpflichtet Rechnungen für die Buchhaltung aufzuheben. Diese enthalten in der Regel personenbezogene Daten.</li>
<li class="adsimple-312410493">
<strong class="adsimple-312410493">Berechtigte Interessen</strong> (Artikel 6 Absatz 1 lit. f DSGVO): Im Falle berechtigter Interessen, die Ihre Grundrechte nicht einschränken, behalten wir uns die Verarbeitung personenbezogener Daten vor. Wir müssen zum Beispiel gewisse Daten verarbeiten, um unsere Website sicher und wirtschaftlich effizient betreiben zu können. Diese Verarbeitung ist somit ein berechtigtes Interesse.</li>
</ol>
<p>Weitere Bedingungen wie die Wahrnehmung von Aufnahmen im öffentlichen Interesse und Ausübung öffentlicher Gewalt sowie dem Schutz lebenswichtiger Interessen treten bei uns in der Regel nicht auf. Soweit eine solche Rechtsgrundlage doch einschlägig sein sollte, wird diese an der entsprechenden Stelle ausgewiesen.</p>
<p>Zusätzlich zu der EU-Verordnung gelten auch noch nationale Gesetze:</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">In <strong class="adsimple-312410493">Österreich</strong> ist dies das Bundesgesetz zum Schutz natürlicher Personen bei der Verarbeitung personenbezogener Daten (<strong class="adsimple-312410493">Datenschutzgesetz</strong>), kurz <strong class="adsimple-312410493">DSG</strong>.</li>
<li class="adsimple-312410493">In <strong class="adsimple-312410493">Deutschland</strong> gilt das <strong class="adsimple-312410493">Bundesdatenschutzgesetz</strong>, kurz<strong class="adsimple-312410493"> BDSG</strong>.</li>
</ul>
<p>Sofern weitere regionale oder nationale Gesetze zur Anwendung kommen, informieren wir Sie in den folgenden Abschnitten darüber.</p>
<h3 class="mt-xlg" id="kontaktdaten-verantwortliche" class="adsimple-312410493">Kontaktdaten des Verantwortlichen</h3>
<p>Sollten Sie Fragen zum Datenschutz oder zur Verarbeitung personenbezogener Daten haben, finden Sie nachfolgend die Kontaktdaten der verantwortlichen Person bzw. Stelle:<br />
<span class="adsimple-312410493" style="font-weight: 400">Musterfirma GbR<br />
Max Mustermann<br />
Musterstraße 47, 12312 Musterstadt, Deutschland</span>
</p>
<p>E-Mail: <a href="mailto:kontakt@webagenturberlin.com">kontakt@webagenturberlin.com</a>
</p>
<p>Impressum: <a href="/impressum">/impressum</a>
</p>
<h3 class="mt-xlg" id="speicherdauer" class="adsimple-312410493">Speicherdauer</h3>
<p>Dass wir personenbezogene Daten nur so lange speichern, wie es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist, gilt als generelles Kriterium bei uns. Das bedeutet, dass wir personenbezogene Daten löschen, sobald der Grund für die Datenverarbeitung nicht mehr vorhanden ist. In einigen Fällen sind wir gesetzlich dazu verpflichtet, bestimmte Daten auch nach Wegfall des ursprüngliches Zwecks zu speichern, zum Beispiel zu Zwecken der Buchführung.</p>
<p>Sollten Sie die Löschung Ihrer Daten wünschen oder die Einwilligung zur Datenverarbeitung widerrufen, werden die Daten so rasch wie möglich und soweit keine Pflicht zur Speicherung besteht, gelöscht.</p>
<p>Über die konkrete Dauer der jeweiligen Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu haben.</p>
<h3 class="mt-xlg" id="rechte-dsgvo" class="adsimple-312410493">Rechte laut Datenschutz-Grundverordnung</h3>
<p>Gemäß Artikel 13, 14 DSGVO informieren wir Sie über die folgenden Rechte, die Ihnen zustehen, damit es zu einer fairen und transparenten Verarbeitung von Daten kommt:</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">Sie haben laut Artikel 15 DSGVO ein Auskunftsrecht darüber, ob wir Daten von Ihnen verarbeiten. Sollte das zutreffen, haben Sie Recht darauf eine Kopie der Daten zu erhalten und die folgenden Informationen zu erfahren:
<ul class="adsimple-312410493">
<li class="adsimple-312410493">zu welchem Zweck wir die Verarbeitung durchführen;</li>
<li class="adsimple-312410493">die Kategorien, also die Arten von Daten, die verarbeitet werden;</li>
<li class="adsimple-312410493">wer diese Daten erhält und wenn die Daten an Drittländer übermittelt werden, wie die Sicherheit garantiert werden kann;</li>
<li class="adsimple-312410493">wie lange die Daten gespeichert werden;</li>
<li class="adsimple-312410493">das Bestehen des Rechts auf Berichtigung, Löschung oder Einschränkung der Verarbeitung und dem Widerspruchsrecht gegen die Verarbeitung;</li>
<li class="adsimple-312410493">dass Sie sich bei einer Aufsichtsbehörde beschweren können (Links zu diesen Behörden finden Sie weiter unten);</li>
<li class="adsimple-312410493">die Herkunft der Daten, wenn wir sie nicht bei Ihnen erhoben haben;</li>
<li class="adsimple-312410493">ob Profiling durchgeführt wird, ob also Daten automatisch ausgewertet werden, um zu einem persönlichen Profil von Ihnen zu gelangen.</li>
</ul>
</li>
<li class="adsimple-312410493">Sie haben laut Artikel 16 DSGVO ein Recht auf Berichtigung der Daten, was bedeutet, dass wir Daten richtig stellen müssen, falls Sie Fehler finden.</li>
<li class="adsimple-312410493">Sie haben laut Artikel 17 DSGVO das Recht auf Löschung („Recht auf Vergessenwerden“), was konkret bedeutet, dass Sie die Löschung Ihrer Daten verlangen dürfen.</li>
<li class="adsimple-312410493">Sie haben laut Artikel 18 DSGVO das Recht auf Einschränkung der Verarbeitung, was bedeutet, dass wir die Daten nur mehr speichern dürfen aber nicht weiter verwenden.</li>
<li class="adsimple-312410493">Sie haben laut Artikel 20 DSGVO das Recht auf Datenübertragbarkeit, was bedeutet, dass wir Ihnen auf Anfrage Ihre Daten in einem gängigen Format zur Verfügung stellen.</li>
<li class="adsimple-312410493">Sie haben laut Artikel 21 DSGVO ein Widerspruchsrecht, welches nach Durchsetzung eine Änderung der Verarbeitung mit sich bringt.
<ul class="adsimple-312410493">
<li class="adsimple-312410493">Wenn die Verarbeitung Ihrer Daten auf Artikel 6 Abs. 1 lit. e (öffentliches Interesse, Ausübung öffentlicher Gewalt) oder Artikel 6 Abs. 1 lit. f (berechtigtes Interesse) basiert, können Sie gegen die Verarbeitung Widerspruch einlegen. Wir prüfen danach so rasch wie möglich, ob wir diesem Widerspruch rechtlich nachkommen können.</li>
<li class="adsimple-312410493">Werden Daten verwendet, um Direktwerbung zu betreiben, können Sie jederzeit gegen diese Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Direktmarketing verwenden.</li>
<li class="adsimple-312410493">Werden Daten verwendet, um Profiling zu betreiben, können Sie jederzeit gegen diese Art der Datenverarbeitung widersprechen. Wir dürfen Ihre Daten danach nicht mehr für Profiling verwenden.</li>
</ul>
</li>
<li class="adsimple-312410493">Sie haben laut Artikel 22 DSGVO unter Umständen das Recht, nicht einer ausschließlich auf einer automatisierten Verarbeitung (zum Beispiel Profiling) beruhenden Entscheidung unterworfen zu werden.</li>
<li class="adsimple-312410493">Sie haben laut Artikel 77 DSGVO das Recht auf Beschwerde. Das heißt, Sie können sich jederzeit bei der Datenschutzbehörde beschweren, wenn Sie der Meinung sind, dass die Datenverarbeitung von personenbezogenen Daten gegen die DSGVO verstößt.</li>
</ul>
<p>
<strong class="adsimple-312410493">Kurz gesagt:</strong> Sie haben Rechte &#8211; zögern Sie nicht, die oben gelistete verantwortliche Stelle bei uns zu kontaktieren!</p>
<p>Wenn Sie glauben, dass die Verarbeitung Ihrer Daten gegen das Datenschutzrecht verstößt oder Ihre datenschutzrechtlichen Ansprüche in sonst einer Weise verletzt worden sind, können Sie sich bei der Aufsichtsbehörde beschweren. Diese ist für Österreich die Datenschutzbehörde, deren Website Sie unter <a class="adsimple-312410493" href="https://www.dsb.gv.at/?tid=312410493" target="_blank" rel="noopener">https://www.dsb.gv.at/</a> finden. In Deutschland gibt es für jedes Bundesland einen Datenschutzbeauftragten. Für nähere Informationen können Sie sich an die <a class="adsimple-312410493" href="https://www.bfdi.bund.de/DE/Home/home_node.html" target="_blank" rel="noopener">Bundesbeauftragte für den Datenschutz und die Informationsfreiheit (BfDI)</a> wenden. Für unser Unternehmen ist die folgende lokale Datenschutzbehörde zuständig:</p>
<h3 class="mt-xlg" id="berlin-datenschutzbehoerde" class="adsimple-312410493">Berlin Datenschutzbehörde</h3>
<p>
<strong class="adsimple-312410493">Landesbeauftragte für Datenschutz:</strong> Maja Smoltczyk<br />
<strong class="adsimple-312410493">Adresse: </strong>Friedrichstraße 219, 10969 Berlin<br />
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
&#x1f91d; Zweck: Abwicklung der Kommunikation mit Kunden, Geschäftspartnern usw.<br />
&#x1f4c5; Speicherdauer: Dauer des Geschäftsfalls und der gesetzlichen Vorschriften<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. b DSGVO (Vertrag), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<p>Wenn Sie mit uns Kontakt aufnehmen und per Telefon, E-Mail oder Online-Formular kommunizieren, kann es zur Verarbeitung personenbezogener Daten kommen.</p>
<p>Die Daten werden für die Abwicklung und Bearbeitung Ihrer Frage und des damit zusammenhängenden Geschäftsvorgangs verarbeitet. Die Daten während eben solange gespeichert bzw. solange es das Gesetz vorschreibt.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Betroffene Personen</h3>
<p>Von den genannten Vorgängen sind alle betroffen, die über die von uns bereit gestellten Kommunikationswege den Kontakt zu uns suchen.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Telefon</h3>
<p>Wenn Sie uns anrufen, werden die Anrufdaten auf dem jeweiligen Endgerät und beim eingesetzten Telekommunikationsanbieter pseudonymisiert gespeichert. Außerdem können Daten wie Name und Telefonnummer im Anschluss per E-Mail versendet und zur Anfragebeantwortung gespeichert werden. Die Daten werden gelöscht, sobald der Geschäftsfall beendet wurde und es gesetzliche Vorgaben erlauben.</p>
<h3 class="mt-xlg" class="adsimple-312410493">E-Mail</h3>
<p>Wenn Sie mit uns per E-Mail kommunizieren, werden Daten gegebenenfalls auf dem jeweiligen Endgerät (Computer, Laptop, Smartphone,&#8230;) gespeichert und es kommt zur Speicherung von Daten auf dem E-Mail-Server. Die Daten werden gelöscht, sobald der Geschäftsfall beendet wurde und es gesetzliche Vorgaben erlauben.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Online Formulare</h3>
<p>Wenn Sie mit uns mittels Online-Formular kommunizieren, werden Daten auf unserem Webserver gespeichert und gegebenenfalls an eine E-Mail-Adresse von uns weitergeleitet. Die Daten werden gelöscht, sobald der Geschäftsfall beendet wurde und es gesetzliche Vorgaben erlauben.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Rechtsgrundlagen</h3>
<p>Die Verarbeitung der Daten basiert auf den folgenden Rechtsgrundlagen:</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">Art. 6 Abs. 1 lit. a DSGVO (Einwilligung): Sie geben uns die Einwilligung Ihre Daten zu speichern und weiter für den Geschäftsfall betreffende Zwecke zu verwenden;</li>
<li class="adsimple-312410493">Art. 6 Abs. 1 lit. b DSGVO (Vertrag): Es besteht die Notwendigkeit für die Erfüllung eines Vertrags mit Ihnen oder einem Auftragsverarbeiter wie z. B. dem Telefonanbieter oder wir müssen die Daten für vorvertragliche Tätigkeiten, wie z. B. die Vorbereitung eines Angebots, verarbeiten;</li>
<li class="adsimple-312410493">Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen): Wir wollen Kundenanfragen und geschäftliche Kommunikation in einem professionellen Rahmen betreiben. Dazu sind gewisse technische Einrichtungen wie z. B. E-Mail-Programme, Exchange-Server und Mobilfunkbetreiber notwendig, um die Kommunikation effizient betreiben zu können.</li>
</ul>
<h3 class="mt-xlg" id="cookies" class="adsimple-312410493">Cookies</h3>
<table  cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-312410493">Cookies Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter unten bzw. beim Hersteller der Software, der das Cookie setzt.<br />
&#x1f4d3; Verarbeitete Daten: Abhängig vom jeweils eingesetzten Cookie. Mehr Details dazu finden Sie weiter unten bzw. beim Hersteller der Software, der das Cookie setzt.<br />
&#x1f4c5; Speicherdauer: abhängig vom jeweiligen Cookie, kann von Stunden bis hin zu Jahren variieren<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit.f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="mt-xlg" class="adsimple-312410493">Was sind Cookies?</h3>
<p>Unsere Website verwendet HTTP-Cookies, um nutzerspezifische Daten zu speichern.<br />
Im Folgenden erklären wir, was Cookies sind und warum Sie genutzt werden, damit Sie die folgende Datenschutzerklärung besser verstehen.</p>
<p>Immer wenn Sie durch das Internet surfen, verwenden Sie einen Browser. Bekannte Browser sind beispielsweise Chrome, Safari, Firefox, Internet Explorer und Microsoft Edge. Die meisten Websites speichern kleine Text-Dateien in Ihrem Browser. Diese Dateien nennt man Cookies.</p>
<p>Eines ist nicht von der Hand zu weisen: Cookies sind echt nützliche Helferlein. Fast alle Websites verwenden Cookies. Genauer gesprochen sind es HTTP-Cookies, da es auch noch andere Cookies für andere Anwendungsbereiche gibt. HTTP-Cookies sind kleine Dateien, die von unserer Website auf Ihrem Computer gespeichert werden. Diese Cookie-Dateien werden automatisch im Cookie-Ordner, quasi dem &#8220;Hirn&#8221; Ihres Browsers, untergebracht. Ein Cookie besteht aus einem Namen und einem Wert. Bei der Definition eines Cookies müssen zusätzlich ein oder mehrere Attribute angegeben werden.</p>
<p>Cookies speichern gewisse Nutzerdaten von Ihnen, wie beispielsweise Sprache oder persönliche Seiteneinstellungen. Wenn Sie unsere Seite wieder aufrufen, übermittelt Ihr Browser die „userbezogenen“ Informationen an unsere Seite zurück. Dank der Cookies weiß unsere Website, wer Sie sind und bietet Ihnen die Einstellung, die Sie gewohnt sind. In einigen Browsern hat jedes Cookie eine eigene Datei, in anderen wie beispielsweise Firefox sind alle Cookies in einer einzigen Datei gespeichert.</p>
<p>Die folgende Grafik zeigt eine mögliche Interaktion zwischen einem Webbrowser wie z. B. Chrome und dem Webserver. Dabei fordert der Webbrowser eine Website an und erhält vom Server ein Cookie zurück, welches der Browser erneut verwendet, sobald eine andere Seite angefordert wird.</p>
<p>
<img role="img" src="https://www.adsimple.at/wp-content/uploads/2018/03/http-cookie-interaction.svg" alt="HTTP Cookie Interaktion zwischen Browser und Webserver" width="100%" />
</p>
<p>Es gibt sowohl Erstanbieter Cookies als auch Drittanbieter-Cookies. Erstanbieter-Cookies werden direkt von unserer Seite erstellt, Drittanbieter-Cookies werden von Partner-Websites (z.B. Google Analytics) erstellt. Jedes Cookie ist individuell zu bewerten, da jedes Cookie andere Daten speichert. Auch die Ablaufzeit eines Cookies variiert von ein paar Minuten bis hin zu ein paar Jahren. Cookies sind keine Software-Programme und enthalten keine Viren, Trojaner oder andere „Schädlinge“. Cookies können auch nicht auf Informationen Ihres PCs zugreifen.</p>
<p>So können zum Beispiel Cookie-Daten aussehen:</p>
<p>
<strong class="adsimple-312410493">Name:</strong> _ga<br />
<strong class="adsimple-312410493">Wert:</strong> GA1.2.1326744211.152312410493-9<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Unterscheidung der Websitebesucher<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong> nach 2 Jahren</p>
<p>Diese Mindestgrößen sollte ein Browser unterstützen können:</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">Mindestens 4096 Bytes pro Cookie</li>
<li class="adsimple-312410493">Mindestens 50 Cookies pro Domain</li>
<li class="adsimple-312410493">Mindestens 3000 Cookies insgesamt</li>
</ul>
<h3 class="mt-xlg" class="adsimple-312410493">Welche Arten von Cookies gibt es?</h3>
<p>Die Frage welche Cookies wir im Speziellen verwenden, hängt von den verwendeten Diensten ab und wird in den folgenden Abschnitten der Datenschutzerklärung geklärt. An dieser Stelle möchten wir kurz auf die verschiedenen Arten von HTTP-Cookies eingehen.</p>
<p>Man kann 4 Arten von Cookies unterscheiden:</p>
<p>
<strong class="adsimple-312410493">Unerlässliche Cookies<br />
</strong>Diese Cookies sind nötig, um grundlegende Funktionen der Website sicherzustellen. Zum Beispiel braucht es diese Cookies, wenn ein User ein Produkt in den Warenkorb legt, dann auf anderen Seiten weitersurft und später erst zur Kasse geht. Durch diese Cookies wird der Warenkorb nicht gelöscht, selbst wenn der User sein Browserfenster schließt.</p>
<p>
<strong class="adsimple-312410493">Zweckmäßige Cookies<br />
</strong>Diese Cookies sammeln Infos über das Userverhalten und ob der User etwaige Fehlermeldungen bekommt. Zudem werden mithilfe dieser Cookies auch die Ladezeit und das Verhalten der Website bei verschiedenen Browsern gemessen.</p>
<p>
<strong class="adsimple-312410493">Zielorientierte Cookies<br />
</strong>Diese Cookies sorgen für eine bessere Nutzerfreundlichkeit. Beispielsweise werden eingegebene Standorte, Schriftgrößen oder Formulardaten gespeichert.</p>
<p>
<strong class="adsimple-312410493">Werbe-Cookies<br />
</strong>Diese Cookies werden auch Targeting-Cookies genannt. Sie dienen dazu dem User individuell angepasste Werbung zu liefern. Das kann sehr praktisch, aber auch sehr nervig sein.</p>
<p>Üblicherweise werden Sie beim erstmaligen Besuch einer Website gefragt, welche dieser Cookiearten Sie zulassen möchten. Und natürlich wird diese Entscheidung auch in einem Cookie gespeichert.</p>
<p>Wenn Sie mehr über Cookies wissen möchten und technische Dokumentationen nicht scheuen, empfehlen wir <a class="adsimple-312410493" href="https://datatracker.ietf.org/doc/html/rfc6265">https://datatracker.ietf.org/doc/html/rfc6265</a>, dem Request for Comments der Internet Engineering Task Force (IETF) namens &#8220;HTTP State Management Mechanism&#8221;.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Zweck der Verarbeitung über Cookies</h3>
<p>Der Zweck ist letztendlich abhängig vom jeweiligen Cookie. Mehr Details dazu finden Sie weiter unten bzw. beim Hersteller der Software, die das Cookie setzt.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Welche Daten werden verarbeitet?</h3>
<p>Cookies sind kleine Gehilfen für eine viele verschiedene Aufgaben. Welche Daten in Cookies gespeichert werden, kann man leider nicht verallgemeinern, aber wir werden Sie im Rahmen der folgenden Datenschutzerklärung über die verarbeiteten bzw. gespeicherten Daten informieren.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Speicherdauer von Cookies</h3>
<p>Die Speicherdauer hängt vom jeweiligen Cookie ab und wird weiter unter präzisiert. Manche Cookies werden nach weniger als einer Stunde gelöscht, andere können mehrere Jahre auf einem Computer gespeichert bleiben.</p>
<p>Sie haben außerdem selbst Einfluss auf die Speicherdauer. Sie können über ihren Browser sämtliche Cookies jederzeit manuell löschen (siehe auch unten &#8220;Widerspruchsrecht&#8221;). Ferner werden Cookies, die auf einer Einwilligung beruhen, spätestens nach Widerruf Ihrer Einwilligung gelöscht, wobei die Rechtmäßigkeit der Speicherung bis dahin unberührt bleibt.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Widerspruchsrecht &#8211; wie kann ich Cookies löschen?</h3>
<p>Wie und ob Sie Cookies verwenden wollen, entscheiden Sie selbst. Unabhängig von welchem Service oder welcher Website die Cookies stammen, haben Sie immer die Möglichkeit Cookies zu löschen, zu deaktivieren oder nur teilweise zuzulassen. Zum Beispiel können Sie Cookies von Drittanbietern blockieren, aber alle anderen Cookies zulassen.</p>
<p>Wenn Sie feststellen möchten, welche Cookies in Ihrem Browser gespeichert wurden, wenn Sie Cookie-Einstellungen ändern oder löschen wollen, können Sie dies in Ihren Browser-Einstellungen finden:</p>
<p>
<a class="adsimple-312410493" href="https://support.google.com/chrome/answer/95647?tid=312410493" target="_blank" rel="noopener noreferrer">Chrome: Cookies in Chrome löschen, aktivieren und verwalten</a>
</p>
<p>
<a class="adsimple-312410493" href="https://support.apple.com/de-at/guide/safari/sfri11471/mac?tid=312410493" target="_blank" rel="noopener noreferrer">Safari: Verwalten von Cookies und Websitedaten mit Safari</a>
</p>
<p>
<a class="adsimple-312410493" href="https://support.mozilla.org/de/kb/cookies-und-website-daten-in-firefox-loschen?tid=312410493" target="_blank" rel="noopener noreferrer">Firefox: Cookies löschen, um Daten zu entfernen, die Websites auf Ihrem Computer abgelegt haben</a>
</p>
<p>
<a class="adsimple-312410493" href="https://support.microsoft.com/de-de/windows/l%C3%B6schen-und-verwalten-von-cookies-168dab11-0753-043d-7c16-ede5947fc64d?tid=312410493">Internet Explorer: Löschen und Verwalten von Cookies</a>
</p>
<p>
<a class="adsimple-312410493" href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-l%C3%B6schen-63947406-40ac-c3b8-57b9-2a946a29ae09?tid=312410493">Microsoft Edge: Löschen und Verwalten von Cookies</a>
</p>
<p>Falls Sie grundsätzlich keine Cookies haben wollen, können Sie Ihren Browser so einrichten, dass er Sie immer informiert, wenn ein Cookie gesetzt werden soll. So können Sie bei jedem einzelnen Cookie entscheiden, ob Sie das Cookie erlauben oder nicht. Die Vorgangsweise ist je nach Browser verschieden. Am besten Sie suchen die Anleitung in Google mit dem Suchbegriff “Cookies löschen Chrome” oder &#8220;Cookies deaktivieren Chrome&#8221; im Falle eines Chrome Browsers.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Rechtsgrundlage</h3>
<p>Seit 2009 gibt es die sogenannten „Cookie-Richtlinien“. Darin ist festgehalten, dass das Speichern von Cookies eine <strong class="adsimple-312410493">Einwilligung</strong> (Artikel 6 Abs. 1 lit. a DSGVO) von Ihnen verlangt. Innerhalb der EU-Länder gibt es allerdings noch sehr unterschiedliche Reaktionen auf diese Richtlinien. In Österreich erfolgte aber die Umsetzung dieser Richtlinie in § 96 Abs. 3 des Telekommunikationsgesetzes (TKG). In Deutschland wurden die Cookie-Richtlinien nicht als nationales Recht umgesetzt. Stattdessen erfolgte die Umsetzung dieser Richtlinie weitgehend in § 15 Abs.3 des Telemediengesetzes (TMG).</p>
<p>Für unbedingt notwendige Cookies, auch soweit keine Einwilligung vorliegt, bestehen <strong class="adsimple-312410493">berechtigte Interessen</strong> (Artikel 6 Abs. 1 lit. f DSGVO), die in den meisten Fällen wirtschaftlicher Natur sind. Wir möchten den Besuchern der Website eine angenehme Benutzererfahrung bescheren und dafür sind bestimmte Cookies oft unbedingt notwendig.</p>
<p>Soweit nicht unbedingt erforderliche Cookies zum Einsatz kommen, geschieht dies nur im Falle Ihrer Einwilligung. Rechtsgrundlage ist insoweit Art. 6 Abs. 1 lit. a DSGVO.</p>
<p>In den folgenden Abschnitten werden Sie genauer über den Einsatz von Cookies informiert, sofern eingesetzte Software Cookies verwendet.</p>
<h3 class="mt-xlg" id="kundendaten" class="adsimple-312410493">Kundendaten</h3>
<table  cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-312410493">Kundendaten Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Kunden bzw. Geschäfts- und Vertragspartner<br />
&#x1f91d; Zweck: Erbringung der vertraglich oder vorvertraglich vereinbarten Leistungen einschließlich zugehörige Kommunikation<br />
&#x1f4d3; Verarbeitete Daten: Name, Adresse, Kontaktdaten, E-Mail-Adresse, Telefonnummer, Zahlungsinformationen (wie z. B. Rechnungen und Bankdaten), Vertragsdaten (wie z. B. Laufzeit und Gegenstand des Vertrags), IP-Adresse, Bestelldaten<br />
&#x1f4c5; Speicherdauer: die Daten werden gelöscht, sobald sie zur Erbringung unserer geschäftlichen Zwecke nicht mehr erforderlich sind und es keine gesetzliche Aufbewahrungspflicht gibt.<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Berechtigtes Interesse (Art. 6 Abs. 1 lit. f DSGVO), Vertrag (Art. 6 Abs 1 lit. b DSGVO)</td>
</tr>
</tbody>
</table>
<h3 class="mt-xlg" class="adsimple-312410493">Was sind Kundendaten?</h3>
<p>Damit wir unser Service bzw. unsere vertraglichen Leistungen anbieten können, verarbeiten wir auch Daten unserer Kunden und Geschäftspartner. Unter diesen Daten befinden sich immer auch personenbezogene Daten. Unter Kundendaten versteht man alle Informationen, die auf Basis einer vertraglichen oder vorvertraglichen Zusammenarbeit verarbeitet werden, um die angebotenen Leistungen erbringen zu können. Kundendaten sind also alle gesammelten Informationen, die wir über unsere Kunden erheben und verarbeiten.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Warum verarbeiten wir Kundendaten?</h3>
<p>Es gibt viele Gründe, warum wir Kundendaten sammeln und verarbeiten. Der wichtigste ist, dass wir zur Bereitstellung unserer Services einfach verschiedene Daten benötigen. Manchmal reicht hier schon Ihre E-Mail-Adresse, doch wenn Sie etwa ein Produkt oder eine Dienstleistung erwerben, benötigen wir auch Daten wie beispielsweise Name, Adresse, Bankdaten oder Vertragsdaten. Wir nutzen die Daten in weiterer Folge auch für Marketing- und Vertriebsoptimierungen, damit wir insgesamt unser Service für unsere Kunden verbessern können. Ein weiterer wichtiger Punkt ist auch unser Kundenservice, der uns stets sehr am Herzen liegt. Wir wollen, dass Sie mit Frage zu unseren Angeboten jederzeit zu uns kommen können und dafür brauchen wir zumindest Ihre E-Mail-Adresse.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Welche Daten werden verarbeitet?</h3>
<p>Welche Daten genau gespeichert werden, kann an dieser Stelle nur anhand Kategorien wiedergegeben werden. Dies hängt nämlich stets davon ab, welche Leistungen Sie von uns beziehen. In manchen Fällen geben Sie uns lediglich Ihre E-Mail-Adresse, damit wir beispielsweise mit Ihnen in Kontakt treten können oder wir Ihre Fragen beantworten können. In anderen Fällen erwerben Sie ein Produkt oder eine Dienstleistung bei uns und dafür benötigen wir deutlich mehr Informationen, wie etwa Ihre Kontaktdaten, Zahlungsdaten und Vertragsdaten.</p>
<p>Hier eine Liste möglicher Daten, die wir von Ihnen erhalten und verarbeiten:</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">Name</li>
<li class="adsimple-312410493">Kontaktadresse</li>
<li class="adsimple-312410493">E-Mail-Adresse</li>
<li class="adsimple-312410493">Telefonnummer</li>
<li class="adsimple-312410493">Geburtsdatum</li>
<li class="adsimple-312410493">Zahlungsdaten (Rechnungen, Bankdaten, Zahlungshistorie etc.)</li>
<li class="adsimple-312410493">Vertragsdaten ( Laufzeit, Inhalt)</li>
<li class="adsimple-312410493">Nutzungsdaten (besuchte Websites, Zugriffsdaten ect.)</li>
<li class="adsimple-312410493">Metadaten (IP-Adresse, Geräte-Informationen)</li>
</ul>
<h3 class="mt-xlg" class="adsimple-312410493">Wie lange werden die Daten gespeichert?</h3>
<p>Sobald wir die Kundendaten zur Erfüllung unserer vertraglichen Pflichten und unserer Zwecke nicht mehr benötigen und die Daten auch nicht für mögliche Gewährleistungs- und Haftungspflichten nötig sind, löschen wir die entsprechenden Kundendaten. Das ist zum Beispiel der Fall, wenn ein geschäftlicher Vertrag endet. Danach beträgt die Verjährungsfrist in der Regel 3 Jahre, wobei längere Fristen im Einzelfall möglich sind. Wir halten uns natürlich auch an die gesetzlichen Aufbewahrungspflichten. Ihre Kundendaten werden ganz sicher nicht an Dritte weitergegeben, wenn Sie dazu nicht explizit eine Einwilligung erteilt haben.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Rechtsgrundlage</h3>
<p>Rechtsgrundlagen für die Verarbeitung Ihrer Daten sind Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs 1 lit. b DSGVO (Vertrag bzw. vorvertragliche Maßnahmen), Art. 6 Abs. 1 lit. f DSGVO (berechtigte Interessen)  und in speziellen Fällen (z. B. bei medizinischen Leistungen) Art. 9 Abs. 2 lit. a. DSGVO (Verarbeitung besonderer Kategorien).</p>
<p>Für den Fall des Schutzes lebenswichtiger Interessen erfolgt die Datenverarbeitung gemäß Art. 9 Abs. 2 lit. c. DSGVO. Für Zwecke der Gesundheitsversorgung, der Arbeitsmedizin, für die medizinische Diagnostik, für die Versorgung oder Behandlung im Gesundheits- oder Sozialbereich oder für die Verwaltung von Systemen und Diensten im Gesundheits- oder Sozialbereich erfolgt die Verarbeitung personenbezogener Daten gemäß Art. 9 Abs. 2 lit. h. DSGVO. Wenn Sie freiwillig Daten der besonderen Kategorien mitteilen, erfolgt die Verarbeitung auf Grundlage von Art. 9 Abs. 2 lit. a. DSGVO.</p>
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
&#x1f4c5; Speicherdauer: abhängig vom jeweiligen Provider, aber in der Regel 2 Wochen<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit.f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="mt-xlg" class="adsimple-312410493">Was ist Webhosting?</h3>
<p>Wenn Sie heutzutage Websites besuchen, werden gewisse Informationen &#8211; auch personenbezogene Daten &#8211; automatisch erstellt und gespeichert, so auch auf dieser Website. Diese Daten sollten möglichst sparsam und nur mit Begründung verarbeitet werden. Mit Website meinen wir übrigens die Gesamtheit aller Webseiten auf einer Domain, d.h. alles von der Startseite (Homepage) bis hin zur aller letzten Unterseite (wie dieser hier). Mit Domain meinen wir zum Beispiel beispiel.de oder musterbeispiel.com.</p>
<p>Wenn Sie eine Website auf einem Computer, Tablet oder Smartphone ansehen möchten, verwenden Sie dafür ein Programm, das sich Webbrowser nennt. Sie kennen vermutlich einige Webbrowser beim Namen: Google Chrome, Microsoft Edge, Mozilla Firefox und Apple Safari. Wir sagen kurz Browser oder Webbrowser dazu.</p>
<p>Um die Website anzuzeigen, muss sich der Browser zu einem anderen Computer verbinden, wo der Code der Website gespeichert ist: dem Webserver. Der Betrieb eines Webservers ist eine komplizierte und aufwendige Aufgabe, weswegen dies in der Regel von professionellen Anbietern, den Providern, übernommen wird. Diese bieten Webhosting an und sorgen damit für eine verlässliche und fehlerfreie Speicherung der Daten von Websites. Eine ganze Menge Fachbegriffe, aber bitte bleiben Sie dran, es wird noch besser!</p>
<p>Bei der Verbindungsaufnahme des Browsers auf Ihrem Computer (Desktop, Laptop, Tablet oder Smartphone) und während der Datenübertragung zu und vom Webserver kann es zu einer Verarbeitung personenbezogener Daten kommen. Einerseits speichert Ihr Computer Daten, andererseits muss auch der Webserver Daten eine Zeit lang speichern, um einen ordentlichen Betrieb zu gewährleisten.</p>
<p>Ein Bild sagt mehr als tausend Worte, daher zeigt folgende Grafik zur Veranschaulichung das Zusammenspiel zwischen Browser, dem Internet und dem Hosting-Provider.</p>
<p>
<img role="img" src="https://www.adsimple.at/wp-content/uploads/2018/03/browser-und-webserver.svg" alt="Browser und Webserver" width="100%" />
</p>
<h3 class="mt-xlg" class="adsimple-312410493">Warum verarbeiten wir personenbezogene Daten?</h3>
<p>Die Zwecke der Datenverarbeitung sind:</p>
<ol>
<li class="adsimple-312410493">Professionelles Hosting der Website und Absicherung des Betriebs</li>
<li class="adsimple-312410493">zur Aufrechterhaltung der Betriebs- und IT-Sicherheit</li>
<li class="adsimple-312410493">Anonyme Auswertung des Zugriffsverhaltens zur Verbesserung unseres Angebots und ggf. zur Strafverfolgung bzw. Verfolgung von Ansprüchen</li>
</ol>
<h3 class="mt-xlg" class="adsimple-312410493">Welche Daten werden verarbeitet?</h3>
<p>Auch während Sie unsere Website jetzt gerade besuchen, speichert unser Webserver, das ist der Computer auf dem diese Webseite gespeichert ist, in der Regel automatisch Daten wie</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">die komplette Internetadresse (URL) der aufgerufenen Webseite</li>
<li class="adsimple-312410493">Browser und Browserversion (z. B. Chrome 87)</li>
<li class="adsimple-312410493">das verwendete Betriebssystem (z. B. Windows 10)</li>
<li class="adsimple-312410493">die Adresse (URL) der zuvor besuchten Seite (Referrer URL) (z. B. <a class="adsimple-312410493" href="https://www.beispielquellsite.de/vondabinichgekommen/" target="_blank" rel="follow noopener">https://www.beispielquellsite.de/vondabinichgekommen/</a>)</li>
<li class="adsimple-312410493">den Hostnamen und die IP-Adresse des Geräts von welchem aus zugegriffen wird (z. B. COMPUTERNAME und 194.23.43.121)</li>
<li class="adsimple-312410493">Datum und Uhrzeit</li>
<li class="adsimple-312410493">in Dateien, den sogenannten Webserver-Logfiles</li>
</ul>
<h3 class="mt-xlg" class="adsimple-312410493">Wie lange werden Daten gespeichert?</h3>
<p>In der Regel werden die oben genannten Daten zwei Wochen gespeichert und danach automatisch gelöscht. Wir geben diese Daten nicht weiter, können jedoch nicht ausschließen, dass diese Daten beim Vorliegen von rechtswidrigem Verhalten von Behörden eingesehen werden.</p>
<p>
<strong class="adsimple-312410493">Kurz gesagt:</strong> Ihr Besuch wird durch unseren Provider (Firma, die unsere Website auf speziellen Computern (Servern) laufen lässt), protokolliert, aber wir geben Ihre Daten nicht ohne Zustimmung weiter!</p>
<h3 class="mt-xlg" class="adsimple-312410493">Rechtsgrundlage</h3>
<p>Die Rechtmäßigkeit der Verarbeitung personenbezogener Daten im Rahmen des Webhosting ergibt sich aus Art. 6 Abs. 1 lit. f DSGVO (Wahrung der berechtigten Interessen), denn die Nutzung von professionellem Hosting bei einem Provider ist notwendig, um das Unternehmen im Internet sicher und nutzerfreundlich präsentieren und Angriffe und Forderungen hieraus gegebenenfalls verfolgen zu können.</p>
<p>Zwischen uns und dem Hosting-Provider besteht in der Regel ein Vertrag über die Auftragsverarbeitung gemäß Art. 28 f. DSGVO, der die Einhaltung von Datenschutz gewährleistet und Datensicherheit garantiert.</p>
<h3 class="mt-xlg" id="netlify-datenschutzerklaerung" class="adsimple-312410493">Netlify Datenschutzerklärung</h3>
<p>Wir verwenden für unsere Website den Webhosting-Anbieter Netlify. Dienstanbieter ist das amerikanische Unternehmen Netlify Inc., 2325 3rd Street, Suite 29, San Francisco, CA 94104, USA.</p>
<p>Netlify verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen darauf hin, dass nach Meinung des Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in die USA besteht. Dies kann mit verschiedenen Risiken für die Rechtmäßigkeit und Sicherheit der Datenverarbeitung einhergehen.</p>
<p>Als Grundlage der Datenverarbeitung bei Empfängern mit Sitz in Drittstaaten (außerhalb der Europäischen Union, Island, Liechtenstein, Norwegen, also insbesondere in den USA) oder einer Datenweitergabe dorthin verwendet Netlify sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard Contractual Clauses – SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen sicherstellen, dass Ihre Daten auch dann den europäischen Datenschutzstandards entsprechen, wenn diese in Drittländer (wie beispielsweise in die USA) überliefert und dort gespeichert werden. Durch diese Klauseln verpflichtet sich Netlify, bei der Verarbeitung Ihrer relevanten Daten, das europäische Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren auf einem Durchführungsbeschluss der EU-Kommission. Sie finden den Beschluss und die entsprechenden Standardvertragsklauseln u.a. hier: <a class="adsimple-312410493" href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de">https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de</a>
</p>
<p>Netlify hält einen Vertrag über die Auftragsverarbeitung gemäß Art. 28 DSGVO bereit, der als datenschutzrechtliche Grundlage für unsere Kundenbeziehung zu Netlify fungiert. Dieser verweist inhaltlich auf die EU-Standardvertragsklauseln. Sie finden ihn hier: <a class="adsimple-312410493" href="https://www.netlify.com/pdf/netlify-dpa.pdf" target="_blank" rel="follow noopener">https://www.netlify.com/pdf/netlify-dpa.pdf</a>
</p>
<p>Mehr über die Daten, die durch die Verwendung von Netlify verarbeitet werden, erfahren Sie in der Privacy Policy auf <a class="adsimple-312410493" href="https://www.netlify.com/privacy/?tid=312410493">https://www.netlify.com/privacy/</a>.</p>
<h3 class="mt-xlg" id="web-analytics-einleitung" class="adsimple-312410493">Web Analytics Einleitung</h3>
<table  cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-312410493">Web Analytics Datenschutzerklärung Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: Auswertung der Besucherinformationen zur Optimierung des Webangebots.<br />
&#x1f4d3; Verarbeitete Daten: Zugriffsstatistiken, die Daten wie Standorte der Zugriffe, Gerätedaten, Zugriffsdauer und Zeitpunkt, Navigationsverhalten, Klickverhalten und IP-Adressen enthalten. Mehr Details dazu finden Sie beim jeweils eingesetzten Web Analytics Tool.<br />
&#x1f4c5; Speicherdauer: abhängig vom eingesetzten Web-Analytics-Tool<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="mt-xlg" class="adsimple-312410493">Was ist Web Analytics?</h3>
<p>Wir verwenden auf unserer Website Software zur Auswertung des Verhaltens der Website-Besucher, kurz Web Analytics oder Web-Analyse genannt. Dabei werden Daten gesammelt, die der jeweilige Analytic-Tool-Anbieter (auch Trackingtool genannt) speichert, verwaltet und verarbeitet. Mit Hilfe der Daten werden Analysen über das Nutzerverhalten auf unserer Website erstellt und uns als Websitebetreiber zur Verfügung gestellt. Zusätzlich bieten die meisten Tools verschiedene Testmöglichkeiten an. So können wir etwa testen, welche Angebote oder Inhalte bei unseren Besuchern am besten ankommen. Dafür zeigen wir Ihnen für einen begrenzten Zeitabschnitt zwei verschiedene Angebote. Nach dem Test (sogenannter A/B-Test) wissen wir, welches Produkt bzw. welcher Inhalt unsere Websitebesucher interessanter finden. Für solche Testverfahren, wie auch für andere Analytics-Verfahren, können auch Userprofile erstellt werden und die Daten in Cookies gespeichert werden.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Warum betreiben wir Web Analytics?</h3>
<p>Mit unserer Website haben wir ein klares Ziel vor Augen: wir wollen für unsere Branche das beste Webangebot auf dem Markt liefern. Um dieses Ziel zu erreichen, wollen wir einerseits das beste und interessanteste Angebot bieten und andererseits darauf achten, dass Sie sich auf unserer Website rundum wohlfühlen. Mit Hilfe von Webanalyse-Tools können wir das Verhalten unserer Websitebesucher genauer unter die Lupe nehmen und dann entsprechend unser Webangebot für Sie und uns verbessern. So können wir beispielsweise erkennen wie alt unsere Besucher durchschnittlich sind, woher sie kommen, wann unsere Website am meisten besucht wird oder welche Inhalte oder Produkte besonders beliebt sind. All diese Informationen helfen uns die Website zu optimieren und somit bestens an Ihre Bedürfnisse, Interessen und Wünsche anzupassen.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Welche Daten werden verarbeitet?</h3>
<p>Welche Daten genau gespeichert werden, hängt natürlich von den verwendeten Analyse-Tools ab. Doch in der Regel wird zum Beispiel gespeichert, welche Inhalte Sie auf unserer Website ansehen, auf welche Buttons oder Links Sie klicken, wann Sie eine Seite aufrufen, welchen Browser sie verwenden, mit welchem Gerät (PC, Tablet, Smartphone usw.) Sie die Website besuchen oder welches Computersystem Sie verwenden. Wenn Sie damit einverstanden waren, dass auch Standortdaten erhoben werden dürfen, können auch diese durch den Webanalyse-Tool-Anbieter verarbeitet werden.</p>
<p>Zudem wird auch Ihre IP-Adresse gespeichert. Gemäß der Datenschutz-Grundverordnung (DSGVO) sind IP-Adressen personenbezogene Daten. Ihre IP-Adresse wird allerdings in der Regel pseudonymisiert (also in unkenntlicher und gekürzter Form) gespeichert. Für den Zweck der Tests, der Webanalyse und der Weboptimierung werden grundsätzlich keine direkten Daten, wie etwa Ihr Name, Ihr Alter, Ihre Adresse oder Ihre E-Mail-Adresse gespeichert. All diese Daten werden, sofern sie erhoben werden, pseudonymisiert gespeichert. So können Sie als Person nicht identifiziert werden.</p>
<p>Das folgende Beispiel zeigt schematisch die Funktionsweise von Google Analytics als Beispiel für client-basiertes Webtracking mit Java-Script-Code.</p>
<p>
<img role="img" src="https://www.adsimple.at/wp-content/uploads/2021/04/google-analytics-dataflow.svg" alt="Schematischer Datenfluss bei Google Analytics" width="100%" />
</p>
<p>Wie lange die jeweiligen Daten gespeichert werden, hängt immer vom Anbieter ab. Manche Cookies speichern Daten nur für ein paar Minuten bzw. bis Sie die Website wieder verlassen, andere Cookies können Daten über mehrere Jahre speichern.</p>
<h3 class="mt-xlg" class="adsimple-312410493">
<span class="adsimple-312410493" data-sheets-value="{&quot;1&quot;:2,&quot;2&quot;:&quot;Wo und wie lange werden Daten gespeichert?&quot;}" data-sheets-userformat="{&quot;2&quot;:769,&quot;3&quot;:{&quot;1&quot;:0},&quot;11&quot;:4,&quot;12&quot;:0}">Dauer der Datenverarbeitung</span>
</h3>
<p>Über die Dauer der Datenverarbeitung informieren wir Sie weiter unten, sofern wir weitere Informationen dazu haben. Generell verarbeiten wir personenbezogene Daten nur so lange wie es für die Bereitstellung unserer Dienstleistungen und Produkte unbedingt notwendig ist. Wenn es, wie zum Beispiel im Fall von Buchhaltung, gesetzlich vorgeschrieben ist, kann diese Speicherdauer auch überschritten werden.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Widerspruchsrecht</h3>
<p>Sie haben auch jederzeit das Recht und die Möglichkeit Ihre Einwilligung zur Verwendung von Cookies bzw. Drittanbietern zu widerrufen. Das funktioniert entweder über unser Cookie-Management-Tool oder über andere Opt-Out-Funktionen. Zum Beispiel können Sie auch die Datenerfassung durch Cookies verhindern, indem Sie in Ihrem Browser die Cookies verwalten, deaktivieren oder löschen.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Rechtsgrundlage</h3>
<p>Der Einsatz von Web-Analytics setzt Ihre Einwilligung voraus, welche wir mit unserem Cookie Popup eingeholt haben. Diese Einwilligung stellt laut<strong class="adsimple-312410493"> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</strong> die Rechtsgrundlage für die Verarbeitung personenbezogener Daten, wie sie bei der Erfassung durch Web-Analytics Tools vorkommen kann, dar.</p>
<p>Zusätzlich zur Einwilligung besteht von unserer Seite ein berechtigtes Interesse daran, das Verhalten der Websitebesucher zu analysieren und so unser Angebot technisch und wirtschaftlich zu verbessern. Mit Hilfe von Web-Analytics erkennen wir Fehler der Website, können Attacken identifizieren und die Wirtschaftlichkeit verbessern. Die Rechtsgrundlage dafür ist <strong class="adsimple-312410493">Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</strong>. Wir setzen die Tools gleichwohl nur ein, soweit sie eine Einwilligung erteilt haben.</p>
<p>Da bei Web-Analytics-Tools Cookies zum Einsatz kommen, empfehlen wir Ihnen auch das Lesen unserer allgemeinen Datenschutzerklärung zu Cookies. Um zu erfahren, welche Daten von Ihnen genau gespeichert und verarbeitet werden, sollten Sie die Datenschutzerklärungen der jeweiligen Tools durchlesen.</p>
<p>Informationen zu speziellen Web-Analytics-Tools, erhalten Sie &#8211; sofern vorhanden &#8211; in den folgenden Abschnitten.</p>
<h3 class="mt-xlg" id="google-analytics-datenschutzerklaerung" class="adsimple-312410493">Google Analytics Datenschutzerklärung</h3>
<table  cellpadding="15">
<tbody>
<tr>
<td>
<strong class="adsimple-312410493">Google Analytics Datenschutzerklärung Zusammenfassung</strong>
<br />
&#x1f465; Betroffene: Besucher der Website<br />
&#x1f91d; Zweck: Auswertung der Besucherinformationen zur Optimierung des Webangebots.<br />
&#x1f4d3; Verarbeitete Daten: Zugriffsstatistiken, die Daten wie Standorte der Zugriffe, Gerätedaten, Zugriffsdauer und Zeitpunkt, Navigationsverhalten, Klickverhalten und IP-Adressen enthalten. Mehr Details dazu finden Sie weiter unten in dieser Datenschutzerklärung.<br />
&#x1f4c5; Speicherdauer: abhängig von den verwendeten Properties<br />
&#x2696;&#xfe0f; Rechtsgrundlagen: Art. 6 Abs. 1 lit. a DSGVO (Einwilligung), Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</td>
</tr>
</tbody>
</table>
<h3 class="mt-xlg" class="adsimple-312410493">Was ist Google Analytics?</h3>
<p>Wir verwenden auf unserer Website das Analyse-Tracking Tool Google Analytics (GA) des amerikanischen Unternehmens Google Inc. Für den europäischen Raum ist das Unternehmen Google Ireland Limited (Gordon House, Barrow Street Dublin 4, Irland) für alle Google-Dienste verantwortlich. Google Analytics sammelt Daten über Ihre Handlungen auf unserer Website. Wenn Sie beispielsweise einen Link anklicken, wird diese Aktion in einem Cookie gespeichert und an Google Analytics versandt. Mithilfe der Berichte, die wir von Google Analytics erhalten, können wir unsere Website und unser Service besser an Ihre Wünsche anpassen. Im Folgenden gehen wir näher auf das Tracking-Tool ein und informieren Sie vor allem darüber, welche Daten gespeichert werden und wie Sie das verhindern können.</p>
<p>Google Analytics ist ein Trackingtool, das der Datenverkehrsanalyse unserer Website dient. Damit Google Analytics funktioniert, wird ein Tracking-Code in den Code unserer Website eingebaut. Wenn Sie unsere Website besuchen, zeichnet dieser Code verschiedene Handlungen auf, die Sie auf unserer Website ausführen. Sobald Sie unsere Website verlassen, werden diese Daten an die Google-Analytics-Server gesendet und dort gespeichert.</p>
<p>Google verarbeitet die Daten und wir bekommen Berichte über Ihr Userverhalten. Dabei kann es sich unter anderem um folgende Berichte handeln:</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">Zielgruppenberichte: Über Zielgruppenberichte lernen wir unsere User besser kennen und wissen genauer, wer sich für unser Service interessiert.</li>
<li class="adsimple-312410493">Anzeigeberichte: Durch Anzeigeberichte können wir unsere Onlinewerbung leichter analysieren und verbessern.</li>
<li class="adsimple-312410493">Akquisitionsberichte: Akquisitionsberichte geben uns hilfreiche Informationen darüber, wie wir mehr Menschen für unser Service begeistern können.</li>
<li class="adsimple-312410493">Verhaltensberichte: Hier erfahren wir, wie Sie mit unserer Website interagieren. Wir können nachvollziehen welchen Weg Sie auf unserer Seite zurücklegen und welche Links Sie anklicken.</li>
<li class="adsimple-312410493">Conversionsberichte: Conversion nennt man einen Vorgang, bei dem Sie aufgrund einer Marketing-Botschaft eine gewünschte Handlung ausführen. Zum Beispiel, wenn Sie von einem reinen Websitebesucher zu einem Käufer oder Newsletter-Abonnent werden. Mithilfe dieser Berichte erfahren wir mehr darüber, wie unsere Marketing-Maßnahmen bei Ihnen ankommen. So wollen wir unsere Conversionrate steigern.</li>
<li class="adsimple-312410493">Echtzeitberichte: Hier erfahren wir immer sofort, was gerade auf unserer Website passiert. Zum Beispiel sehen wir wie viele User gerade diesen Text lesen.</li>
</ul>
<h3 class="mt-xlg" class="adsimple-312410493">Warum verwenden wir Google Analytics auf unserer Website?</h3>
<p>Unser Ziel mit dieser Website ist klar: Wir wollen Ihnen das bestmögliche Service bieten. Die Statistiken und Daten von Google Analytics helfen uns dieses Ziel zu erreichen.</p>
<p>Die statistisch ausgewerteten Daten zeigen uns ein klares Bild von den Stärken und Schwächen unserer Website. Einerseits können wir unsere Seite so optimieren, dass sie von interessierten Menschen auf Google leichter gefunden wird. Andererseits helfen uns die Daten, Sie als Besucher besser zu verstehen. Wir wissen somit sehr genau, was wir an unserer Website verbessern müssen, um Ihnen das bestmögliche Service zu bieten. Die Daten dienen uns auch, unsere Werbe- und Marketing-Maßnahmen individueller und kostengünstiger durchzuführen. Schließlich macht es nur Sinn, unsere Produkte und Dienstleistungen Menschen zu zeigen, die sich dafür interessieren.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Welche Daten werden von Google Analytics gespeichert?</h3>
<p>Google Analytics erstellt mithilfe eines Tracking-Codes eine zufällige, eindeutige ID, die mit Ihrem Browser-Cookie verbunden ist. So erkennt Sie Google Analytics als neuen User. Wenn Sie das nächste Mal unsere Seite besuchen, werden Sie als „wiederkehrender“ User erkannt. Alle gesammelten Daten werden gemeinsam mit dieser User-ID gespeichert. So ist es überhaupt erst möglich pseudonyme Userprofile auszuwerten.</p>
<p>Um mit Google Analytics unsere Website analysieren zu können, muss eine Property-ID in den Tracking-Code eingefügt werden. Die Daten werden dann in der entsprechenden Property gespeichert. Für jede neu angelegte Property ist die Google Analytics 4-Property standardmäßig. Alternativ kann man aber auch noch die Universal Analytics Property erstellen. Je nach verwendeter Property werden Daten unterschiedlich lange gespeichert.</p>
<p>Durch Kennzeichnungen wie Cookies und App-Instanz-IDs werden Ihre Interaktionen auf unserer Website gemessen. Interaktionen sind alle Arten von Handlungen, die Sie auf unserer Website ausführen. Wenn Sie auch andere Google-Systeme (wie z.B. ein Google-Konto) nützen, können über Google Analytics generierte Daten mit Drittanbieter-Cookies verknüpft werden. Google gibt keine Google Analytics-Daten weiter, außer wir als Websitebetreiber genehmigen das. Zu Ausnahmen kann es kommen, wenn es gesetzlich erforderlich ist.</p>
<p>Folgende Cookies werden von Google Analytics verwendet:</p>
<p>
<strong class="adsimple-312410493">Name:</strong> _ga<br />
<strong class="adsimple-312410493">Wert: </strong>2.1326744211.152312410493-5<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Standardmäßig verwendet analytics.js das Cookie _ga, um die User-ID zu speichern. Grundsätzlich dient es zur Unterscheidung der Webseitenbesucher.<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong> nach 2 Jahren</p>
<p>
<strong class="adsimple-312410493">Name:</strong> _gid<br />
<strong class="adsimple-312410493">Wert: </strong>2.1687193234.152312410493-1<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Das Cookie dient auch zur Unterscheidung der Webseitenbesucher<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong> nach 24 Stunden</p>
<p>
<strong class="adsimple-312410493">Name:</strong> _gat_gtag_UA_&lt;property-id&gt;<br />
<strong class="adsimple-312410493">Wert:</strong> 1<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Wird zum Senken der Anforderungsrate verwendet. Wenn Google Analytics über den Google Tag Manager bereitgestellt wird, erhält dieser Cookie den Namen _dc_gtm_ &lt;property-id&gt;.<br />
<strong class="adsimple-312410493">Ablaufdatum: </strong>nach 1 Minute</p>
<p>
<strong class="adsimple-312410493">Name:</strong> AMP_TOKEN<br />
<strong class="adsimple-312410493">Wert:</strong> keine Angaben<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Das Cookie hat einen Token, mit dem eine User ID vom AMP-Client-ID-Dienst abgerufen werden kann. Andere mögliche Werte weisen auf eine Abmeldung, eine Anfrage oder einen Fehler hin.<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong> nach 30 Sekunden bis zu einem Jahr</p>
<p>
<strong class="adsimple-312410493">Name:</strong> __utma<br />
<strong class="adsimple-312410493">Wert: </strong>1564498958.1564498958.1564498958.1<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Mit diesem Cookie kann man Ihr Verhalten auf der Website verfolgen und die Leistung messen. Das Cookie wird jedes Mal aktualisiert, wenn Informationen an Google Analytics gesendet werden.<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong> nach 2 Jahren</p>
<p>
<strong class="adsimple-312410493">Name:</strong> __utmt<br />
<strong class="adsimple-312410493">Wert:</strong> 1<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Das Cookie wird wie _gat_gtag_UA_&lt;property-id&gt; zum Drosseln der Anforderungsrate verwendet.<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong> nach 10 Minuten</p>
<p>
<strong class="adsimple-312410493">Name:</strong> __utmb<br />
<strong class="adsimple-312410493">Wert: </strong>3.10.1564498958<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Dieses Cookie wird verwendet, um neue Sitzungen zu bestimmen. Es wird jedes Mal aktualisiert, wenn neue Daten bzw. Infos an Google Analytics gesendet werden.<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong> nach 30 Minuten</p>
<p>
<strong class="adsimple-312410493">Name:</strong> __utmc<br />
<strong class="adsimple-312410493">Wert:</strong> 167421564<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Dieses Cookie wird verwendet, um neue Sitzungen für wiederkehrende Besucher festzulegen. Dabei handelt es sich um ein Session-Cookie und wird nur solange gespeichert, bis Sie den Browser wieder schließen.<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong> Nach Schließung des Browsers</p>
<p>
<strong class="adsimple-312410493">Name:</strong> __utmz<br />
<strong class="adsimple-312410493">Wert:</strong> m|utmccn=(referral)|utmcmd=referral|utmcct=/<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Das Cookie wird verwendet, um die Quelle des Besucheraufkommens auf unserer Website zu identifizieren. Das heißt, das Cookie speichert, von wo Sie auf unsere Website gekommen sind. Das kann eine andere Seite bzw. eine Werbeschaltung gewesen sein.<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong> nach 6 Monaten</p>
<p>
<strong class="adsimple-312410493">Name:</strong> __utmv<br />
<strong class="adsimple-312410493">Wert:</strong> keine Angabe<br />
<strong class="adsimple-312410493">Verwendungszweck:</strong> Das Cookie wird verwendet, um benutzerdefinierte Userdaten zu speichern. Es wird immer aktualisiert, wenn Informationen an Google Analytics gesendet werden.<br />
<strong class="adsimple-312410493">Ablaufdatum:</strong> nach 2 Jahren</p>
<p>
<strong class="adsimple-312410493">Anmerkung:</strong> Diese Aufzählung kann keinen Anspruch auf Vollständigkeit erheben, da Google die Wahl ihrer Cookies immer wieder auch verändert.</p>
<p>Hier zeigen wir Ihnen einen Überblick über die wichtigsten Daten, die mit Google Analytics erhoben werden:</p>
<p>
<strong class="adsimple-312410493">Heatmaps:</strong> Google legt sogenannte Heatmaps an. Über Heatmaps sieht man genau jene Bereiche, die Sie anklicken. So bekommen wir Informationen, wo Sie auf unserer Seite „unterwegs“ sind.</p>
<p>
<strong class="adsimple-312410493">Sitzungsdauer:</strong> Als Sitzungsdauer bezeichnet Google die Zeit, die Sie auf unserer Seite verbringen, ohne die Seite zu verlassen. Wenn Sie 20 Minuten inaktiv waren, endet die Sitzung automatisch.</p>
<p>
<strong class="adsimple-312410493">Absprungrate</strong> (engl. Bouncerate): Von einem Absprung ist die Rede, wenn Sie auf unserer Website nur eine Seite ansehen und dann unsere Website wieder verlassen.</p>
<p>
<strong class="adsimple-312410493">Kontoerstellung:</strong> Wenn Sie auf unserer Website ein Konto erstellen bzw. eine Bestellung machen, erhebt Google Analytics diese Daten.</p>
<p>
<strong class="adsimple-312410493">IP-Adresse:</strong> Die IP-Adresse wird nur in gekürzter Form dargestellt, damit keine eindeutige Zuordnung möglich ist.</p>
<p>
<strong class="adsimple-312410493">Standort:</strong> Über die IP-Adresse kann das Land und Ihr ungefährer Standort bestimmt werden. Diesen Vorgang bezeichnet man auch als IP- Standortbestimmung.</p>
<p>
<strong class="adsimple-312410493">Technische Informationen:</strong> Zu den technischen Informationen zählen unter anderem Ihr Browsertyp, Ihr Internetanbieter oder Ihre Bildschirmauflösung.</p>
<p>
<strong class="adsimple-312410493">Herkunftsquelle:</strong> Google Analytics beziehungsweise uns interessiert natürlich auch über welche Website oder welche Werbung Sie auf unsere Seite gekommen sind.</p>
<p>Weitere Daten sind Kontaktdaten, etwaige Bewertungen, das Abspielen von Medien (z. B. wenn Sie ein Video über unsere Seite abspielen), das Teilen von Inhalten über Social Media oder das Hinzufügen zu Ihren Favoriten. Die Aufzählung hat keinen Vollständigkeitsanspruch und dient nur zu einer allgemeinen Orientierung der Datenspeicherung durch Google Analytics.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Wie lange und wo werden die Daten gespeichert?</h3>
<p>Google hat ihre Server auf der ganzen Welt verteilt. Die meisten Server befinden sich in Amerika und folglich werden Ihre Daten meist auf amerikanischen Servern gespeichert. Hier können Sie genau nachlesen wo sich die Google-Rechenzentren befinden: <a class="adsimple-312410493" href="https://www.google.com/about/datacenters/locations/?hl=de" target="_blank" rel="follow noopener">https://www.google.com/about/datacenters/locations/?hl=de</a>
</p>
<p>Ihre Daten werden auf verschiedenen physischen Datenträgern verteilt. Das hat den Vorteil, dass die Daten schneller abrufbar sind und vor Manipulation besser geschützt sind. In jedem Google-Rechenzentrum gibt es entsprechende Notfallprogramme für Ihre Daten. Wenn beispielsweise die Hardware bei Google ausfällt oder Naturkatastrophen Server lahmlegen, bleibt das Risiko einer Dienstunterbrechung bei Google dennoch gering.</p>
<p>Die Aufbewahrungsdauer der Daten hängt von den verwendeten Properties ab. Bei der Verwendung der neueren Google Analytics 4-Properties ist die Aufbewahrungsdauer Ihrer Userdaten auf 14 Monate fix eingestellt. Für andere sogenannte Ereignisdaten haben wir die Möglichkeit eine Aufbewahrungsdauer von 2 Monaten oder 14 Monaten zu wählen.</p>
<p>Bei Universal Analytics-Properties ist bei Google Analytics eine Aufbewahrungsdauer Ihrer Userdaten von 26 Monaten standardisiert eingestellt. Dann werden Ihre Userdaten gelöscht. Allerdings haben wir die Möglichkeit, die Aufbewahrungsdauer von Nutzdaten selbst zu wählen. Dafür stehen uns fünf Varianten zur Verfügung:</p>
<ul class="adsimple-312410493">
<li class="adsimple-312410493">Löschung nach 14 Monaten</li>
<li class="adsimple-312410493">Löschung nach 26 Monaten</li>
<li class="adsimple-312410493">Löschung nach 38 Monaten</li>
<li class="adsimple-312410493">Löschung nach 50 Monaten</li>
<li class="adsimple-312410493">Keine automatische Löschung</li>
</ul>
<p>Zusätzlich gibt es auch die Option, dass Daten erst dann gelöscht werden, wenn Sie innerhalb des von uns gewählten Zeitraums nicht mehr unsere Website besuchen. In diesem Fall wird die Aufbewahrungsdauer jedes Mal zurückgesetzt, wenn Sie unsere Website innerhalb des festgelegten Zeitraums wieder besuchen.</p>
<p>Wenn der festgelegte Zeitraum abgelaufen ist, werden einmal im Monat die Daten gelöscht. Diese Aufbewahrungsdauer gilt für Ihre Daten, die mit Cookies, Usererkennung und Werbe-IDs (z.B. Cookies der DoubleClick-Domain) verknüpft sind. Berichtergebnisse basieren auf aggregierten Daten und werden unabhängig von Nutzerdaten gespeichert. Aggregierte Daten sind eine Zusammenschmelzung von Einzeldaten zu einer größeren Einheit.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Wie kann ich meine Daten löschen bzw. die Datenspeicherung verhindern?</h3>
<p>Nach dem Datenschutzrecht der Europäischen Union haben Sie das Recht, Auskunft über Ihre Daten zu erhalten, sie zu aktualisieren, zu löschen oder einzuschränken. Mithilfe des Browser-Add-ons zur Deaktivierung von Google Analytics-JavaScript (ga.js, analytics.js, dc.js) verhindern Sie, dass Google Analytics Ihre Daten verwendet. Das Browser-Add-on können Sie unter <a class="adsimple-312410493" href="https://tools.google.com/dlpage/gaoptout?hl=de" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a> runterladen und installieren. Beachten Sie bitte, dass durch dieses Add-on nur die Datenerhebung durch Google Analytics deaktiviert wird.</p>
<p>Falls Sie grundsätzlich Cookies deaktivieren, löschen oder verwalten wollen, finden Sie unter dem Abschnitt „Cookies“ die entsprechenden Links zu den jeweiligen Anleitungen der bekanntesten Browser.</p>
<h3 class="mt-xlg" class="adsimple-312410493">Rechtsgrundlage</h3>
<p>Der Einsatz von Google Analytics setzt Ihre Einwilligung voraus, welche wir mit unserem Cookie Popup eingeholt haben. Diese Einwilligung stellt laut<strong class="adsimple-312410493"> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)</strong> die Rechtsgrundlage für die Verarbeitung personenbezogener Daten, wie sie bei der Erfassung durch Web-Analytics Tools vorkommen kann, dar.</p>
<p>Zusätzlich zur Einwilligung besteht von unserer Seite ein berechtigtes Interesse daran, dass Verhalten der Websitebesucher zu analysieren und so unser Angebot technisch und wirtschaftlich zu verbessern. Mit Hilfe von Google Analytics erkennen wir Fehler der Website, können Attacken identifizieren und die Wirtschaftlichkeit verbessern. Die Rechtsgrundlage dafür ist <strong class="adsimple-312410493">Art. 6 Abs. 1 lit. f DSGVO (Berechtigte Interessen)</strong>. Wir setzen Google Analytics gleichwohl nur ein, soweit Sie eine Einwilligung erteilt haben.</p>
<p>Google verarbeitet Daten von Ihnen u.a. auch in den USA. Wir weisen darauf hin, dass nach Meinung des Europäischen Gerichtshofs derzeit kein angemessenes Schutzniveau für den Datentransfer in die USA besteht. Dies kann mit verschiedenen Risiken für die Rechtmäßigkeit und Sicherheit der Datenverarbeitung einhergehen.</p>
<p>Als Grundlage der Datenverarbeitung bei Empfängern mit Sitz in Drittstaaten (außerhalb der Europäischen Union, Island, Liechtenstein, Norwegen, also insbesondere in den USA) oder einer Datenweitergabe dorthin verwendet Google sogenannte Standardvertragsklauseln (= Art. 46. Abs. 2 und 3 DSGVO). Standardvertragsklauseln (Standard Contractual Clauses – SCC) sind von der EU-Kommission bereitgestellte Mustervorlagen und sollen sicherstellen, dass Ihre Daten auch dann den europäischen Datenschutzstandards entsprechen, wenn diese in Drittländer (wie beispielsweise in die USA) überliefert und dort gespeichert werden. Durch diese Klauseln verpflichtet sich Google, bei der Verarbeitung Ihrer relevanten Daten, das europäische Datenschutzniveau einzuhalten, selbst wenn die Daten in den USA gespeichert, verarbeitet und verwaltet werden. Diese Klauseln basieren auf einem Durchführungsbeschluss der EU-Kommission. Sie finden den Beschluss und die entsprechenden Standardvertragsklauseln u.a. hier: <a class="adsimple-312410493" href="https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de" target="_blank" rel="noopener">https://eur-lex.europa.eu/eli/dec_impl/2021/914/oj?locale=de</a>
</p>
<p>Die Google Ads Datenverarbeitungsbedingungen (Google Ads Data Processing Terms), welche auf die Standardvertragsklauseln verweisen, finden Sie unter <a class="adsimple-312410493" href="https://business.safety.google/intl/de/adsprocessorterms/" target="_blank" rel="follow noopener">https://business.safety.google/intl/de/adsprocessorterms/</a>.</p>
<p>Wir hoffen, wir konnten Ihnen die wichtigsten Informationen rund um die Datenverarbeitung von Google Analytics näherbringen. Wenn Sie mehr über den Tracking-Dienst erfahren wollen, empfehlen wir diese beiden Links: <a class="adsimple-312410493" href="https://marketingplatform.google.com/about/analytics/terms/de/">https://marketingplatform.google.com/about/analytics/terms/de/</a> und <a class="adsimple-312410493" href="https://support.google.com/analytics/answer/6004245?hl=de" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/6004245?hl=de</a>.</p>
<p>Alle Texte sind urheberrechtlich geschützt.</p>
<p style="margin-top:15px">Quelle: Erstellt mit dem <a href="https://www.adsimple.de/datenschutz-generator/" title="Datenschutz Generator von AdSimple für Deutschland">Datenschutz Generator</a> von AdSimple</p>

                `}}>


                </div>
            </main>
        </>
    )
}
