"use client";

import { useRef, useState, type FormEvent, type ReactNode } from "react";
import { useTranslations } from "next-intl";

type PinError = "wrong" | "locked" | "unavailable";

/** Replaces an external project link: the URL is only sent by the server after a correct PIN. */
export function PinLink({
  slug,
  linkKey,
  className,
  children,
}: {
  slug: string;
  linkKey: string;
  className?: string;
  children: ReactNode;
}) {
  const t = useTranslations("pinLink");
  const dialog = useRef<HTMLDialogElement>(null);
  const [pin, setPin] = useState("");
  const [error, setError] = useState<PinError | null>(null);
  const [pending, setPending] = useState(false);
  const [unlockedUrl, setUnlockedUrl] = useState<string | null>(null);

  const reset = () => {
    setPin("");
    setError(null);
    setUnlockedUrl(null);
  };

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setPending(true);
    setError(null);
    try {
      const res = await fetch("/api/open-link", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug, linkKey, pin }),
      });
      if (!res.ok) {
        setError(res.status === 401 ? "wrong" : res.status === 429 ? "locked" : "unavailable");
        setPin("");
        return;
      }
      const { url } = (await res.json()) as { url: string };
      const opened = window.open(url, "_blank");
      if (opened) {
        opened.opener = null;
        dialog.current?.close();
      } else {
        // Popup blocked after the await: fall back to a link the visitor clicks directly.
        setUnlockedUrl(url);
      }
    } catch {
      setError("unavailable");
    } finally {
      setPending(false);
    }
  };

  return (
    <>
      <button type="button" onClick={() => dialog.current?.showModal()} className={className}>
        {children}
      </button>

      <dialog
        ref={dialog}
        onClose={reset}
        className="m-auto w-[calc(100%-2rem)] max-w-sm rounded-2xl border border-border bg-surface p-6 text-left text-foreground backdrop:bg-black/70"
      >
        <h2 className="font-display text-xl tracking-tight">{t("title")}</h2>
        <p className="mt-2 text-sm leading-relaxed text-muted">{t("description")}</p>

        {unlockedUrl ? (
          <a
            href={unlockedUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => dialog.current?.close()}
            className="mt-5 inline-flex min-h-11 w-full items-center justify-center rounded-full bg-accent px-6 text-sm text-background"
          >
            {t("open")}
          </a>
        ) : (
          <form onSubmit={submit} className="mt-5">
            <label htmlFor={`pin-${slug}-${linkKey}`} className="sr-only">
              {t("title")}
            </label>
            <input
              id={`pin-${slug}-${linkKey}`}
              type="password"
              inputMode="numeric"
              autoComplete="off"
              autoFocus
              required
              maxLength={12}
              value={pin}
              onChange={(e) => setPin(e.target.value)}
              placeholder={t("placeholder")}
              className="min-h-12 w-full rounded-xl border border-border bg-background px-4 text-center font-mono tracking-[0.3em] text-foreground outline-none focus:border-accent"
            />
            <p role="alert" className="mt-2 min-h-5 text-sm text-red-500">
              {error && t(error)}
            </p>
            <div className="mt-3 flex gap-3">
              <button
                type="button"
                onClick={() => dialog.current?.close()}
                className="min-h-11 flex-1 rounded-full border border-border text-sm text-muted transition-colors hover:text-foreground"
              >
                {t("cancel")}
              </button>
              <button
                type="submit"
                disabled={pending}
                className="min-h-11 flex-1 rounded-full bg-accent text-sm text-background transition-opacity disabled:opacity-60"
              >
                {t("submit")}
              </button>
            </div>
          </form>
        )}
      </dialog>
    </>
  );
}
