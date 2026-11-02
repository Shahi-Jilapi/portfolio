import type { Metadata } from "next";
import { ArrowUpRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

export const metadata: Metadata = { title: "Contact", description: "Contact Sadim Fahad." };

const contacts = [
  { icon: Mail, label: "Email", value: "sadimfahad9@gmail.com", href: "mailto:sadimfahad9@gmail.com" },
  { icon: Phone, label: "Phone", value: "+880 1306 622129", href: "tel:+8801306622129" },
  { icon: Linkedin, label: "LinkedIn", value: "sadim-fahad", href: "https://www.linkedin.com/in/sadim-fahad/" },
  { icon: Github, label: "GitHub", value: "Shahi-Jilapi", href: "https://github.com/Shahi-Jilapi" },
];

export default function ContactPage() {
  return (
    <>
      <PageIntro eyebrow="Contact" title="Let’s talk about data, software, or a place to learn." description="I’m interested in internships, early-career opportunities, collaborative projects, and conversations with people building useful products." />
      <section className="contact-simple shell">
        <div>
          {contacts.map(({ icon: Icon, label, value, href }) => {
            const external = href.startsWith("http");
            return <a key={label} href={href} target={external ? "_blank" : undefined} rel={external ? "noreferrer" : undefined} data-reveal><Icon aria-hidden="true" /><span><small>{label}</small><strong>{value}</strong></span><ArrowUpRight aria-hidden="true" /></a>;
          })}
        </div>
        <aside data-reveal><MapPin aria-hidden="true" /><p className="eyebrow">Based in</p><h2>Bashundhara, Dhaka</h2><p>Bangladesh · Asia/Dhaka</p></aside>
      </section>
    </>
  );
}
