import { html } from "lit";
import { customElement } from "lit/decorators.js";

import { Root } from "@/components/base/root";

@customElement("graph-widget-error")
export class Error extends Root {
  render() {
    return html`<div class="text-error text-sm font-medium">
      <slot></slot>
    </div>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "graph-widget-error": Error;
  }
}
