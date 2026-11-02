import type { Metadata } from "next";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = {
  title: "Certifications",
  description: "Academic certificates and testimonials of Sadim Fahad.",
};

const records = [
  {
    level: "Secondary education",
    year: "2019",
    institution: "Bhanga Govt. Pilot High School",
    documents: [
      { title: "SSC Certificate", image: "/images/certificates/ssc-certificate.png", orientation: "landscape" },
      { title: "SSC Testimonial", image: "/images/certificates/ssc-testimonial.png", orientation: "landscape" },
    ],
  },
  {
    level: "Higher secondary education",
    year: "2021",
    institution: "Cantonment Public School & College, Mymensingh",
    documents: [
      { title: "HSC Certificate", image: "/images/certificates/hsc-certificate.png", orientation: "landscape" },
      { title: "HSC Testimonial", image: "/images/certificates/hsc-testimonial.png", orientation: "portrait" },
    ],
  },
];

export default function CertificationsPage() {
  return (
    <>
      <PageIntro
        eyebrow="Academic records"
        title="Certificates, results, and institutional records."
        description="A complete visual archive of my secondary and higher-secondary academic documents. Select any document to view the full-resolution image."
      />

      <section className="certificate-gallery shell">
        {records.map((record, groupIndex) => (
          <section className="certificate-group" key={record.level} data-reveal>
            <header>
              <span>0{groupIndex + 1}</span>
              <div>
                <p className="eyebrow">{record.level}</p>
                <h2>{record.institution}</h2>
              </div>
              <strong>{record.year}</strong>
            </header>

            <div className="certificate-grid">
              {record.documents.map((document) => (
                <article className={`certificate-card ${document.orientation}`} key={document.title}>
                  <a href={document.image} target="_blank" rel="noreferrer" aria-label={`Open ${document.title} at full size`}>
                    <div className="certificate-image">
                      <Image src={document.image} alt={`${document.title} of Sadim Fahad`} fill sizes="(max-width: 800px) 100vw, 50vw" />
                    </div>
                    <div className="certificate-caption">
                      <div><span>{record.year}</span><h3>{document.title}</h3></div>
                      <ExternalLink aria-hidden="true" />
                    </div>
                  </a>
                </article>
              ))}
            </div>
          </section>
        ))}
      </section>
    </>
  );
}
