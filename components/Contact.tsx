import { contact } from "@/lib/data";
import Reveal from "@/components/Reveal";
import SectionLabel from "@/components/SectionLabel";
import { Button } from "@/components/ui";
import { LinkedInIcon, MailIcon } from "@/components/icons";

export default function Contact() {
  return (
    <section
      id="contact"
      className="section-anchor bg-bg px-6 py-28 md:py-40"
    >
      <Reveal className="mx-auto flex max-w-3xl flex-col items-center text-center">
        <SectionLabel>{contact.label}</SectionLabel>
        <h2 className="mt-6 font-heading text-4xl font-bold leading-tight text-fg md:text-6xl">
          {contact.heading}
        </h2>
        <p className="mt-5 max-w-xl text-base text-muted md:text-lg">
          {contact.subtext}
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <Button
            href={`mailto:${contact.email}`}
            variant="primary"
            ariaLabel="Send an email"
          >
            <MailIcon className="h-4 w-4" />
            Send an Email
          </Button>
          <Button
            href={contact.linkedin}
            variant="secondary"
            external
            ariaLabel="Connect on LinkedIn"
          >
            <LinkedInIcon className="h-4 w-4" />
            Connect on LinkedIn
          </Button>
        </div>
      </Reveal>
    </section>
  );
}
