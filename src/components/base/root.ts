import { LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

import tailwind from "tailwindcss/tailwind.css?inline";
import styles from "@/styles.css?inline";

export class Root extends LitElement {
  @property({ type: String })
  "locale" = "en";

  static styles = [unsafeCSS(styles), unsafeCSS(tailwind)];
}
