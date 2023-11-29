import { LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

import preflight from "@/preflight.css?inline";
import styles from "@/styles.css?inline";
import tailwind from "tailwindcss/tailwind.css?inline";

export class Root extends LitElement {
  @property({ type: String })
  "locale" = "en";

  static styles = [
    unsafeCSS(preflight),
    unsafeCSS(tailwind),
    unsafeCSS(styles),
  ];
}
