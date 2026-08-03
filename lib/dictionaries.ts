import type { Locale } from "./i18n-config";

const dictionaries = {
  th: () => import("../dictionaries/th.json").then((m) => m.default),
  en: () => import("../dictionaries/en.json").then((m) => m.default),
};

export async function getDictionary(local: Locale) {
  return dictionaries[local]();
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
