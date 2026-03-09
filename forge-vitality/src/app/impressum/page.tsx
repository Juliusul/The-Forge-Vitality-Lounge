import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Impressum – The Forge by Vitality Lounge",
  robots: { index: false },
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2
        className="text-[#c19255] text-[10px] tracking-[0.22em] uppercase font-semibold mb-4"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {title}
      </h2>
      <div
        className="text-[#b8b8b0] text-[14px] leading-[1.9] font-light"
        style={{ fontFamily: "'Inter', sans-serif" }}
      >
        {children}
      </div>
    </div>
  );
}

export default function ImpressumPage() {
  return (
    <>
      <PageHero
        label="Rechtliches"
        title={<>Impressum</>}
        subtitle="Angaben gemäß § 5 TMG"
      />

      <section className="bg-[#0d0d0b] py-24 lg:py-36">
        <div className="max-w-[1440px] mx-auto px-8 lg:px-16">
          <div className="max-w-2xl">

            <Section title="Unternehmen">
              <p>Vitality Lounge GmbH &amp; Co. KG</p>
            </Section>

            <Section title="Firmensitz">
              <p>
                Zum Strothebach 22<br />
                33175 Bad Lippspringe
              </p>
            </Section>

            <Section title="Standort The Forge">
              <p>
                Auguste-Viktoria-Allee 19a<br />
                33175 Bad Lippspringe
              </p>
            </Section>

            <Section title="Handelsregister">
              <p>
                HRA 7594<br />
                Registergericht: Amtsgericht Paderborn
              </p>
            </Section>

            <Section title="Vertreten durch">
              <p>
                Markus Kleineheismann<br />
                Vitality Lounge GmbH &amp; Co. KG<br />
                Zum Strothebach 22<br />
                33175 Bad Lippspringe
              </p>
            </Section>

            <Section title="Kontakt">
              <p>
                Telefon:{" "}
                <a href="tel:+4952549362602" className="text-[#c19255] hover:underline">
                  05254 / 9362602
                </a>
                <br />
                E-Mail:{" "}
                <a href="mailto:mitgliederservice@vitality-lounge.de" className="text-[#c19255] hover:underline">
                  mitgliederservice@vitality-lounge.de
                </a>
              </p>
            </Section>

            <Section title="Umsatzsteuer-ID">
              <p>
                Umsatzsteuer-Identifikationsnummer gemäß § 27a UStG:<br />
                DE 322793019
              </p>
            </Section>

            <Section title="Redaktionell Verantwortliche">
              <p>
                Ralf Eckel &amp; Daniel Daramy<br />
                Zum Strothebach 22<br />
                33175 Bad Lippspringe
              </p>
            </Section>

            <Section title="Verbraucherstreitbeilegung">
              <p>
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
                vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </Section>

          </div>
        </div>
      </section>
    </>
  );
}
