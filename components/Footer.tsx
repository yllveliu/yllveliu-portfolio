import Link from "next/link";
import { footer } from "@/lib/data";
import { GitHubIcon, LinkedInIcon, InstagramIcon } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-line bg-bg px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 md:flex-row md:justify-between">
        <p className="font-mono text-xs text-muted">{footer.text}</p>
        <div className="flex items-center gap-5">
          <Link
            href={footer.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-muted transition-colors duration-200 hover:text-accent"
          >
            <GitHubIcon className="h-5 w-5" />
          </Link>
          <Link
            href={footer.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-muted transition-colors duration-200 hover:text-accent"
          >
            <LinkedInIcon className="h-5 w-5" />
          </Link>
          <Link
            href={footer.instagram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-muted transition-colors duration-200 hover:text-accent"
          >
            <InstagramIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
