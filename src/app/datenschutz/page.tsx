import Image from "next/image";

const Datenschutz = () => {
  return (
    <>
      {/* Sub Hero Section */}
      <div className="relative w-full h-[300px] mb-8">
        <Image
          src="/images/Due_Frattelli_36.jpg"
          alt="Privacy Policy Hero Image"
          fill
          priority
          className="object-cover brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-black/30">
          <div className="container mx-auto h-full flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center">
              Datenschutzerklärung
            </h1>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="prose prose-lg max-w-none">
          <h1 className="text-3xl font-bold mb-8 text-gray-900">
            DATENSCHUTZERKLÄRUNG
          </h1>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              1. Datenschutz auf einen Blick
            </h2>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Allgemeine Hinweise
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Die folgenden Hinweise geben einen einfachen Überblick darüber,
              was mit Ihren personenbezogenen Daten passiert, wenn Sie diese
              Website besuchen. Personenbezogene Daten sind alle Daten, mit
              denen Sie persönlich identifiziert werden können. Ausführliche
              Informationen zum Thema Datenschutz entnehmen Sie unserer unter
              diesem Text aufgeführten Datenschutzerklärung.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Datenerfassung auf dieser Website
            </h3>

            <h4 className="text-lg font-medium mb-2 text-gray-700">
              Wer ist verantwortlich für die Datenerfassung auf dieser Website?
            </h4>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Die Datenverarbeitung auf dieser Website erfolgt durch den
              Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum
              dieser Website entnehmen.
            </p>

            <h4 className="text-lg font-medium mb-2 text-gray-700">
              Wie erfassen wir Ihre Daten?
            </h4>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese
              mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in
              ein Kontaktformular eingeben. Andere Daten werden automatisch oder
              nach Ihrer Einwilligung beim Besuch der Website durch unsere
              ITSysteme erfasst. Das sind vor allem technische Daten (z. B.
              Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese
              Website betreten.
            </p>

            <h4 className="text-lg font-medium mb-2 text-gray-700">
              Wofür nutzen wir Ihre Daten?
            </h4>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Ein Teil der Daten wird erhoben, um eine fehlerfreie
              Bereitstellung der Website zu gewährleisten. Andere Daten können
              zur Analyse Ihres Nutzerverhaltens verwendet werden.
            </p>

            <h4 className="text-lg font-medium mb-2 text-gray-700">
              Welche Rechte haben Sie bezüglich Ihrer Daten?
            </h4>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Sie haben jederzeit das Recht, unentgeltlich Auskunft über
              Herkunft, Empfänger und Zweck Ihrer gespeicherten
              personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht,
              die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie
              eine Einwilligung zur Datenverarbeitung erteilt haben, können Sie
              diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
              haben Sie das Recht, unter bestimmten Umständen die Einschränkung
              der Verarbeitung Ihrer personenbezogenen Daten zu verlangen. Des
              Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen
              Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema
              Datenschutz können Sie sich jederzeit unter der im Impressum
              angegebenen Adresse an uns wenden.
            </p>

            <h4 className="text-lg font-medium mb-2 text-gray-700">
              Analyse-Tools und Tools von Drittanbietern
            </h4>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch
              ausgewertet werden. Das geschieht vor allem mit sogenannten
              Analyseprogrammen.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Detaillierte Informationen zu diesen Analyseprogrammen finden Sie
              in der folgenden Datenschutzerklärung.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              2. Hosting und Content Delivery Networks (CDN)
            </h2>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Externes Hosting
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Diese Website wird bei einem externen Dienstleister gehostet
              (Hoster). Die personenbezogenen Daten, die auf dieser Website
              erfasst werden, werden auf den Servern des Hosters gespeichert.
              Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta-
              und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen,
              Websitezugriffe und sonstige Daten, die über eine Website
              generiert werden, handeln. Der Einsatz des Hosters erfolgt zum
              Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
              bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse
              einer sicheren, schnellen und effizienten Bereitstellung unseres
              Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs.
              1 lit. f DSGVO).
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Unser Hoster wird Ihre Daten nur insoweit verarbeiten, wie dies
              zur Erfüllung seiner Leistungspflichten erforderlich ist und
              unsere Weisungen in Bezug auf diese Daten befolgen.
            </p>

            <h4 className="text-lg font-medium mb-2 text-gray-700">
              Abschluss eines Vertrages über Auftragsverarbeitung
            </h4>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Um die datenschutzkonforme Verarbeitung zu gewährleisten, haben
              wir einen Vertrag über Auftragsverarbeitung mit unserem Hoster
              geschlossen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              3. Allgemeine Hinweise und Pflichtinformationen
            </h2>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Datenschutz
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen
              Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten
              vertraulich und entsprechend der gesetzlichen
              Datenschutzvorschriften sowie dieser Datenschutzerklärung.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Wenn Sie diese Website benutzen, werden verschiedene
              personenbezogene Daten erhoben.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Personenbezogene Daten sind Daten, mit denen Sie persönlich
              identifiziert werden können. Die vorliegende Datenschutzerklärung
              erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie
              erläutert auch, wie und zu welchem Zweck das geschieht.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Wir weisen darauf hin, dass die Datenübertragung im Internet (z.
              B. bei der Kommunikation per E-Mail) Sicherheitslücken aufweisen
              kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch
              Dritte ist nicht möglich.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Hinweis zur verantwortlichen Stelle
            </h3>
            <p className="mb-2 text-gray-600 leading-relaxed">
              Die verantwortliche Stelle für die Datenverarbeitung auf dieser
              Website ist:
            </p>
            <div className="bg-gray-50 p-4 rounded-lg mb-4">
              <p className="text-gray-700 font-medium">
                Fratelli Travemünde GmbH
              </p>
              <p className="text-gray-600">Ballindamm 15</p>
              <p className="text-gray-600">20095 Hamburg</p>
              <p className="text-gray-600">HRB 186925</p>
              <p className="text-gray-600">Telefon: +49 (0) 4502 3640</p>
              <p className="text-gray-600">
                E-Mail: info@due-fratelli-del-mare.de
              </p>
            </div>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Verantwortliche Stelle ist die natürliche oder juristische Person,
              die allein oder gemeinsam mit anderen über die Zwecke und Mittel
              der Verarbeitung von personenbezogenen Daten (z. B. Namen,
              E-Mail-Adressen o. Ä.) entscheidet.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Widerruf Ihrer Einwilligung zur Datenverarbeitung
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen
              Einwilligung möglich. Sie können eine bereits erteilte
              Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum
              Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf
              unberührt.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen
              sowie gegen Direktwerbung (Art. 21 DSGVO)
            </h3>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-gray-700 font-medium uppercase text-sm leading-relaxed">
                WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT.
                E ODER F DSGVO ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS
                GRÜNDEN, DIE SICH AUS IHRER BESONDEREN SITUATION ERGEBEN, GEGEN
                DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN WIDERSPRUCH
                EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN
                GESTÜTZTES PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN
                EINE VERARBEITUNG BERUHT, ENTNEHMEN SIE DIESER
                DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN, WERDEN WIR
                IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN,
                ES SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE
                VERARBEITUNG NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND
                FREIHEITEN ÜBERWIEGEN ODER DIE VERARBEITUNG DIENT DER
                GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON RECHTSANSPRÜCHEN
                (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
              </p>
              <p className="text-gray-700 font-medium uppercase text-sm leading-relaxed mt-4">
                WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM
                DIREKTWERBUNG ZU BETREIBEN, SO HABEN SIE DAS RECHT, JEDERZEIT
                WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE BETREFFENDER
                PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
                EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT
                SOLCHER DIREKTWERBUNG IN VERBINDUNG STEHT. WENN SIE
                WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN ANSCHLIESSEND
                NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
                NACH ART. 21 ABS. 2 DSGVO).
              </p>
            </div>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Beschwerderecht bei der zuständigen Aufsichtsbehörde
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein
              Beschwerderecht bei einer Aufsichtsbehörde, insbesondere in dem
              Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
              oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht
              besteht unbeschadet anderweitiger verwaltungsrechtlicher oder
              gerichtlicher Rechtsbehelfe.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Recht auf Datenübertragbarkeit
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Sie haben das Recht, Daten, die wir auf Grundlage Ihrer
              Einwilligung oder in Erfüllung eines Vertrags automatisiert
              verarbeiten, an sich oder an einen Dritten in einem gängigen,
              maschinenlesbaren Format aushändigen zu lassen. Sofern Sie die
              direkte Übertragung der Daten an einen anderen Verantwortlichen
              verlangen, erfolgt dies nur, soweit es technisch machbar ist.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              SSL- bzw. TLS-Verschlüsselung
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der
              Übertragung vertraulicher Inhalte, wie zum Beispiel Bestellungen
              oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine
              SSL- bzw. TLS-Verschlüsselung.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Eine verschlüsselte Verbindung erkennen Sie daran, dass die
              Adresszeile des Browsers von &quot;http://&quot; auf
              &quot;https://&quot; wechselt und an dem Schloss-Symbol in Ihrer
              Browserzeile.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die
              Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen
              werden.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Auskunft, Löschung und Berichtigung
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen
              jederzeit das Recht auf unentgeltliche Auskunft über Ihre
              gespeicherten personenbezogenen Daten, deren Herkunft und
              Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht
              auf Berichtigung oder Löschung dieser Daten. Hierzu sowie zu
              weiteren Fragen zum Thema personenbezogene Daten können Sie sich
              jederzeit unter der im Impressum angegebenen Adresse an uns
              wenden.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Recht auf Einschränkung der Verarbeitung
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer
              personenbezogenen Daten zu verlangen. Hierzu können Sie sich
              jederzeit unter der im Impressum angegebenen Adresse an uns
              wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
              folgenden Fällen:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 leading-relaxed">
              <li className="mb-2">
                Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten
                personenbezogenen Daten bestreiten, benötigen wir in der Regel
                Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie
                das Recht, die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </li>
              <li className="mb-2">
                Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig
                geschah/geschieht, können Sie statt der Löschung die
                Einschränkung der Datenverarbeitung verlangen.
              </li>
              <li className="mb-2">
                Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie
                sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von
                Rechtsansprüchen benötigen, haben Sie das Recht, statt der
                Löschung die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen.
              </li>
              <li className="mb-2">
                Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt
                haben, muss eine Abwägung zwischen Ihren und unseren Interessen
                vorgenommen werden. Solange noch nicht feststeht, wessen
                Interessen überwiegen, haben Sie das Recht, die Einschränkung
                der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </li>
            </ul>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten
              eingeschränkt haben, dürfen diese Daten – von ihrer Speicherung
              abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung,
              Ausübung oder Verteidigung von Rechtsansprüchen oder zum Schutz
              der Rechte einer anderen natürlichen oder juristischen Person oder
              aus Gründen eines wichtigen öffentlichen Interesses der
              Europäischen Union oder eines Mitgliedstaats verarbeitet werden.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              4. Datenerfassung auf dieser Website
            </h2>

            <h3 className="text-xl font-medium mb-3 text-gray-700">Cookies</h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Unsere Internetseiten verwenden so genannte &quot;Cookies&quot;.
              Cookies sind kleine Textdateien und richten auf Ihrem Endgerät
              keinen Schaden an. Sie werden entweder vorübergehend für die Dauer
              einer Sitzung (Session-Cookies) oder dauerhaft (permanente
              Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden
              nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies
              bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst
              löschen oder eine automatische Löschung durch Ihren Webbrowser
              erfolgt.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Teilweise können auch Cookies von Drittunternehmen auf Ihrem
              Endgerät gespeichert werden, wenn Sie unsere Seite betreten
              (Third-Party-Cookies). Diese ermöglichen uns oder Ihnen die
              Nutzung bestimmter Dienstleistungen des Drittunternehmens (z.B.
              Cookies zur Abwicklung von Zahlungsdienstleistungen).
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind
              technisch notwendig, da bestimmte Websitefunktionen ohne diese
              nicht funktionieren würden (z.B. die Warenkorbfunktion oder die
              Anzeige von Videos). Andere Cookies dienen dazu, das
              Nutzerverhalten auszuwerten oder Werbung anzuzeigen.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Cookies, die zur Durchführung des elektronischen
              Kommunikationsvorgangs (notwendige Cookies) oder zur
              Bereitstellung bestimmter, von Ihnen erwünschter Funktionen
              (funktionale Cookies, z. B. für die Warenkorbfunktion) oder zur
              Optimierung der Website (z.B. Cookies zur Messung des
              Webpublikums) erforderlich sind, werden auf Grundlage von Art. 6
              Abs. 1 lit. f DSGVO gespeichert, sofern keine andere
              Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein
              berechtigtes Interesse an der Speicherung von Cookies zur
              technisch fehlerfreien und optimierten Bereitstellung seiner
              Dienste.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Sofern eine Einwilligung zur Speicherung von Cookies abgefragt
              wurde, erfolgt die Speicherung der betreffenden Cookies
              ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1
              lit. a DSGVO); die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Sie können Ihren Browser so einstellen, dass Sie über das Setzen
              von Cookies informiert werden und Cookies nur im Einzelfall
              erlauben, die Annahme von Cookies für bestimmte Fälle oder
              generell ausschließen sowie das automatische Löschen der Cookies
              beim Schließen des Browsers aktivieren.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Bei der Deaktivierung von Cookies kann die Funktionalität dieser
              Website eingeschränkt sein.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Soweit Cookies von Drittunternehmen oder zu Analysezwecken
              eingesetzt werden, werden wir Sie hierüber im Rahmen dieser
              Datenschutzerklärung gesondert informieren und ggf. eine
              Einwilligung abfragen.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Server-Log-Dateien
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Der Provider der Seiten erhebt und speichert automatisch
              Informationen in so genannten Server-Log-Dateien, die Ihr Browser
              automatisch an uns übermittelt. Dies sind:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 leading-relaxed">
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>Referrer URL</li>
              <li>Hostname des zugreifenden Rechners</li>
              <li>Uhrzeit der Serveranfrage</li>
              <li>IP-Adresse</li>
            </ul>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Eine Zusammenführung dieser Daten mit anderen Datenquellen wird
              nicht vorgenommen.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1
              lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse
              an der technisch fehlerfreien Darstellung und der Optimierung
              seiner Website – hierzu müssen die Server-Log-Files erfasst
              werden.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Kontaktformular
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden
              Ihre Angaben aus dem Anfrageformular inklusive der von Ihnen dort
              angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage und für
              den Fall von Anschlussfragen bei uns gespeichert. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              sofern diese abgefragt wurde.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei
              uns, bis Sie uns zur Löschung auffordern, Ihre Einwilligung zur
              Speicherung widerrufen oder der Zweck für die Datenspeicherung
              entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage).
              Zwingende gesetzliche Bestimmungen – insbesondere
              Aufbewahrungsfristen – bleiben unberührt.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Anfrage per E-Mail, Telefon oder Telefax
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird
              Ihre Anfrage inklusive aller daraus hervorgehenden
              personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung
              Ihres Anliegens bei uns gespeichert und verarbeitet. Diese Daten
              geben wir nicht ohne Ihre Einwilligung weiter.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6
              Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit der Erfüllung eines
              Vertrags zusammenhängt oder zur Durchführung vorvertraglicher
              Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die
              Verarbeitung auf unserem berechtigten Interesse an der effektiven
              Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f
              DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a DSGVO)
              sofern diese abgefragt wurde.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Die von Ihnen an uns per Kontaktanfragen übersandten Daten
              verbleiben bei uns, bis Sie uns zur Löschung auffordern, Ihre
              Einwilligung zur Speicherung widerrufen oder der Zweck für die
              Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung
              Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
              insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              5. Soziale Medien
            </h2>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Facebook Plugins (Like & Share-Button)
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Auf dieser Website sind Plugins des sozialen Netzwerks Facebook
              integriert. Anbieter dieses Dienstes ist die Facebook Ireland
              Limited, 4 Grand Canal Square, Dublin 2, Irland. Die erfassten
              Daten werden nach Aussage von Facebook jedoch auch in die USA und
              in andere Drittländer übertragen.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Die Facebook Plugins erkennen Sie an dem Facebook-Logo oder dem
              &quot;Like-Button&quot; (&quot;Gefällt mir&quot;) auf dieser
              Website. Eine Übersicht über die Facebook Plugins finden Sie hier:
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              <a
                href="https://developers.facebook.com/docs/plugins/?locale=de_DE"
                className="text-blue-600 hover:underline"
              >
                https://developers.facebook.com/docs/plugins/?locale=de_DE
              </a>
              .
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Wenn Sie diese Website besuchen, wird über das Plugin eine direkte
              Verbindung zwischen Ihrem Browser und dem Facebook-Server
              hergestellt. Facebook erhält dadurch die Information, dass Sie mit
              Ihrer IP-Adresse diese Website besucht haben.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Wenn Sie den Facebook &quot;Like-Button&quot; anklicken während
              Sie in Ihrem Facebook-Account eingeloggt sind, können Sie die
              Inhalte dieser Website auf Ihrem Facebook-Profil verlinken.
              Dadurch kann Facebook den Besuch dieser Website Ihrem
              Benutzerkonto zuordnen. Wir weisen darauf hin, dass wir als
              Anbieter der Seiten keine Kenntnis vom Inhalt der übermittelten
              Daten sowie deren Nutzung durch Facebook erhalten. Weitere
              Informationen hierzu finden Sie in der Datenschutzerklärung von
              Facebook unter:
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              <a
                href="https://de-de.facebook.com/privacy/explanation"
                className="text-blue-600 hover:underline"
              >
                https://de-de.facebook.com/privacy/explanation
              </a>
              .
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Wenn Sie nicht wünschen, dass Facebook den Besuch dieser Website
              Ihrem Facebook-Nutzerkonto zuordnen kann, loggen Sie sich bitte
              aus Ihrem Facebook-Benutzerkonto aus.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Die Verwendung der Facebook Plugins erfolgt auf Grundlage von Art.
              6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes
              Interesse an einer möglichst umfangreichen Sichtbarkeit in den
              Sozialen Medien. Sofern eine entsprechende Einwilligung abgefragt
              wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit
              widerrufbar.
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Instagram Plugin
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Auf dieser Website sind Funktionen des Dienstes Instagram
              eingebunden. Diese Funktionen werden angeboten durch die Instagram
              Inc., 1601 Willow Road, Menlo Park, CA 94025, USA integriert.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Wenn Sie in Ihrem Instagram-Account eingeloggt sind, können Sie
              durch Anklicken des Instagram-Buttons die Inhalte dieser Website
              mit Ihrem Instagram-Profil verlinken. Dadurch kann Instagram den
              Besuch dieser Website Ihrem Benutzerkonto zuordnen. Wir weisen
              darauf hin, dass wir als Anbieter der Seiten keine Kenntnis vom
              Inhalt der übermittelten Daten sowie deren Nutzung durch Instagram
              erhalten.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Die Speicherung und Analyse der Daten erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an einer möglichst umfangreichen
              Sichtbarkeit in den Sozialen Medien. Sofern eine entsprechende
              Einwilligung abgefragt wurde, erfolgt die Verarbeitung
              ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die
              Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Weitere Informationen hierzu finden Sie in der
              Datenschutzerklärung von Instagram:
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              <a
                href="https://instagram.com/about/legal/privacy/"
                className="text-blue-600 hover:underline"
              >
                https://instagram.com/about/legal/privacy/
              </a>
              .
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              6. Analyse-Tools und Werbung
            </h2>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              IONOS Web Analytics
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Diese Website nutzt die Analysedienste von IONOS-Webanalytics (im
              Folgenden: IONOS). Anbieter ist die 1&1 IONOS SE, Elgendorfer
              Straße 57, D – 56410 Montabaur. Im Rahmen der Analysen mit IONOS
              können u. a. Besucherzahlen und –verhalten (z. B. Anzahl der
              Seitenaufrufe, Dauer eines Webseitenbesuchs, Absprungraten),
              Besucherquellen (d. h., von welcher Seite der Besucher kommt),
              Besucherstandorte sowie technische Daten (Browser- und
              Betriebssystemversionen) analysiert werden. Zu diesem Zweck
              speichert IONOS insbesondere folgende Daten:
            </p>
            <ul className="list-disc pl-6 mb-4 text-gray-600 leading-relaxed">
              <li>Referrer (zuvor besuchte Webseite)</li>
              <li>angeforderte Webseite oder Datei</li>
              <li>Browsertyp und Browserversion</li>
              <li>verwendetes Betriebssystem</li>
              <li>verwendeter Gerätetyp</li>
              <li>Uhrzeit des Zugriffs</li>
              <li>
                IP-Adresse in anonymisierter Form (wird nur zur Feststellung des
                Orts des Zugriffs verwendet)
              </li>
            </ul>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Die Datenerfassung erfolgt laut IONOS vollständig anonymisiert,
              sodass sie nicht zu einzelnen Personen zurückverfolgt werden kann.
              Cookies werden von IONOS-Webanalytics nicht gespeichert.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Die Speicherung und Analyse der Daten erfolgt auf Grundlage von
              Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein
              berechtigtes Interesse an der statistischen Analyse des
              Nutzerverhaltens, um sowohl sein Webangebot als auch seine Werbung
              zu optimieren. Sofern eine entsprechende Einwilligung abgefragt
              wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von
              Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist jederzeit
              widerrufbar.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Weitere Informationen zur Datenerfassung und Verarbeitung durch
              IONOS-Webanalytics entnehmen Sie der Datenschutzerklärung von
              IONOS unter folgendem Link:
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              <a
                href="https://www.ionos.de/terms-gtc/index.php?id=6"
                className="text-blue-600 hover:underline"
              >
                https://www.ionos.de/terms-gtc/index.php?id=6
              </a>
            </p>

            <h4 className="text-lg font-medium mb-2 text-gray-700">
              Auftragsverarbeitung
            </h4>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Wir haben mit IONOS einen Vertrag zur Auftragsverarbeitung
              abgeschlossen. Dieser Vertrag soll den datenschutzkonformen Umgang
              mit Ihren personenbezogenen Daten durch IONOS sicherstellen.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-800">
              7. Plugins und Tools
            </h2>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Google Web Fonts
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten
              so genannte Web Fonts, die von Google bereitgestellt werden. Beim
              Aufruf einer Seite lädt Ihr Browser die benötigten Web Fonts in
              ihren Browsercache, um Texte und Schriftarten korrekt anzuzeigen.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Zu diesem Zweck muss der von Ihnen verwendete Browser Verbindung
              zu den Servern von Google aufnehmen. Hierdurch erlangt Google
              Kenntnis darüber, dass über Ihre IP-Adresse diese Website
              aufgerufen wurde. Die Nutzung von Google WebFonts erfolgt auf
              Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Der Websitebetreiber hat ein berechtigtes Interesse an der
              einheitlichen Darstellung des Schriftbildes auf seiner Website.
              Sofern eine entsprechende Einwilligung abgefragt wurde (z. B. eine
              Einwilligung zur Speicherung von Cookies), erfolgt die
              Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. A
              DSGVO; die Einwilligung ist jederzeit widerrufbar.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Wenn Ihr Browser Web Fonts nicht unterstützt, wird eine
              Standardschrift von Ihrem Computer genutzt.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Weitere Informationen zu Google Web Fonts finden Sie unter
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              <a
                href="https://developers.google.com/fonts/faq"
                className="text-blue-600 hover:underline"
              >
                https://developers.google.com/fonts/faq
              </a>{" "}
              und in der Datenschutzerklärung von Google:
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              <a
                href="https://policies.google.com/privacy?hl=de"
                className="text-blue-600 hover:underline"
              >
                https://policies.google.com/privacy?hl=de
              </a>
              .
            </p>

            <h3 className="text-xl font-medium mb-3 text-gray-700">
              Google Maps
            </h3>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Diese Seite nutzt über eine API den Kartendienst Google Maps.
              Anbieter ist die Google Ireland Limited (&quot;Google&quot;),
              Gordon House, Barrow Street, Dublin 4, Irland.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Zur Nutzung der Funktionen von Google Maps ist es notwendig, Ihre
              IP-Adresse zu speichern. Diese Informationen werden in der Regel
              an einen Server von Google in den USA übertragen und dort
              gespeichert.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Der Anbieter dieser Seite hat keinen Einfluss auf diese
              Datenübertragung.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Die Nutzung von Google Maps erfolgt im Interesse einer
              ansprechenden Darstellung unserer Online- Angebote und an einer
              leichten Auffindbarkeit der von uns auf der Website angegebenen
              Orte. Dies stellt ein berechtigtes Interesse im Sinne von Art. 6
              Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende Einwilligung
              abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf
              Grundlage von Art. 6 Abs. 1 lit. A DSGVO; die Einwilligung ist
              jederzeit widerrufbar.
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              Mehr Informationen zum Umgang mit Nutzerdaten finden Sie in der
              Datenschutzerklärung von Google:
            </p>
            <p className="mb-4 text-gray-600 leading-relaxed">
              <a
                href="https://policies.google.com/privacy?hl=de"
                className="text-blue-600 hover:underline"
              >
                https://policies.google.com/privacy?hl=de
              </a>
              .
            </p>
          </section>

          <div className="mt-8 pt-4 border-t border-gray-200">
            <p className="text-sm text-gray-500">Quelle: eRecht24</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Datenschutz;
