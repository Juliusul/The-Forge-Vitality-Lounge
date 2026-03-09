import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "AGB – The Forge by Vitality Lounge",
  robots: { index: false },
};

function Section({ num, title, children }: { num: string; title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10 pb-10 border-b border-[#c19255]/10 last:border-0">
      <div className="flex items-baseline gap-3 mb-4">
        <span
          className="text-[#c19255]/40"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 800, fontSize: "1.8rem" }}
        >
          {num}
        </span>
        <h2
          className="text-[#f8f7f2] uppercase"
          style={{ fontFamily: "'Barlow Condensed', sans-serif", fontWeight: 700, fontSize: "1.1rem", letterSpacing: "0.05em" }}
        >
          {title}
        </h2>
      </div>
      <div
        className="text-[#b8b8b0] text-[13px] leading-[1.9] font-light flex flex-col gap-3"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </div>
    </div>
  );
}

export default function AGBPage() {
  return (
    <>
      <PageHero
        label="Rechtliches"
        title={<>Allgemeine<br /><span className="text-[#c19255]">Geschäfts&shy;bedingungen</span></>}
        subtitle="Gültig für alle Mitgliedschaften bei The Forge by Vitality Lounge"
      />

      <section className="bg-[#0d0d0b] py-24 lg:py-36">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="max-w-2xl">

            <Section num="§1" title="Geltungsbereich">
              <p>
                Diese Allgemeinen Geschäftsbedingungen gelten für alle Mitgliedschaftsverträge
                zwischen der Vitality Lounge GmbH &amp; Co. KG (nachfolgend „The Forge") und
                ihren Mitgliedern.
              </p>
            </Section>

            <Section num="§2" title="Vertragsabschluss">
              <p>
                Der Mitgliedschaftsvertrag kommt durch schriftliche oder digitale Anmeldung
                und Bestätigung durch The Forge zustande. Eine Mitgliedschaft ist erst ab
                Volljährigkeit (18 Jahre) möglich.
              </p>
            </Section>

            <Section num="§3" title="Mitgliedschaft und Laufzeiten">
              <p>
                Mitgliedschaften werden mit einer Mindestlaufzeit von 1 Monat, 6 Monaten
                oder 12 Monaten angeboten. Nach Ablauf der Mindestlaufzeit verlängert sich
                die Mitgliedschaft automatisch um jeweils einen Monat, sofern keine Kündigung
                erfolgt.
              </p>
              <p>
                Die Aktivierungsgebühr ist einmalig und wird bei Vertragsabschluss fällig.
              </p>
            </Section>

            <Section num="§4" title="Beiträge und Zahlung">
              <p>
                Der monatliche Mitgliedsbeitrag ist jeweils zum Monatsersten fällig und wird
                per SEPA-Lastschrift eingezogen. Bei Rücklastschriften werden die entstehenden
                Bankgebühren dem Mitglied in Rechnung gestellt.
              </p>
            </Section>

            <Section num="§5" title="Kündigung">
              <p>
                Die Kündigung ist zum Ende der vereinbarten Mindestlaufzeit möglich. Die
                Kündigungsfrist beträgt 4 Wochen zum Monatsende. Die Kündigung muss
                schriftlich (per E-Mail oder Brief) erfolgen.
              </p>
              <p>
                Eine außerordentliche Kündigung ist bei Vorliegen eines wichtigen Grundes
                (z. B. dauerhafte Erkrankung mit ärztlichem Attest) möglich.
              </p>
            </Section>

            <Section num="§6" title="Nutzungsregeln">
              <p>
                Die Nutzung der Einrichtungen erfolgt auf eigene Gefahr. Mitglieder sind
                verpflichtet, die Hausordnung einzuhalten, Geräte pfleglich zu behandeln
                und andere Mitglieder nicht zu beeinträchtigen.
              </p>
              <p>
                Bei wiederholten Verstößen gegen die Hausordnung behält sich The Forge
                eine außerordentliche Kündigung des Mitgliedschaftsvertrages vor.
              </p>
            </Section>

            <Section num="§7" title="Haftung">
              <p>
                The Forge haftet nicht für Verletzungen, die durch unsachgemäße Nutzung
                der Geräte entstehen, sofern keine Einweisung verweigert oder grob fahrlässig
                gehandelt wurde. Wertgegenstände sollten in den Umkleideschränken gesichert
                werden; für Diebstahl übernimmt The Forge keine Haftung.
              </p>
            </Section>

            <Section num="§8" title="Änderungen der AGB">
              <p>
                The Forge behält sich vor, diese AGB mit einer Frist von 6 Wochen zu ändern.
                Mitglieder werden per E-Mail informiert. Widerspricht das Mitglied den
                Änderungen nicht innerhalb von 4 Wochen, gelten diese als akzeptiert.
              </p>
            </Section>

            <Section num="§9" title="Anwendbares Recht">
              <p>
                Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist
                Paderborn, sofern gesetzlich zulässig.
              </p>
            </Section>

            <p className="text-[#5a5a55] text-[11px]" style={{ fontFamily: "'Inter', sans-serif" }}>
              Stand: März 2026 · Vitality Lounge GmbH &amp; Co. KG, Zum Strothebach 22, 33175 Bad Lippspringe
            </p>

          </div>
        </div>
      </section>
    </>
  );
}
