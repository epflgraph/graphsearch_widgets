import { LitElement, unsafeCSS } from "lit";
import { property } from "lit/decorators.js";

import style from "@/shared/tailwind.global.css";

const tailwind = unsafeCSS(style);

export class Root extends LitElement {
  @property({ type: String })
  "locale" = "en";

  static styles = [tailwind];
}
