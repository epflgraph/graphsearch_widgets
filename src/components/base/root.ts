import { LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

import { allLocales } from "@/i18n/generated/locale-codes";
import { setLocale } from "@/i18n/localization";
import { localized } from "@lit/localize";

import styles from "@/styles.css?inline";
import tailwind from "tailwindcss/tailwind.css?inline";

type Locale = (typeof allLocales)[number];

@localized()
export class Root extends LitElement {
  @property({
    type: String,
    hasChanged(value: Locale, oldValue: Locale) {
      const hasChanged = value !== oldValue;
      if (hasChanged) setLocale(value);
      return hasChanged;
    },
  })
  locale: Locale = "en";

  @property({ type: String })
  id = "";

  @property({ type: String })
  limit = "3";

  @property({ type: String })
  offset = "0";

  static styles = [unsafeCSS(tailwind), unsafeCSS(styles)];
}
