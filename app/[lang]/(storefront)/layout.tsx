import { SiteHeader } from "@/components/layout/site-header";
import { getDictionary } from "@/lib/dictionaries";
import { isLocale } from "@/lib/i18n-config";
import { notFound } from "next/navigation";
import React from "react";

export default async function StorefrontLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const dict = await getDictionary(lang);

  return (
    <div className="flex flex-col min-h-screen">
      <SiteHeader lang={lang} dict={dict} />
      <div className="flex-1">{children}</div>
    </div>
  );
}
// FIXME: add site footer
