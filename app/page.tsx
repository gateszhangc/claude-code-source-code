import Image from "next/image";
import {
  ArrowUpRight,
  Binary,
  FolderGit2,
  Link2,
  MessageSquare,
  Radar,
  ShieldAlert,
} from "lucide-react";

import { SiteLogo } from "@/components/site-logo";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  faqItems,
  authoritySources,
  impactItems,
  resourceLinks,
  searchQuestionCards,
  siteConfig,
  storySteps,
} from "@/lib/site";
import { cn } from "@/lib/utils";

const heroStats = [
  { value: "01", label: "Explains the query" },
  { value: "02", label: "Defines source maps" },
  { value: "03", label: "Links primary sources" },
];

const heroSignals = [
  {
    source: "MDN",
    text: "defines source maps as JSON mappings between transformed code and original source used for debugging.",
  },
  {
    source: "Vite",
    text: "treats production sourcemaps as an explicit build option, including hidden mode.",
  },
  {
    source: "Sentry",
    text: "warns that public sourcemaps may expose source code and should be blocked or deleted after upload.",
  },
];

const storyIcons = [Radar, Binary, FolderGit2];
const impactIcons = [ShieldAlert, Link2, MessageSquare];

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  },
  {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: siteConfig.title,
    description: siteConfig.description,
    mainEntityOfPage: siteConfig.url,
    author: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    keywords: siteConfig.keywords.join(", "),
  },
];

