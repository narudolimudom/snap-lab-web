"use client";

import { Locale, locales } from "@/lib/i18n-config";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSwitcher({ lang }: Readonly<{ lang: Locale }>) {
  const LABELS: Record<Locale, string> = { th: "ไทย", en: "EN" };

  const pathname = usePathname();
  const rest = pathname.replace(/^\/(th|en)(?=\/|$)/, "") || "/";

  return (
    <div className="flex items-center gap-1 text-[12.8px] font-bold">
      {locales.map((l, i) => (
        <span key={l} className="flex items-center gap-1">
          {i > 0 && <span className="opacity-40">|</span>}
          <Link
            href={`/${l}${rest}`}
            className={
              l === lang
                ? "text-brand-red"
                : "text-text-faint hover:text-foreground"
            }
          >
            {LABELS[l]}
          </Link>
        </span>
      ))}
    </div>
  );
}
