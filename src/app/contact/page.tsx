import type { Metadata } from "next";
import { Container } from "@/components/container";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with Daru about product, engineering, AI, or brand work.",
};

const CHANNELS = [
  {
    label: "Email",
    value: "darciamuliathiifa@gmail.com",
    href: "mailto:darciamuliathiifa@gmail.com",
  },
  {
    label: "GitHub",
    value: "github.com/darufahma-rgb",
    href: "https://github.com/darufahma-rgb",
  },
];

export default function ContactPage() {
  return (
    <section className="pt-20 pb-28 md:pt-28">
      <Container>
        <p className="font-mono text-xs uppercase tracking-widest text-muted-2">
          Contact
        </p>
        <h1 className="mt-6 max-w-2xl text-balance font-display text-4xl tracking-tight text-foreground sm:text-5xl md:text-6xl">
          Let&rsquo;s build something.
        </h1>
        <p className="mt-6 max-w-xl text-pretty text-lg text-muted">
          Open to product, engineering, AI, and brand work. The fastest way
          to reach me is email.
        </p>

        <div className="mt-14 divide-y divide-border border-t border-border">
          {CHANNELS.map((channel) => (
            <a
              key={channel.label}
              href={channel.href}
              target={channel.href.startsWith("http") ? "_blank" : undefined}
              rel={
                channel.href.startsWith("http")
                  ? "noopener noreferrer"
                  : undefined
              }
              className="group flex items-center justify-between py-6"
            >
              <span className="font-display text-2xl tracking-tight text-foreground md:text-3xl">
                {channel.label}
              </span>
              <span className="text-sm text-muted transition-colors group-hover:text-foreground md:text-base">
                {channel.value} →
              </span>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}
