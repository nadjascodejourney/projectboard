import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Imprint = () => {
  return (
    <main className="container mx-auto p-6">
      <Accordion type="single" collapsible className="w-full">
        {/* English Version */}
        <AccordionItem value="english">
          <AccordionTrigger>English Version</AccordionTrigger>
          <AccordionContent>
            <h2 className={"font-bold"}>Information pursuant to § 5 TMG</h2>
            <p>
              Nadja Probst
              <br />
              [Street Address] <br />
              [Postal Code, City] <br />
              Germany
            </p>

            <h2>Contact</h2>
            <p>
              Email:
              <a href="mailto:nadja.probst25@gmail.com">
                nadja.probst25@gmail.com
              </a>
            </p>

            <h2 className={"font-bold"}>
              Responsible for the content according to § 55 Abs. 2 RStV
            </h2>
            <p>
              Nadja Probst
              <br />
              [Street Address] <br />
              [Postal Code, City] <br />
              Germany
            </p>

            <h2 className={"font-bold"}>Disclaimer</h2>

            <h3>Liability for content</h3>
            <p>
              As a service provider, I am responsible for my own content on
              these pages according to § 7 Abs.1 TMG under general laws.
              However, according to §§ 8 to 10 TMG, I am not obliged to monitor
              transmitted or stored third-party information or to investigate
              circumstances that indicate illegal activity. Obligations to
              remove or block the use of information under general laws remain
              unaffected. However, liability in this regard is only possible
              from the point in time at which I become aware of a specific
              infringement. Upon becoming aware of any such violations, I will
              remove the content immediately.
            </p>

            <h3>Liability for links</h3>
            <p>
              My website contains links to external third-party websites, the
              content of which I have no control over. Therefore, I cannot
              assume any liability for these external contents. The respective
              provider or operator of the linked websites is always responsible
              for the content of the linked pages. The linked pages were checked
              for possible legal violations at the time of linking. Illegal
              content was not recognizable at the time of linking. However, a
              permanent control of the linked pages is not reasonable without
              concrete evidence of a violation. If I become aware of any legal
              violations, I will remove such links immediately.
            </p>

            <h3>Copyright</h3>
            <p>
              The content and works on these pages created by the site operator
              are subject to German copyright law. The reproduction, editing,
              distribution, and any kind of exploitation outside the limits of
              copyright law require the written consent of the respective author
              or creator. Downloads and copies of this site are only permitted
              for private, non-commercial use. Insofar as the content on this
              site was not created by the operator, the copyrights of third
              parties are respected. In particular, third-party content is
              marked as such. Should you nevertheless become aware of a
              copyright infringement, please notify me accordingly. Upon
              becoming aware of legal violations, I will remove such content
              immediately.
            </p>
          </AccordionContent>
        </AccordionItem>

        {/* German Version */}
        <AccordionItem value="german">
          <AccordionTrigger>Deutsche Version</AccordionTrigger>
          <AccordionContent>
            <h2 className={"font-bold"}>Angaben gemäß § 5 TMG</h2>
            <p>
              Nadja Probst
              <br />
              [Street Address] <br />
              [Postal Code, City] <br />
              Deutschland | Germany
            </p>

            <h2 className={"font-bold"}>Kontakt</h2>
            <p>
              E-Mail:{" "}
              <a href="mailto:nadja.probst25@gmail.com">
                nadja.probst25@gmail.com
              </a>
            </p>

            <h2 className={"font-bold"}>
              Verantwortlich für den Inhalt nach § 55 Abs. 2 RStV
            </h2>
            <p>
              Nadja Probst
              <br />
              [Street Address] <br />
              [Postal Code, City] <br />
              Germany
            </p>

            <h2 className={"font-bold"}>Haftungsausschluss (Disclaimer)</h2>

            <h3>Haftung für Inhalte</h3>
            <p>
              Als Diensteanbieter bin ich gemäß § 7 Abs.1 TMG für eigene Inhalte
              auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich.
              Nach §§ 8 bis 10 TMG bin ich jedoch nicht verpflichtet,
              übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige
              Tätigkeit hinweisen. Verpflichtungen zur Entfernung oder Sperrung
              der Nutzung von Informationen nach den allgemeinen Gesetzen
              bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch
              erst ab dem Zeitpunkt der Kenntnis einer konkreten
              Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werde ich diese Inhalte umgehend entfernen.
            </p>

            <h3>Haftung für Links</h3>
            <p>
              Mein Angebot enthält Links zu externen Websites Dritter, auf deren
              Inhalte ich keinen Einfluss habe. Deshalb kann ich für diese
              fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der
              verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber
              der Seiten verantwortlich. Die verlinkten Seiten wurden zum
              Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht
              erkennbar. Eine permanente inhaltliche Kontrolle der verlinkten
              Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von
              Rechtsverletzungen werde ich derartige Links umgehend entfernen.
            </p>

            <h3>Urheberrecht</h3>
            <p>
              Die durch die Seitenbetreiberin erstellten Inhalte und Werke auf
              diesen Seiten unterliegen dem deutschen Urheberrecht. Die
              Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der
              schriftlichen Zustimmung der jeweiligen Autorin bzw. Erstellerin.
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht
              kommerziellen Gebrauch gestattet. Soweit die Inhalte auf dieser
              Seite nicht von der Betreiberin erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
              Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
              Urheberrechtsverletzung aufmerksam werden, bitte ich um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen
              werde ich derartige Inhalte umgehend entfernen.
            </p>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </main>
  );
};

export default Imprint;
