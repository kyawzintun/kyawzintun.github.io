import { Github, Linkedin, Twitter, ArrowUp } from "lucide-react";
import { personalInfo } from "@/data";

const socialLinks = [
  { label: "GitHub", href: personalInfo.github, icon: Github },
  { label: "LinkedIn", href: personalInfo.linkedin, icon: Linkedin },
  //   { label: "Twitter", href: personalInfo.twitter, icon: Twitter },
];

const footerLinks = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
];

const initials = personalInfo.name
  .split(" ")
  .map((n) => n[0])
  .join("");

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          {/* Left: Brand */}
          <div>
            <a
              href="#"
              className="font-mono text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              ~/{initials.toLowerCase()}
            </a>
            <p className="mt-1 text-xs text-muted-foreground">
              Designed & built by {personalInfo.name}
            </p>
          </div>

          {/* Center: Nav links */}
          <nav
            className="flex flex-wrap gap-x-6 gap-y-2"
            aria-label="Footer navigation"
          >
            {footerLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right: Social + back to top */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="text-muted-foreground transition-colors hover:text-foreground"
              >
                <Icon size={16} />
              </a>
            ))}
            <div className="h-4 w-px bg-border" aria-hidden="true" />
            <a
              href="#"
              className="flex items-center gap-1.5 text-xs text-muted-foreground transition-colors hover:text-foreground"
              aria-label="Back to top"
            >
              <ArrowUp size={13} />
              Top
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-border pt-6">
          <p className="text-xs text-muted-foreground">
            © {year} {personalInfo.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
