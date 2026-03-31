import { cn } from "@/lib/utils";

type SiteLogoProps = {
  className?: string;
};

function BrandMark() {
  return (
    <span className="relative flex size-12 shrink-0 items-center justify-center overflow-hidden rounded-[1.3rem] border border-[#132647]/10 bg-[linear-gradient(160deg,#12213b_0%,#2f4b7c_62%,#e57c2e_130%)] shadow-[0_18px_46px_-30px_rgba(11,25,52,0.95)]">
      <span className="absolute inset-[3px] rounded-[1rem] bg-[radial-gradient(circle_at_25%_18%,rgba(255,206,141,0.92),transparent_28%),linear-gradient(180deg,rgba(255,255,255,0.12),rgba(255,255,255,0.02))]" />
      <svg
        viewBox="0 0 64 64"
        aria-hidden="true"
        className="relative z-10 size-8 text-[#f8f3e9]"
        fill="none"
      >
        <path
          d="M22 18.5C17.3056 21.0878 14 26.079 14 32C14 37.921 17.3056 42.9122 22 45.5"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M42 18.5C46.6944 21.0878 50 26.079 50 32C50 37.921 46.6944 42.9122 42 45.5"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <path
          d="M24 32H40"
          stroke="currentColor"
          strokeWidth="5"
          strokeLinecap="round"
        />
        <circle cx="44.5" cy="19.5" r="4.5" fill="#F5B375" />
      </svg>
    </span>
  );
}

export function SiteLogo({ className }: SiteLogoProps) {
  return (
    <div className={cn("inline-flex items-center gap-3", className)}>
      <BrandMark />
      <div className="min-w-0">
        <p className="font-mono text-[0.68rem] uppercase tracking-[0.32em] text-muted-foreground">
          Unofficial dossier
        </p>
        <p className="font-heading text-lg leading-tight font-semibold tracking-tight text-foreground sm:text-xl">
          Claude Code Source Code
        </p>
      </div>
    </div>
  );
}
