import { LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

import style from "tailwindcss/tailwind.css";

export class Root extends LitElement {
  @property({ type: String })
  "locale" = "en";

  static styles = [unsafeCSS(style)];
}
