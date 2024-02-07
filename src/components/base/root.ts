import { LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

import styles from "@/styles.css?inline";
import tailwind from "tailwindcss/tailwind.css?inline";

export class Root extends LitElement {
  @property({ type: String })
  "locale" = "en";

  @property({ type: String })
  id = "";

  @property({ type: String })
  limit = "3";

  @property({ type: String })
  offset = "0";

  static styles = [unsafeCSS(tailwind), unsafeCSS(styles)];
}
