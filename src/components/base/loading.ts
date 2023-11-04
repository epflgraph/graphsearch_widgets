import { html } from "lit";
import { customElement } from "lit/decorators.js";

import { localized, msg } from "@lit/localize";

import { Root } from "@/components/base/root";

@localized()
@customElement("graph-widget-loading")
export class Loading extends Root {
  render() {
    return html`<div>${msg("Loading")}</div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-loading": Loading;
  }
}
