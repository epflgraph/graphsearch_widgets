import { configureLocalization } from "@lit/localize";
import { sourceLocale, targetLocales } from "@/i18n/generated/locale-codes";

import * as fr from "@/i18n/generated/locales/fr.js";

const localizedTemplates = new Map([["fr", fr]]);

export const { getLocale, setLocale } = configureLocalization({
  sourceLocale,
  targetLocales,
  loadLocale: async (locale: string) => localizedTemplates.get(locale),
});
