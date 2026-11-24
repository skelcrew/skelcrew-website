"use client";

import { useState } from "react";
import { site } from "@/lib/site";

/** The one-line install command in a monospace box, with a copy button. */
export function InstallCommand() {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(site.install);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Clipboard blocked (e.g. insecure context): the command stays selectable.
    }
  }

  return (
    <div className="flex w-full max-w-160 items-stretch rounded-xl border border-accent/70 bg-panel shadow-[0_0_60px_-24px_var(--color-accent)]">
      <pre className="min-w-0 flex-1 whitespace-pre-wrap break-words px-4 py-3.5 font-mono text-[13px] leading-6 text-fg sm:text-[15px]">
        <code>
          <span className="select-none text-accent">$ </span>
          {site.install}
        </code>
      </pre>
      <button
        type="button"
        onClick={copy}
        className="shrink-0 cursor-pointer rounded-r-xl border-l border-accent/40 px-4 font-mono text-xs uppercase tracking-[0.12em] text-fg-2 hover:bg-panel-2 hover:text-fg focus-visible:outline-2 focus-visible:outline-fg-2"
      >
        <span aria-hidden="true">{copied ? "Copied" : "Copy"}</span>
        <span className="sr-only">Copy install command</span>
      </button>
      <span role="status" className="sr-only">
        {copied ? "Install command copied" : ""}
      </span>
    </div>
  );
}
