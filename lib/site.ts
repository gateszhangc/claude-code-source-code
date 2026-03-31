const defaultSiteUrl = "https://claude-code-source-code.lol";
const defaultDomain = "claude-code-source-code.lol";

function resolveSiteUrl() {
  const value = process.env.NEXT_PUBLIC_WEB_URL?.trim();

  if (!value) {
    return defaultSiteUrl;
  }

  return value.replace(/\/$/, "");
}

export const siteConfig = {
  name: "Claude Code Source Code",
  projectName:
    process.env.NEXT_PUBLIC_PROJECT_NAME?.trim() || "claude-code-source-code",
  domain: defaultDomain,
  url: resolveSiteUrl(),
  title:
    "Claude Code Source Code: Source Map Guide, Public Repo, and FAQ",
  description:
    "A professional guide to the Claude Code source code discussion: what the public source map means, where the repo and Reddit thread are, and what authoritative docs say about production source maps.",
  keywords: [
    "claude code source code",
    "claude code source map",
    "claude code github",
    "claude code reddit",
    "production source maps",
    "what is claude code source code",
    "claude code source map explained",
    "is claude code source code official",
    "where is claude code source code github",
  ],
  links: {
    repo: "https://github.com/leeyeel/claude-code-sourcemap",
    reddit:
      "https://www.reddit.com/r/ClaudeAI/comments/1s8ifm6/claude_code_source_code_has_been_leaked_via_a_map/",
  },
  analytics: {
    gaMeasurementId:
      process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID?.trim() || "",
    clarityProjectId:
      process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID?.trim() || "",
  },
} as const;

export const storySteps = [
  {
    eyebrow: "01. Query meaning",
    title: "Most searches are looking for context, not an official source portal.",
    description:
      "People searching for Claude Code source code usually want three things fast: the public repo, the discussion that amplified it, and a clear explanation of what the source-map story actually means.",
  },
  {
    eyebrow: "02. Source-map basics",
    title: "A source map maps transformed code back to original source.",
    description:
      "MDN describes a source map as a JSON file that maps minified or transformed code back to original, unmodified source so debugging stays readable even after bundling and compilation.",
  },
  {
    eyebrow: "03. Production impact",
    title: "Production source maps are a release decision with real tradeoffs.",
    description:
      "Official bundler docs such as webpack and Vite make source-map generation an explicit build configuration. That is why a production map becomes part of the engineering story, not just the gossip around it.",
  },
] as const;

export const authoritySources = [
  {
    name: "MDN",
    title: "Defines what a source map is",
    description:
      "MDN explains source maps as JSON mappings between transformed code and original source, which is why they matter to debugging and reverse inspection.",
    href: "https://developer.mozilla.org/en-US/docs/Glossary/Source_map",
  },
  {
    name: "webpack",
    title: "Shows source maps are an explicit build choice",
    description:
      "webpack's devtool documentation treats source maps as a deliberate configuration decision, including high-quality maps suitable for production builds.",
    href: "https://webpack.js.org/configuration/devtool/",
  },
  {
    name: "Vite",
    title: "Documents the production sourcemap modes",
    description:
      "Vite documents build.sourcemap as false, true, inline, or hidden, making it clear that production source-map exposure is configurable and intentional.",
    href: "https://vite.dev/config/build-options",
  },
  {
    name: "Sentry",
    title: "Warns about public exposure risk",
    description:
      "Sentry notes that public sourcemaps may expose source code and recommends denying access to map files or deleting them after upload.",
    href: "https://docs.sentry.io/platforms/javascript/guides/tanstackstart-react/sourcemaps/uploading/esbuild/",
  },
] as const;

export const impactItems = [
  {
    title: "This query is mostly informational",
    description:
      "Most visitors want a trustworthy summary before they click anything. They are trying to understand what the public repo is, whether it is official, and why the source map matters.",
  },
  {
    title: "Authority matters more than hot takes",
    description:
      "For a topic like this, professional framing from MDN, webpack, Vite, and Sentry is more persuasive than opinion-first copy or vague, dramatic language.",
  },
  {
    title: "The right page answers both the what and the why",
    description:
      "A strong landing page has to define source maps, explain production exposure, and still make the public repo and discussion immediately accessible.",
  },
] as const;

export const searchQuestionCards = [
  {
    eyebrow: "Search intent 01",
    title: "What is Claude Code source code?",
    description:
      "Usually it means the public repo and discussion around a source map connected to Claude Code, not an official source-code portal maintained by Anthropic.",
  },
  {
    eyebrow: "Search intent 02",
    title: "Is Claude Code source code official?",
    description:
      "No. The public materials people are finding are community-facing references and discussion points. This site keeps that distinction explicit so the query is answered cleanly.",
  },
  {
    eyebrow: "Search intent 03",
    title: "What can a source map reveal?",
    description:
      "Depending on how it was generated, a source map can make code structure, symbol names, stack traces, and sometimes source content much easier to inspect than a minified bundle alone.",
  },
  {
    eyebrow: "Search intent 04",
    title: "Why do professional teams treat public source maps carefully?",
    description:
      "Because debugging convenience and exposure risk exist at the same time. That is why webpack and Vite make source-map behavior explicit and why Sentry recommends restricting map access after upload.",
  },
] as const;

export const resourceLinks = [
  {
    type: "GitHub",
    label: "Primary reference",
    title: "claude-code-sourcemap repository",
    description:
      "This is the public repository most people are trying to find when they search for Claude Code source code. It organizes the material people are referencing and discussing.",
    href: siteConfig.links.repo,
  },
  {
    type: "Reddit",
    label: "Community discussion",
    title: "Reddit thread about the source-map exposure",
    description:
      "This thread shows how the community framed the story, why the keyword started spreading, and what readers wanted clarified after finding the public repo.",
    href: siteConfig.links.reddit,
  },
] as const;

export const faqItems = [
  {
    value: "what-is-it",
    question: "What is this Claude Code source code site?",
    answer:
      "It is an unofficial guide built for people searching for Claude Code source code. The goal is to explain the public source-map context, link to the repo and discussion, and answer the most common questions in one place.",
  },
  {
    value: "keyword-meaning",
    question: "What does Claude Code source code usually refer to in search?",
    answer:
      "In practice, the query usually refers to the public source-map repo, the Reddit discussion around it, and the broader question of what a production source map can reveal about an application.",
  },
  {
    value: "source-map",
    question: "What is a source map in JavaScript builds?",
    answer:
      "A source map is a file that maps transformed or minified code back to original source so developers can debug more effectively. MDN defines it as a JSON-based mapping format used by browser developer tools.",
  },
  {
    value: "public-exposure",
    question: "Does a public source map always mean the full original source is available?",
    answer:
      "Not in every case, but it can make original structure, symbols, and sometimes source content much easier to inspect depending on how the map was generated and shipped. That is why production source maps matter.",
  },
  {
    value: "official",
    question: "Is this an official Anthropic or Claude website?",
    answer:
      "No. This website is not official. It is an independent explanation page that organizes the public references and explains the topic in professional, search-friendly language.",
  },
  {
    value: "where-to-look",
    question: "Where can I find the public repo and discussion?",
    answer:
      "The homepage links directly to the public GitHub repository and the Reddit thread that shaped the discussion. Those two references are the main entry points most visitors are looking for.",
  },
  {
    value: "why-care",
    question: "Why do developers care so much about production source maps?",
    answer:
      "Because production source maps can make a shipped application much easier to inspect. Bundler docs such as webpack and Vite make source-map generation a real build choice, and Sentry explicitly warns about public exposure risk.",
  },
] as const;
