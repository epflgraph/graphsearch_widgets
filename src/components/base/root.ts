import { LitElement, unsafeCSS } from "lit";

import style from "@/shared/tailwind.global.css";

const tailwind = unsafeCSS(style);

export class Root extends LitElement {
  static styles = [tailwind];
}
