import { LitElement, unsafeCSS } from "lit";

import style from "./tailwind.global.css?inline";

const tailwind = unsafeCSS(style);

export class BaseElement extends LitElement {
  static styles = [tailwind];
}