function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <div className="max-w-2xl space-y-4">
      <p className="font-mono text-xs font-medium uppercase tracking-[0.32em] text-muted-foreground">
        {eyebrow}
      </p>
      <h2 className="max-w-3xl font-heading text-3xl leading-tight font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
        {description}
      </p>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData),
        }}
      />
      <div className="relative isolate overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[420px] bg-[linear-gradient(180deg,rgba(20,33,61,0.06),transparent)]" />
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(rgba(19,38,71,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(19,38,71,0.04)_1px,transparent_1px)] [background-size:42px_42px] [mask-image:linear-gradient(to_bottom,rgba(0,0,0,0.75),transparent_78%)]" />

        <header className="mx-auto w-full max-w-7xl px-5 pt-5 sm:px-6 lg:px-10">
          <nav className="flex flex-col gap-4 rounded-[1.7rem] border border-white/70 bg-white/70 px-5 py-4 shadow-[0_18px_80px_-46px_rgba(11,25,52,0.65)] backdrop-blur md:flex-row md:items-center md:justify-between">
            <SiteLogo />
            <div className="flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
              <a className="rounded-full px-3 py-2 transition hover:bg-foreground/5 hover:text-foreground" href="#story">
                Overview
              </a>
              <a className="rounded-full px-3 py-2 transition hover:bg-foreground/5 hover:text-foreground" href="#authority">
                Docs
              </a>
              <a className="rounded-full px-3 py-2 transition hover:bg-foreground/5 hover:text-foreground" href="#resources">
                Sources
              </a>
              <a className="rounded-full px-3 py-2 transition hover:bg-foreground/5 hover:text-foreground" href="#faq">
                FAQ
              </a>
            </div>
          </nav>
        </header>

        <main className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-5 pb-20 pt-12 sm:px-6 lg:px-10 lg:gap-28 lg:pt-16">
          <section className="grid items-start gap-10 lg:grid-cols-[1.08fr_0.92fr]">
            <div className="animate-rise space-y-8">
              <div className="space-y-6">
                <Badge
                  variant="outline"
                  className="h-7 rounded-full border-foreground/10 bg-white/70 px-3 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-muted-foreground"
                >
                  Professional Source Map Guide
                </Badge>
                <div className="space-y-5">
                  <h1 className="max-w-4xl font-heading text-5xl leading-[0.96] font-semibold tracking-[-0.045em] text-foreground sm:text-6xl lg:text-7xl">
                    Claude Code
                    <span className="block text-primary">Source Code</span>
                  </h1>
                  <div className="max-w-2xl space-y-4 text-lg leading-8 text-muted-foreground sm:text-xl">
                    <p>
                      Most people searching for{" "}
                      <strong className="font-semibold text-foreground">
                        Claude Code source code
                      </strong>{" "}
                      are not looking for an official source portal. They are
                      trying to understand the public source-map repo, the
                      related discussion, and what that source map actually
                      means.
                    </p>
                    <p>
                      This page answers that query the professional way: define
                      the artifact, explain why production source maps matter,
                      and point directly to the public references people are
                      trying to find.
                    </p>
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-3 sm:flex-row">
                <a
                  className={cn(
                    "inline-flex h-12 items-center justify-center gap-2 rounded-full bg-primary px-5 text-sm font-semibold text-primary-foreground shadow-[0_18px_40px_-24px_rgba(209,113,41,0.9)] transition hover:-translate-y-0.5 hover:opacity-95 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  )}
                  href={siteConfig.links.repo}
                  target="_blank"
                  rel="noreferrer"
                >
                  View the public repo
                  <ArrowUpRight className="size-4" />
                </a>
                <a
                  className={cn(
                    "inline-flex h-12 items-center justify-center gap-2 rounded-full border border-foreground/12 bg-white/75 px-5 text-sm font-semibold text-foreground shadow-[0_12px_32px_-24px_rgba(11,25,52,0.6)] transition hover:-translate-y-0.5 hover:bg-white focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                  )}
                  href={siteConfig.links.reddit}
                  target="_blank"
                  rel="noreferrer"
                >
                  Read the discussion
                  <ArrowUpRight className="size-4" />
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-[1.5rem] border border-white/70 bg-white/70 px-5 py-4 shadow-[0_12px_40px_-28px_rgba(11,25,52,0.45)] backdrop-blur"
                  >
                    <div className="font-mono text-xs uppercase tracking-[0.24em] text-primary">
                      {stat.value}
                    </div>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="animate-rise-delay relative">
              <div className="pulse-float absolute -right-6 top-5 hidden h-28 w-28 rounded-full bg-primary/18 blur-3xl lg:block" />
              <Card className="overflow-hidden rounded-[2rem] border-white/75 bg-[linear-gradient(180deg,rgba(255,255,255,0.88),rgba(250,246,238,0.96))] py-0 shadow-[0_26px_90px_-48px_rgba(11,25,52,0.8)]">
                <CardHeader className="gap-4 border-b border-foreground/8 px-6 py-6">
                  <div className="flex items-center justify-between gap-4">
                    <Badge
                      variant="secondary"
                      className="h-7 rounded-full bg-[#14213d] px-3 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-white"
                    >
                      Authoritative framing
                    </Badge>
                    <span className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
                      Not official
                    </span>
                  </div>
                  <CardTitle className="font-heading text-2xl leading-tight text-foreground">
                    The professional answer comes from docs, not drama.
                  </CardTitle>
                  <CardDescription className="text-base leading-7">
                    MDN explains what a source map is. webpack and Vite show how
                    production sourcemaps are configured. Sentry explains why
                    public access matters. This page translates that framing
                    into the Claude Code search context.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-6 px-6 py-6">
                  <div className="rounded-[1.5rem] border border-[#132647]/10 bg-[#132647] px-5 py-5 text-[#f8f3e9] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)]">
                    <div className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-[#f5b375]">
                      Page thesis
                    </div>
                    <div className="mt-4 grid gap-3 font-mono text-sm leading-7">
                      <div>query.intent = explain + locate</div>
                      <div>primary.subject = public source map</div>
                      <div>official.status = unofficial guide</div>
                      <div>authority.frame = MDN + webpack + Vite + Sentry</div>
                    </div>
                  </div>

                  <div className="overflow-hidden rounded-[1.5rem] border border-foreground/8 bg-white/82 shadow-[0_14px_40px_-28px_rgba(11,25,52,0.55)]">
                    <Image
                      src="/opengraph-image"
                      alt="Claude Code Source Code visual preview"
                      width={1200}
                      height={630}
                      priority
                      unoptimized
                      className="h-auto w-full"
                    />
                  </div>

                  <div className="space-y-4">
                    {heroSignals.map((signal) => (
                      <div
                        key={signal.source}
                        className="flex items-start gap-3 rounded-[1.35rem] border border-foreground/8 bg-white/80 px-4 py-4"
                      >
                        <span className="mt-1 flex size-8 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                          <Radar className="size-4" />
                        </span>
                        <div className="space-y-1">
                          <p className="font-mono text-xs uppercase tracking-[0.26em] text-primary">
                            {signal.source}
                          </p>
                          <p className="text-sm leading-7 text-muted-foreground">
                            {signal.text}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          <section id="story" className="space-y-10">
            <SectionHeading
              eyebrow="Overview"
              title="What people usually mean when they search for Claude Code source code."
              description="A strong SEO page has to answer the query directly. In this case, that means clarifying the public repo, the source-map context, and the engineering reason the topic keeps attracting attention."
            />
            <div className="grid gap-6 lg:grid-cols-3">
              {storySteps.map((step, index) => {
                const Icon = storyIcons[index];

                return (
                  <Card
                    key={step.title}
                    className="rounded-[1.8rem] border-white/75 bg-white/78 shadow-[0_18px_60px_-40px_rgba(11,25,52,0.58)]"
                  >
                    <CardHeader className="gap-4 px-6 py-6">
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                          {step.eyebrow}
                        </span>
                        <span className="flex size-10 items-center justify-center rounded-full bg-secondary text-foreground">
                          <Icon className="size-4" />
                        </span>
                      </div>
                      <CardTitle className="font-heading text-2xl leading-tight text-foreground">
                        {step.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      <p className="text-base leading-8 text-muted-foreground">
                        {step.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section id="authority" className="space-y-10">
            <SectionHeading
              eyebrow="Authority Sources"
              title="What the most authoritative docs say about source maps."
              description="These are the sources with the most credibility for answering the underlying technical question. The homepage copy uses their framing because this topic is better explained by engineering documentation than by social-media commentary."
            />
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {authoritySources.map((source) => (
                <Card
                  key={source.name}
                  className="rounded-[1.8rem] border-white/75 bg-white/82 shadow-[0_18px_60px_-42px_rgba(11,25,52,0.5)]"
                >
                  <CardHeader className="gap-4 px-6 py-6">
                    <Badge
                      variant="outline"
                      className="h-7 rounded-full border-foreground/10 bg-secondary/60 px-3 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-foreground"
                    >
                      {source.name}
                    </Badge>
                    <CardTitle className="font-heading text-2xl leading-tight text-foreground">
                      {source.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-7">
                      {source.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <a
                      href={source.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-primary"
                    >
                      Read source
                      <ArrowUpRight className="size-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section id="questions" className="space-y-10">
            <SectionHeading
              eyebrow="Search Questions"
              title="The exact long-tail questions sitting behind this keyword."
              description="These are the question patterns a strong landing page should answer in visible copy, not only inside metadata or hidden FAQ content. They turn the homepage from a general summary into a better search destination."
            />
            <div className="grid gap-6 md:grid-cols-2">
              {searchQuestionCards.map((item) => (
                <Card
                  key={item.title}
                  className="rounded-[1.8rem] border-white/75 bg-white/82 shadow-[0_18px_60px_-42px_rgba(11,25,52,0.5)]"
                >
                  <CardHeader className="gap-4 px-6 py-6">
                    <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                      {item.eyebrow}
                    </p>
                    <CardTitle className="font-heading text-2xl leading-tight text-foreground">
                      {item.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <p className="text-base leading-8 text-muted-foreground">
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section
            id="impact"
            className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start"
          >
            <div className="animate-rise-late space-y-6">
              <SectionHeading
                eyebrow="Why This Query Persists"
                title="Why the Claude Code source code keyword keeps generating interest."
                description="The query survives because it sits at the intersection of search intent, public artifacts, and a real engineering topic: how much a production source map can reveal and why experienced teams treat that carefully."
              />
              <div className="rounded-[1.8rem] border border-[#132647]/10 bg-[#132647] p-7 text-[#f8f3e9] shadow-[0_18px_60px_-40px_rgba(11,25,52,0.9)]">
                <p className="font-mono text-xs uppercase tracking-[0.3em] text-[#f5b375]">
                  Professional takeaway
                </p>
                <p className="mt-4 font-heading text-3xl leading-tight tracking-tight">
                  The better this page explains source maps, production
                  tradeoffs, and public references, the better it will satisfy
                  both users and search engines.
                </p>
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {impactItems.map((item, index) => {
                const Icon = impactIcons[index];

                return (
                  <Card
                    key={item.title}
                    className="rounded-[1.8rem] border-white/75 bg-white/78 shadow-[0_18px_60px_-42px_rgba(11,25,52,0.54)]"
                  >
                    <CardHeader className="gap-4 px-6 py-6">
                      <span className="flex size-11 items-center justify-center rounded-full bg-primary/12 text-primary">
                        <Icon className="size-5" />
                      </span>
                      <CardTitle className="font-heading text-xl leading-tight text-foreground">
                        {item.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="px-6 pb-6">
                      <p className="text-sm leading-7 text-muted-foreground">
                        {item.description}
                      </p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          <section id="resources" className="space-y-10">
            <SectionHeading
              eyebrow="Public References"
              title="Go straight to the public sources people are actually trying to find."
              description="A useful search landing page should not hide the answer. These are the two main public references behind the query, and each one serves a different purpose."
            />
            <div className="grid gap-6 lg:grid-cols-2">
              {resourceLinks.map((resource) => (
                <Card
                  key={resource.href}
                  className="rounded-[1.8rem] border-white/75 bg-white/82 shadow-[0_18px_60px_-42px_rgba(11,25,52,0.5)]"
                >
                  <CardHeader className="gap-4 px-6 py-6">
                    <div className="flex flex-wrap items-center justify-between gap-4">
                      <Badge
                        variant="outline"
                        className="h-7 rounded-full border-foreground/10 bg-secondary/60 px-3 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-foreground"
                      >
                        {resource.type}
                      </Badge>
                      <span className="font-mono text-xs uppercase tracking-[0.28em] text-muted-foreground">
                        {resource.label}
                      </span>
                    </div>
                    <CardTitle className="font-heading text-2xl leading-tight text-foreground">
                      {resource.title}
                    </CardTitle>
                    <CardDescription className="text-base leading-7">
                      {resource.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="px-6 pb-6">
                    <a
                      href={resource.href}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-primary"
                    >
                      Visit source
                      <ArrowUpRight className="size-4" />
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section
            id="faq"
            className="grid gap-10 lg:grid-cols-[1fr_0.88fr] lg:items-start"
          >
            <div className="space-y-8">
              <SectionHeading
                eyebrow="FAQ"
                title="Direct answers for the exact questions search visitors ask."
                description="This section is written to satisfy high-intent searches quickly: what the query means, what a source map is, whether the site is official, and where the public references live."
              />
              <div className="rounded-[2rem] border border-white/75 bg-white/78 p-4 shadow-[0_18px_60px_-42px_rgba(11,25,52,0.54)] sm:p-6">
                <Accordion defaultValue={[faqItems[0].value]} multiple>
                  {faqItems.map((item) => (
                    <AccordionItem key={item.value} value={item.value}>
                      <AccordionTrigger className="py-5 text-base font-semibold text-foreground hover:no-underline">
                        {item.question}
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-base leading-8 text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>

            <Card className="rounded-[2rem] border-[#132647]/12 bg-[linear-gradient(180deg,rgba(19,38,71,0.96),rgba(31,51,92,0.94))] py-0 text-[#f8f3e9] shadow-[0_26px_90px_-48px_rgba(11,25,52,0.9)]">
              <CardHeader className="gap-4 px-7 py-7">
                <Badge
                  variant="outline"
                  className="h-7 rounded-full border-white/12 bg-white/8 px-3 font-mono text-[0.68rem] uppercase tracking-[0.28em] text-[#f5b375]"
                >
                  Why This Page Exists
                </Badge>
                <CardTitle className="font-heading text-3xl leading-tight tracking-tight text-white">
                  Fast context, public links, and a professional explanation.
                </CardTitle>
                <CardDescription className="text-base leading-7 text-white/72">
                  This page is not official. It is a curated explanation layer
                  built to answer the query clearly and point readers to the
                  public references without forcing them through vague summaries.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6 px-7 pb-7">
                <div className="grid gap-4">
                  <div className="rounded-[1.4rem] border border-white/12 bg-white/8 px-5 py-4">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#f5b375]">
                      Best for
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/78">
                      Developers, researchers, and curious readers who want to
                      understand the source-map context before diving into the
                      repo or thread.
                    </p>
                  </div>
                  <div className="rounded-[1.4rem] border border-white/12 bg-white/8 px-5 py-4">
                    <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#f5b375]">
                      Backed by
                    </p>
                    <p className="mt-3 text-sm leading-7 text-white/78">
                      MDN for definition, webpack and Vite for build behavior,
                      and Sentry for the practical warning about public source
                      map exposure.
                    </p>
                  </div>
                </div>
                <Separator className="bg-white/10" />
                <a
                  href={siteConfig.links.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-white transition hover:text-[#f5b375]"
                >
                  Open the public repo now
                  <ArrowUpRight className="size-4" />
                </a>
              </CardContent>
            </Card>
          </section>
        </main>

        <footer className="mx-auto w-full max-w-7xl px-5 pb-10 sm:px-6 lg:px-10">
          <div className="rounded-[1.7rem] border border-white/75 bg-white/72 px-6 py-5 shadow-[0_18px_60px_-42px_rgba(11,25,52,0.42)] backdrop-blur">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-heading text-xl font-semibold tracking-tight text-foreground">
                  {siteConfig.domain}
                </p>
                <p className="mt-1 text-sm leading-7 text-muted-foreground">
                  Built to explain the public source-map context around{" "}
                  <strong className="font-semibold text-foreground">
                    Claude Code source code
                  </strong>{" "}
                  while staying immediately useful.
                </p>
              </div>
              <a
                href={siteConfig.links.reddit}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-foreground transition hover:text-primary"
              >
                Follow the discussion
                <ArrowUpRight className="size-4" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}
